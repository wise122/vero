<template>
    <div class="row rounded-xl p-3">
        <div class="col-12 text-center my-5">
            <h1>YOUR PRODUCTS</h1>
        </div>
        <div class="col-12 mb-3 p-0 rounded-xl" v-for="p in products" :key="p.id_produk">
            <b-overlay :show="p.status != 1">
                <div class="row">
                    <div class="col-auto">
                        <b-img :src="`${baseUrl}/products/${p.katalog[0]}?t=${new Date().getTime()}`" fluid width="150" height="150" class="p-0 border-0 rounded-xl h-100"></b-img>
                    </div>
                    <div class="col-4 p-3">
                        <b>{{ p.title }}</b>
                        <p class="text-secondary">{{ p.tipe }}</p>
                        <p class="text-truncate" style="width: 300px;">{{ p.deskripsi }}</p>
                    </div>
                    <div class="col-2 p-3">
                        <nuxt-link :to="`/home/products/details/edit/${p.id_produk}`">
                            <p class="m-0"><b-avatar variant="transparent" class="p-2" src="/pen.png"></b-avatar>Edit</p>
                        </nuxt-link>
                        <nuxt-link :to="`/home/products/details/${p.id_produk}`">
                            <p class="m-0"><b-avatar variant="transparent" class="p-2" src="/pen.png"></b-avatar>Lihat</p>
                        </nuxt-link>
                        <a class="m-0" @click="confirmDeleteItem(p.id_produk, p.status)"><b-avatar variant="transparent" class="p-2" src="/pen.png"></b-avatar>Disable</a>
                    </div>
                </div>
                <template #overlay>
                    <div class="text-center">
                        <p id="cancel-label">Aktifkan kembali produk</p>
                        <b-button
                            pill
                            variant="outline-danger"
                            size="sm"
                            class="px-5"
                            @click="confirmDeleteItem(p.id_produk, p.status)"
                        >
                            Aktifkan
                        </b-button>
                    </div>
                </template>
            </b-overlay>
        </div>
        <b-modal centered content-class="shadow" title="OK" v-model="showConfirmModal" hide-footer hide-header no-close-on-backdrop>
            <p class="my-2 text-center">
                Apakah anda yakin hendak mengganti status produk ini?
            </p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <b-button variant="primary" class="px-5" pill @click="toggleItem">Ya</b-button>
                    <b-button variant="secondary" class="px-5" pill @click="showConfirmModal = false">Tidak</b-button>
                </div>
            </div>
        </b-modal>
        <b-modal centered content-class="shadow" title="OK" v-model="showAlertModal" hide-footer hide-header no-close-on-backdrop>
            <p class="my-2 text-center">
                Status produk berhasil diganti.
            </p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <b-button variant="primary" class="px-5" pill @click="showAlertModal = false">OK</b-button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                showConfirmModal: false,
                showAlertModal:false,
                baseUrl:process.env.BASE_FTP_URL,
                products:[],
                tempID: -1,
                tempStatus: 0,
            }
        },
        computed: {
            ...mapGetters({
                'getUserCredentials':'auth/getUserCredentials',
            }),
        },
        methods: {
            confirmDeleteItem(id_produk, status) {
                this.showConfirmModal = true
                this.tempID = id_produk
                this.tempStatus = status
            },
            async toggleItem() {
                await this.$axios.put(`/products/status/toggle/${this.tempID}`, {
                    status:this.tempStatus,
                }, { headers: {
                    "auth-token":this.$cookies.get('token')
                }})
                .then(async res => {
                    await this.fetchData()
                    this.showConfirmModal = false
                    this.showAlertModal = true
                })
                .catch(err => {
                    console.log(err)
                })
            },
            async fetchData() {
                let fetchProducts = await this.$axios.get(`/products/partner/${this.getUserCredentials.id_user}`)
                this.products = fetchProducts.data.data
                this.products.forEach(row => {
                    row.katalog = row.katalog.split(',')
                })
            }
         },
        async mounted() {
            await this.fetchData()
        }
    }
</script>

<style scoped>
    * >>> .b-overlay > div {
        border-radius: 30px !important;
    }
</style>
<template>
    <div style="min-height: 100vh;" v-if="!loading">
        <b-row v-if="partnerData != null">
            <b-col cols="2">
                <div class="mp-principal__detail">
                    <div class="text-center">
                        <b-img 
                            thumbnail 
                            fluid
                            v-if="partnerData.foto_perusahaan != null" 
                            :src="baseUrl+'/company_logo/'+partnerData.foto_perusahaan+`?t=${new Date().getTime()}`" 
                            alt="Image Partnership"
                            class="mb-2"
                            style="border-radius: 25px;">
                        </b-img>
                        <b-avatar v-else class="mb-3" size="12rem" rounded></b-avatar>
                        <b-button v-if="user == 'Prinsipal'" variant="primary" class="mp-border-radius mb-3" size="sm">Ganti Foto</b-button>
                    </div>
                    <p class="mp-fw-600 mb-0">{{ partnerData.nama_perusahaan }}</p>
                    <div class="d-flex align-items-center mt-2">
                        <b-icon font-scale="1" icon="geo-alt"></b-icon>
                        <span class="mp-fw-600 ml-1">{{ partnerData.asal_kota }}</span>
                    </div>
                    <div class="mp-principal__edit-button mt-2" v-if="user == 'user'">
                        <b-button block variant="primary" class="mp-border-radius" size="sm">Apply for distributor</b-button>
                        <b-button block variant="primary" class="mp-border-radius" size="sm">Download company profile</b-button>
                    </div>
                    <div class="mp-principal__edit-button mt-2" v-if="user == 'principal'">
                        <b-button block variant="primary" class="mp-border-radius" size="sm">Edit Profile</b-button>
                        <b-button block variant="primary" class="mp-border-radius" size="sm">Upload Company Profile</b-button>
                    </div>
                </div>
            </b-col>
            <b-col cols="10">
                <div class="mp-principal__galery" v-if="partnerData.gallery != null">
                    <b-carousel
                        id="carousel-fade"
                        style="text-shadow: 0px 0px 2px #000"
                        fade
                        indicators
                        img-width="1024"
                        img-height="480"
                        class="border"
                    >
                        <b-carousel-slide
                            v-for="(tmp,idx) in partnerData.gallery" :key="idx"
                            :img-src="`${baseUrl}/gallery/${tmp}?t=${new Date().getTime()}`"
                        ></b-carousel-slide>
                    </b-carousel>
                </div>
                <b-button variant="primary" v-if="user == 'Prinsipal'" class="mp-border-radius float-right mt-3" size="sm">Edit Galeri</b-button>
            </b-col>
        </b-row>
        <div class="d-block mt-4">
            <b-button variant="primary" v-if="user == 'Prinsipal'" class="mp-border-radius float-right" size="sm">Tambah Catalog</b-button>
        </div>
        <div class="mp-principal__product pt-5 mt-2">
            <b-row>
                <b-col cols="3"  v-for="data in products" :key="data.id_produk" class="mb-4">
                    <b-card
                        :img-src="`${baseUrl}/products/${data.katalog[0]}?t=${new Date().getTime()}`"
                        img-alt="Image product"
                        img-top
                        tag="article"
                        style="max-width: 18rem; border-radius: 20px"
                        class="mp-product__card mb-2 mp-box-shadow"
                        no-body
                    >
                        <div class="mp-product__label d-flex justify-content-between align-items-center px-3 pt-3">
                            <div class="mp-product__wishlist">
                                <!-- <b-icon :icon="currWishlist ? 'bookmark-fill' : 'bookmark'"></b-icon> -->
                                <b-icon icon="bookmark"></b-icon>
                            </div>
                            <div class="mp-product__color">
                                <span style="background-color: #FF0000"></span>
                                <span style="background-color: #00FF00"></span>
                                <span style="background-color: #0000FF"></span>
                            </div>
                        </div>
                        <b-card-text class="px-3">
                            <h2 class="mp-fs-20 my-3">{{ data.title }}</h2>
                        </b-card-text>
                        <b-card-footer class="text-center" >brand</b-card-footer>
                    </b-card>

                </b-col>
            </b-row>
        </div>
        <!-- <div class="row" v-if="!loading">
            <div class="col-12" v-if="partnerData != null">
                <div class="row mt-5">
                    <div class="col-12">
                        <b-card
                            bg-variant="primary"
                            text-variant="white"
                            class="rounded-xl"
                        >
                            <b-card-text>
                                <div class="row m-5">
                                    <div class="col-md-3">
                                        <p class="text-center">
                                            <b-avatar :src="baseUrl+'/company_logo/'+partnerData.foto_perusahaan+`?t=${new Date().getTime()}`" size="10rem" style="border: 1px solid black"></b-avatar>
                                        </p>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class="mitrapabrik">{{ partnerData.nama_perusahaan }}</h4>
                                        <p>{{ partnerData.asal_kota }}</p>
                                        <p>{{ partnerData.alamat_perusahaan }}</p>
                                        <p>{{ partnerData.no_hp }}</p>
                                    </div>
                                    <div class="col-md-3 col-sm-12">
                                        <a :href="`${baseUrl}/pdfs/${partnerData.portofolio}`" target="_blank">
                                            <b-card border-variant="light" class="shadow h-100">
                                                <div class="row h-100">
                                                    <div class="col-3 d-flex align-items-center">
                                                        <b-icon icon="file-image-fill" font-scale="2rem" variant="primary"></b-icon>
                                                    </div>
                                                    <div class="col-9 d-flex align-items-center">
                                                        <span>Download Katalog</span>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </a>
                                    </div>
                                </div>
                            </b-card-text>
                        </b-card>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12 mt-5">
                                <h3>Produk Partner</h3>
                            </div>
                            <div class="col-md-3" v-for="p in products" :key="p.id_produk">
                                <nuxt-link :to="`/home/products/details/${p.id_produk}`">
                                    <ProductThumbnail 
                                        :data="p"
                                    />
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12" v-if="partnerData.gallery">
                        <div class="row mt-3">
                            <div class="col-12 mt-5">
                                <h3>Galeri Partner</h3>
                            </div>
                            <div class="col-auto d-flex justify-content-center align-items-center" v-for="(tmp,idx) in partnerData.gallery" :key="idx">
                                <div class="p-3 card h-100">
                                    <b-img :src="`${baseUrl}/gallery/${tmp}?t=${new Date().getTime()}`" fluid width="150" height="150" class="shadow mb-5"></b-img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12" v-else>
                <div class="row">
                    <div class="col-12 text-center text-secondary mb-3">
                        {{ errMsg }}
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
    data() {
        return {
            baseUrl: process.env.BASE_FTP_URL,
            partnerData: null,
            errMsg: '',
            loading: true,
            products:[],
            user: 'user'
        }
    },
    methods:{
        getUserRole(){
            if(this.getUserCredentials != null){
               this.user = this.getUserCredentials.role ?? 'user'
            }
        }
    },

    async mounted() {
        try {
            let fetchPartnerData = await this.$axios.get(`/user/partner/${this.$route.params.id}`, { params:{}, headers: { 'auth-token': this.$cookies.get('token') } })
            if(fetchPartnerData.data.data.length > 0) {
                this.partnerData = fetchPartnerData.data.data[0]
                if(this.partnerData.gallery) {
                    this.partnerData.gallery = this.partnerData.gallery.split(',')
                }
                let fetchProducts = await this.$axios.get(`/products/partner/${this.$route.params.id}`)
                this.products = fetchProducts.data.data
                this.products.forEach(row => {
                    row.katalog = row.katalog.split(',')
                })
            } else {
                this.errMsg = fetchPartnerData.data.msg
            }
        } catch (error) {
            console.log(error)
        }
        this.loading = false

        this.getUserRole()
    },

    computed: {
        ...mapGetters({
            'getUserCredentials':'auth/getUserCredentials',
        }),
    },
}
</script>

<style scoped>

</style>
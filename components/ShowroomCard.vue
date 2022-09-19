<template>
    <div class="card-showroom text-white mb-5" :style="{ 
        backgroundImage: backgroundStyle
    }">
        <b-collapse :visible="!visible">
            <div class="container-fluid w-100 h-100 p-5" @click="visible = !visible">
                <h1 class="font-weight-bold my-5 text-truncate" style="font-size: 3em;">{{ $decodeHtml(kota) }}</h1>
            </div>
        </b-collapse>
        <b-collapse :visible="visible">
            <div 
                v-for="(d,idx) in data" :key="d.id_showroom" 
                @click="visible = !visible" class="p-5 bg-light text-dark" 
                :style="{ borderRadius : data.length == 1 ? '20px' : idx < data.length-1 ? '20px 20px 0px 0px' : '0px 0px 20px 20px' }"
            >
                <div class="row">
                    <div class="col-md-4">
                        <h3>{{ d.title }}</h3>
                        <p>{{ d.alamat }}</p>
                        {{ d.wa_contact }}
                    </div>
                    <div class="col-md-8 border-left border-primary">
                        <p class="h5">Brand Partners:</p>
                        <b-avatar 
                            v-for="(brand,idx) in d.list_brand" :key="idx"
                            button 
                            @click="goToBrand(brand.id)" 
                            :src="baseUrl+'/company_logo/'+brand.foto_perusahaan+`?t=${new Date().getTime()}`" 
                            v-b-tooltip.hover 
                            :title="brand.nama_perusahaan"
                            class="m-1"
                        />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 text-center">
                        <b-button variant="outline-primary" pill class="px-5" @click="openGmap($decodeHtml(d.drop_pin))">
                            Direction <b-icon icon="cursor-fill"></b-icon>
                        </b-button>
                        <b-button variant="outline-primary" pill class="px-5" @click="openWA($decodeHtml(d.wa_contact))">
                            Contact <b-icon icon="telephone-forward-fill"></b-icon>
                        </b-button>
                    </div>
                </div>
            </div>
        </b-collapse>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        props:["data","kota"],
        name:"ShowroomCard",
        data() {
            return {
                backgroundStyle:`linear-gradient(rgba(58,58,58, 0.2), rgba(58,58,58, 0.2)), url("https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik_assets/${this.kota}.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1645510618902")`,
                baseUrl:process.env.BASE_FTP_URL,
                visible:false,
            }
        },
        computed: {
            ...mapGetters({
                'getUserCredentials':'auth/getUserCredentials',
            }),
        },
        methods: {
            goToBrand(id_partner) {
                if(this.getUserCredentials.nama_depan)
                    this.$router.push({path: `/home/partnership/${id_partner}`});
                else
                    this.$router.push({path: `/partnership/${id_partner}`});
            },
            openGmap(url) {
                window.open(url, '_blank').focus();
            },
            openWA(phone) {
                window.open(`https://wa.me/${phone}`, '_blank').focus();
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .card-showroom {
        border-radius: 20px;
        box-shadow: 0 1.3rem 2rem rgba(0, 0, 0, 0.4);
        /* background-image: linear-gradient(90deg, rgba(58,58,58,1) 65%, rgba(234, 36, 36, 1)); */
        background-position: right;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
    }
</style>
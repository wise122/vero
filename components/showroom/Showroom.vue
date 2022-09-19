<template>
    <div class="mp-container showroom" id="showroom-section">
        <div class="mp-title-section mb-5">
            <h2>Showroom</h2>
        </div>
        <b-row>
            <b-col cols="12" v-for="(data, kota) in showroomData" :key="kota" class="mb-2">
                <b-card 
                    class="mb-4 text-center mp-box-shadow mp-card__showroom" 
                    v-b-toggle="'collapse-mp-showroom'+kota" 
                    :img-src="`https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik_assets/${kota}.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1645510618902`"
                    style="border-radius: 20px"
                >
                    <!-- <b-img-lazy :src="`https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik_assets/${kota}.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1645510618902`" alt="image showroom" fluid></b-img-lazy> -->
                    <div class="mp-news-content">
                        <h2 class="mp-fs-34 mp-fw-600 my-1">{{ $decodeHtml(kota) }}</h2>
                        <b-collapse :id="`collapse-mp-showroom`+kota" class="mt-2">
                            <div 
                                v-for="(d,idx) in data" :key="idx" 
                                class="p-5 text-left"
                            >
                                <div class="row">
                                    <div class="col-md-4">
                                        <h3>{{ d.title }}</h3>
                                        <p>{{ d.alamat }}</p>
                                        {{ d.wa_contact }}
                                    </div>
                                    <div class="col-md-8">
                                        <!-- <p class="h5">Brand Partners:</p>
                                        <b-avatar 
                                            v-for="(brand,idx) in d.list_brand" :key="idx"
                                            button 
                                            @click="goToBrand(brand.id)" 
                                            :src="baseUrl+'/company_logo/'+brand.foto_perusahaan+`?t=${new Date().getTime()}`" 
                                            v-b-tooltip.hover 
                                            :title="brand.nama_perusahaan"
                                            class="m-1"
                                        /> -->
                                        <div class="col-12 text-center">
                                        <b-button variant="primary" pill class="px-5" @click="openGmap($decodeHtml(d.drop_pin))">
                                            Direction <b-icon icon="cursor-fill"></b-icon>
                                        </b-button>
                                        <b-button variant="primary" pill class="px-5" @click="openWA($decodeHtml(d.wa_contact))">
                                            Contact <b-icon icon="telephone-forward-fill"></b-icon>
                                        </b-button>
                                    </div>
                                    </div>
                                </div>
                                <!-- <div class="row mt-4">
                                    <div class="col-12 text-center">
                                        <b-button variant="outline-primary" pill class="px-5" @click="openGmap($decodeHtml(d.drop_pin))">
                                            Direction <b-icon icon="cursor-fill"></b-icon>
                                        </b-button>
                                        <b-button variant="outline-primary" pill class="px-5" @click="openWA($decodeHtml(d.wa_contact))">
                                            Contact <b-icon icon="telephone-forward-fill"></b-icon>
                                        </b-button>
                                    </div>
                                </div> -->
                            </div>
                        </b-collapse>
                        <!-- <b-card-text class="text-left mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Inventore error voluptate quibusdam reiciendis, explicabo ipsa cupiditate autem odit, 
                            molestias culpa ex. Deserunt voluptatum sequi debitis minus ipsa quasi quo repellat!
                            <a href="#" class="card-link">read more...</a>
                        </b-card-text> -->
                    </div>
                </b-card>
            </b-col>
            <!-- <b-col v-for="(data, kota) in showroomData" :key="kota">
                <b-card class="mb-3 text-center">
                    <div class="d-block">
                        <img :src="`https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik_assets/${kota}.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1645510618902`" alt="image news" width="250" height="250" class="mp-rounded">
                        <div class="mp-news-content">
                            <h2 class="mp-fs-24 mt-4 mb-2">{{ $decodeHtml(kota) }}</h2>
                            <b-card-text class="text-left mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Inventore error voluptate quibusdam reiciendis, explicabo ipsa cupiditate autem odit, 
                                molestias culpa ex. Deserunt voluptatum sequi debitis minus ipsa quasi quo repellat!
                             <a href="#" class="card-link">read more...</a>
                            </b-card-text>
                        </div>
                    </div>
                </b-card>
            </b-col> -->
            <!-- <b-col>
                <b-card class="mb-3 text-center">
                    <div class="d-block">
                        <img src="https://picsum.photos/600/300/?image=25" alt="image news" width="150" height="150" class="mp-rounded">
                        <div class="mp-news-content">
                            <h2 class="mp-fs-24 mt-2 mb-2">Headline</h2>
                            <b-card-text class="text-left mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Inventore error voluptate quibusdam reiciendis, explicabo ipsa cupiditate autem odit, 
                                molestias culpa ex. Deserunt voluptatum sequi debitis minus ipsa quasi quo repellat!
                             <a href="#" class="card-link">read more...</a>
                            </b-card-text>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="mb-3 text-center">
                    <div class="d-block">
                        <img src="https://picsum.photos/600/300/?image=25" alt="image news" width="150" height="150" class="mp-rounded">
                        <div class="mp-news-content">
                            <h2 class="mp-fs-24 mt-2 mb-2">Headline</h2>
                            <b-card-text class="text-left mt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Inventore error voluptate quibusdam reiciendis, explicabo ipsa cupiditate autem odit, 
                                molestias culpa ex. Deserunt voluptatum sequi debitis minus ipsa quasi quo repellat!
                             <a href="#" class="card-link">read more...</a>
                            </b-card-text>
                        </div>
                    </div>
                </b-card>
            </b-col> -->
        </b-row>
        <a href="#" class="mp-fs-24 float-right mt-4">Lihat semua showroom</a>
    </div>
</template>
<script>
export default {
    name: "Showroom",

    data() {
        return {
            showroomData:null,
        }
    },

    async mounted() {
        let fetchShowrooms = await this.$axios.get(`/showrooms`)
        this.showroomData = fetchShowrooms.data.data
        for (const key in this.showroomData) {
            this.showroomData[key] = this.showroomData[key].filter(row => row.status != 0)
        }
    }
}
</script>
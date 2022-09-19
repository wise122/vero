<template>
<div class="mp-material-inquiry">
    <div class="container" style="min-height: 100vh; padding: 180px 60px;">
        <div class="mp-title-page__with-shadow">
            <h1>Material Inquiry</h1>
        </div>
        <div class="mp-inquiry__filter">

        </div>
        <div class="mp-inquiry__list-product mt-4">
            <b-row>
                <b-col cols="12" md="6" v-for="(item, i) in 4" :key="i" class="mb-5">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mp-card__box-shadow"
                    >
                        <b-card-text>
                            <div class="d-flex justify-content-between mt-3">
                                <div class="mp-card-desc">
                                    <p>nama proyek</p>
                                    <p>kota</p>
                                </div>
                                <div class="mp-card-desc">
                                    <p>tenggat waktu</p>
                                    <p>nama penyelenggara</p>
                                </div>
                            </div>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
            <div class="d-flex justify-content-center mt-4">
                <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
            </div>

        </div>
    </div>
</div>
    <!-- <div class="row">
        <div class="col-12 text-center">
            <h1>Material Inquiry</h1>
        </div>
        <div class="col-12 text-justify mb-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
            enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
            nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla 
            facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent 
            lenim ad minim veniam,
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-6 mb-5">
            <b-form @submit.prevent="onSubmit">
                <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.kebutuhan"
                        placeholder="Apa Kebutuhan anda ?"
                        class="rounded-pill"
                        :state="validation.kebutuhan"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.kebutuhan">
                        Berikan penjelasan yang singkat padat dan jelas.
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                    id="input-group-2"
                    label-for="input-2"
                >
                    <b-form-input
                        id="input-2"
                        v-model="form.lokasi"
                        placeholder="Dikota Mana proyek yang anda kerjakan"
                        class="rounded-pill"
                        :state="validation.lokasi"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.lokasi">
                        Berikan penjelasan yang singkat padat dan jelas.
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                    id="input-group-3"
                    label-for="input-3"
                >
                    <b-form-input
                        id="input-3"
                        v-model="form.brand"
                        placeholder="Apa ada brand khusus yang di inginkan ?"
                        class="rounded-pill"
                        :state="validation.brand"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.brand">
                        Berikan penjelasan yang singkat padat dan jelas.
                    </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group
                    id="input-group-4"
                    label-for="input-4"
                >
                    <b-form-input
                        id="input-4"
                        v-model="form.material_qty"
                        placeholder="Berapa banyak jumlah material quantitynya?"
                        class="rounded-pill"
                        :state="validation.material_qty"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.material_qty">
                        Berikan penjelasan yang singkat padat dan jelas.
                    </b-form-invalid-feedback>
                </b-form-group>
                <p class="text-center">
                    <b-button type="submit" variant="primary" pill class="px-5" :disabled="loading">Kirim</b-button>
                </p>
            </b-form>
        </div>
        <div class="col-md-3"></div>
        <b-modal centered content-class="shadow" title="OK" v-model="showalert" hide-footer hide-header>
            <p class="my-2 text-center">
                Pengajuan material berhasil! Kami akan segera menghubungi anda.
            </p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <b-button variant="primary" pill class="px-5" @click="showalert = false">OK</b-button>
                </div>
            </div>
        </b-modal>
    </div> -->
</template>

<script>
    export default {
        data() {
            return {
                showalert: false,
                loading:false,
                form: {
                    kebutuhan:'',
                    lokasi:'',
                    brand:'',
                    material_qty:'',
                },
                validation: {
                    kebutuhan:null,
                    lokasi:null,
                    brand:null,
                    material_qty:null,
                },
                rows: 100,
                currentPage: 1
            }
        },
        methods: {
            async onSubmit() {
                this.loading = true
                for(const key in this.validation) {
                    this.validation[key] = null
                }
                await this.$axios.post(`/requests`, this.form, { headers: {
                    "auth-token":this.$cookies.get('token')
                }})
                .then(res => {
                    this.showalert = true
                })
                .catch(err => {
                    err.response.data.errors.forEach(row => {
                        this.validation[row.param] = false
                    });
                })
                this.loading = false
            }
        },

        // mounted(){
        //     this.$emit('fullpage', true);
        // }
    }
</script>

<style scoped>

</style>
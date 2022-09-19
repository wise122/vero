<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1>MATERIAL INQUIRY</h1>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12 text-justify">
                <h5>Kesulitan menemukan material yang anda butuhkan? atau 
                ingin custom material sesuai kebutuhan. beritahu kami apa 
                yang anda cari dan kami akan langsung menghubungi 
                anda dengan penawaran material yang anda butuhkan</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <b-overlay :show="show">
                    <template #overlay>
                        <div class="text-center">
                            <p id="cancel-label">Untuk mengajukan request, silahkan login terlebih dahulu</p>
                            <nuxt-link class="btn btn-outline-primary rounded-pill px-5 btn-sm" to="/login">
                                Login
                            </nuxt-link>
                        </div>
                    </template>
                    <b-form>
                        <b-form-group
                            id="input-group-1"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                v-model="form.kebutuhan"
                                placeholder="Apa Kebutuhan anda ?"
                                class="rounded-pill"
                            ></b-form-input>
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
                            ></b-form-input>
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
                            ></b-form-input>
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
                            ></b-form-input>
                        </b-form-group>
                        <p class="text-center"><b-button @click="show = true" pill class="px-5" variant="primary">Kirim</b-button></p>
                    </b-form>
                </b-overlay>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show:false,
                form: {
                    kebutuhan:'',
                    lokasi:'',
                    brand:'',
                    material_qty:'',
                }
            }
        },
        methods: {
            onSubmit() {
                
            }
        }
    }
</script>

<style scoped>

</style>
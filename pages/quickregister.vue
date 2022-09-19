<template>
    <div class="container bg-primary">
        <div class="row">
            <div class="col-6">
                <b-form-group
                    id="input-group-1"
                    label="Nama Depan:"
                    label-for="input-1"
                    class="text-white"
                >
                    <b-form-input
                        id="input-1"
                        v-model="form.nama_depan"
                        placeholder="Nama Depan"
                        :state="validation.nama_depan"
                        class="rounded-pill "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.nama_depan" class="text-white">
                        {{ msg.nama_depan }}
                    </b-form-invalid-feedback>
                </b-form-group>
            </div>
            <div class="col-6">
                <b-form-group
                    id="input-group-2"
                    label="Nama Belakang:"
                    label-for="input-2"
                    class="text-white"
                >
                    <b-form-input
                        id="input-2"
                        v-model="form.nama_belakang"
                        placeholder="Nama Belakang"
                        :state="validation.nama_belakang"
                        class="rounded-pill "
                    ></b-form-input>
                <b-form-invalid-feedback :state="validation.nama_belakang" class="text-white">
                    {{ msg.nama_belakang }}
                </b-form-invalid-feedback>
                </b-form-group>
            </div>
            <div class="col-12">
                <b-form-group
                    id="input-group-8"
                    label="Nama Perusahaan:"
                    label-for="input-8"
                    class="text-white"
                >
                    <b-form-input
                        id="input-8"
                        v-model="form.nama_perusahaan"
                        placeholder="Nama Perusahaan"
                        :state="validation.nama_perusahaan"
                        class="rounded-pill "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.nama_perusahaan" class="text-white">
                        {{ msg.nama_perusahaan }}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                    id="input-group-10"
                    label="Alamat Perusahaan:"
                    label-for="input-10"
                    class="text-white"
                >
                    <b-form-input
                        id="input-10"
                        v-model="form.alamat_perusahaan"
                        placeholder="Alamat Perusahaan"
                        :state="validation.alamat_perusahaan"
                        class="rounded-pill "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.alamat_perusahaan" class="text-white">
                        {{ msg.alamat_perusahaan }}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                    id="input-group-3"
                    label="no. HP:"
                    label-for="input-3"
                    class="text-white"
                >
                    <b-form-input
                        id="input-3"
                        v-model="form.no_hp"
                        placeholder="nomor HP yang aktif"
                        :state="validation.no_hp"
                        class="rounded-pill "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.no_hp" class="text-white">
                        {{ msg.no_hp }}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                    id="input-group-email"
                    label="Alamat Email:"
                    label-for="input-email"
                    class="text-white"
                >
                    <b-form-input
                        id="input-email"
                        v-model="form.email"
                        type="email"
                        placeholder="Masukkan email yang aktif"
                        :state="validation.email"
                        class="rounded-pill "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.email" class="text-white">
                        {{ msg.email }}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                    id="input-group-7"
                    label="Anda mendapatkan info event / mitrapabrik dari:"
                    label-for="input-7"
                    class="text-white"
                >
                    <b-form-input
                        id="input-7"
                        v-model="form.minat"
                        placeholder="Refrensi"
                        :state="validation.minat"
                        class="rounded-pill "
                    ></b-form-input>
                    <b-form-invalid-feedback :state="validation.minat" class="text-white">
                        {{ msg.minat }}
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-button variant="dark" pill block @click="register" size="sm" class="mb-5">Register</b-button>
            </div>
        </div>
        <b-modal centered content-class="shadow" title="OK" v-model="alert" hide-footer hide-header no-close-on-backdrop>
            <p class="my-2 text-center">
                Registtrasi berhasil! terima kasih atas partisipasi anda.
            </p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <b-button variant="primary" pill class="px-5 mx-2" @click="resetForm" size="sm">OK</b-button>
                    <b-button variant="primary" pill class="px-5 mx-2" @click="resetForm" size="sm">Kirim registrasi lainnya</b-button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        layout:'quickregis',
        data() {
            return {
                form: {
                    nama_depan:'',
                    nama_belakang:'',
                    nama_perusahaan:'',
                    alamat_perusahaan:'',
                    no_hp:'',
                    email:'',
                    minat:'',
                },
                validation: {
                    nama_depan:null,
                    nama_belakang:null,
                    nama_perusahaan:null,
                    alamat_perusahaan:null,
                    no_hp:null,
                    email:null,
                    minat:null,
                },
                msg: {
                    nama_depan:'',
                    nama_belakang:'',
                    nama_perusahaan:'',
                    alamat_perusahaan:'',
                    no_hp:'',
                    email:'',
                    minat:'',
                },
                loading: false,
                alert: false,
            }
        },
        methods: {
            async register() {
                this.loading = true
                for(const key in this.validation) {
                    this.validation[key] = null
                }
                await this.$axios.post(`/user/register/quick`, this.form, {})
                .then(() => {
                    this.alert = true
                })
                .catch(err => {
                    err.response.data.errors.forEach(row => {
                        this.validation[row.param] = false
                        this.msg[row.param] = row.msg
                    });
                })
                this.loading = false
            },
            resetForm() {
                this.alert = false
                this.form = {
                    nama_depan:'',
                    nama_belakang:'',
                    nama_perusahaan:'',
                    alamat_perusahaan:'',
                    no_hp:'',
                    email:'',
                    minat:'',
                }
                this.validation = {
                    nama_depan:null,
                    nama_belakang:null,
                    nama_perusahaan:null,
                    alamat_perusahaan:null,
                    no_hp:null,
                    email:null,
                    minat:null,
                }
                this.msg = {
                    nama_depan:'',
                    nama_belakang:'',
                    nama_perusahaan:'',
                    alamat_perusahaan:'',
                    no_hp:'',
                    email:'',
                    minat:'',
                }
            }
        },
        mounted() {
            // if(this.$route.query.h != '7c29f9da26b51d1d0f813e4f86451c96') {
            //     this.$router.push({ name: 'maintenance' })
            // }
        }
    }
</script>

<style scoped>

</style>
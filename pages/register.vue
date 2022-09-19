<template>
    <div class="mp-register" style="padding-top: 130px; padding-bottom: 80px;">
        <div class="container">
            <div class="mp-card__register mb-3 pt-5" v-if="tahap == 0">
                <!-- <div class="col-12"> -->
                    <h1 class="mp-white-color">Registrasi</h1>
                <!-- </div> -->
                <!-- <div class="col-12">
                    <nuxt-link to="/">Kembali</nuxt-link>
                </div> -->
            </div>
            <div class="mp-card__register" v-if="tahap == 0">
                <div class="card mp-card__transparant p-5" style="min-height: 50vh; border-radius: 10px;">
                    <div class="row">
                        <div class="col-md-6">
                            <b-form-group
                                id="input-group-1"
                                label="Nama Depan:"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="form.nama_depan"
                                    placeholder="Nama Depan"
                                    :state="validation.nama_depan"
                                    class="rounded-pill bg-glass rounded-xl"
                                ></b-form-input>
                            <b-form-invalid-feedback :state="validation.nama_depan">
                                {{ msg.nama_depan }}
                            </b-form-invalid-feedback>
                            </b-form-group>
                        </div>
                        <div class="col-md-6">
                            <b-form-group
                                id="input-group-2"
                                label="Nama Belakang:"
                                label-for="input-2"
                            >
                                <b-form-input
                                    id="input-2"
                                    v-model="form.nama_belakang"
                                    placeholder="Nama Belakang"
                                    :state="validation.nama_belakang"
                                    class="rounded-pill bg-glass rounded-xl"
                                ></b-form-input>
                            <b-form-invalid-feedback :state="validation.nama_belakang">
                                {{ msg.nama_belakang }}
                            </b-form-invalid-feedback>
                            </b-form-group>
                        </div>
                    </div>
                    <b-form-group
                        id="input-group-role"
                        label="Siapa Anda:"
                        label-for="input-role"
                    >
                        <b-form-select 
                            id="input-role"
                            v-model="form.role"
                            :state="validation.role"
                            :options="listRole"
                            class="rounded-pill bg-glass rounded-xl"
                        >
                        </b-form-select>
                        <b-form-invalid-feedback :state="validation.role">
                            {{ msg.role }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        id="input-group-email"
                        label="Alamat Email:"
                        label-for="input-email"
                    >
                        <b-form-input
                            id="input-email"
                            v-model="form.email"
                            type="email"
                            placeholder="Masukkan email yang aktif"
                            :state="validation.email"
                            class="rounded-pill bg-glass rounded-xl"
                        ></b-form-input>
                        <b-form-invalid-feedback :state="validation.email">
                            {{ msg.email }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        id="input-group-password"
                        label="Password:"
                        label-for="input-password"
                    >
                        <b-input-group>
                            <template #append>
                                <b-icon @click="toggle1 = !toggle1" :icon="handleIcon1" style="position: absolute; right: 17px; top:10px;" />
                            </template>
                            <b-form-input
                                id="input-password"
                                v-model="form.password"
                                :type="type1"
                                placeholder="Password"
                                :state="validation.password"
                                class="rounded-pill bg-glass rounded-xl"
                            ></b-form-input>
                        </b-input-group>
                        <b-form-invalid-feedback :state="validation.password">
                            {{ msg.password }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group
                        id="input-group-cpass"
                        label="Konfirmasi Password:"
                        label-for="input-cpass"
                    >
                        <b-input-group>
                            <template #append>
                                <b-icon @click="toggle2 = !toggle2" :icon="handleIcon2" style="position: absolute; right: 17px; top:10px;" />
                            </template>
                            <b-form-input
                                id="input-cpass"
                                v-model="form.cpassword"
                                :type="type2"
                                placeholder="Konfirmasi password"
                                :state="validation.cpassword"
                                class="rounded-pill bg-glass rounded-xl"
                            ></b-form-input>
                        </b-input-group>
                        <b-form-invalid-feedback :state="validation.cpassword">
                            {{ msg.cpassword }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <div class="d-flex justify-content-end mt-4">
                        <div class="mp-button-next">
                            <b-button @click="register(1)" pill variant="primary" class="px-5">Daftar</b-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mp-card__register pt-5 mb-3" v-if="tahap == 1">
                <!-- <div class="col-12"> -->
                    <h1 class="mp-white-color">Data Diri</h1>
                <!-- </div> -->
            </div>
            <div class="mp-card__register" v-if="tahap == 1">
                <div class="card mp-card__transparant p-5" style="border-radius: 10px;">
                    <div class="row">
                        <div class="col-md-4 d-flex justify-content-center align-items-center">
                            <div>
                                <p class="text-center"><b-avatar :src="`${baseUrl}/profile/${form.foto_profil}?t=${new Date().getTime()}`" size="10rem" class="border border-primary" /></p>
                                <b-form-file 
                                    v-model="file1"
                                    :state="validation.foto_profil"
                                    accept="image/jpeg, image/png, image/jiff"
                                    name="file1"
                                    class="mt-3"
                                    placeholder="No File"
                                ></b-form-file>
                                <b-form-invalid-feedback :state="validation.foto_profil">
                                    Format file yang diterima: .png .jpg .jpeg. jfif
                                </b-form-invalid-feedback>
                                <b-button variant="primary" pill block class="d-flex justify-content-center my-3 mx-auto" @click="uploadPicture(0)">
                                    Upload Gambar
                                </b-button>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-6">
                                    <b-form-group
                                        id="input-group-3"
                                        label="no. HP:"
                                        label-for="input-3"
                                    >
                                        <b-form-input
                                            id="input-3"
                                            v-model="form.no_hp"
                                            placeholder="nomor HP yang aktif"
                                            :state="validation.no_hp"
                                            class="rounded-pill bg-glass rounded-xl"
                                        ></b-form-input>
                                        <b-form-invalid-feedback :state="validation.no_hp">
                                            {{ msg.no_hp }}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </div>
                                <div class="col-6">
                                    <b-form-group
                                        id="input-group-4"
                                        label="Kota Domisili:"
                                        label-for="input-4"
                                    >
                                        <b-form-input
                                            id="input-4"
                                            v-model="form.asal_kota"
                                            placeholder="Kota domisili anda"
                                            :state="validation.asal_kota"
                                            class="rounded-pill bg-glass rounded-xl"
                                        ></b-form-input>
                                        <b-form-invalid-feedback :state="validation.asal_kota">
                                            {{ msg.asal_kota }}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </div>
                            </div>
                            <b-form-group
                                id="input-group-5"
                                label="Profesi:"
                                label-for="input-5"
                            >
                                <b-form-select 
                                    id="input-5"
                                    v-model="form.profesi"
                                    :state="validation.profesi"
                                    :options="listProfesi"
                                    class="rounded-pill bg-glass rounded-xl"
                                >
                                </b-form-select>
                                <b-form-invalid-feedback :state="validation.profesi">
                                    {{ msg.profesi }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group
                                id="input-group-6"
                                label="Tujuan:"
                                label-for="input-6"
                            >
                                <b-form-select 
                                    id="input-6"
                                    v-model="form.tujuan"
                                    :state="validation.tujuan"
                                    :options="listTujuan"
                                    class="rounded-pill bg-glass rounded-xl"
                                >
                                    <b-form-select-option :value="null" disabled></b-form-select-option>
                                </b-form-select>
                                <b-form-invalid-feedback :state="validation.tujuan">
                                    {{ msg.tujuan }}
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group
                                id="input-group-7"
                                label="Minat:"
                                label-for="input-7"
                            >
                                <b-form-input
                                    id="input-7"
                                    v-model="form.minat"
                                    placeholder="Minat anda"
                                    :state="validation.minat"
                                    class="rounded-pill bg-glass rounded-xl"
                                ></b-form-input>
                                <b-form-invalid-feedback :state="validation.minat">
                                    {{ msg.minat }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mt-4">
                        <div class="mp-button-back mr-2">
                            <b-button @click="backStep" pill variant="secondary" class="px-5">Back</b-button>
                        </div>
                        <div class="mp-button-next">
                            <b-button @click="register(2)" pill variant="primary" class="px-5">Lanjut</b-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mp-card__register pt-5" v-if="tahap == 2">
                <!-- <div class="col-12"> -->
                    <h1 class="mp-white-color">Profil Perusahaan</h1>
                <!-- </div> -->
            </div>
            <div class="mp-card__register pt-4" v-if="tahap == 2">
                <div class="mp-card__transparant card p-5" style="border-radius: 10px;">
                    <div class="row">
                        <div class="col-md-4">
                            <p class="text-center"><b-avatar :src="`${baseUrl}/company_logo/${form.foto_perusahaan}?t=${new Date().getTime()}`" size="10rem" class="border border-primary" /></p>
                            <b-form-file 
                                v-model="file2"
                                :state="validation.foto_perusahaan"
                                accept="image/jpeg, image/png, image/jiff"
                                name="file2"
                                class="mt-3"
                                placeholder="No File"
                            ></b-form-file>
                            <b-form-invalid-feedback :state="validation.foto_perusahaan">
                                Format file yang diterima: .png .jpg .jpeg. jfif
                            </b-form-invalid-feedback>
                            <b-button variant="primary" pill block class="d-flex justify-content-center my-3 mx-auto" @click="uploadPicture(1)">
                                Upload Gambar
                            </b-button>
                        </div>
                        <div class="col-md-8">
                            <b-form-group
                                id="input-group-8"
                                label="Nama Perusahaan:"
                                label-for="input-8"
                            >
                                <b-form-input
                                    id="input-8"
                                    v-model="form.nama_perusahaan"
                                    placeholder="Nama Perusahaan"
                                    :state="validation.nama_perusahaan"
                                    class="rounded-pill bg-glass rounded-xl"
                                ></b-form-input>
                                <b-form-invalid-feedback :state="validation.nama_perusahaan">
                                    {{ msg.nama_perusahaan }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group
                                id="input-group-9"
                                label="Kategori:"
                                label-for="input-9"
                            >
                                <b-form-select 
                                    id="input-9"
                                    v-model="form.kategori_perusahaan"
                                    :state="validation.kategori_perusahaan"
                                    :options="listKategori"
                                    class="rounded-pill bg-glass rounded-xl"
                                >
                                </b-form-select>
                                <b-form-invalid-feedback :state="validation.kategori_perusahaan">
                                    {{ msg.kategori_perusahaan }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                            <b-form-group
                                id="input-group-10"
                                label="Alamat Perusahaan:"
                                label-for="input-10"
                            >
                                <b-form-input
                                    id="input-10"
                                    v-model="form.alamat_perusahaan"
                                    placeholder="Alamat Perusahaan"
                                    :state="validation.alamat_perusahaan"
                                    class="rounded-pill bg-glass rounded-xl"
                                ></b-form-input>
                                <b-form-invalid-feedback :state="validation.alamat_perusahaan">
                                    {{ msg.alamat_perusahaan }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end mt-4">
                        <div class="mp-button-back mr-2">
                            <b-button @click="backStep" pill variant="secondary" class="px-5">Back</b-button>
                        </div>
                        <div class="mp-button-next">
                            <b-button @click="register(3)" pill variant="primary" class="px-5">Lanjut</b-button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mp-card__register" v-if="tahap == 3">
                <!-- <div class="col-12"> -->
                    <h1 class="mp-white-color mt-5">Verifikasi</h1>
                <!-- </div> -->
            </div>
            <div class="mp-card__register" v-if="tahap == 3">
                <div class="mp-card__transparant card p-5 text-center">
                    <div class="row">
                        <div class="col-12 mt-5">
                            <p class="mp-fs-24">Silahkan cek email anda untuk memverifikasi bahwa <br> email yang anda gunakan sudah benar</p>
                        </div>
                    </div>
                    <div class="row justify-content-center my-5">
                        <div class="col-auto">
                            <b-badge variant="danger" class="position-absolute" style="bottom:0px; right:0px;"><h5 class="px-2">1</h5></b-badge>
                            <b-icon icon="envelope-fill" variant="dark" font-scale="7em" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-5">
                            Belum menerima email? <b-link @click="sendEmailVerification" :disabled="loadingEmail">kirim ulang</b-link>
                        </div>
                    </div>
                </div>
            </div>

            <b-modal centered content-class="shadow" title="OK" v-model="alert" hide-footer hide-header no-close-on-backdrop no-close-on-esc>
                <p class="my-2 text-center" v-if="valid">
                    Email verifikasi telah dikirimkan ulang. silahkan cek inbox anda.
                </p>
                <p class="my-2 text-center" v-else>
                    Mohon maaf, terjadi kesalahan. Silahkan coba beberapa saat lagi.
                </p>
                <div class="row">
                    <div class="col-md-12 d-flex justify-content-center">
                        <b-button v-if="valid" variant="primary" pill class="px-5"  @click="alert = false">OK</b-button>
                        <nuxt-link v-else variant="primary" pill class="px-5" to="/home">OK</nuxt-link>
                    </div>
                </div>
            </b-modal>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        middleware: 'landing',
        data() {
            return {
                baseUrl:process.env.BASE_FTP_URL,
                tahap:0,
                loadingEmail:false,
                alert:false,
                valid:true,
                toggle1: true,
                type1:'password',
                toggle2: true,
                type2:'password',
                fileUrl1:null,
                fileUrl2:null,
                file1:null,
                file2:null,
                accepted: false,
                listProfesi:[
                    { value: '', text: '-- Pilih profesi anda --', disabled: true },
                    'Prinsipal',
                    'Arsitek',
                    'Kontraktor',
                    'Desain Interior',
                    'Konsultan',
                    'Umum',
                ],
                listTujuan:[
                    { value: '', text: '-- Pilih tujuan anda --', disabled: true },
                    'Informasi teknologi material',
                    'Inspirasi material dan desain',
                    'Informasi ketersediaan material',
                ],
                listRole:[
                    { value: '', text: '-- Pilih salah satu --', disabled: true },
                    'Prinsipal',
                    'Proffesional',
                    'Partner'
                ],
                listKategori:[
                    { value: '', text: '-- Pilih kategori --', disabled: true },
                    'Flooring',
                    'Roofing',
                    'Skylight',
                    'Facade',
                    'Window',
                    'Door',
                    'Furniture',
                    'Wall',
                    'Material',
                ],
                form: {
                    foto_profil:'',
                    nama_depan:'',
                    nama_belakang:'',
                    role:'',
                    no_hp:'',
                    asal_kota:'',
                    profesi:'',
                    tujuan:'',
                    minat:'',
                    nama_perusahaan:'',
                    kategori_perusahaan:'',
                    alamat_perusahaan:'',
                    foto_perusahaan:'',
                    email:'',
                    password:'',
                    cpassword:'',
                },
                validation: {
                    foto_profil:null,
                    nama_depan:null,
                    nama_belakang:null,
                    role:null,
                    no_hp:null,
                    asal_kota:null,
                    profesi:null,
                    tujuan:null,
                    minat:null,
                    nama_perusahaan:null,
                    kategori_perusahaan:null,
                    alamat_perusahaan:null,
                    foto_perusahaan:null,
                    email:null,
                    password:null,
                    cpassword:null,
                },
                msg: {
                    foto_profil:null,
                    nama_depan:null,
                    nama_belakang:null,
                    role:null,
                    no_hp:null,
                    asal_kota:null,
                    profesi:null,
                    tujuan:null,
                    minat:null,
                    nama_perusahaan:null,
                    kategori_perusahaan:null,
                    alamat_perusahaan:null,
                    foto_perusahaan:null,
                    email:null,
                    password:null,
                    cpassword:null,
                },
                loading: false,
                showModal: false,
            }
        },
        computed: {
            handleIcon1() {
                if(this.toggle1) {
                    this.type1 = 'password'
                    return "eye-slash-fill"
                }
                else {
                    this.type1 = 'text'
                    return "eye-fill"
                }
            },
            handleIcon2() {
                if(this.toggle2) {
                    this.type2 = 'password'
                    return "eye-slash-fill"
                }
                else {
                    this.type2 = 'text'
                    return "eye-fill"
                }
            },
        },
        methods: {
            ...mapActions({
                'userLogin':'auth/userLogin'
            }),
            backStep(){
                this.tahap--;
            },
            async register(tahapIdx) {
                this.loading = true
                for(const key in this.validation) {
                    this.validation[key] = null
                }
                if(tahapIdx == 1) {
                    await this.$axios.post(`/user/register/validate/${tahapIdx}`,this.form).then(res => {
                        this.userLogin(res.data.data)
                        this.$cookies.set('token',res.data.token)
                        this.tahap++
                    }).catch(err => {
                        err.response.data.errors.forEach(row => {
                            this.validation[row.param] = false
                            this.msg[row.param] = row.msg
                        });
                    })
                } else {
                    await this.$axios.put(`/user/register/validate/${tahapIdx}`, this.form, { headers: {
                        "auth-token":this.$cookies.get('token')
                    }})
                    .then(() => {
                        this.tahap++
                    })
                    .catch(err => {
                        err.response.data.errors.forEach(row => {
                            this.validation[row.param] = false
                            this.msg[row.param] = row.msg
                        });
                    })
                }
                this.loading = false
            },
            async uploadPicture(idx) {
                let form = new FormData();
                form.append('foto', this[`file${idx+1}`]);
                form.append('idx', idx);
                await this.$axios.post(`/user/upload`, form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "auth-token": this.$cookies.get('token')
                    }
                }).then(res => {
                    console.log(res.data)
                    if(res.status == 200) {
                        if(idx == 0)
                            this.form.foto_profil = res.data.data
                        else
                            this.form.foto_perusahaan = res.data.data
                    }
                    console.log(this.form)
                    this.uploadMsg = res.msg
                })
                .catch( err => console.log(err.response))
            },
            async sendEmailVerification() {
                await this.$axios.post(`/user/send/email-verify`, {}, { headers: {
                    "auth-token":this.$cookies.get('token')
                }})
                .then(res => {
                    this.alert = true
                    this.valid = true
                })
                .catch(err => {
                    this.alert = true
                    this.valid = false
                })
                this.loadingEmail = false
            }
        },
    }
</script>

<style scoped>

</style>
<template>
    <div class="row py-5 mp-material-inquiry container">
        <b-tabs pills vertical :nav-wrapper-class="tabMediaClass" lazy>
            <b-tab title="Data Diri" style="min-height: 100vh;">
                <div class="row">
                    <div class="col-12 mb-5">
                        <h3>Profile</h3>
                        <p>Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
                    </div>
                    <div class="col-md-8">
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
                                        class="rounded-xl bg-glass"
                                        disabled
                                    ></b-form-input>
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
                                        class="rounded-xl bg-glass"
                                        disabled
                                    ></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
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
                                class="rounded-xl bg-glass"
                                disabled
                            ></b-form-input>
                        </b-form-group>
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
                                        class="rounded-xl bg-glass"
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
                                        class="rounded-xl bg-glass"
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
                                class="rounded-xl bg-glass"
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
                                class="rounded-xl bg-glass"
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
                                class="rounded-xl bg-glass"
                            ></b-form-input>
                            <b-form-invalid-feedback :state="validation.minat">
                                {{ msg.minat }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-button variant="primary" pill @click="updateDataDiri" class="px-5 float-right mt-3">Save Changes</b-button>
                    </div>
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
                            <b-overlay
                                :show="loadingUploadImage"
                                rounded
                                opacity="0.6"
                                spinner-small
                                spinner-variant="light"
                                class="d-inline-block"
                            >
                                <b-button variant="primary" pill block class="d-flex justify-content-center my-3 mx-auto" @click="uploadPicture(0)">
                                    Upload Gambar
                                </b-button>
                            </b-overlay>
                        </div>
                    </div>
                </div>
            </b-tab>
            <b-tab title="Ganti Password" style="min-height: 100vh;">
                <div class="row">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-oldpass"
                            label="Password lama"
                            label-for="input-oldpass"
                        >
                            <b-input-group>
                                <template #append>
                                    <b-icon @click="togglePass1 = !togglePass1" :icon="handleIcon1" style="position: absolute; right: 30px; top:10px;" />
                                </template>
                                <b-form-input
                                    id="input-oldpass"
                                    v-model="changePass.oldpass"
                                    placeholder="Masukkan password lama anda"
                                    class="rounded-xl bg-glass"
                                    :state="validation.oldpass"
                                    :type="type1"
                                ></b-form-input>
                            </b-input-group>
                            <b-form-invalid-feedback :state="validation.oldpass">
                                {{ msg.oldpass }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-newpass"
                            label="Password Baru"
                            label-for="input-newpass"
                        >
                        <b-input-group>
                            <template #append>
                                <b-icon @click="togglePass2 = !togglePass2" :icon="handleIcon2" style="position: absolute; right: 30px; top:10px;" />
                            </template>
                            <b-form-input
                                id="input-newpass"
                                v-model="changePass.newpass"
                                placeholder="Panjang password minimal 8 karakter dan mengandung angka"
                                class="rounded-xl bg-glass"
                                :state="validation.newpass"
                                :type="type2"
                            ></b-form-input>
                        </b-input-group>
                            <b-form-invalid-feedback :state="validation.newpass">
                                {{ msg.newpass }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-cnewpass"
                            label="Konfirmasi Password Baru"
                            label-for="input-cnewpass"
                        >
                            <b-input-group>
                                <template #append>
                                    <b-icon @click="togglePass3 = !togglePass3" :icon="handleIcon3" style="position: absolute; right: 30px; top:10px;" />
                                </template>
                                <b-form-input
                                    id="input-cnewpass"
                                    v-model="changePass.cnewpass"
                                    placeholder="Masukkan ulang password baru"
                                    class="rounded-xl bg-glass"
                                    :state="validation.cnewpass"
                                    :type="type3"
                                ></b-form-input>
                            </b-input-group>
                            <b-form-invalid-feedback :state="validation.cnewpass">
                                {{ msg.cnewpass }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="col-12 col-md-4">
                        <b-button variant="primary" pill block @click="changePassword">
                            Perbarui Password
                        </b-button>
                    </div>
                </div>
            </b-tab>
            <b-tab title="Profil Perusahaan" style="min-height: 100vh;">
                <div class="row">
                    <div class="col-md-4">
                        <p class="text-center"><b-avatar :src="baseUrl+'/company_logo/'+form.foto_perusahaan+`?t=${new Date().getTime()}`" size="10rem" class="border border-primary" /></p>
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
                        <b-overlay
                            :show="loadingUploadImage"
                            rounded
                            opacity="0.6"
                            spinner-small
                            spinner-variant="light"
                            class="d-inline-block"
                        >
                            <b-button variant="primary" pill block class="d-flex justify-content-center my-3 mx-auto" @click="uploadPicture(1)">
                                Upload Gambar
                            </b-button>
                        </b-overlay>
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
                                class="rounded-xl bg-glass"
                                disabled
                            ></b-form-input>
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
                                class="rounded-xl bg-glass"
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
                                class="rounded-xl bg-glass"
                            ></b-form-input>
                            <b-form-invalid-feedback :state="validation.alamat_perusahaan">
                                {{ msg.alamat_perusahaan }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                    <div class="col-12">
                        <b-button variant="primary" pill @click="updateDataDiri" class="px-5 float-right">Save Changes</b-button>
                    </div>
                </div>
            </b-tab>
            <b-tab title="Gallery / Portofolio" style="min-height: 100vh;">
                <div class="row my-5">
                    <div class="col-md-12">
                        <b-form-group
                            id="input-group-gallery"
                            label="Upload Gallery"
                            label-for="input-gallery"
                        >
                            <b-form-file 
                                accept="image/jpeg, image/png, image/jiff"
                                id="input-gallery" 
                                multiple 
                                class="bg-glass"
                                v-model="gallery"
                                @input="uploadGallery"
                            ></b-form-file>
                            <b-form-invalid-feedback :state="validation.kategori_perusahaan">
                                Maksimum galeri yang bisa diupload adalah 10.
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <div class="row">
                            <div class="col-auto d-flex justify-content-center align-items-center mb-4" v-for="(tmp,idx) in tempUploadThumbnail" :key="idx">
                                <div class="p-3 rounded-xl h-100">
                                    <b-img :src="tmp" fluid width="150" height="150" class="shadow mb-5"></b-img>
                                    <b-button variant="dark" pill class="px-5 mt-2 position-absolute" style="bottom: 15px; left: 30px;" @click="removeFile(idx)" size="sm">X remove</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <b-button variant="primary" pill @click="submitGallery" class="px-5">Upload Galleries</b-button>
                    </div>
                    <div class="col-12">
                        <div class="row mt-3">
                            <div class="col-12">
                                <h3>Galeri Anda</h3>
                            </div>
                            <div class="col-auto d-flex justify-content-center align-items-center mb-4" v-for="(tmp,idx) in tempUrl" :key="idx">
                                <div class="p-3 rounded-xl h-100">
                                    <b-img :src="`${tmp}`" fluid width="150" height="150" class="shadow mb-5"></b-img>
                                    <b-button variant="secondary" pill class="px-5 mt-2 position-absolute" style=" left: 35px; bottom: 15px;" @click="deleteGallery(idx)" size="sm">Delete</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-md-12">
                                <b-form-group
                                    id="input-group-portofolio"
                                    label="Upload Portofolio / Catalog"
                                    label-for="input-portofolio"
                                >
                                    <b-form-file 
                                        accept="application/pdf"
                                        id="input-portofolio"
                                        name="file3"
                                        class="bg-glass"
                                        v-model="file3"
                                    ></b-form-file>
                                    <b-form-invalid-feedback :state="validation.portofolio">
                                        file yang diperbolehkan hanyalah pdf.
                                    </b-form-invalid-feedback>
                                </b-form-group>
                            </div>
                            <div class="col-md-4">
                                <b-button variant="primary" pill block @click="uploadPortofolio">
                                    Upload PDF
                                </b-button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="row h-100">
                            <div class="col-md-12 h-100">
                                <a :href="`${baseUrl}/pdfs/${form.portofolio}`" target="_blank">
                                    <b-card border-variant="light" class="shadow h-100 mt-3">
                                        <div class="row h-100">
                                            <div class="col-auto d-flex align-items-center">
                                                <b-icon icon="file-image-fill" font-scale="2rem" :variant="`${form.portofolio ? 'primary' : 'shade' }`"></b-icon>
                                            </div>
                                            <div class="col-auto d-flex align-items-center">
                                                <span v-if="form.portofolio">catalog.pdf</span>
                                                <span v-else>belum ada portofolio...</span>
                                            </div>
                                        </div>
                                    </b-card>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>
            <b-tab title="Unggah Produk" style="min-height: 100vh;">
                <ProductForm />
            </b-tab>
            <b-tab title="Produk Saya" style="min-height: 100vh;">
                <MyProducts />
            </b-tab>
        </b-tabs>
        <b-modal centered content-class="shadow" title="OK" v-model="showAlertModal" hide-footer hide-header>
            <p class="my-2 text-center">
                Data diri anda telah diperbarui.
            </p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <b-button variant="primary" pill class="px-5" @click="showAlertModal = false">OK</b-button>
                </div>
            </div>
        </b-modal>
        <b-modal centered content-class="shadow" title="OK" v-model="showAlertGallery" hide-footer hide-header no-close-on-backdrop>
            <p class="my-2 text-center">
                {{ alertGalleryMsg }}
            </p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <b-button variant="primary" pill class="px-5" @click="closeAlertGallery">OK</b-button>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                loadingUploadImage: false,
                tabMediaClass: 'm-3',
                alertGalleryMsg: '',
                showAlertModal: false,
                showAlertGallery: false,
                baseUrl:process.env.BASE_FTP_URL,
                tempUploadThumbnail:[],
                tempUrl:[],
                gallery:[],
                file1: null,
                file2: null,
                file3: null,
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
                    nama_depan:'',
                    nama_belakang:'',
                    email:'',
                    foto_profil:'',
                    no_hp:'',
                    asal_kota:'',
                    profesi:'',
                    tujuan:'',
                    minat:'',
                    nama_perusahaan:'',
                    kategori_perusahaan:'',
                    alamat_perusahaan:'',
                    foto_perusahaan:'',
                },
                validation: {
                    foto_profil:null,
                    no_hp:null,
                    asal_kota:null,
                    profesi:null,
                    tujuan:null,
                    minat:null,
                    kategori_perusahaan:null,
                    alamat_perusahaan:null,
                    foto_perusahaan:null,
                    oldpass:null,
                    newpass:null,
                    cnewpass:null,
                },
                msg: {
                    foto_profil:'',
                    no_hp:'',
                    asal_kota:'',
                    profesi:'',
                    tujuan:'',
                    minat:'',
                    kategori_perusahaan:'',
                    alamat_perusahaan:'',
                    foto_perusahaan:'',
                    oldpass:'',
                    newpass:'',
                    cnewpass:'',
                },
                changePass: {
                    oldpass:'',
                    newpass:'',
                    cnewpass:'',
                },
                togglePass1:true,
                type1:'password',
                togglePass2:true,
                type2:'password',
                togglePass3:true,
                type3:'password',
            }
        },
        computed: {
            handleIcon1() {
                if(this.togglePass1) {
                    this.type1 = 'password'
                    return "eye-slash-fill"
                }
                else {
                    this.type1 = 'text'
                    return "eye-fill"
                }
            },
            handleIcon2() {
                if(this.togglePass2) {
                    this.type2 = 'password'
                    return "eye-slash-fill"
                }
                else {
                    this.type2 = 'text'
                    return "eye-fill"
                }
            },
            handleIcon3() {
                if(this.togglePass3) {
                    this.type3 = 'password'
                    return "eye-slash-fill"
                }
                else {
                    this.type3 = 'text'
                    return "eye-fill"
                }
            },
        },
        methods: {
            ...mapActions({
                'updateUserData':'user/updateUserData'
            }),
            async uploadPicture(idx) {
                this.loadingUploadImage = true
                this.validation.foto_profil = null
                this.validation.foto_perusahaan = null
                let form = new FormData();
                form.append('foto', this[`file${idx+1}`]);
                form.append('idx', idx);
                await this.$axios.post(`/user/upload`, form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "auth-token": this.$cookies.get('token')
                    }
                }).then(res => {
                    console.log(res.data.data)
                    if(idx == 0)
                        this.form.foto_profil = res.data.data
                    else
                        this.form.foto_perusahaan = res.data.data
                    this.uploadMsg = res.msg
                    console.log(this.form.foto_perusahaan)
                })
                .catch( err => {
                    if(idx == 0)
                        this.validation.foto_profil = false
                    else
                        this.validation.foto_perusahaan = false
                    console.log(err.response)
                })
                this.loadingUploadImage = false
            },
            async uploadPortofolio() {
                this.validation.portofolio = null
                let form = new FormData();
                form.append('foto', this.file3);
                form.append('idx', 2);
                await this.$axios.post(`/user/upload/pdf`, form, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "auth-token": this.$cookies.get('token')
                    }
                }).then(res => {
                    console.log(res)
                    this.showAlertGallery = true
                    this.alertGalleryMsg = res.data.msg
                })
                .catch( err => {
                    this.showAlertGallery = true
                    this.alertGalleryMsg = err.response.data.msg
                })
            },
            async closeAlertGallery() {
                this.showAlertGallery = false
                await this.fetchGallery()
            },
            async updateDataDiri() {
                this.resetValidations()
                await this.$axios.put(`/user/datadiri`, this.form, { headers: {
                    "auth-token":this.$cookies.get('token')
                }})
                .then(() => {
                    this.showAlertModal = true
                    this.updateUserData(this.form)
                })
                .catch(err => {
                    err.response.data.errors.forEach(row => {
                        this.validation[row.param] = false
                        this.msg[row.param] = row.msg
                    });
                })
            },
            uploadGallery() {
                if (this.gallery.length > 0) {
                    this.gallery.forEach(row => {
                        this.tempUploadThumbnail.push(window.URL.createObjectURL(row));
                    });
                }
            },
            removeFile(idx) {
                this.tempUploadThumbnail.splice(idx, 1);
                this.gallery.splice(idx, 1);
            },
            async deleteGallery(idx) {
                await this.$axios.delete(`/user/datadiri/gallery/${idx}`,{ headers: {
                    "auth-token":this.$cookies.get('token')
                }, data: {} })
                .then(async res => {
                    this.alertGalleryMsg = 'Gallery berhasil dihapus'
                })
                .catch(err => {
                    this.alertGalleryMsg = 'mohon maaf, terjadi kesalahan. Silahkan coba beberapa saat lagi.'
                })
                this.showAlertGallery = true
            },
            async submitGallery() {
                let formData = new FormData();
                this.gallery.forEach(img => {
                    formData.append('gambar',img)
                });
                await this.$axios.post(`/user/datadiri/gallery`, formData, { headers: {
                    'Content-Type': 'multipart/form-data',
                    "auth-token":this.$cookies.get('token')
                }})
                .then(async res => {
                    this.tempUploadThumbnail = []
                    this.gallery = []
                    await this.fetchGallery()
                })
                .catch(err => {
                    console.log(err.response)
                })
            },
            async fetchGallery() {
                this.tempUrl = []
                let userData = await this.$axios.get(`/user/datadiri`, { params:{}, headers: { 'auth-token': this.$cookies.get('token') } })
                this.form = userData.data.data[0]
                this.form.alamat_perusahaan = this.$decodeHtml(this.form.alamat_perusahaan)
                this.form.minat = this.$decodeHtml(this.form.minat)
                let formatURL = []
                if(userData.data.data[0].gallery){
                    formatURL = userData.data.data[0].gallery.split(',')
                }
                formatURL.forEach(row => {
                    this.tempUrl.push(`${this.baseUrl}/gallery/${row}?t=${new Date().getTime()}`)
                });
            },
            async changePassword() {
                this.resetValidations()
                await this.$axios.put(`/user/password/change`, this.changePass, { headers: {
                    "auth-token":this.$cookies.get('token')
                }})
                .then(() => {
                    this.showAlertModal = true
                })
                .catch(err => {
                    err.response.data.errors.forEach(row => {
                        this.validation[row.param] = false
                        this.msg[row.param] = row.msg
                    });
                })
            },
            resetValidations() {
               for (const key in this.validation) {
                    this.validation[key] = null
                    this.msg[key] = ''
               }
            }
        },
        async mounted() {
            await this.fetchGallery()
            let tabMediaQuery = window.matchMedia("(max-width: 767.98px)")
            let that = this
            function changeTabWidth(x) {
                if (x.matches) that.tabMediaClass = 'w-100';
                else that.tabMediaClass = 'm-3';
            }
            tabMediaQuery.addListener(changeTabWidth)

            this.$emit('fullpage', true);
        }
    }
</script>
<style lang="scss" scoped>
    .container{
        padding: 0!important;
    }

    .mp-material-inquiry{
        background-image: none;
    }
</style>
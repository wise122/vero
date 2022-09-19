<template>
    <div class="row">
        <div class="col-12 my-5" v-if="!edit">
            <h1>Tambah Produk Baru</h1>
        </div>
        <div class="col-12 my-5" v-else>
            <h1>Edit Produk</h1>
        </div>
        <div class="col-12">
            <b-form-group
                id="input-group-title"
                label="Nama Produk:"
                label-for="input-title"
            >
                <b-form-input
                    id="input-title"
                    v-model="form.title"
                    placeholder="Nama produk anda"
                    :state="validation.title"
                    class="rounded-xl bg-glass"
                ></b-form-input>
                <b-form-invalid-feedback :state="validation.title">
                    {{ msg.title }}
                </b-form-invalid-feedback>
            </b-form-group>
            <div class="row">
                <div class="col-6">
                    <b-form-group
                        id="input-group-tipe"
                        label="Tipe Produk:"
                        label-for="input-tipe"
                    >
                        <b-form-select 
                            id="input-tipe"
                            v-model="form.tipe"
                            :state="validation.tipe"
                            :options="listTipe"
                            class="rounded-xl bg-glass"
                        >
                        </b-form-select>
                        <b-form-invalid-feedback :state="validation.tipe">
                            {{ msg.tipe }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                </div>
                <div class="col-6">
                    <b-form-group
                        id="input-group-penempatan"
                        label="Penempatan Produk:"
                        label-for="input-penempatan"
                    >
                        <b-form-select 
                            id="input-penempatan"
                            v-model="form.penempatan"
                            :state="validation.penempatan"
                            :options="['Indoor','Outdoor','Indoor/Outdoor']"
                            class="rounded-xl bg-glass"
                        >
                        </b-form-select>
                        <b-form-invalid-feedback :state="validation.penempatan">
                            {{ msg.penempatan }}
                        </b-form-invalid-feedback>
                    </b-form-group>
                </div>
            </div>
            <b-form-group
                id="input-group-spek_produk"
                label="Spesifikasi Produk:"
                label-for="input-spek_produk"
            >
                <b-form-textarea
                    id="input-spek_produk"
                    v-model="form.spek_produk"
                    :state="validation.spek_produk"
                    class="rounded-xl bg-glass"
                    placeholder="Tuliskan dimensi dari produk, ex: Tinggi 100cm, tebal 5mm"
                >
                </b-form-textarea>
                <b-form-invalid-feedback :state="validation.spek_produk">
                    {{ msg.spek_produk }}
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-varian"
                label="Varian:"
                label-for="input-varian"
            >
                <b-form-tags 
                    input-id="input-varian" 
                    tag-pills
                    v-model="form.varian"
                    separator=" "
                    :limit="5"
                    placeholder="Masukkan varian / tipe dipisah dengan spasi."
                    class="rounded-xl bg-glass"
                    duplicate-tag-text="varian duplikat"
                    limit-tags-text="maksimal 5 varian"
                    :state="validation.varian"
                >
                </b-form-tags>
                <b-form-invalid-feedback :state="validation.varian">
                    {{ msg.varian }}
                </b-form-invalid-feedback>
            </b-form-group>
            
            <b-form-group
                id="input-group-deskripsi"
                label="Deskripsi Produk:"
                label-for="input-deskripsi"
            >
                <b-form-textarea
                    id="input-deskripsi"
                    v-model="form.deskripsi"
                    placeholder="Tuliskan kelebihan, manfaat bila di gunakan dan produk tidak boleh terkena apa dan cara pasang nya harus seperti apa"
                    :state="validation.deskripsi"
                    class="rounded-xl bg-glass"
                    style="min-height: 300px;"
                ></b-form-textarea>
                <b-form-invalid-feedback :state="validation.deskripsi">
                    {{ msg.deskripsi }}
                </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
                id="input-group-katalog"
                label="Upload Katalog Produk (minimal 1)"
                label-for="input-katalog"
            >
                <b-form-file 
                    accept="image/jpeg, image/png, image/jiff"
                    id="input-katalog" 
                    multiple 
                    class="bg-glass"
                    :state="validation.katalog"
                    v-model="form.katalog"
                    @input="uploadPicture"
                ></b-form-file>
                <b-form-invalid-feedback :state="validation.katalog">
                    Format file yang diterima: .png .jpg .jpeg. jfif
                </b-form-invalid-feedback>

                <div class="row mt-3">
                    <div class="col-auto d-flex justify-content-center align-items-center" v-for="(tmp,idx) in tempUrl" :key="idx">
                        <div class="p-3 card h-100">
                            <b-img :src="tmp" fluid width="150" height="150" class="shadow mb-5"></b-img>
                            <b-button variant="dark" pill class="px-5 mt-2 position-absolute" style="bottom: 15px;" @click="removeFile(idx)" size="sm">X remove</b-button>
                        </div>
                    </div>
                </div>
            </b-form-group>
            <b-form-group
                id="input-group-faq"
                label="FAQ (jika diperlukan):"
                label-for="input-faq"
            >
                <b-form-textarea
                    id="input-faq"
                    v-model="form.faq"
                    placeholder="Sertakan satu atau lebih pertanyaan mengenai produk"
                    class="rounded-xl bg-glass"
                    style="min-height: 300px;"
                ></b-form-textarea>
            </b-form-group>
            <b-overlay
                :show="loadingSubmit"
                rounded
                opacity="0.6"
                spinner-small
                spinner-variant="light"
                class="d-inline-block"
            >
                <b-button variant="primary" class="px-5 mb-5" pill @click="editProduct" size="sm" v-if="edit">Edit Product</b-button>
                <b-button variant="primary" class="px-5 mb-5" pill @click="submitProduct" size="sm" v-else>Submit Product</b-button>
            </b-overlay>
        </div>
        <b-modal centered content-class="shadow" title="OK" v-model="showAlertModal" hide-footer hide-header no-close-on-backdrop>
            <p class="my-2 text-center" v-if="!edit">
                Produk berhasil ditambahkan!
            </p>
            <p class="my-2 text-center" v-else>
                Produk berhasil diperbarui!
            </p>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <nuxt-link to="/home/profile" class="btn btn-primary rounded-pill px-5 text-center" @click.native="showAlertModal = false">OK</nuxt-link>
                    <!-- <b-button variant="primary" pill class="px-5" @click="showAlertModal = false">OK</b-button> -->
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        props:["edit","payload"],
        data() {
            return {
                loadingSubmit: false,
                showAlertModal:false,
                tempUrl:[],
                satuan: 'mm',
                form: {
                    title:'',
                    tipe:'',
                    spek_produk:'',
                    penempatan:'',
                    varian:[],
                    deskripsi:'',
                    katalog:[],
                    faq:'',
                },
                validation: {
                    title:null,
                    tipe:null,
                    spek_produk:null,
                    penempatan:null,
                    varian:null,
                    deskripsi:null,
                    katalog:null,
                },
                msg: {
                    title:'',
                    tipe:'',
                    spek_produk:'',
                    penempatan:'',
                    varian:'',
                    deskripsi:'',
                    katalog:'',
                },
                validTags: [],
                invalidTags: [],
                duplicateTags: [],
                listTipe:[
                    { value: '', text: '-- Pilih tipe --', disabled: true },
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
                baseUrl:process.env.BASE_FTP_URL,
            }
        },
        methods: {
            async submitProduct() {
                this.loadingSubmit = true
                for (const key in this.validation) {
                    this.validation[key] = null
                }
                let formData = new FormData();
                for (const key in this.form) {
                    formData.append(key, this.form[key])
                }
                this.form.katalog.forEach(img => {
                    formData.append('gambar',img)
                });
                await this.$axios.post(`/products`, formData, { headers: {
                    'Content-Type': 'multipart/form-data',
                    "auth-token":this.$cookies.get('token')
                }})
                .then(res => {
                    this.showAlertModal = true
                })
                .catch(err => {
                    err.response.data.errors.forEach(row => {
                        this.validation[row.param] = false
                        this.msg[row.param] = row.msg
                    });
                })
                this.loadingSubmit = false
            },
            async editProduct() {
                this.loadingSubmit = true
                for (const key in this.validation) {
                    this.validation[key] = null
                }
                let formData = new FormData();
                for (const key in this.form) {
                    formData.append(key, this.form[key])
                }
                this.form.katalog && this.form.katalog.forEach(img => {
                    formData.append('gambar',img)
                });
                let tmpKatalog = []
                this.tempUrl.forEach(row => {
                    let filename = row.split('/')
                    tmpKatalog.push(filename[filename.length - 1])
                });
                formData.set('katalog', tmpKatalog)
                await this.$axios.put(`/products`, formData, { headers: {
                    'Content-Type': 'multipart/form-data',
                    "auth-token":this.$cookies.get('token')
                }})
                .then(res => {
                    this.showAlertModal = true
                })
                .catch(err => {
                    err.response.data.errors.forEach(row => {
                        this.validation[row.param] = false
                        this.msg[row.param] = row.msg
                    });
                })
                this.loadingSubmit = false
            },
            uploadPicture() {
                // console.log(this.form.katalog.length)
                if (this.form.katalog.length > 0) {
                    this.form.katalog.forEach(row => {
                        this.tempUrl.push(window.URL.createObjectURL(row));
                    });
                }
            },
            removeFile(idx) {
                this.tempUrl.splice(idx, 1);
                this.form.katalog.splice(idx, 1);
            }
        },
        mounted() {
            if(this.edit) {
                this.form = this.payload
                this.form.katalog && this.form.katalog.forEach(row => {
                   this.tempUrl.push(`${this.baseUrl}/products/${row}`) 
                });
            }
        }
    }
</script>
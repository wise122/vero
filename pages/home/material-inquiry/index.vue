<template>
<div class="mp-material-inquiry">
    <div class="container" style="min-height: 100vh; padding: 180px 80px;">
        <div class="mp-title-page__with-shadow">
            <h1>Material Inquiry</h1>
        </div>
        <div class="mp-card__transparant-form mt-5">
          <div class="mp-material-inquiry__form">
              <b-form>
                <div class="mp-form__group">
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Tenggat Waktu: </p>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                            v-model="form.email"
                            type="email"
                            :state="validation.email"
                            class="rounded-pill bg-glass border border-dark"
                        ></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Nama contact person: </p>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                            v-model="form.email"
                            type="email"
                            :state="validation.email"
                            class="rounded-pill bg-glass border border-dark"
                        ></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Nomor telepon: </p>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                            v-model="form.email"
                            type="email"
                            :state="validation.email"
                            class="rounded-pill bg-glass border border-dark"
                        ></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Nama proyek: </p>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                            v-model="form.email"
                            type="email"
                            :state="validation.email"
                            class="rounded-pill bg-glass border border-dark"
                        ></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Alamat proyek: </p>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                            v-model="form.email"
                            type="email"
                            :state="validation.email"
                            class="rounded-pill bg-glass border border-dark"
                        ></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Kota: </p>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                            v-model="form.email"
                            type="email"
                            :state="validation.email"
                            class="rounded-pill bg-glass border border-dark"
                        ></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Budget: </p>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                            v-model="form.email"
                            type="email"
                            :state="validation.email"
                            class="rounded-pill bg-glass border border-dark"
                        ></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Catatan proyek: </p>
                      </b-col>
                      <b-col cols="6">
                            <b-form-textarea
                                id="textarea"
                                v-model="text"
                                rows="3"
                                max-rows="6"
                                class="border border-dark"
                                >
                            </b-form-textarea>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Status proyek: </p>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                            v-model="form.email"
                            type="email"
                            :state="validation.email"
                            class="rounded-pill bg-glass border border-dark"
                        ></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">Upload foto proyek: </p>
                      </b-col>
                      <b-col cols="6">
                        <b-form-input
                            v-model="form.email"
                            type="email"
                            :state="validation.email"
                            class="rounded-pill bg-glass border border-dark"
                        ></b-form-input>
                      </b-col>
                  </b-row>
                  <b-row class="mb-4">
                      <b-col cols="4">
                        <p class="mb-0 mt-2 mp-fs-20 mp-fw-600">kebutuhan: </p>
                      </b-col>
                  </b-row>
                </div>

                <div class="mp-form__kebutuhan">
                    <b-row>
                        <b-col cols="4" v-for="key in count" :key="key" class="mb-4">
                            <div class="mp-box__form">
                                <b-form-group
                                    id="input-group-1"
                                    label="Tipe barang:"
                                    label-for="input-1"
                                    label-class="mp-fs-20 mp-fw-600 mt-2"
                                >
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        :state="validation.email"
                                        class="rounded-pill bg-glass border border-dark"
                                    ></b-form-input>
                                    <b-form-invalid-feedback :state="validation.email">
                                        Email tidak valid
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Brand:"
                                    label-for="input-1"
                                    label-class="mp-fs-20 mp-fw-600"
                                >
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        :state="validation.email"
                                        class="rounded-pill bg-glass border border-dark"
                                    ></b-form-input>
                                    <b-form-invalid-feedback :state="validation.email">
                                        Email tidak valid
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Material:"
                                    label-for="input-1"
                                    label-class="mp-fs-20 mp-fw-600"
                                >
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        :state="validation.email"
                                        class="rounded-pill bg-glass border border-dark"
                                    ></b-form-input>
                                    <b-form-invalid-feedback :state="validation.email">
                                        Email tidak valid
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Luas kebutuhan:"
                                    label-for="input-1"
                                    label-class="mp-fs-20 mp-fw-600"
                                >
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        :state="validation.email"
                                        class="rounded-pill bg-glass border border-dark"
                                    ></b-form-input>
                                    <b-form-invalid-feedback :state="validation.email">
                                        Email tidak valid
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Ukuran:"
                                    label-for="input-1"
                                    label-class="mp-fs-20 mp-fw-600"
                                >
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        :state="validation.email"
                                        class="rounded-pill bg-glass border border-dark"
                                    ></b-form-input>
                                    <b-form-invalid-feedback :state="validation.email">
                                        Email tidak valid
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Quantity:"
                                    label-for="input-1"
                                    label-class="mp-fs-20 mp-fw-600"
                                >
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        :state="validation.email"
                                        class="rounded-pill bg-glass border border-dark"
                                    ></b-form-input>
                                    <b-form-invalid-feedback :state="validation.email">
                                        Email tidak valid
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Budget:"
                                    label-for="input-1"
                                    label-class="mp-fs-20 mp-fw-600"
                                >
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        :state="validation.email"
                                        class="rounded-pill bg-glass border border-dark"
                                    ></b-form-input>
                                    <b-form-invalid-feedback :state="validation.email">
                                        Email tidak valid
                                    </b-form-invalid-feedback>
                                </b-form-group>
                                <b-form-group
                                    id="input-group-1"
                                    label="Upload Gambar Kerja:"
                                    label-for="input-1"
                                    label-class="mp-fs-20 mp-fw-600"
                                >
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.email"
                                        type="email"
                                        :state="validation.email"
                                        class="rounded-pill bg-glass border border-dark"
                                    ></b-form-input>
                                    <b-form-invalid-feedback :state="validation.email">
                                        Email tidak valid
                                    </b-form-invalid-feedback>
                                </b-form-group>
                            </div>
                        </b-col>

                        <b-col cols="4">
                            <div class="mp-box__form">
                                <div class="mp-button__add-form" @click="add">
                                    <b-icon icon="plus" font-scale="4"></b-icon>
                                    <p class="mb-0">Tambah</p>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>

                <div class="d-flex justify-content-end pr-5 pb-5">
                    <b-button variant="primary" pill type="submit" class="mb-3 px-5" size="lg">Submit</b-button>
                </div>
              </b-form>

              
          </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                count: 1,
                values:{},
                form:{
                    email: ''
                },
                validation:{
                    email: null
                },
                text: "",
            }
        },
        methods: {
            add(){
                this.count++
            },

            remove(){
                this.count--
            }
        },

        mounted(){
            this.$emit('fullpage', true);
        }
    }
</script>
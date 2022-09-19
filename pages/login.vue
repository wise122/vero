<template>
    <div class="container-fluid bg-login">
        <div class="container">
        <div class="row pt-5" style="min-height: 100vh;">
            <div class="col-md-6 text-center text-white mt-5 d-flex justify-content-center align-items-center">
                <h1 class="mitrapabrik">SELAMAT <br> DATANG</h1>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center">
                <b-card
                    class="w-100 bg-glass p-md-5"
                >
                    <h1 class="text-center my-5">Masuk</h1>
                    <b-form @submit.prevent="login">
                        <b-form-group
                            id="input-group-1"
                            label="Email:"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                placeholder="Masukkan email"
                                :state="validation.email"
                                class="rounded-pill bg-glass"
                            ></b-form-input>
                            <b-form-invalid-feedback :state="validation.email">
                                Email tidak valid
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="Kata Sandi:"
                            label-for="input-2"
                        >
                            <b-input-group>
                                <template #append>
                                    <b-icon @click="toggle1 = !toggle1" :icon="handleIcon1" style="position: absolute; right: 30px; top:10px;" />
                                </template>
                                <b-form-input
                                    id="input-2"
                                    v-model="form.password"
                                    :type="type1"
                                    placeholder="Password"
                                    :state="validation.password"
                                    class="rounded-pill bg-glass"
                                ></b-form-input>
                            </b-input-group>
                            <b-form-invalid-feedback :state="validation.password">
                                password tidak valid
                            </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group
                            id="input-group-3"
                            label-for="input-3"
                        >
                            <b-form-checkbox
                                id="checkbox-3"
                                v-model="form.rememberMe"
                                name="checkbox-3"
                                value="1"
                                unchecked-value="0"
                            >
                                Remember Me
                            </b-form-checkbox>
                        </b-form-group>
                        <p class="text-center"><b-button variant="primary" pill type="submit" class="mb-3 px-5" :disabled="loading">Login</b-button></p>
                        <!-- <b-link class="text-center"><small>Lupa Sandi? Klik disini</small></b-link> -->
                        <br>
                        <nuxt-link to="/register" class="text-center"><small>Belum punya akun? Daftar disini!</small></nuxt-link>
                    </b-form>                
                </b-card>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        middleware: 'landing',
        data() {
            return {
                toggle1: true,
                type1:'text',
                form: {
                    email:'',
                    password:'',
                },
                validation: {
                    email:null,
                    password:null,
                },
                loading: false,
            }
        },
        methods: {
            ...mapActions({
                'userLogin':'auth/userLogin'
            }),
            async login() {
                this.loading = true
                for(const key in this.validation) {
                    this.validation[key] = null
                }
                await this.$axios.post('/user/login',this.form).then(res => {
                    console.log(res.data.data)
                    this.userLogin(res.data.data)
                    this.$cookies.set('token',res.data.token)
                    this.$router.push({ name: 'home' })
                }).catch(err => {
                    if(err.response)
                        err.response.data.errors.forEach(row => {
                            this.validation[row.param] = false
                        });
                })
                this.loading = false
            },
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
        }
    }
</script>

<style scoped>
  .bg-login {
    /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"); */
    background: linear-gradient(rgba(30, 30, 30, 0.3), rgba(30, 30, 30, 0.3)), url("https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik_assets/ezgif.com-gif-maker__16__i8oWsX5mzCC.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1645510827537") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
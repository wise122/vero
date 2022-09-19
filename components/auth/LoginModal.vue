<template>
    <div class="mp-dialog">
        <b-modal
        id="modal-no-backdrop" 
        hide-backdrop
        @show="resetModal"
        @hidden="resetModal"
        hide-footer
        header-class="mp-dialog-login"
        modal-class="mp-modal-login"
        v-model="modalShow"
        >
        <template #modal-header="{ close }">
            <img src="/logo-mp-2.png" alt="logo mp" width="220" class="mt-4">
            <b-icon-x-lg class="mp-white-color float-right mt-2 mr-1" style="cursor:pointer" @click="close()"></b-icon-x-lg>
        </template>
            <form ref="form" @submit.prevent="login">
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
                <p class="text-center">
                    <b-button variant="primary" pill type="submit" class="mb-3 px-5" :disabled="loading">Login</b-button><br>
                    <span class="mp-paragraf">Belum punya akun? 
                        <span @click="onClickRegister" class="mp-text-red mp-paragraf" style="cursor:pointer">
                            Daftar disini!
                        </span>
                    </span>
                </p>
            </form>
        </b-modal>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name:"LoginModal",
    props: {
        statusModal: {
            type: Boolean,
            default: false,
        }
    },

    watch:{
        statusModal(){
            this.modalShow = true
        }
    },
    
    data() {
      return {
        name: '',
        nameState: null,
        submittedNames: [],
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
        modalShow: false,
      }
    },

    methods: {
        ...mapActions({
            'userLogin':'auth/userLogin'
        }),

        onClickRegister(){
            this.$router.push({ name: 'register' })

            this.$nextTick(() => {
                this.$bvModal.hide('modal-no-backdrop')
            })
        },

        async login() {
                this.loading = true
                for(const key in this.validation) {
                    this.validation[key] = null
                }
                await this.$axios.post('/user/login',this.form).then(res => {
                    console.log(res.data.data)
                    this.userLogin(res.data.data)
                    this.$cookies.set('token',res.data.token)
                    this.$router.push({ name: 'index' })
                    this.modalShow = false
                }).catch(err => {
                    if(err.response)
                        err.response.data.errors.forEach(row => {
                            this.validation[row.param] = false
                        });
                })
                this.loading = false
            },

      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },

      resetModal() {
          this.form.email = "";
          this.form.password = "";
      },
      
    //   handleOk(bvModalEvent) {
    //     // Prevent modal from closing
    //     bvModalEvent.preventDefault()
    //     // Trigger submit handler
    //     this.handleSubmit()
    //   },

    //   handleSubmit() {
    //     // Exit when the form isn't valid
    //     if (!this.checkFormValidity()) {
    //       return
    //     }
    //     // Push the name to submitted names
    //     this.submittedNames.push(this.name)
    //     // Hide the modal manually
    //     this.$nextTick(() => {
    //       this.$bvModal.hide('modal-prevent-closing')
    //     })
    //   }
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
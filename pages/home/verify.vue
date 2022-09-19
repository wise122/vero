<template>
    <b-modal centered content-class="shadow" title="OK" v-model="alert" hide-footer hide-header>
        <p class="my-2 text-center" v-if="valid">
            Verifikasi E-Mail Berhasil!
        </p>
        <p class="my-2 text-center" v-else>
            Mohon maaf, terjadi kesalahan. Silahkan coba beberapa saat lagi.
        </p>
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <b-button variant="primary" pill class="px-5" @click="close">Kembali ke Beranda</b-button>
            </div>
        </div>
    </b-modal>
</template>

<script>
    export default {
        data() {
            return {
                valid: true,
                alert: true,
            }
        },
        methods: {
            close() {
                this.alert = false
                window.location.href = '/home'
            }
        },
        async mounted() {
            await this.$axios.put('/user/verify', 
                {hash:this.$route.query.t}
            ,{ headers: {
                    "auth-token":this.$cookies.get('token')
                }
            }
            ).then(res => {
                this.$cookies.set('token',res.data.token)
            }).catch(err => {
                console.log(err)
                this.valid = false
            });
        }
    }
</script>
<template>
    <div class="mp-menu position-absolute w-50">
        <div class="mp-menu-items" @click="scrollTo('news-section')">
            <div class="mp-button-menu-item">
                <span>News</span>
                <img src="/menu-icon/news-icon.png" width="40" height="40">
            </div>
        </div>
        <div class="mp-menu-items">
            <div class="mp-button-menu-item" @click="scrollTo('showroom-section')">
                <span>Showroom</span>
                <img src="/menu-icon/showroom-icon.png" width="40" height="40">
            </div>
        </div>
        <div class="mp-menu-items">
            <div class="mp-button-menu-item" @click="scrollTo('principal-section')">
                <span>Principal</span>
                <img src="/menu-icon/principal-icon.png" width="40" height="40">
            </div>
        </div>
        <div class="mp-menu-items">
            <div class="mp-button-menu-item" @click="scrollTo('event-section')">
                <span>Event</span>
                <img src="/menu-icon/event-icon.png" width="40" height="40">
            </div>
        </div>
        <div class="mp-menu-items">
            <div class="mp-button-menu-item" @click="checkStatusLogin">
                <span>Material Inquiry</span>
                <img src="/menu-icon/material-inquiry-icon.png" width="40" height="40">
            </div>
            <LoginModal :statusModal="modalLoginShow" />
        </div>
    </div>
</template>
<script>

import LoginModal from "~/components/auth/LoginModal.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "MenuItem",
    components:{
        LoginModal,
    },

    data(){
        return{
            modalLoginShow: false,
        }
    },

    methods: {
        scrollTo(id) {
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth', 
                block: 'start'
            });
        },

        checkStatusLogin(){
            console.log(this.getUserCredentials.id_user)
            if(this.getUserCredentials.id_user === undefined){
                this.modalLoginShow = !this.modalLoginShow
            }else{
                this.$router.push("/home/material-inquiry");
                // this.modalLoginShow = false;
            }
        }
    },

    computed: {
        ...mapGetters({
            'getUserCredentials':'auth/getUserCredentials',
        }),
    },
}
</script>
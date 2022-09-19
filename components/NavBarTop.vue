<template>
    <b-navbar toggleable="md" class="p-4 bg-semi-dark">
        <b-navbar-brand style="max-width:250px">
            <nuxt-link to="/" class="text-primary">
                <b-img src="https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik_assets/logo_DVBKC2Wjb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646666518140" fluid></b-img>
                <!-- <b-img src="/logo-mp.png" fluid></b-img> -->
            </nuxt-link>
        </b-navbar-brand>

        <!-- <Transition v-if="getUserCredentials.nama_depan" name="menulist">
            <div class="d-flex text-center position-absolute" style=" overflow-x: auto; top: 0px; left: 0px; right: 0px; text-align: center; z-index: -99;" ref="menuOptions" v-if="toggleMenu">
                <div class="nav-box d-flex justify-content-center align-items-center bg-primary text-primary-shade ml-auto" ref="option1" @click="isActive('option1','/events')" style="border-radius: 0px 0px 0px 50px;">
                    <div class="row p-3 border-right border-white h-100">
                    <div class="col-12"><b-avatar square variant="transparent" size="3rem" src="/nav-events.png"></b-avatar></div>
                    <div class="col-12"><p>Events</p></div>
                    </div>
                </div>
                <div class="nav-box d-flex justify-content-center align-items-center bg-primary text-primary-shade" ref="option2" @click="isActive('option2','/showroom')">
                    <div class="row p-3 border-right border-white h-100">
                    <div class="col-12"><b-avatar square variant="transparent" size="3rem" src="/nav-showroom.png"></b-avatar></div>
                    <div class="col-12"><p>Show Room</p></div>
                    </div>
                </div>
                <div class="nav-box d-flex justify-content-center align-items-center bg-primary text-primary-shade" ref="option3" @click="isActive('option3','/news')">
                    <div class="row p-3 border-right border-white h-100">
                    <div class="col-12"><b-avatar square variant="transparent" size="3rem" src="/nav-news.png"></b-avatar></div>
                    <div class="col-12"><p>News</p></div>
                    </div>
                </div>
                <div class="nav-box d-flex justify-content-center align-items-center bg-primary text-white" ref="option4" @click="isActive('option4','/')">
                    <div class="row p-3 border-right border-white h-100">
                    <div class="col-12"><b-avatar square variant="transparent" size="3rem" src="/nav-about.png"></b-avatar></div>
                    <div class="col-12"><p>About Us</p></div>
                    </div>
                </div>
                <div class="nav-box d-flex justify-content-center align-items-center bg-primary text-primary-shade" ref="option5" @click="isActive('option5','/partnerships')">
                    <div class="row p-3 border-right border-white h-100">
                    <div class="col-12"><b-avatar square variant="transparent" size="3rem" src="/nav-principal.png"></b-avatar></div>
                    <div class="col-12"><p>Principal</p></div>
                    </div>
                </div>
                <div class="nav-box d-flex justify-content-center align-items-center bg-primary mr-auto text-primary-shade" ref="option6" @click="isActive('option6','/inquiries')" style="border-radius: 0px 0px 50px 0px;">
                    <div class="row p-3 h-100">
                    <div class="col-12"><b-avatar square variant="transparent" size="3rem" src="/nav-material.png"></b-avatar></div>
                    <div class="col-12"><p>Material Inquiry</p></div>
                    </div>
                </div>
            </div>
        </Transition>
        <Transition v-if="getUserCredentials.nama_depan" name="btntoggle">
            <b-button variant="transparent" class="position-absolute" @click="toggleMenu = !toggleMenu" v-if="toggleMenu" style="top: 140px; left: 45%; right: 45%; z-index: -100;">
                <b-icon icon="chevron-bar-up"></b-icon>
            </b-button>
        </Transition> -->
        <!-- <b-button variant="transparent" class="position-absolute" @click="toggleMenu = !toggleMenu" v-if="!toggleMenu" style="top: 0px; left: 45%; right: 45%; z-index: -100;">
            <b-icon icon="chevron-bar-down"></b-icon>
        </b-button> -->
        <b-navbar-nav class="ml-auto">
            <div class="row">
                <div class="mp-navbar__user" v-if="getUserCredentials.nama_depan">
                    <b-nav-item class="mp-navbar-item">
                        <nuxt-link to="/home/catalog" class="mp-link__black-color">
                            <span>Catalog</span>
                        </nuxt-link>
                    </b-nav-item>
                    <b-nav-item class="mp-navbar-item">
                        <nuxt-link to="/home/material-inquiry" class="mp-link__black-color">
                            <span>Material Inquiry</span>
                        </nuxt-link>
                    </b-nav-item>
                    <b-nav-item class="mp-navbar-item mr-4">
                        <nuxt-link to="/home/partnerships" class="mp-link__black-color">
                            <span>Principals</span>
                        </nuxt-link>
                    </b-nav-item>
                    <!-- <b-nav-text class="d-flex align-items-center px-3" @click="showSearchModal = true">
                    <span class="navbar-text-display">Search</span> <b-avatar variant="transparent" src="/search.png"></b-avatar>
                    </b-nav-text> -->
                    
                    <!-- <b-nav-text class="d-flex align-items-center px-3" v-if="getUserCredentials.nama_depan">
                        <span class="navbar-text-display">{{ 'Welcome, ' + getUserCredentials.nama_depan }}</span>
                    </b-nav-text> -->
                    <template>
                        <b-avatar variant="transparent" size="3rem" class="mr-3 p-1" src="/profile-icon.png" @click.native="burgerToggle = !burgerToggle"></b-avatar>

                        <b-collapse id="nav-collapse" class="position-absolute" style="right: 15px; top: 90px;" v-model="burgerToggle">
                            <b-list-group>
                                <!-- <b-list-group-item class="d-flex justify-content-between align-items-center">
                                    Settings & Privacy
                                    <b-avatar class="ml-5" variant="transparent" src="/settings.png"></b-avatar>
                                </b-list-group-item> -->
                                <nuxt-link to="/home/profile" @click.native="burgerToggle = false">
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                                        Profile
                                        <b-avatar square class="ml-5" variant="transparent" src="/profile.png"></b-avatar>
                                    </b-list-group-item>
                                </nuxt-link>
                                <nuxt-link to="/home/wishlist" @click.native="burgerToggle = false">
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                                        Saved Materials
                                        <b-avatar square class="ml-5" variant="transparent" src="/saved.png"></b-avatar>
                                    </b-list-group-item>
                                </nuxt-link>
                                <nuxt-link to="/home/faq" @click.native="burgerToggle = false">
                                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                                        Help and Support
                                        <b-avatar square class="ml-5" variant="transparent" src="/info.png"></b-avatar>
                                    </b-list-group-item>
                                </nuxt-link>
                                <a href="#">
                                    <b-list-group-item class="d-flex justify-content-between align-items-center" @click="handleLogout">
                                    Logout
                                    <b-avatar square class="ml-5" variant="transparent" src="/info.png"></b-avatar>
                                    </b-list-group-item>
                                </a>
                            </b-list-group>
                        </b-collapse>
                    </template>

                    <b-dropdown size="lg" right variant="link" no-caret>
                        <template #button-content>
                            <b-icon icon="bell"  font-scale="1.5" style="color: #000;"></b-icon>
                            <!-- <b-badge variant="primary">new</b-badge> -->
                        </template>
                        <b-dropdown-header id="dropdown-header-label">
                            <h5>Notifikasi</h5>
                        </b-dropdown-header>
                        <div class="notif-item-container">
                            <b-dropdown-item 
                                v-for="(n,idx) in notice" :key="idx" 
                                :href="n.link"
                                style="min-width: 300px;"
                                class="my-2 p-0">
                                <div>
                                    <span v-html="n.message"></span>
                                    <p class="text-secondary">{{ $timeAgo(n.timestamp) }}</p>
                                </div>
                            </b-dropdown-item>
                        </div>
                    </b-dropdown>
                </div>

                <div class="mp-navbar__guest" v-else>
                    <b-nav-item>
                        <span class="navbar-text-display mp-text-red mr-3" @click="modalShow = !modalShow" >Masuk</span>
                        <LoginModal :statusModal="modalShow"/>
                        <!-- <nuxt-link to="/login" class="mp-text-red pr-4">
                            <span class="navbar-text-display">Masuk</span>
                            <b-avatar variant="transparent" class="p-1" src="/person.png"></b-avatar>
                        </nuxt-link> -->
                    </b-nav-item>
                </div>
            </div>
        </b-navbar-nav>
        <!-- <b-modal hide-footer hide-header v-model="showSearchModal" scrollable>
            <h4>Search:</h4>
            <b-form-input
                v-model="omniSearch"
                placeholder="Cari pada Mitrapabrik.com"
                class="rounded-pill"
                @keyup.enter="fetchOmniSearch"
                debounce="200"
            ></b-form-input>
            <b-overlay :show="loading" rounded="sm">
                <div class="row" style="line-height: 95%;">
                    <div class="col-12 mt-3" v-if="searchDataArticle.length > 0"><h4>Related Articles</h4></div>
                        <div class="col-12 mb-2" v-for="itm in searchDataArticle" :key="'article'+itm.id_artikel">
                            <a :href="`${basePath}/artikel/${itm.id_artikel}`" class="w-100">
                                {{ itm.title }} <br>
                                <small class="text-secondary">{{ itm.tipe }}</small>
                            </a>
                        </div>
                    <div class="col-12 mt-3" v-if="searchDataEvent.length > 0"><h4>Related Events</h4></div>
                    <div class="col-12 mb-2" v-for="itm in searchDataEvent" :key="'event'+itm.id_event">
                        <a :href="`${basePath}/event/${itm.id_event}`" class="w-100">
                            {{ itm.event_name }} <br>
                            <small class="text-secondary">{{ $formatIDDate(itm.starting_date) }}</small>
                        </a>
                    </div>

                    <div class="col-12 mt-3" v-if="searchDataProduct.length > 0"><h4>Related Products</h4></div>
                    <div class="col-12 mb-2" v-for="itm in searchDataProduct" :key="'produk'+itm.id_produk">
                        <template v-if="basePath == '/home'">
                            <a :href="`/home/products/details/${itm.id_produk}`" class="w-100">
                                <div class="row">
                                    <div class="col-auto">
                                        <b-avatar square :src="`${baseUrl}/products/${itm.katalog.split(',')[0]}?t=${new Date().getTime()}`"></b-avatar>
                                    </div>
                                    <div class="col-auto">
                                        {{ itm.title }} <br>
                                        <small>{{ itm.nama_perusahaan }}</small>
                                    </div>
                                </div>
                            </a>
                        </template>
                        <template v-else>
                            <a :href="`/product/${itm.id_produk}`" class="w-100">
                                <div class="row">
                                    <div class="col-auto">
                                        <b-avatar square :src="`${baseUrl}/products/${itm.katalog.split(',')[0]}?t=${new Date().getTime()}`"></b-avatar>
                                    </div>
                                    <div class="col-auto">
                                        {{ itm.title }} <br>
                                        <small>{{ itm.nama_perusahaan }}</small>
                                    </div>
                                </div>
                            </a>
                        </template>
                    </div>

                    <div class="col-12 mt-3" v-if="searchDataShowroom.length > 0"><h4>Related Showrooms</h4></div>
                    <div class="col-12 mb-2" v-for="itm in searchDataShowroom" :key="'showroom'+itm.id_showroom">
                        <a :href="`${basePath}/showroom`" class="w-100">
                            {{ itm.title }} <br>
                            <small class="text-secondary">{{ itm.kota }}</small>
                        </a>
                    </div>
                </div>
            </b-overlay>
        </b-modal> -->
    </b-navbar>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import LoginModal from "~/components/auth/LoginModal.vue";
    export default {
        data() {
            return {
                toggleMenu: true,
                loading: false,
                baseUrl:process.env.BASE_FTP_URL,
                showSearchModal: false,
                burgerToggle:false,
                notice:[],
                noticeInterval:null,
                omniSearch:'',
                searchDataEvent:[],
                searchDataProduct:[],
                searchDataShowroom:[],
                searchDataArticle:[],
                basePath:'',
                modalShow: false,
            }
        },
        components:{
            LoginModal
        },
        computed: {
            ...mapGetters({
                'getUserCredentials':'auth/getUserCredentials',
            }),
        },
        methods: {
            ...mapActions({
                'userLogout':'auth/userLogout'
            }),
            handleLogout() {
                this.burgerToggle = false
                this.$cookies.removeAll()
                this.userLogout()
                window.location.href = '/'
            },
            isActive(ref, route) {
                for (let i = 1; i <= 6; i++) {
                this.$refs[`option${i}`].classList.remove('text-white')
                this.$refs[`option${i}`].classList.add('text-primary-shade')
                }
                this.$refs[ref].classList.remove('text-primary-shade')
                this.$refs[ref].classList.add('text-white')
                this.$router.push({path: '/home'+route});
            },
            async fetchNotifs() {
                let fetchNotice = await this.$axios.get(`/user/notice`)
                this.notice = fetchNotice.data.data
            },
            async fetchOmniSearch() {
                this.loading = true
                console.log(`/user/omnisearch?=${this.omniSearch}`)
                let fetchNotice = await this.$axios.get(`/user/omnisearch?search=${this.omniSearch}`)
                this.searchDataArticle = fetchNotice.data.data[0]
                this.searchDataEvent = fetchNotice.data.data[1]
                this.searchDataProduct = fetchNotice.data.data[2]
                this.searchDataShowroom = fetchNotice.data.data[3]
                this.loading = false
            }
        },
        async mounted() {
            await this.fetchNotifs()
            this.noticeInterval = setInterval(async () => {
                await this.fetchNotifs()
            }, 5000);
            if(this.getUserCredentials.nama_depan) this.basePath = '/home'
        }
    }
</script>

<style scoped>
  .nav-box {
      max-width: 130px;
      max-height: 130px;
      min-width: 130px;
      min-height: 130px;
      padding: 20px;
      cursor: pointer;
      line-height: 90%;
  }

  * >>> .dropdown-menu {
      position: absolute !important;
  }

  .notif-item-container {
    max-height: 500px; 
    overflow: overlay;
  }

    @media (max-width: 575.98px) {
        .navbar-text-display {
            display: none;
        }
    }

    @media (max-width: 767.98px) {
        .navbar-text-display {
            display: none;
        }
    }

    @media (max-width: 991.98px) {
        .navbar-text-display {
            display: content;
        }
    }

    @media (max-width: 1199.98px) {
        .navbar-text-display {
            display: content;
        }
    }

    @media (max-width: 1399.98px) {
        .navbar-text-display {
            display: content;
        }
    }

    .menulist-enter-active,
    .menulist-leave-active {
        transition: margin-top 0.5s ease;
    }
    .menulist-enter-from, 
    .menulist-enter-active { 
        margin-top: -200px; 
    }
    .menulist-enter-to { margin-top: 0px; }
    .menulist-leave-to { margin-top: -200px; }



    .btntoggle-enter-active,
    .btntoggle-leave-active {
        transition: margin-top 0.5s ease;
    }
    .btntoggle-enter-from, 
    .btntoggle-enter-active { 
        margin-top: -200px; 
    }
    .btntoggle-enter-to { margin-top: 0px; }
    .btntoggle-leave-to { margin-top: -200px; }
</style>
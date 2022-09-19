<template>
<div class="mp-material-inquiry__principal">
    <div class="container" style="min-height: 100vh; padding: 0 60px;">
        <div class="mp-title-page__with-shadow">
            <h1>Material Inquiry</h1>
        </div>
        <div class="mp-inquiry__filter mt-5">
            <b-dropdown id="dropdown-left" text="sort" variant="outline" class="mr-3 border border-dark mp-button-sort">
                <b-dropdown-item href="#">Filter Sort</b-dropdown-item>
                <b-dropdown-item href="#">Filter Sort</b-dropdown-item>
                <b-dropdown-item href="#">Filter Sort</b-dropdown-item>
            </b-dropdown>    
            <b-input-group class="mp-search__form">
                <b-form-input
                    v-model="materialSearch"
                    placeholder="search"
                    class="rounded-pill border border-dark"
                    debounce="200"
                ></b-form-input>
                <template #append>
                    <b-icon icon="search"></b-icon>
                </template>
            </b-input-group>
        </div>
        <div class="mp-inquiry__list-product mt-4">
            <b-row>
                <b-col cols="12" md="6" v-for="(item, i) in 4" :key="i" class="mb-5">
                    <b-card
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        class="mp-card__box-shadow"
                    >
                        <b-card-text>
                            <div class="d-flex justify-content-between mt-3">
                                <div class="mp-card-desc">
                                    <p>nama proyek</p>
                                    <p>kota</p>
                                </div>
                                <div class="mp-card-desc">
                                    <p>tenggat waktu</p>
                                    <p>nama penyelenggara</p>
                                </div>
                            </div>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
            <div class="d-flex justify-content-center mt-4">
                <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
            </div>

        </div>
    </div>
</div>

</template>

<script>
    export default {
        data() {
            return {
                materialSearch: "",
                currentPage: 1,
                rows: 100,
            }
        },
        methods: {
            
        },

        // async mounted() {
        //     let fetchEvents = await this.$axios.get(`/material`)
        //     console.log(fetchEvents, "data")
        // },
    }
</script>

<style scoped>

</style>
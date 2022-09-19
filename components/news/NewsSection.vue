<template>
    <div class="mp-container" id="news-section">
        <div class="mp-title-section mb-5">
            <h2>News</h2>
        </div>
        <b-row>
            <b-col>
                <div class="mp-news-card__new mb-4" v-for="artikel in listArtikels" :key="artikel.id_artikel">
                    <ArticleCard :news="artikel"/>
                </div>
                <a href="/home/artikel" class="mp-fs-24">Lihat semua artikel</a>
            </b-col>
            <b-col>
                <NewsSidebarCard v-for="(data, index) in 5" :key="index"/>
                <!-- <b-card class="mb-3">
                    <div class="d-flex">
                        <img src="https://picsum.photos/600/300/?image=25" alt="image news" class="mp-image-rounded mp-rounded mr-3">
                        <div class="mp-news-content">
                            <h2 class="mp-fs-24">Headline</h2>
                            <b-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Inventore error voluptate quibusdam reiciendis, explicabo ipsa cupiditate autem odit, 
                                molestias culpa ex. Deserunt voluptatum sequi debitis minus ipsa quasi quo repellat!
                             <a href="#" class="card-link">read more...</a>
                            </b-card-text>
                        </div>
                    </div>
                </b-card>
                <b-card class="mb-3">
                    <div class="d-flex">
                        <img src="https://picsum.photos/600/300/?image=25" alt="image news" width="150" height="150" class="mp-rounded mr-3">
                        <div class="mp-news-content">
                            <h2 class="mp-fs-24">Headline</h2>
                            <b-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Inventore error voluptate quibusdam reiciendis, explicabo ipsa cupiditate autem odit, 
                                molestias culpa ex. Deserunt voluptatum sequi debitis minus ipsa quasi quo repellat!
                             <a href="#" class="card-link">read more...</a>
                            </b-card-text>
                        </div>
                    </div>
                </b-card>
                <b-card class="mb-3">
                    <div class="d-flex">
                        <img src="https://picsum.photos/600/300/?image=25" alt="image news" width="150" height="150" class="mp-rounded mr-3">
                        <div class="mp-news-content">
                            <h2 class="mp-fs-24">Headline</h2>
                            <b-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Inventore error voluptate quibusdam reiciendis, explicabo ipsa cupiditate autem odit, 
                                molestias culpa ex. Deserunt voluptatum sequi debitis minus ipsa quasi quo repellat!
                             <a href="#" class="card-link">read more...</a>
                            </b-card-text>
                        </div>
                    </div>
                </b-card> -->
            </b-col>
        </b-row>
    </div>
</template>
<script>

import ArticleCard from "~/components/news/ArticleCard.vue";
export default {
    name: "NewsSection",
    components:{
        ArticleCard,
    },
    data() {
        return {
          listArtikels:[],
          listKategori:[],
        }
    },
    async mounted() {
        let fetchArtikels = await this.$axios.get(`/artikels`)
            this.listArtikels = fetchArtikels.data.data
            this.listArtikels.forEach(row => {
                this.listKategori.push(row.category)
            }
        );

        this.listKategori = [...new Map(this.listKategori.map(v => [v, v])).values()]
    }
}
</script>
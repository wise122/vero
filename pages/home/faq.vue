<template>
    <div style="min-height: 100vh;">
        <div class="row mb-5">
            <div class="col-12 text-center my-5">
                <h1>FAQ Page</h1>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-12">
                <b-form @submit.prevent="searchArtikel">
                    <b-input-group>
                        <b-form-input v-model="searchString" placeholder="Search Artikel"></b-form-input>
                        <template #append>
                            <b-button variant="primary" type="submit">search</b-button>
                        </template>
                    </b-input-group>
                </b-form>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-5" v-for="i in filterArtikels" :key="i.id_artikel">
                <nuxt-link :to="`/home/artikel/${i.id_artikel}`" style="text-decoration: unset; text-decoration-color: unset;">
                    <b-card class="border-0 shadow">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <h3>{{ i.title }}</h3>
                                <p class="text-info m-0">By: {{ i.author }}</p>
                            </div>
                            <div class="col-12 mb-2">
                                <p class="text-secondary m-0 text-truncate">{{ i.body.replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>,\/\\\?-_]/g, '') }}</p>
                            </div>
                            <div class="col-12">
                                {{ $timeAgo(i.timestamp) }} 
                                <b-badge>{{ i.category }}</b-badge>
                            </div>
                        </div>
                    </b-card>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
          listArtikels:[],
          filterArtikels:[],
          searchString:'',
        }
      },
      methods: {
        searchArtikel() {
            this.filterArtikels = this.listArtikels
            let filterConditions = {
                title:this.searchString,
                body:this.searchString,
                category:this.searchString,
                author:this.searchString,
            }

            this.filterArtikels = this.filterArtikels.filter(item => {
                let included = false
                for (const key in filterConditions) {
                    let str = item[key].toString().toLowerCase()
                    if(str.includes(filterConditions[key])) included = true
                }
                return included
            })
        }
      },
      async mounted() {
        let fetchArtikels = await this.$axios.get(`/artikels?tipe=FAQ`)
        this.listArtikels = fetchArtikels.data.data
        this.filterArtikels = fetchArtikels.data.data
      },
    }
</script>

<style scoped>

</style>
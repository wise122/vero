<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1>NEWS</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
              <div class="rounded-xl p-4 mb-3" v-for="artikel in listArtikels" :key="artikel.id_artikel">
                <nuxt-link :to="`/artikel/${artikel.id_artikel}`" style="text-decoration: unset;">
                  <ArtikelThumbnail
                    :data="artikel" 
                  />
                </nuxt-link>
              </div>
            </div>
            <div class="col-md-4">
              <div class="rounded-xl p-4 mb-3">
                <p class="h5 text-secondary">Berita Terpopuler</p>
                <nuxt-link v-for="(artikel) in listArtikels" :key="artikel.id_artikel" :to="`/artikel/${artikel.id_artikel}`" style="text-decoration: unset;">
                  <ArtikelThumbnail
                    :data="artikel" 
                  />
                </nuxt-link>
              </div>
              <div class="rounded-xl p-4 mb-3">
                <p class="h5 text-secondary">Tag Populer</p>
                <b-button 
                  v-for="(k,idx) in listKategori" :key="idx"
                  variant="outline-primary" pill size="sm" class="m-1"
                >{{ k }}</b-button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
          listArtikels:[],
          listKategori:[],
        }
      },
      methods: {

      },
      async mounted() {
        let fetchArtikels = await this.$axios.get(`/artikels`)
        this.listArtikels = fetchArtikels.data.data
        this.listArtikels.forEach(row => {
          this.listKategori.push(row.category)
        });
        this.listKategori = [...new Map(this.listKategori.map(v => [v, v])).values()]
      }
    }
</script>
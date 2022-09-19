<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
              <div class="card bg-dark text-white" style="border-radius: 30px; max-height: 300px;">
                <img class="card-img" src="https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik_assets/ezgif.com-gif-maker__15__0MkCQ4c20.webp?updatedAt=1640853762692" alt="Card image" style="border-radius: 30px; max-height: 300px; object-fit: cover;">
                <div class="card-img-overlay d-flex ml-5 align-items-center">
                  <div>
                    <h2>Bekerja sama dengan lebih dari <br> 100+ Brand Ternama dibidangnya</h2>
                    <b-input-group>
                      <b-form-input
                        id="input-1"
                        v-model="searchString"
                        placeholder="Temukan kebutuhan materialmu disini"
                        class="rounded-pill"
                        @keyup.enter="searchProduct"
                      ></b-form-input>
                      <template #append>
                        <b-avatar variant="transparent" class="p-1 position-absolute" style="right:5px;" src="/search.png"></b-avatar>
                      </template>
                    </b-input-group>
                  </div>
                </div>
            </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-12 text-center mb-3">
                <b-button :variant="clickedType == 0 ? 'primary' : 'outline-primary'" class="border mb-2" @click="filterByTipe('Flooring',0)">Flooring</b-button>
                <b-button :variant="clickedType == 1 ? 'primary' : 'outline-primary'" class="border mb-2" @click="filterByTipe('Roofing',1)">Roofing</b-button>
                <b-button :variant="clickedType == 2 ? 'primary' : 'outline-primary'" class="border mb-2" @click="filterByTipe('Skylight',2)">Skylight</b-button>
                <b-button :variant="clickedType == 3 ? 'primary' : 'outline-primary'" class="border mb-2" @click="filterByTipe('Facade',3)">Facade</b-button>
                <b-button :variant="clickedType == 4 ? 'primary' : 'outline-primary'" class="border mb-2" @click="filterByTipe('Window',4)">Window</b-button>
                <b-button :variant="clickedType == 5 ? 'primary' : 'outline-primary'" class="border mb-2" @click="filterByTipe('Door',5)">Door</b-button>
                <b-button :variant="clickedType == 6 ? 'primary' : 'outline-primary'" class="border mb-2" @click="filterByTipe('Furniture',6)">Furniture</b-button>
                <b-button :variant="clickedType == 7 ? 'primary' : 'outline-primary'" class="border mb-2" @click="filterByTipe('Wall',7)">Wall</b-button>
                <b-button :variant="clickedType == 8 ? 'primary' : 'outline-primary'" class="border mb-2" @click="filterByTipe('Material',8)">Material</b-button>
            </div>
            <div class="col-12">
            <b-carousel
                v-model="slide"
                :interval="5000"
                controls
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                class="big-carousel"
              >
                <b-carousel-slide v-for="(section,k) in Math.ceil(partners.length / 5)" :key="k">
                  <template #img>
                      <div class="row d-flex justify-content-center">
                        <div class="text-center p-2" v-for="(p,j) in partners" :key="p.id_user">
                            <nuxt-link :to="`/home/partnership/${p.id_user}`" class="text-dark" v-if="j >= (k * 5) && j < (5 * section)">
                              <div style="height: 150px; width: 150px;" class="rounded-xl">
                                  <b-img 
                                    :src="baseUrl+'/company_logo/'+p.foto_perusahaan+`?t=${new Date().getTime()}`" alt="Company Logo" fluid class="h-100 shadow-lg rounded-xl"
                                    v-b-tooltip.hover :title="p.nama_perusahaan"  
                                  ></b-img>
                              </div>
                            </nuxt-link>
                        </div>
                    </div>
                  </template>
                </b-carousel-slide>
              </b-carousel>

              <b-carousel
                v-model="slide"
                :interval="3000"
                controls
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                class="mobile-carousel"
              >
                <b-carousel-slide v-for="(p,k) in partners" :key="k">
                  <template #img>
                      <div class="row d-flex justify-content-center">
                        <div class="text-center">
                            <nuxt-link :to="`/partnership/${p.id_user}`" class="text-dark">
                              <div style="height: 150px; width: 150px;" class="rounded-xl">
                                  <b-img 
                                    :src="baseUrl+'/company_logo/'+p.foto_perusahaan+`?t=${new Date().getTime()}`" alt="Company Logo" fluid class="h-100 shadow-lg rounded-xl"
                                    v-b-tooltip.hover :title="p.nama_perusahaan"  
                                  ></b-img>
                              </div>
                            </nuxt-link>
                        </div>
                    </div>
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </div>
        </div>
        <b-overlay :show="loadingProducts" rounded="lg">
          <div class="row" v-if="filteredListProducts.length > 0">
            
              <div class="col-12 mb-4">
                  <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="center"
                      size="md"
                      class="my-3"
                  ></b-pagination>
              </div>

              <div class="col-md-3 mb-3" v-for="p in filteredListProducts" :key="p.id_produk">
                <nuxt-link :to="`/home/products/details/${p.id_produk}`">
                  <ProductThumbnail 
                    :data="p"
                  />
                </nuxt-link>
              </div>

              <div class="col-12 mt-4">
                  <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="center"
                      size="md"
                      class="my-3"
                  ></b-pagination>
              </div>
          </div>
          <div class="row" v-else>
            <div class="col-md-12 h4 text-secondary">
                Mohon maaf, belum ada produk yang sesuai...
            </div>
          </div>
        </b-overlay>
    </div>
</template>

<script>
    export default {
        data() {
        return {
          clickedType:-1,
          loadingProducts:false,
          currentPage:1,
          totalRows:0,
          perPage:12,

          slide: 0,
          sliding: null,
          baseUrl:process.env.BASE_FTP_URL,
          partners:[],
          defaultListProducts:[],
          filteredListProducts:[],
          searchString:'',
        }
      },
      methods: {
        onSlideStart() {
          this.sliding = true
        },
        onSlideEnd() {
          this.sliding = false
        },
        filterByTipe(type, idx) {
          this.clickedType = idx
          this.filteredListProducts = this.defaultListProducts.filter(product => product.tipe == type)
        },
        async searchProduct() {
          this.loadingProducts = true
          let fetchProducts = await this.$axios.get(`/products/search`, { params:{
              limit:this.perPage,
              offset:(this.currentPage-1) * this.perPage,
              search:this.searchString,
          } })
          if(fetchProducts.data.data.length > 0)
            this.totalRows = fetchProducts.data.data[0].total_rows
          this.populateData(fetchProducts.data.data)
          this.loadingProducts = false
        },
        populateData(data) {
          this.defaultListProducts = data
          this.defaultListProducts.forEach(row => {
              row.katalog = row.katalog.split(',')
          })
          this.filteredListProducts = this.defaultListProducts
        }
      },
      async mounted() {
        let fetchPartners = await this.$axios.get(`/user/partners`)
        this.partners = fetchPartners.data.data

        await this.searchProduct()
      }
    }
</script>

<style>
.carousel-control-prev-icon {
  background-image: url("/prev.png") !important;
}

.carousel-control-next-icon {
  background-image: url("/next.png") !important;
}

    @media (max-width: 575.98px) {
        .big-carousel {display: none;}
        /* .mobile-carousel {display: none;} */
    }

    @media (min-width: 576px) and (max-width: 767.98px) { 
        .big-carousel {display: none;}
        /* .mobile-carousel {display: none;} */
    }

    @media (min-width: 768px) and (max-width: 991.98px) { 
        .big-carousel {display: none;}
        /* .mobile-carousel {display: none;} */
    }

    @media (min-width: 992px) and (max-width: 1199.98px) { 
        /* .big-carousel {display: none;} */
        .mobile-carousel {display: none;}
    }

    @media (min-width: 1200px) { 
        /* .big-carousel {display: none;} */
        .mobile-carousel {display: none;}
    }
</style>
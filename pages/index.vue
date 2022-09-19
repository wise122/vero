<template>
  <div class="h-100">
    <HomepageCarousel/>
    <MenuItem/>
    <NewsSection/>
    <img src="/divider-image.png" alt="divider image" height="250" class="w-100">
    <Showroom/>
    <img src="/divider-image.png" alt="divider image" height="250" class="w-100">
    <Principal/>
    <img src="/divider-image.png" alt="divider image" height="250" class="w-100">
    <Event/>
  </div>
</template>

<script>
import HomepageCarousel from '~/components/carousel/homepage-carousel.vue';
import MenuItem from '~/components/menu/MenuItem.vue';
import NewsSection from '~/components/news/NewsSection.vue';
import Principal from '~/components/principal/Principal.vue';

export default {
    middleware: 'auth',

    components:{
      HomepageCarousel,
      MenuItem,
      NewsSection,
      Principal
    },
    
    methods: {
      isActive(ref, route) {
        for (let i = 1; i <= 6; i++) {
          this.$refs[`option${i}`].classList.remove('text-white')
          this.$refs[`option${i}`].classList.add('text-primary-shade')
        }
        this.$refs[ref].classList.remove('text-primary-shade')
        this.$refs[ref].classList.add('text-white')
        this.$router.push({path: route});
      },
    },
    async mounted() {
        this.$gtag.event('user-pageload', {
          'event_category': 'documentation',
          'event_label': 'user accessed landing page',
          'value': 1
        })
    }
}
</script>

<style scoped>
  .nav-box {
      max-width: 130px;
      max-height: 130px;
      min-width: 130px;
      min-height: 130px;
      cursor: pointer;
      padding: 20px;
      line-height: 90%;
  }

  .nav-box-shadow {
    box-shadow: 5px 5px 40px #777;
  }

  .d-flex::-webkit-scrollbar {
    display: none;
  }

  .bg-city {
    /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"); */
    background: linear-gradient(rgba(230, 230, 230, 0.7), rgba(230, 230, 230, 0.7)), url("https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik_assets/ezgif.com-gif-maker__14__0SAwHX84p.webp?updatedAt=1640852650568") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
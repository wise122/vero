<template>
  <footer class="footer bg-primary text-light px-5 pt-5 pb-4">
    <b-row>
      <b-col cols="7">
        <b-row align-h="start">
          <b-col cols="4">
              <ul class="mp-list-text">
                <li>
                  <span class="mp-white-color">BROWSE</span>
                </li>
                <li>
                  <a href="#" class="mp-white-color">Products</a>
                </li>
                <li>
                  <a href="#" class="mp-white-color">Professionals</a>
                </li>
                <li>
                  <a href="#" class="mp-white-color">Projects</a>
                </li>
                <li>
                  <a href="#" class="mp-white-color">Articles</a>
                </li>
              </ul>
          </b-col>
          <b-col cols="4">
            <ul class="mp-list-text">
                <li>
                  <nuxt-link to="/about-us">
                    <span class="mp-white-color">ABOUT</span>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about-us">
                    <span class="mp-white-color">About Us</span>
                  </nuxt-link>
                </li>
                <li>
                  <a href="#" class="mp-white-color">Privacy Policy/ToU</a>
                </li>
                <li>
                  <a href="#" class="mp-white-color">Contact Us</a>
                </li>
              </ul>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="5">
        <b-row>
          <b-col>
            <div class="row">
              <div class="col-12">
                <span class="mp-white-color mp-fs-20">SUPPLIERS</span>
              </div>
              <div class="col-12">
                <a href="#" class="mp-white-color">For Suppliers</a>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="row">
              <div class="col-12"><span class="mp-white-color mp-fs-20">NEWSLETTER</span></div>
              <div class="col-12">
                <b-input-group class="mt-3 mb-3">
                <b-form-input placeholder="enter your email"></b-form-input>
                <b-input-group-append>
                  <b-button>Submit</b-button>
                </b-input-group-append>
              </b-input-group>
              </div>
              <div class="col-12">
                <b-avatar button square variant="transparent" class="p-1" src="/ma-email.png"></b-avatar>
                <b-avatar button square variant="transparent" class="p-1" src="/ma-phone.png"></b-avatar>
                <b-avatar button square variant="transparent" class="p-1" src="/ma-whatsapp.png"></b-avatar>
                <b-avatar button square variant="transparent" class="p-2" src="/ma-fb.png"></b-avatar>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row align-h="start" class="mt-5 justify-align-center align-items-center">
      <b-col cols="12" md="5"><img src="https://ik.imagekit.io/d3rdfRTergDURe/PXh_5L3zK.webp?updatedAt=1636390680446" alt="logo mitra pabrik" width="350" class="mp-logo__footer"></b-col>
      <!-- <b-col cols="5"><img src="/logo-mp-white.png" alt="logo mitra pabrik" width="350"></b-col> -->
      <b-col cols="12" md="4"><p>&copy; 2021 Mitrapabrik</p></b-col>
    </b-row>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      isHovered1:false,
      isHovered2:false,
      isHovered3:false,
      email:'',
    }
  },
  methods: {
    handleHover1(hovered) {this.isHovered1 = hovered},
    handleHover2(hovered) {this.isHovered2 = hovered},
    handleHover3(hovered) {this.isHovered3 = hovered},
  }
}
</script>
<style scoped>
    footer {
        z-index: 1000;
        left: 0;
        bottom: 0;
        width: 100%;
    }

    p {
      margin-bottom: 5px;
    }
</style>
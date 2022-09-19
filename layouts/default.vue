<template>
  <div>
    <NavBarTop></NavBarTop>
      <Nuxt />
      <b-button id="scroll-button" class="mp-button__scroll" @click="moveUp">
        <b-icon icon="chevron-up"></b-icon>
      </b-button>
    <home-footer />
  </div>
</template>

<script>
  export default {
    methods:{
      moveUp(){
          var scroll = new SmoothScroll()
          scroll.animateScroll(0)
      },

      scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("scroll-button").style.display = "none";
        } else {
          document.getElementById("scroll-button").style.display = "block";
        }
      },
      
      scrollHandler(e){
        console.log(e, "scroll")
      }
    },

    mounted() {
      let scrollScript = document.createElement('script')
      scrollScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/smooth-scroll@12.1.5')
      document.head.appendChild(scrollScript)
    },
  }
</script>

<style>
html, body, #__nuxt, #__layout, section {
  height: 100%;
  width: 100%;
}

.btn-wa {
  position: fixed;
  bottom: 50px;
  right: 50px;
}

.bg-glass {
   background-color: rgba(255, 255, 255, 0.7);
   border: unset;
}

.bg-glass::before {
  content: "";
  position: absolute;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%;  
  opacity: .4; 
  z-index: -1;
  background: rgba(255, 255, 255, 0.3);
}
</style>

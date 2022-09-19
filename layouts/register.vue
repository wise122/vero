<template>
  <div class="bg-light">
    <Nuxt />
    <home-footer />
  </div>
</template>

<script>
  export default {
    
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

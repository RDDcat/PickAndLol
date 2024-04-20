<template>
  <TitleNav />

</template>

<script>
import TitleNav from '@/components/TitleNav.vue'

export default {
  name: 'App',
  components: {
    TitleNav
  }
}
</script>

<style>
#app {
  font-family: GmarketSansTTFBold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: 'GmarketSansTTFBold';
  src: url('assets/font/GmarketSansTTFBold.ttf');
}
@font-face {
  font-family: 'GmarketSansTTFLight';
  src: url('assets/font/GmarketSansTTFLight.ttf');
}
@font-face {
  font-family: 'GmarketSansTTFMedium';
  src: url('assets/font/GmarketSansTTFMedium.ttf');
}
</style>

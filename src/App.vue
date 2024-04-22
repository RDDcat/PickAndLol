<template>
  <!-- 모달리스트 -->
  <LoginModal v-if="$store.state.modalStore.isLoginModal"/>


  <TitleNav />

</template>

<script>
import LoginModal from '@/components/modal/LoginModal.vue'
import TitleNav from '@/components/TitleNav.vue'

export default {
  name: 'App',
  components: {
    LoginModal,
    TitleNav,
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

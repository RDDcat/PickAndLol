<template>
  <!-- 모달리스트 -->
  <LoginModal v-if="$store.state.modalStore.isLoginModal"/>
  <GuideModal v-if="$store.state.modalStore.isGuideModal"/>
  <SelectCaptainModal v-if="$store.state.modalStore.isSelectCaptainModal"/>
  <PlayerModal v-if="$store.state.modalStore.isPlayerModal"/>

  <router-view />
</template>

<script>
import LoginModal from '@/components/modal/LoginModal.vue'
import GuideModal from '@/components/modal/GuideModal.vue'
import SelectCaptainModal from '@/components/modal/SelectCaptainModal.vue'
import PlayerModal from '@/components/modal/PlayerModal.vue'

export default {
  name: 'App',
  components: {
    LoginModal,
    GuideModal,
    SelectCaptainModal,
    PlayerModal,
  }
}
</script>
<style>
#app {
  font-family: SUIT-ExtraBold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

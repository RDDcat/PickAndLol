<template>
  <!-- 모달리스트 -->
  <LoginModal v-if="modalStore.isLoginModal"/>
  <GuideModal v-if="modalStore.isGuideModal"/>
  <SelectCaptainModal v-if="modalStore.isSelectCaptainModal"/>
  <PlayerModal v-if="modalStore.isPlayerModal"/>
  <WarningModal v-if="modalStore.isWarningModal"/>

  <router-view />
</template>

<script>
import LoginModal from '@/components/modal/LoginModal.vue'
import GuideModal from '@/components/modal/GuideModal.vue'
import SelectCaptainModal from '@/components/modal/SelectCaptainModal.vue'
import PlayerModal from '@/components/modal/PlayerModal.vue'
import WarningModal from '@/components/modal/WarningModal.vue'

import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'

export default {
  name: 'App',
  components: {
    LoginModal,
    GuideModal,
    SelectCaptainModal,
    PlayerModal,
    WarningModal,
  },
  setup(){
    const cacheStore = useCacheStore()
    const modalStore = useModalStore()

    return { cacheStore, modalStore }
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

<template>
  <!-- 모달리스트 -->
  <LoginModal v-if="$store.state.modalStore.isLoginModal"/>
  <GuideModal v-if="$store.state.modalStore.isGuideModal"/>

  <!-- 네비게이션 -->
  <TitleNav />

  
  <!-- 페이지 컴포넌트 -->
  <MainComponent v-if="$store.state.modalStore.isMain"/>
  <TeamComponent v-if="$store.state.modalStore.isTeam"/>
  <ScheduleComponent v-if="$store.state.modalStore.isSchedule"/>
  <PlayerRankingComponent v-if="$store.state.modalStore.isPlayerRanking"/>
  <UserRankingComponent v-if="$store.state.modalStore.isUserRanking"/>

</template>

<script>
import LoginModal from '@/components/modal/LoginModal.vue'
import GuideModal from '@/components/modal/GuideModal.vue'

import TitleNav from '@/components/TitleNav.vue'
import MainComponent from '@/components/MainComponent.vue'
import TeamComponent from '@/components/TeamComponent.vue'
import ScheduleComponent from '@/components/ScheduleComponent.vue'
import PlayerRankingComponent from '@/components/PlayerRankingComponent.vue'
import UserRankingComponent from '@/components/UserRankingComponent.vue'

export default {
  name: 'App',
  components: {
    LoginModal,
    GuideModal,
    TitleNav,
    MainComponent,
    TeamComponent,
    ScheduleComponent,
    PlayerRankingComponent,
    UserRankingComponent,
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

<template>
  <!-- 모달리스트 -->
  <LoginModal v-if="modalStore.isLoginModal"/>
  <GuideModal v-if="modalStore.isGuideModal"/>
  <SelectCaptainModal v-if="modalStore.isSelectCaptainModal"/>
  <PlayerModal v-if="modalStore.isPlayerModal"/>
  <WarningModal v-if="modalStore.isWarningModal"/>
  <SetTeamNameModal v-if="modalStore.isSetTeamNameModal"/>
  <SaveWarningModal v-if="modalStore.isSaveWarningModal"/>
  <!-- 모바일 모달 -->
  <transition name="slide" v-show="modalStore.isMobileLoginModal">
      <MobileLoginModal  />
  </transition>
  <transition name="slide" v-show="modalStore.isMobilePlayerListModal">
      <MobilePlayerListModal  />
  </transition>
  <transition name="slide" v-show="modalStore.isMobileSelectClubModal">
      <MobileSelectClubModal />
  </transition>

  <router-view />
</template>

<script>
import LoginModal from '@/components/modal/LoginModal.vue'
import GuideModal from '@/components/modal/GuideModal.vue'
import SelectCaptainModal from '@/components/modal/SelectCaptainModal.vue'
import PlayerModal from '@/components/modal/PlayerModal.vue'
import WarningModal from '@/components/modal/WarningModal.vue'
import SetTeamNameModal from '@/components/modal/SetTeamNameModal.vue'
import SaveWarningModal from '@/components/modal/SaveWarningModal.vue'
import MobileLoginModal from '@/components/modal/mobile/MobileLoginModal.vue'
import MobilePlayerListModal from '@/components/main/mobile/MobilePlayerListModal.vue'
import MobileSelectClubModal from '@/components/main/mobile/MobileSelectClubModal.vue'

import api from '@/api/api'

import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'
import {useClubStore} from '@/store/clubStore'

export default {
  name: 'App',
  components: {
    LoginModal,
    GuideModal,
    SelectCaptainModal,
    PlayerModal,
    WarningModal,
    SetTeamNameModal,
    SaveWarningModal,
    MobileLoginModal,
    MobilePlayerListModal,
    MobileSelectClubModal,
  },
  setup(){
    const cacheStore = useCacheStore()
    const modalStore = useModalStore()
    const clubStore = useClubStore()

    return { cacheStore, modalStore, clubStore }
  },
  async created(){
    // 시작할때 데이터 셋팅
    // 클럽 데이터
    await api.getClubs()
    .then(response=>{
      this.clubStore.clubs = response.data
    })
    .catch(function (e){
      console.log(e);
    });

    // 선수 데이터
    await api.getPlayers()
    .then(response=>{
      this.cacheStore.players = response.data
      // 팀 이름 넣어주기;
      for(let player of this.cacheStore.players){   
        for (let club of this.clubStore.clubs) {
          if(club.clubId===player.clubId){
            player.clubName=club.clubName
            break;
          }
        }
      }
    })
    .catch(function (e){
      console.log(e);
    });


  }
}
</script>
<style>
#app {
  font-family: SUIT-ExtraBold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Vue 트랜지션 */
.slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
    transform: translateX(30%);
    opacity: 0;
}
</style>

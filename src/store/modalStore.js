import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useModalStore = defineStore('modalStore', {
  state: ()=>({
    // 로그인 창
    isLoginModal: false,
    isLoginWarnModal: false,
    isGuideModal: false,
    isSelectCaptainModal: false,
    isPlayerModal: false,

    // 네비게이션
    isMain: true,
    isTeam: false,
    isSchedule: false,
    isPlayerRanking: false,
    isUserRanking: false,
    isGuideComponent: false,
    
  }),
})

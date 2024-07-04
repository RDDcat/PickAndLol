import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useModalStore = defineStore('modalStore', {
  state: ()=>({
    //모달
    isLoginModal: false,
    isLoginWarnModal: false,
    isGuideModal: false,
    isSelectCaptainModal: false,
    // 선수 분석 모달
    isPlayerModal: false,
    selectPlayer:'',
    // 경고창 모달
    isWarningModal: false,
    warningFrom:'',
    warningTitle:'title',
    warningInfo:'info',

    // 네비게이션
    isMain: true,
    isTeam: false,
    isSchedule: false,
    isPlayerRanking: false,
    isUserRanking: false,
    isGuideComponent: false,
    isMyComponent: false,
    
  }),
})

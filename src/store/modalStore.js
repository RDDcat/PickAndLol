import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useModalStore = defineStore('modalStore', {
  state: ()=>({
    //모달
    isLoginModal: false,
    isLoginWarnModal: false,
    isGuideModal: false,
    isSelectCaptainModal: false,

    // 모바일 모달
    isMobilePlayerListModal:false,
    isMobileSelectClubModal:false,

    // 선수 분석 모달
    isPlayerModal: false,
    selectPlayer:'',
    // 경고창 모달
    isWarningModal: false,
    warningFrom:'',
    warningTitle:'title',
    warningInfo:'info',

    isSetTeamNameModal:false,
    isSaveWarningModal:false,

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

// Vuex 스토어를 정의하여 모달과 관련된 상태를 관리
const modalStore = {
  state: {
    // 로그인 창
    isLoginModal: false,
    isGuideModal: false,
    isSelectCaptainModal: false,

    // 네비게이션
    isMain: true,
    isTeam: false,
    isSchedule: false,
    isPlayerRanking: false,
    isUserRanking: false,
    isGuideComponent: false,

  },

  getters: {

  },
  
  mutations: {
    
  },

  actions: {

  }
};

// modalStore를 내보냄
export default modalStore;

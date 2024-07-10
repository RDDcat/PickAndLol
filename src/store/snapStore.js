import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useSnapStore = defineStore('snapStore', {
  state: ()=>({
    myTeamSnap:{}
  }),
  persist: true,
})

import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useRankStore = defineStore('rankStore', {
  state: ()=>({
    teams:[],
    users:{}
  }),
  persist: true,
})

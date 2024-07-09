import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useClubStore = defineStore('clubStore', {
  state: ()=>({
    clubs:[]
  }),
  persist: true,
})

import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useCacheStore = defineStore('cacheStore', {
    state: ()=>({
        userId:0,
        userName:"",
        isSave:false,
        canChange:false,
        players:[
            {vp:150, id:0, line:"TOP", name:"Zeus", stat:0, team:"T1", img: "./assets/player/T1_Zeus.svg", 
                killCount:0, deathCount:0, assistCount:0, killRate:0, info:"그는 신인가"},
        ],
        
        clubRankingNav:0,
        mainTeamNav:'LCK',
        mainLineNav:'전체',
        mainInfo:'팀 변경가능시간: 평일 00:00~17:00, 주말 00:00~15:00',

        // 선수 변경권 임시
        temporaryChangeCount: 2,
    
        myTeam:{
            name:"",
            totalVP:0,
            team:"",
            teamLogo:"./assets/logo.png",
            totalStat:0,
            weekStat:0,
            players:{
                top:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
                jgl:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
                mid:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
                adc:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
                sup:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
            },
        },
    
    }),
    persist: true,
})

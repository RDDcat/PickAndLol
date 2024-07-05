import { defineStore } from 'pinia'

// use + 스토어 이름 << 컨벤션임
export const useCacheStore = defineStore('cacheStore', {
    state: ()=>({
        userId:0,
        userName:"",
        isSave:false,
        players:[
            {vp:150, id:0, line:"TOP", name:"Zeus", stat:0, team:"T1", img: "./assets/player/T1_Zeus.svg", 
                killCount:0, deathCount:0, assistCount:0, killRate:0, info:"그는 신인가"},
            {vp:150, id:1, line:"JGL", name:"Oner", stat:0, team:"T1", img: "./assets/player/T1_Oner.svg"},
            {vp:250, id:2, line:"MID", name:"Faker", stat:0, team:"T1", img: "./assets/player/T1_Faker.svg"},
            {vp:150, id:3, line:"ADC", name:"Gumayusi", stat:0, team:"T1", img: "./assets/player/T1_Gumayusi.svg"},
            {vp:150, id:4, line:"SUP", name:"Keria", stat:0, team:"T1", img: "./assets/player/T1_Keria.svg"},
    
            {vp:170, id:5, line:"TOP", name:"Kiin", stat:0, team:"GEN", img: "./assets/player/GEN_Kiin.svg"},
            {vp:200, id:6, line:"JGL", name:"Canyon", stat:0, team:"GEN", img: "./assets/player/GEN_Canyon.svg"},
            {vp:250, id:7, line:"MID", name:"Chovy", stat:0, team:"GEN", img: "./assets/player/GEN_Chovy.svg"},
            {vp:150, id:8, line:"ADC", name:"Peyz", stat:0, team:"GEN", img: "./assets/player/GEN_Peyz.svg"},
            {vp:110, id:9, line:"SUP", name:"Lehends", stat:0, team:"GEN", img: "./assets/player/GEN_Lehends.svg"},
    
            {vp:8, id:10, line:"TOP", name:"PerfecT", stat:0, team:"KT", img: "./assets/player/KT_PerfecT.svg"},
            {vp:70, id:11, line:"JGL", name:"Pyosik", stat:0, team:"KT", img: "./assets/player/KT_Pyosik.svg"},
            {vp:120, id:0, line:"MID", name:"Bdd", stat:0, team:"KT", img: "./assets/player/KT_Bdd.svg"},
            {vp:130, id:0, line:"ADC", name:"Deft", stat:0, team:"KT", img: "./assets/player/KT_Deft.svg"},
            {vp:60, id:0, line:"SUP", name:"BeryL", stat:0, team:"KT", img: "./assets/player/KT_BeryL.svg"},
    
            {vp:150, id:0, line:"TOP", name:"Doran", stat:0, team:"HLE", img: "./assets/player/HLE_Doran.svg"},
            {vp:130, id:0, line:"JGL", name:"Peanut", stat:0, team:"HLE", img: "./assets/player/HLE_Peanut.svg"},
            {vp:200, id:0, line:"MID", name:"Zeka", stat:0, team:"HLE", img: "./assets/player/HLE_Zeka.svg"},
            {vp:230, id:0, line:"ADC", name:"Viper", stat:0, team:"HLE", img: "./assets/player/HLE_Viper.svg"},
            {vp:35, id:0, line:"SUP", name:"Delight", stat:0, team:"HLE", img: "./assets/player/HLE_Delight.svg"},
    
            {vp:90, id:0, line:"TOP", name:"Kingen", stat:0, team:"DK", img: "./assets/player/DK_Kingen.svg"},
            {vp:10, id:0, line:"JGL", name:"Lucid", stat:0, team:"DK", img: "./assets/player/DK_Lucid.svg"},
            {vp:210, id:0, line:"MID", name:"ShowMaker", stat:0, team:"DK", img: "./assets/player/DK_ShowMaker.svg"},
            {vp:140, id:0, line:"ADC", name:"Aiming", stat:0, team:"DK", img: "./assets/player/DK_Aiming.svg"},
            {vp:45, id:0, line:"SUP", name:"Kellin", stat:0, team:"DK", img: "./assets/player/DK_Kellin.svg"},
    
            {vp:40, id:0, line:"TOP", name:"Rascal", stat:0, team:"DRX", img: "./assets/player/DRX_Rascal.svg"},
            {vp:6, id:0, line:"JGL", name:"Sponge", stat:0, team:"DRX", img: "./assets/player/DRX_Sponge.svg"},
            {vp:6, id:0, line:"MID", name:"kyeahoo", stat:0, team:"DRX", img: "./assets/player/DRX_kyeahoo.svg"},
            {vp:25, id:0, line:"ADC", name:"Teddy", stat:0, team:"DRX", img: "./assets/player/DRX_Teddy.svg"},
            {vp:40, id:0, line:"SUP", name:"Pleata", stat:0, team:"DRX", img: "./assets/player/DRX_Pleata.svg"},
    
            {vp:15, id:0, line:"TOP", name:"Clear", stat:0, team:"FOX", img: "./assets/player/FOX_Clear.svg"},
            {vp:8, id:0, line:"JGL", name:"Willer", stat:0, team:"FOX", img: "./assets/player/FOX_Willer.svg"},
            {vp:40, id:0, line:"MID", name:"Clozer", stat:0, team:"FOX", img: "./assets/player/FOX_Clozer.svg"},
            {vp:17, id:0, line:"ADC", name:"Hena", stat:0, team:"FOX", img: "./assets/player/FOX_Hena.svg"},
            {vp:6, id:0, line:"SUP", name:"Execute", stat:0, team:"FOX", img: "./assets/player/FOX_Execute.svg"},
    
            {vp:20, id:0, line:"TOP", name:"Morgan", stat:0, team:"BRO", img: "./assets/player/BRO_Morgan.svg"},
            {vp:6, id:0, line:"JGL", name:"YoungJae", stat:0, team:"BRO", img: "./assets/player/BRO_YoungJae.svg"},
            {vp:16, id:0, line:"MID", name:"Karis", stat:0, team:"BRO", img: "./assets/player/BRO_Karis.svg"},
            {vp:10, id:0, line:"ADC", name:"Envyy", stat:0, team:"BRO", img: "./assets/player/BRO_Envyy.svg"},
            {vp:6, id:0, line:"SUP", name:"Pollu", stat:0, team:"BRO", img: "./assets/player/BRO_Pollu.svg"},
    
            {vp:9, id:0, line:"TOP", name:"DnDn", stat:0, team:"NS", img: "./assets/player/NS_DnDn.svg"},
            {vp:7, id:0, line:"JGL", name:"Sylvie", stat:0, team:"NS", img: "./assets/player/NS_Sylvie.svg"},
            {vp:10, id:0, line:"MID", name:"Callme", stat:0, team:"NS", img: "./assets/player/NS_Callme.svg"},
            {vp:15, id:0, line:"ADC", name:"Jiwoo", stat:0, team:"NS", img: "./assets/player/NS_Jiwoo.svg"},
            {vp:10, id:0, line:"SUP", name:"Peter", stat:0, team:"NS", img: "./assets/player/NS_Peter.svg"},
    
            {vp:50, id:0, line:"TOP", name:"DuDu", stat:0, team:"KDF", img: "./assets/player/KDF_DuDu.svg"},
            {vp:75, id:0, line:"JGL", name:"Cuzz", stat:0, team:"KDF", img: "./assets/player/KDF_Cuzz.svg"},
            {vp:25, id:0, line:"MID", name:"BuLLDoG", stat:0, team:"KDF", img: "./assets/player/KDF_BuLLDoG.svg"},
            {vp:6, id:0, line:"ADC", name:"Leaper", stat:0, team:"KDF", img: "./assets/logo.png"},
            {vp:6, id:0, line:"SUP", name:"Andil", stat:0, team:"KDF", img: "./assets/logo.png"},
            {vp:6, id:0, line:"SUP", name:"Quantum", stat:0, team:"KDF", img: "./assets/player/KDF_Quantum.svg"},
            {vp:6, id:0, line:"ADC", name:"Bull", stat:0, team:"KDF", img: "./assets/player/KDF_Bull.svg"},
    
            {vp:7, id:0, line:"TOP", name:"Frog", stat:0, team:"DRX", img: "./assets/logo.png"},
            {vp:8, id:0, line:"MID", name:"kyeahoo", stat:0, team:"DRX", img: "./assets/logo.png"},
            {vp:6, id:0, line:"JGL", name:"Raptor", stat:0, team:"FOX", img: "./assets/logo.png"},
            {vp:6, id:0, line:"SUP", name:"Duro", stat:0, team:"FOX", img: "./assets/logo.png"},
            {vp:6, id:0, line:"MID", name:"Pullbae", stat:0, team:"BRO", img: "./assets/logo.png"},
            {vp:6, id:0, line:"JGL", name:"DDoiv", stat:0, team:"BRO", img: "./assets/logo.png"},
            {vp:6, id:0, line:"ADC", name:"Samver", stat:0, team:"BRO", img: "./assets/logo.png"},
            {vp:6, id:0, line:"TOP", name:"Mihile", stat:0, team:"NS", img: "./assets/logo.png"},
            {vp:7, id:0, line:"TOP", name:"Casting", stat:0, team:"KT", img: "./assets/logo.png"},
            {vp:10, id:0, line:"SUP", name:"GuGer", stat:0, team:"NS", img: "./assets/logo.png"},
    
        ],
        
        clubRankingNav:0,
        mainTeamNav:'LCK',
        mainLineNav:'전체',
    
        myTeam:{
            name:"",
            allowed:false,
            totalVP:0,
            team:"",
            teamLogo:"./assets/logo.png",
            players:{
                top:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
                jgl:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
                mid:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
                adc:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
                sup:{isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"},
            },
            totalStat:0,
            weekStat:0,
        },
    
    }),
    persist: true,
})

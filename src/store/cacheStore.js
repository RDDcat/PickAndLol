

// cacheStore 저장안함
const cacheStore = {
  state: {
    userId:0,
    isSave:false,
    players:[
        {vp:50, line:"TOP", name:"Zeus", stat:0, team:"T1", img: "./assets/player/T1_Zeus.svg"},
        {vp:50, line:"JGL", name:"Oner", stat:0, team:"T1", img: "./assets/player/T1_Oner.svg"},
        {vp:300, line:"MID", name:"Faker", stat:0, team:"T1", img: "./assets/player/T1_Faker.svg"},
        {vp:150, line:"ADC", name:"Gumayusi", stat:0, team:"T1", img: "./assets/player/T1_Gumayusi.svg"},
        {vp:100, line:"SUP", name:"Keria", stat:0, team:"T1", img: "./assets/player/T1_Keria.svg"},

        {vp:200, line:"TOP", name:"Kiin", stat:0, team:"GEN", img: "./assets/player/GEN_Kiin.svg"},
        {vp:280, line:"JGL", name:"Canyon", stat:0, team:"GEN", img: "./assets/player/GEN_Canyon.svg"},
        {vp:300, line:"MID", name:"Chovy", stat:0, team:"GEN", img: "./assets/player/GEN_Chovy.svg"},
        {vp:10, line:"ADC", name:"Peyz", stat:0, team:"GEN", img: "./assets/player/GEN_Peyz.svg"},
        {vp:90, line:"SUP", name:"Lehends", stat:0, team:"GEN", img: "./assets/player/GEN_Lehends.svg"},

        {vp:8, line:"TOP", name:"PerfecT", stat:0, team:"KT", img: "./assets/player/KT_PerfecT.svg"},
        {vp:70, line:"JGL", name:"Pyosik", stat:0, team:"KT", img: "./assets/player/KT_Pyosik.svg"},
        {vp:120, line:"MID", name:"Bdd", stat:0, team:"KT", img: "./assets/player/KT_Bdd.svg"},
        {vp:130, line:"ADC", name:"Deft", stat:0, team:"KT", img: "./assets/player/KT_Deft.svg"},
        {vp:60, line:"SUP", name:"BeryL", stat:0, team:"KT", img: "./assets/player/KT_BeryL.svg"},

        {vp:150, line:"TOP", name:"Doran", stat:0, team:"HLE", img: "./assets/player/HLE_Doran.svg"},
        {vp:150, line:"JGL", name:"Peanut", stat:0, team:"HLE", img: "./assets/player/HLE_Peanut.svg"},
        {vp:250, line:"MID", name:"Zeka", stat:0, team:"HLE", img: "./assets/player/HLE_Zeka.svg"},
        {vp:300, line:"ADC", name:"Viper", stat:0, team:"HLE", img: "./assets/player/HLE_Viper.svg"},
        {vp:25, line:"SUP", name:"Delight", stat:0, team:"HLE", img: "./assets/player/HLE_Delight.svg"},

        {vp:120, line:"TOP", name:"Kingen", stat:0, team:"DK", img: "./assets/player/DK_Kingen.svg"},
        {vp:10, line:"JGL", name:"Lucid", stat:0, team:"DK", img: "./assets/player/DK_Lucid.svg"},
        {vp:250, line:"MID", name:"ShowMaker", stat:0, team:"DK", img: "./assets/player/DK_ShowMaker.svg"},
        {vp:140, line:"ADC", name:"Aiming", stat:0, team:"DK", img: "./assets/player/DK_Aiming.svg"},
        {vp:35, line:"SUP", name:"Kellin", stat:0, team:"DK", img: "./assets/player/DK_Kellin.svg"},

        {vp:50, line:"TOP", name:"Rascal", stat:0, team:"DRX", img: "./assets/player/DRX_Rascal.svg"},
        {vp:6, line:"JGL", name:"Sponge", stat:0, team:"DRX", img: "./assets/player/DRX_Sponge.svg"},
        {vp:6, line:"MID", name:"kyeahoo", stat:0, team:"DRX", img: "./assets/player/DRX_kyeahoo.svg"},
        {vp:10, line:"ADC", name:"Teddy", stat:0, team:"DRX", img: "./assets/player/DRX_Teddy.svg"},
        {vp:40, line:"SUP", name:"Pleata", stat:0, team:"DRX", img: "./assets/player/DRX_Pleata.svg"},

        {vp:15, line:"TOP", name:"Clear", stat:0, team:"FOX", img: "./assets/player/FOX_Clear.svg"},
        {vp:8, line:"JGL", name:"Willer", stat:0, team:"FOX", img: "./assets/player/FOX_Willer.svg"},
        {vp:40, line:"MID", name:"Clozer", stat:0, team:"FOX", img: "./assets/player/FOX_Clozer.svg"},
        {vp:17, line:"ADC", name:"Hena", stat:0, team:"FOX", img: "./assets/player/FOX_Hena.svg"},
        {vp:6, line:"SUP", name:"Execute", stat:0, team:"FOX", img: "./assets/player/FOX_Execute.svg"},

        {vp:20, line:"TOP", name:"Morgan", stat:0, team:"BRO", img: "./assets/player/BRO_Morgan.svg"},
        {vp:6, line:"JGL", name:"YoungJae", stat:0, team:"BRO", img: "./assets/player/BRO_YoungJae.svg"},
        {vp:16, line:"MID", name:"Karis", stat:0, team:"BRO", img: "./assets/player/BRO_Karis.svg"},
        {vp:10, line:"ADC", name:"Envyy", stat:0, team:"BRO", img: "./assets/player/BRO_Envyy.svg"},
        {vp:6, line:"SUP", name:"Pollu", stat:0, team:"BRO", img: "./assets/player/BRO_Pollu.svg"},

        {vp:9, line:"TOP", name:"DnDn", stat:0, team:"NS", img: "./assets/player/NS_DnDn.svg"},
        {vp:7, line:"JGL", name:"Sylvie", stat:0, team:"NS", img: "./assets/player/NS_Sylvie.svg"},
        {vp:10, line:"MID", name:"Callme", stat:0, team:"NS", img: "./assets/player/NS_Callme.svg"},
        {vp:15, line:"ADC", name:"Jiwoo", stat:0, team:"NS", img: "./assets/player/NS_Jiwoo.svg"},
        {vp:10, line:"SUP", name:"Peter", stat:0, team:"NS", img: "./assets/player/NS_Peter.svg"},

        {vp:50, line:"TOP", name:"DuDu", stat:0, team:"KDF", img: "./assets/player/KDF_DuDu.svg"},
        {vp:75, line:"JGL", name:"Cuzz", stat:0, team:"KDF", img: "./assets/player/KDF_Cuzz.svg"},
        {vp:15, line:"MID", name:"BuLLDoG", stat:0, team:"KDF", img: "./assets/player/KDF_BuLLDoG.svg"},
        {vp:6, line:"ADC", name:"Leaper", stat:0, team:"KDF", img: "./assets/logo.png"},
        {vp:6, line:"SUP", name:"Andil", stat:0, team:"KDF", img: "./assets/logo.png"},
        {vp:6, line:"SUP", name:"Quantum", stat:0, team:"KDF", img: "./assets/player/KDF_Quantum.svg"},
        {vp:6, line:"ADC", name:"Bull", stat:0, team:"KDF", img: "./assets/player/KDF_Bull.svg"},

        {vp:7, line:"TOP", name:"Frog", stat:0, team:"DRX", img: "./assets/logo.png"},
        {vp:8, line:"MID", name:"kyeahoo", stat:0, team:"DRX", img: "./assets/logo.png"},
        {vp:6, line:"JGL", name:"Raptor", stat:0, team:"FOX", img: "./assets/logo.png"},
        {vp:6, line:"SUP", name:"Duro", stat:0, team:"FOX", img: "./assets/logo.png"},
        {vp:6, line:"MID", name:"Pullbae", stat:0, team:"BRO", img: "./assets/logo.png"},
        {vp:6, line:"JGL", name:"DDoiv", stat:0, team:"BRO", img: "./assets/logo.png"},
        {vp:6, line:"ADC", name:"Samver", stat:0, team:"BRO", img: "./assets/logo.png"},
        {vp:6, line:"TOP", name:"Migile", stat:0, team:"NS", img: "./assets/logo.png"},
        {vp:7, line:"TOP", name:"Casting", stat:0, team:"KT", img: "./assets/logo.png"},
        {vp:10, line:"SUP", name:"GuGer", stat:0, team:"NS", img: "./assets/logo.png"},

    ],
    
    playerRankingNav:0,
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

    schedule:[
    {
        month:6, day:12, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK", 
                state: 'yes', result:{win:'home', score: {home:2, away:1}},
                home:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'yes', result:{win:'away', score: {home:1, away:2}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            }
        ]
    },
    {
        month:6, day:13, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'yes', result:{win:'away', score: {home:0, away:2}},
                home:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'yes', result:{win:'away', score: {home:1, away:2}},
                home:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            }
        ]
    },
    {
        month:6, day:14, date:"금", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'yes', result:{win:'home', score: {home:2, away:0}},
                home:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'yes', result:{win:'home', score: {home:2, away:0}},
                home:{
                    team: "T1",
                    name:'T1 T1',
                    img:'./assets/logo/color_T1.png'
                },
                away:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            }
        ]
    },
    {
        month:6, day:15, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            }
        ]
    },
    {
        month:6, day:16, date:"일", 
        games:[
            {
                time: "15:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                }
            }
        ]
    },
    {
        month:6, day:19, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                }
            }
        ]
    },
    {
        month:6, day:20, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            }
        ]
    },
    {
        month:6, day:21, date:"금", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                },
                away:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            }
        ]
    },
    {
        month:6, day:22, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            }
        ]
    },
    {
        month:6, day:23, date:"일", 
        games:[
            {
                time: "15:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            }
        ]
    },
    {
        month:6, day:26, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                },
                away:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            }
        ]
    },
    {
        month:6, day:27, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            }
        ]
    },
    {
        month:6, day:28, date:"금", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            }
        ]
    },
    {
        month:6, day:29, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                },
                away:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            }
        ]
    },
    {
        month:6, day:30, date:"일", 
        games:[
            {
                time: "15:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            }
        ]
    },
    {
        month:7, day:10, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            }
        ]
    },
    {
        month:7, day:11, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            }
        ]
    },
    {
        month:7, day:12, date:"금", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                }
            }
        ]
    },
    {
        month:7, day:13, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            }
        ]
    },
    {
        month:7, day:14, date:"일", 
        games:[
            {
                time: "15:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            }
        ]
    },
    {
        month:7, day:17, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            }
        ]
    },
    {
        month:7, day:18, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            }
        ]
    },
    {
        month:7, day:19, date:"금", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            }
        ]
    },
    {
        month:7, day:20, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                },
                away:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            }
        ]
    },
    {
        month:7, day:21, date:"일", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            }
        ]
    },
    {
        month:7, day:24, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            }
        ]
    },
    {
        month:7, day:25, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'

                },
                away:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            }
        ]
    },
    {
        month:7, day:26, date:"금", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                }
            }
        ]
    },
    {
        month:7, day:27, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            }
        ]
    },
    {
        month:7, day:28, date:"일", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            }
        ]
    },
    {
        month:7, day:31, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                },
                away:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            }
        ]
    },
    {
        month:8, day:1, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            }
        ]
    },
    {
        month:8, day:2, date:"금", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            }
        ]
    },
    {
        month:8, day:3, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                },
                away:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            }
        ]
    },
    {
        month:8, day:4, date:"일", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            }
        ]
    },
    {
        month:8, day:7, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            }
        ]
    },
    {
        month:8, day:8, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            }
        ]
    },
    {
        month:8, day:9, date:"금", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                }
            }
        ]
    },
    {
        month:8, day:10, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            }
        ]
    },
    {
        month:8, day:11, date:"일", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                }
            }
        ]
    },
    {
        month:8, day:14, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                }
            }
        ]
    },
    {
        month:8, day:15, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            }
        ]
    },
    {
        month:8, day:16, date:"금", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DRX",
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    team: "KDF",
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            }
        ]
    },
    {
        month:8, day:17, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "DK",
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    team: "KT",
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "T1",
                    name:'T1',
                    img:'./assets/logo/color_T1.png'
                },
                away:{
                    team: "FOX",
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            }
        ]
    },
    {
        month:8, day:18, date:"일", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                                        team: "HLE",
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    team: "GEN",
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            }
        ]
    },
    {
        month:8, day:23, date:"금", 
        games:[
            {
                time: "17:00", round: "플레이오프 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    team: "NS",
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    team: "BRO",
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
        ]
    },
    {
        month:8, day:24, date:"토", 
        games:[
            {
                time: "15:00", round: "플레이오프 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    {
        month:8, day:28, date:"수", 
        games:[
            {
                time: "17:00", round: "플레이오프 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    {
        month:8, day:29, date:"목", 
        games:[
            {
                time: "17:00", round: "플레이오프 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    {
        month:8, day:31, date:"토", 
        games:[
            {
                time: "15:00", round: "플레이오프 3R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    {
        month:9, day:1, date:"일", 
        games:[
            {
                time: "15:00", round: "플레이오프 3R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    {
        month:9, day:7, date:"토", 
        games:[
            {
                time: "15:00", round: "플레이오프 4R", stadium:"경주 실내체육관",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    {
        month:9, day:8, date:"일", 
        games:[
            {
                time: "15:00", round: "결승전", stadium:"경주 실내체육관",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    {
        month:9, day:12, date:"목", 
        games:[
            {
                time: "17:00", round: "선발전 1R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    {
        month:9, day:13, date:"금", 
        games:[
            {
                time: "17:00", round: "선발전 2R", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    {
        month:9, day:14, date:"토", 
        games:[
            {
                time: "15:00", round: "선발전 Finals", stadium:"서울 LOL PARK",
                state: 'no', result:{win:'', score: {home:0, away:0}},
                home:{
                    name:'TBD',
                    img:'./assets/logo.png'
                },
                away:{
                    name:'TBD',
                    img:'./assets/logo.png'
                }
            },
        ]
    },
    ],






  },
  
  mutations: {

  },

  // 비동기 작업을 처리하기 위한 액션을 정의 (현재는 비어 있음)
  actions: {

  }
};

// cacheStore 내보냄
export default cacheStore;

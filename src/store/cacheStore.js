

// cacheStore 저장안함
const cacheStore = {
  state: {
    players:
      [{rank:1, line:"MID", name:"Chovy", stat:1000, team: "GEN", img: "./assets/player/chovy.png"},
        {rank:2, line:"MID", name:"Faker", stat:900, team: "SKT", img: "./assets/player/faker.png"},
        {rank:3, line:"MID", name:"Zeka", stat:700, team: "HLE", img: "./assets/player/zeka.png"},
        {rank:4, line:"MID", name:"Showmaker", stat:800, team: "DK", img: "./assets/player/showmaker.png"},
        {rank:1, line:"MID", name:"Chovy", stat:1000, team: "BRO", img: "./assets/player/chovy.png"},
        {rank:1, line:"MID", name:"Chovy", stat:1000, team: "BRO", img: "./assets/player/chovy.png"},
        {rank:1, line:"MID", name:"Chovy", stat:1000, team: "BRO", img: "./assets/player/chovy.png"},
        {rank:1, line:"MID", name:"Chovy", stat:1000, team: "BRO", img: "./assets/player/chovy.png"},
        {rank:1, line:"MID", name:"Chovy", stat:1000, team: "BRO", img: "./assets/player/chovy.png"},
        {rank:1, line:"MID", name:"Chovy", stat:1000, team: "BRO", img: "./assets/player/chovy.png"}],
    
    playerRankingNav:0,

    schedule:[
    {
        month:6, day:12, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
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
                home:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
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
                home:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'SKT T1',
                    img:'./assets/logo/color_SKT.png'
                },
                away:{
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
                home:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
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
                home:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    name:'SKT T1',
                    img:'./assets/logo/color_SKT.png'
                }
            }
        ]
    },
    {
        month:6, day:19, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                }
            }
        ]
    },
    {
        month:6, day:20, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
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
                home:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                },
                away:{
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
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
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
                home:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
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
                home:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                },
                away:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
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
                home:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
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
                home:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
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
                home:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                },
                away:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
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
                home:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
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
                home:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                },
                away:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
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
                home:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
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
                home:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                }
            }
        ]
    },
    {
        month:7, day:13, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
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
                home:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
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
                home:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
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
                home:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
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
                home:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
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
                home:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                },
                away:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
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
                home:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
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
                home:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
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
                home:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'

                },
                away:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
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
                home:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                }
            }
        ]
    },
    {
        month:7, day:27, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
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
                home:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
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
                home:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                },
                away:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
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
                home:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
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
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
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
                home:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                },
                away:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
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
                home:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
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
                home:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
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
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
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
                home:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                }
            }
        ]
    },
    {
        month:8, day:10, date:"토", 
        games:[
            {
                time: "15:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                },
                away:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
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
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                }
            }
        ]
    },
    {
        month:8, day:14, date:"수", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                },
                away:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                },
                away:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                }
            }
        ]
    },
    {
        month:8, day:15, date:"목", 
        games:[
            {
                time: "17:00", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
                    name:'FOX BNK 피어엑스',
                    img:'./assets/logo/color_FOX.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                },
                away:{
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
                home:{
                    name:'DRX',
                    img:'./assets/logo/color_DRX.png'
                },
                away:{
                    name:'KDF 광동 프릭스',
                    img:'./assets/logo/color_KDF.png'
                }
            },
            {
                time: "19:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'GEN 젠지',
                    img:'./assets/logo/color_GEN.png'
                },
                away:{
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
                home:{
                    name:'DK 디플러스 기아',
                    img:'./assets/logo/color_DK.png'
                },
                away:{
                    name:'KT 롤스터',
                    img:'./assets/logo/color_KT.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'T1',
                    img:'./assets/logo/color_SKT.png'
                },
                away:{
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
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
                    name:'BRO OK저축은행 브리온',
                    img:'./assets/logo/color_BRO.png'
                }
            },
            {
                time: "17:30", round: "정규시즌 2R", stadium:"서울 LOL PARK",
                home:{
                    name:'HLE 한화생명e스포츠',
                    img:'./assets/logo/color_HLE.png'
                },
                away:{
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
                home:{
                    name:'NS 농심 레드포스',
                    img:'./assets/logo/color_NS.png'
                },
                away:{
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

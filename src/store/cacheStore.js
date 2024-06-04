

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
                time: "17:00", round: "정규시즌 1R", stadium:"서울 LOL PARK",
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
                time: "19:30", round: "정규시즌 1R", stadium:"서울 LOL PARK",
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

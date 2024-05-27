

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
        
  },
  
  mutations: {

  },

  // 비동기 작업을 처리하기 위한 액션을 정의 (현재는 비어 있음)
  actions: {

  }
};

// cacheStore 내보냄
export default cacheStore;

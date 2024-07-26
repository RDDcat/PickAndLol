import axios from "axios";
import store from "@/store";

const BASE_URL = "https://pickandlolback.iwiwantit.com/"

export default {
    // sample
    getPets: function(userId){
        return axios.get(BASE_URL + `pet/user/${userId}`,{
            headers: {
                withCredentials: true,
                'access-token': store.state.userStore.access_token,
            },
        });
    },
    // 전체 클럽데이터 조회
    getClubs: function(){
        return axios.get(BASE_URL + `club/all`,{
            headers: {
                withCredentials: true,
            },
        });
    },
    //
    getPlayers: function(){
        return axios.get(BASE_URL + `player/all`,{
            headers: {
                withCredentials: true,
            },
        });
    },
    // 일정 정보
    getMatches: function(){
        return axios.get(BASE_URL + `match`,{
            headers: {
                withCredentials: true,
            },
        });
    },
    // 랭킹 전체 조회
    getRank: function(){
        return axios.get(BASE_URL + `rank`,{
            headers: {
                withCredentials: true,

            },
        });
    },
    // 랭킹 전체 조회
    getStatistic: function(){
        return axios.get(BASE_URL + `team/statistic`,{
            headers: {
                withCredentials: true,

            },
        });
    },
    // 랭킹 전체 조회
    getSync: function(id){
        return axios.get(BASE_URL + `sync/${id}`,{
            headers: {
                withCredentials: true,

            },
        });
    },
    // 마이팀 저장
    postTeam: function(body){
        return axios.post(BASE_URL + 'save', body,{
            headers: {
                withCredentials: true,

            },
        });
    },
    // 마이팀 로그 저장
    postTeamLog: function(body){
        return axios.post(BASE_URL + 'team/log', body,{
            headers: {
                withCredentials: true,

            },
        });
    },
    // 업데이트 (PUT 요청)
    // putPet: function(body) {
    //     return axios.put(BASE_URL + `pet`, body, {
    //         headers: {
    //             withCredentials: true,
    //             'access-token': store.state.userStore.access_token,
    //         },
    //     });
    // },
    // 마이펫 삭제
    // deletePet: function(body){
    //     return axios.delete(BASE_URL + 'pet', {
    //         headers: {
    //             withCredentials: true,
    //             'access-token': store.state.userStore.access_token,
    //         },
    //         data: body, 
    //     });
    // },
    postMatchClub: function(body){
        return axios.post(BASE_URL + 'match/club', body,{
            headers: {
                withCredentials: true,

            },
        });
    },
    postMatchPlayer: function(body){
        return axios.post(BASE_URL + 'match/player', body,{
            headers: {
                withCredentials: true,

            },
        });
    },
}
import axios from "axios";
import { useCacheStore } from '@/store/cacheStore';

const BASE_URL = "https://pickandlolback.iwiwantit.com/"
// const cacheStore = useCacheStore();

export default {
    // sample
    getPets: function(userId){
        const cacheStore = useCacheStore();
        return axios.get(BASE_URL + `pet/user/${userId}`,{
            headers: {
                withCredentials: true,
                'access-token': cacheStore.accessToken,
            },
        });
    },
    // 로그인 검증
    getToken: function(token){
        return axios.get(BASE_URL + `token/${token}`,{
            headers: {
                withCredentials: true,
            },
        });
    },
    // 리프레시
    postRefresh: function(){
        const cacheStore = useCacheStore();
        let body = {
            refreshToken:cacheStore.refreshToken
        }
        return axios.post(BASE_URL + 'match/club', body,{
            headers: {
                withCredentials: true,
            },
        });
    },
    // 사용자 정보 가져오기
    postMember: function(){
        const cacheStore = useCacheStore();
        let body = {
            accessToken:cacheStore.accessToken
        }
        console.log('check body : ', body)
        return axios.post(BASE_URL + 'member', body,{
            headers: {
                withCredentials: true,
                'access-token': cacheStore.accessToken,
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
        const cacheStore = useCacheStore();
        return axios.get(BASE_URL + `sync/${id}`,{
            headers: {
                withCredentials: true,
                'access-token': cacheStore.accessToken,

            },
        });
    },
    // 마이팀 저장
    postTeam: function(body){
        const cacheStore = useCacheStore();
        return axios.post(BASE_URL + 'save', body,{
            headers: {
                withCredentials: true,
                'access-token': cacheStore.accessToken,

            },
        });
    },
    // 마이팀 로그 저장
    postTeamLog: function(body){
        const cacheStore = useCacheStore();
        return axios.post(BASE_URL + 'team/log', body,{
            headers: {
                withCredentials: true,
                'access-token': cacheStore.accessToken,

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
    // 어드민
    postMatchClub: function(body){
        return axios.post(BASE_URL + 'match/club', body,{
            headers: {
                withCredentials: true,

            },
        });
    },
    // 어드민
    postMatchPlayer: function(body){
        return axios.post(BASE_URL + 'match/player', body,{
            headers: {
                withCredentials: true,

            },
        });
    },
}
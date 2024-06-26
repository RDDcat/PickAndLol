import axios from "axios";
import store from "@/store";

const BASE_URL = "http://43.206.241.211:8080/"

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
    // 랭킹 전체 조회
    getRank: function(){
        return axios.get(BASE_URL + `rank`,{
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
        console.log(body);
        return axios.post(BASE_URL + 'save', body,{
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

}
import axios from "axios";
import store from "@/store";

const BASE_URL = "http://localhost:8080/"

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
    getPet: function(){
        return axios.get(BASE_URL + `rank`,{
            headers: {

            },
        });
    },
    // 마이팀 저장
    postPet: function(body){
        console.log(body);
        return axios.post(BASE_URL + 'save', body,{
            headers: {

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
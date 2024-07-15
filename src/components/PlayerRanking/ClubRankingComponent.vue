<template>
    <!-- 테이블 -->
    <div class="relative overflow-x-auto w-[64rem] mx-auto my-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                    <th scope="col" class="px-4 py-3">
                        팀 순위
                    </th>
                    <th scope="col" class="px-1 py-3 text-center">
                        승
                    </th>
                    <th scope="col" class="px-1 py-3 text-center">
                        패
                    </th>
                    <th scope="col" class="px-1 py-3 text-center">
                        득실차
                    </th>
                    <th scope="col" class="px-1 py-3 text-center">
                        승률
                    </th>
                    <th scope="col" class="px-1 py-3 text-center">
                        KDA
                    </th>
                    <th scope="col" class="px-1 py-3 text-center">
                        킬
                    </th>
                    <th scope="col" class="px-1 py-3 text-center">
                        데스
                    </th>
                    <th scope="col" class="px-1 py-3 text-center">
                        어시스트
                    </th>
                </tr>
            </thead>
            <tbody v-for="club, index in clubStore.clubs" :key="index" >
                <tr class=" bg-white border-b" @click="tableNav=index">
                    <th scope="row" class="flex px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        <div class="my-auto mx-2"> {{index+1}} </div>
                        &nbsp; 
                        <img class="my-auto mr-2 w-10 h-10 object-cover rounded-full" :src="club.clubLogo">
                        &nbsp; 
                        <div class="my-auto">{{club.clubName}}</div>
                    </th>
                    <td class="px-1 py-4 text-center">
                        {{ club.matchWinCount?club.matchWinCount:'0' }}
                    </td>
                    <td class="px-1 py-4 text-center">
                        {{ club.matchLoseCount?club.matchLoseCount:'0' }}
                    </td>
                    <td class="px-1 py-4 text-center">
                        {{ club.totalGap?club.totalGap:'0' }}
                    </td>
                    <td class="px-1 py-4 text-center">
                        {{ club.winRate?formatNumber(club.winRate):'0' }}
                    </td>
                    <td class="px-1 py-4 text-center" >
                        {{ club.kda?formatNumber(club.kda):'0' }}
                    </td>
                    <td class="px-1 py-4 text-center">
                        {{ club.killCount?club.killCount:'0' }}
                    </td>
                    <td class="px-1 py-4 text-center">
                        {{ club.deathCount?club.deathCount:'0' }}
                    </td>
                    <td class="px-1 py-4 text-center">
                        {{ club.assistCount?club.assistCount:'0' }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import api from '@/api/api'

import {useClubStore} from '@/store/clubStore'


export default {
    components: {

    },
    setup(){
        const clubStore = useClubStore()

        const formatNumber = (number) => {
            if (number === undefined || number === null || isNaN(number)) {
                return '';
            }
            return number % 1 === 0 ? number : number.toFixed(2);
        };

        return { clubStore, formatNumber }
    },
    data(){
        return {


        }
    },
    methods: {

    },
    mounted(){
        api.getClubs()
        .then((response)=>{
            console.log(response.data)
            this.clubStore.clubs = response.data
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}
</script>
<style scoped>



</style>
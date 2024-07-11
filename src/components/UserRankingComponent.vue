<template>
    <!-- 선수 랭킹 페이지 -->
    <div class="flex flex-col">
        <!-- 타이틀 -->
        <div class="mx-auto my-4 text-3xl flex">
            2024 LCK 서머 유저 <div class="text-red-600">&nbsp;랭킹</div>
        </div>

        <!--  -->
        <div class="flex min-w-[64rem] h-16 bg-red-600 shadow-lg rounded-lg mx-auto" v-if="0">
            <div class="text-white flex my-auto px-4">
                나의 랭킹 <div class="text-sm my-auto">&nbsp; 축하드립니다</div>
            </div>
            <img class="my-auto ml-auto w-12 h-12 rounded-full object-cover" :src="img" alt="">
            <div class="my-auto mx-2 text-white flex">
                {{name}}<div class="text-sm my-auto">&nbsp;님의 순위는</div>&nbsp;{{rank}}<div class="text-sm my-auto">&nbsp;입니다</div>
            </div>
            <!-- 내 기록 상세보기 버튼 -->
            <button class="mx-2 px-4 py-2">
                내 기록 상세보기
            </button>
        </div>

        <!-- 테이블 -->
        <div class="relative overflow-x-auto w-[64rem] mx-auto my-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                    <tr>
                        <th scope="col" class="px-2 py-3">
                            유저 순위
                        </th>
                        <th scope="col" class="px-20 py-3">
                            팀명
                        </th>
                        <th scope="col" class="px-1 py-3 w-24">
                            이번주 획득 점수
                        </th>
                        <th scope="col" class="px-1 py-3 w-28">
                            이번시즌 획득 점수
                        </th>
                    </tr>
                </thead>
                <tbody v-for="user, index in sortedUsers" :key="user.oauthId" >
                    <tr class=" bg-white border-b " @click="showUserDetail(index)">
                        <th scope="row" class="flex px-2 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            <div class="my-auto mx-2"> {{user.rank}} </div>
                            &nbsp; 
                            <img class="my-auto w-14 h-14 object-cover rounded-full" :src="user.teamLogo">
                            &nbsp; 
                            <div class="my-auto">{{user.name}}</div>
                        </th>
                        <td class="px-20 py-4">
                            {{user.name}}
                        </td>
                        <td class="px-1 py-4 text-center">
                            {{user.weekStat?user.weekStat:0}}
                        </td>
                        <td class="px-1 py-4 text-center">
                            {{user.totalStat}}
                        </td>
                    </tr>
                    <tr class=" bg-white border-b " v-if="index===tableNav">
                        <td colspan="4" class="px-2 py-4 font-medium text-gray-900">
                            선수별 라운드 점수 변화도
                            <div class="flex ml-8 mt-4">
                                <div class="relative flex">
                                    <img class="rounded-full mx-2 my-auto w-20 object-contain" :class="user.players.top.isMvp ? 'w-24 h-24 ring-4 ring-red-500 ' : ''" :src="'./assets/player-circle/'+user.players.top.team+'_'+user.players.top.name+'.svg'">
                                    <div v-if="user.players.top.isMvp" class="absolute left-6 -bottom-2 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                                </div>
                                <div class="relative flex">
                                    <img class="rounded-full mx-2 my-auto w-20 object-contain" :class="user.players.jgl.isMvp ? 'w-24 h-24 ring-4 ring-red-500 ' : ''" :src="'./assets/player-circle/'+user.players.jgl.team+'_'+user.players.jgl.name+'.svg'">
                                    <div v-if="user.players.jgl.isMvp" class="absolute left-6 -bottom-2 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                                </div>
                                <div class="relative flex">
                                    <img class="rounded-full mx-2 my-auto w-20 object-contain" :class="user.players.mid.isMvp ? 'w-24 h-24 ring-4 ring-red-500 ' : ''" :src="'./assets/player-circle/'+user.players.mid.team+'_'+user.players.mid.name+'.svg'">
                                    <div v-if="user.players.mid.isMvp" class="absolute left-6 -bottom-2 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                                </div>
                                <div class="relative flex">
                                    <img class="rounded-full mx-2 my-auto w-20 object-contain" :class="user.players.adc.isMvp ? 'w-24 h-24 ring-4 ring-red-500 ' : ''" :src="'./assets/player-circle/'+user.players.adc.team+'_'+user.players.adc.name+'.svg'">
                                    <div v-if="user.players.adc.isMvp" class="absolute left-6 -bottom-2 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                                </div>
                                <div class="relative flex">
                                    <img class="rounded-full mx-2 my-auto w-20 object-contain" :class="user.players.sup.isMvp ? 'w-24 h-24 ring-4 ring-red-500 ' : ''" :src="'./assets/player-circle/'+user.players.sup.team+'_'+user.players.sup.name+'.svg'">
                                    <div v-if="user.players.sup.isMvp" class="absolute left-6 -bottom-2 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 페이징 -->




    </div>
</template>
<script>
import api from '@/api/api'

import {useCacheStore} from '@/store/cacheStore'
import {useRankStore} from '@/store/rankStore'

export default {
    components: {

    },
    setup(){
        const cacheStore = useCacheStore()
        const rankStore = useRankStore()

        return { cacheStore, rankStore }
    },
    data(){
        return {
            tableNav:'',
            number:1,

        }
    },
    computed: {
        sortedUsers() {
            return Object.values(this.rankStore.users).sort((a, b) => a.rank - b.rank);
        }
    },
    methods: {
        showUserDetail(index){
            if(this.tableNav===index){
                this.tableNav=''
                return
            }
            this.tableNav=index
        }
    },
    async created() {
        // stat 데이터 가져오기
        await api.getStatistic()
        .then(response=>{
            response.data.forEach(item => {
            this.rankStore.teams[item.oauthId] = {
                    weekStat: item.weekStat,
                    totalStat: item.totalStat
                };
            });
        })
        .catch(function (e){
            console.log(e);
        });
        // 유저 랭킹페이지 데이터 가져오기
        await api.getRank()
        .then(response=>{
            for(let item of response.data){
                this.rankStore.users[item.oauthId] = JSON.parse(item.data)
                // 스텟 데이터 찾아 넣기
                if(this.rankStore.teams[item.oauthId]){
                    this.rankStore.users[item.oauthId].weekStat = this.rankStore.teams[item.oauthId].weekStat
                    this.rankStore.users[item.oauthId].totalStat = this.rankStore.teams[item.oauthId].totalStat
                }
                
            }
            // Convert users object to array
            const usersArray = Object.values(this.rankStore.users);

            // Sort users by totalStat in descending order
            usersArray.sort((a, b) => b.totalStat - a.totalStat);

            // Assign rank based on sorted order
            usersArray.forEach((user, index) => {
                user.rank = index + 1;
            });

        })
        .catch(function (e){
            console.log(e);
        });
    }
}
</script>
<style scoped>



</style>
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
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-2 py-3">
                            유저 순위
                        </th>
                        <th scope="col" class="px-20 py-3">
                            팀명
                        </th>
                        <th scope="col" class="px-1 py-3">
                            이번주 획득 점수
                        </th>
                        <th scope="col" class="px-1 py-3">
                            이번시즌 획득 점수
                        </th>
                    </tr>
                </thead>
                <tbody v-for="user, index in users" :key="index" >
                    <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700" @click="tableNav=index">
                        <th scope="row" class="flex px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="my-auto mx-2"> {{index+1}} </div>
                            &nbsp; 
                            <img class="my-auto w-14 h-14 object-cover rounded-full" :src="user.teamLogo">
                            &nbsp; 
                            <div class="my-auto">{{user.name}}</div>
                        </th>
                        <td class="px-20 py-4">
                            {{user.name}}
                        </td>
                        <td class="px-1 py-4">
                            {{user.weekStat}}
                        </td>
                        <td class="px-1 py-4">
                            {{user.totalStat}}
                        </td>
                    </tr>
                    <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-if="index===tableNav">
                        <th scope="row" class="flex px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            선수별 라운드 점수 변화도
                        </th>
                        <td class="px-20 py-4">
                            
                        </td>
                        <td class="px-1 py-4">
                        </td>
                        <td class="px-1 py-4">
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


export default {
    components: {

    },
    data(){
        return {
            tableNav:'',

            name:'내이름',
            img:'./assets/player/faker.png',
            rank:'6위',

            users:[
                
            ],

        }
    },
    methods: {

    },
    mounted(){
        api.getRank()
        .then(response=>{
            console.log(response.data)
            console.log(JSON.parse(response.data[0].data))
            for(let index in response.data){
                this.users.push( JSON.parse(response.data[index].data))
            }
        })
        .catch(function (e){
            console.log(e);
        });
    }
}
</script>
<style scoped>



</style>
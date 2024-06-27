<template>
    <!-- 테이블 -->
    <div class="relative overflow-x-auto w-[64rem] mx-auto my-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-4 py-3">
                        팀 순위
                    </th>
                    <th scope="col" class="px-1 py-3">
                        승
                    </th>
                    <th scope="col" class="px-1 py-3">
                        패
                    </th>
                    <th scope="col" class="px-1 py-3">
                        득실차
                    </th>
                    <th scope="col" class="px-1 py-3">
                        승률
                    </th>
                    <th scope="col" class="px-1 py-3">
                        KDA
                    </th>
                    <th scope="col" class="px-1 py-3">
                        킬
                    </th>
                    <th scope="col" class="px-1 py-3">
                        데스
                    </th>
                    <th scope="col" class="px-1 py-3">
                        어시스트
                    </th>
                </tr>
            </thead>
            <tbody v-for="team, index in teams" :key="index" >
                <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700" @click="tableNav=index">
                    <th scope="row" class="flex px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div class="my-auto mx-2"> {{index+1}} </div>
                        &nbsp; 
                        <img class="my-auto mr-2 w-10 h-10 object-cover rounded-full" :src="team.img">
                        &nbsp; 
                        <div class="my-auto">{{team.name}}</div>
                    </th>
                    <td class="px-1 py-4">
                        {{ team.win }}
                    </td>
                    <td class="px-1 py-4">
                        {{ team.lose }}
                    </td>
                    <td class="px-1 py-4">
                        {{ team.gainLose }}
                    </td>
                    <td class="px-1 py-4">
                        {{ team.winRate }}
                    </td>
                    <td class="px-1 py-4">
                        {{ team.kda }}
                    </td>
                    <td class="px-1 py-4">
                        {{ team.kill }}
                    </td>
                    <td class="px-1 py-4">
                        {{ team.death }}
                    </td>
                    <td class="px-1 py-4">
                        {{ team.assist }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>


export default {
    components: {

    },
    data(){
        return {
            teams:[
                {name:'젠지', img:'./assets/logo/color_GEN.png', win: 4, lose:0, gainLose:8, winRate: 1, kda:7.81, kill:133, death:57, assist:312 },
                {name:'광동', img:'./assets/logo/color_KDF.png', win: 3, lose:1, gainLose:4, winRate: 0.75, kda:4.34, kill:130, death:105, assist:326 },
                {name:'한화생명', img:'./assets/logo/color_HLE.png', win: 3, lose:1, gainLose:4, winRate: 0.75, kda:5.67, kill:138, death:105, assist:326 },
                {name:'T1', img:'./assets/logo/color_T1.png', win: 3, lose:1, gainLose:3, winRate: 0.75, kda:4.88, kill:133, death:92, assist:316 },
                {name:'DK', img:'./assets/logo/color_DK.png', win: 3, lose:1, gainLose:2, winRate: 0.75, kda:4.63, kill:159, death:112, assist:360 },
                {name:'DRX', img:'./assets/logo/color_DRX.png', win: 2, lose:2, gainLose:1, winRate: 0.5, kda:3.65, kill:126, death:128, assist:341 },
                {name:'농심', img:'./assets/logo/color_NS.png', win: 1, lose:3, gainLose:-4, winRate: 0.25, kda:2.38, kill:100, death:143, assist:240 },
                {name:'BNK', img:'./assets/logo/color_FOX.png', win: 1, lose:3, gainLose:-5, winRate: 0.25, kda:2.54, kill:116, death:160, assist:290 },
                {name:'OK저축은행', img:'./assets/logo/color_BRO.png', win: 0, lose:4, gainLose:-6, winRate: 0., kda:1.48, kill:64, death:143, assist:147 },
                {name:'KT', img:'./assets/logo/color_KT.png', win: 0, lose:4, gainLose:-7, winRate: 0, kda:1.65, kill:67, death:142, assist:168 },
            ],


        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
<template>
    <!-- 테이블 -->
    <div class="relative overflow-x-auto w-[64rem] mx-auto my-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
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
                <tr class=" bg-white border-b " @click="tableNav=index">
                    <th scope="row" class="flex px-4 py-4 font-medium text-gray-900 whitespace-nowrap ">
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
                {name:'젠지', img:'./assets/logo/color_GEN.png', win: 6, lose:0, gainLose:12, winRate: 1, kda:7.05, kill:195, death:94, assist:468 },
                {name:'DK', img:'./assets/logo/color_DK.png', win: 5, lose:1, gainLose:5, winRate: 0.83, kda:5.57, kill:247, death:147, assist:572 },
                {name:'광동', img:'./assets/logo/color_KDF.png', win: 4, lose:2, gainLose:5, winRate: 0.67, kda:3.69, kill:180, death:172, assist:455 },
                {name:'T1', img:'./assets/logo/color_T1.png', win: 4, lose:2, gainLose:4, winRate: 0.67, kda:4.31, kill:178, death:139, assist:421 },
                {name:'한화생명', img:'./assets/logo/color_HLE.png', win: 4, lose:2, gainLose:4, winRate: 0.67, kda:5.2, kill:204, death:132, assist:482 },
                {name:'DRX', img:'./assets/logo/color_DRX.png', win: 2, lose:4, gainLose:-3, winRate: 0.33, kda:3.08, kill:150, death:177, assist:395 },
                {name:'KT', img:'./assets/logo/color_KT.png', win: 2, lose:4, gainLose:-5, winRate: 0.33, kda:2.86, kill:168, death:202, assist:410 },
                {name:'BNK', img:'./assets/logo/color_FOX.png', win: 2, lose:4, gainLose:-5, winRate: 0.33, kda:2.89, kill:171, death:211, assist:438 },
                {name:'농심', img:'./assets/logo/color_NS.png', win: 1, lose:5, gainLose:-8, winRate: 0.17, kda:1.86, kill:128, death:221, assist:283 },
                {name:'OK저축은행', img:'./assets/logo/color_BRO.png', win: 0, lose:6, gainLose:-9, winRate: 0., kda:1.68, kill:121, death:248, assist:296 },
            ],


        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
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
                {name:'T1', img:'./assets/logo/color_SKT.png', win: 1, lose:0, gainLose:2, winRate: 1, kda:8.57, kill:37, death:14, assist:83 },
                {name:'광동', img:'./assets/logo/color_KDF.png', win: 1, lose:0, gainLose:2, winRate: 1, kda:5.9, kill:34, death:20, assist:84 },
                {name:'젠지', img:'./assets/logo/color_GEN.png', win: 1, lose:0, gainLose:2, winRate: 1, kda:5.19, kill:34, death:21, assist:75 },
                {name:'DRX', img:'./assets/logo/color_DRX.png', win: 1, lose:0, gainLose:1, winRate: 1, kda:6, kill:32, death:21, assist:94 },
                {name:'DK', img:'./assets/logo/color_DK.png', win: 1, lose:0, gainLose:1, winRate: 1, kda:5.44, kill:44, death:27, assist:13 },
                {name:'BNK', img:'./assets/logo/color_FOX.png', win: 0, lose:1, gainLose:-1, winRate: 0.5, kda:4.05, kill:75, death:63, assist:180 },
                {name:'OK저축은행', img:'./assets/logo/color_BRO.png', win: 0, lose:1, gainLose:-1, winRate: 0., kda:2.28, kill:21, death:32, assist:52 },
                {name:'한화생명', img:'./assets/logo/color_HLE.png', win: 0, lose:1, gainLose:-1, winRate: 0, kda:2.36, kill:27, death:44, assist:77 },
                {name:'KT', img:'./assets/logo/color_KT.png', win: 0, lose:1, gainLose:-1, winRate: 0, kda:2, kill:20, death:34, assist:48 },
                {name:'농심', img:'./assets/logo/color_NS.png', win: 0, lose:1, gainLose:-1, winRate: 0, kda:1.51, kill:43, death:92, assist:96 },
            ],


        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
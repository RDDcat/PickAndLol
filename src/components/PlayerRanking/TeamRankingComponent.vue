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
                {name:'젠지', img:'./assets/logo/color_GEN.png', win: 0, lose:0, gainLose:0, winRate: 0, kda:0, kill:0, death:0, assist:0 },
                {name:'T1', img:'./assets/logo/color_SKT.png', win: 0, lose:0, gainLose:0, winRate: 0, kda:0, kill:0, death:0, assist:0 },
                {name:'한화생명', img:'./assets/logo/color_HLE.png', win: 0, lose:0, gainLose:0, winRate: 0, kda:0, kill:0, death:0, assist:0 },
                {name:'DK', img:'./assets/logo/color_DK.png', win: 0, lose:0, gainLose:0, winRate: 0, kda:0, kill:0, death:0, assist:0 },
                {name:'KT', img:'./assets/logo/color_KT.png', win: 0, lose:0, gainLose:0, winRate: 0, kda:0, kill:0, death:0, assist:0 },
                {name:'광동', img:'./assets/logo/color_KDF.png', win: 0, lose:0, gainLose:0, winRate: 0, kda:0, kill:0, death:0, assist:0 },
                {name:'DRX', img:'./assets/logo/color_DRX.png', win: 0, lose:0, gainLose:0, winRate: 0, kda:0, kill:0, death:0, assist:0 },
                {name:'피어엑스', img:'./assets/logo/color_FOX.png', win: 0, lose:0, gainLose:0, winRate: 0, kda:0, kill:0, death:0, assist:0 },
                {name:'OK저축은행', img:'./assets/logo/color_BRO.png', win: 0, lose:0, gainLose:0, winRate: 0., kda:0, kill:0, death:0, assist:0 },
                {name:'농심', img:'./assets/logo/color_NS.png', win: 0, lose:0, gainLose:0, winRate: 0, kda:0, kill:0, death:0, assist:0 },
            ],


        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
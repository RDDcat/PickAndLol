<template>
    <!-- 일정 페이지 -->
    <div class="w-[64rem] flex flex-col mx-auto">
        <!-- 날짜 네비 -->

        <!-- 월 필터 -->

        <!-- 팀 별 필터 -->
        <div class="grid grid-cols-11 gap-10 my-4">
            <!-- 팀 -->
            <div v-for="team, index in teams" :key="index">
                <img class="m-auto w-12 h-12 object-cover" :src="team.colorImg" v-if="selected==index">
                <img class="m-auto w-12 h-12 object-cover" :src="team.img" v-if="selected!=index" @click="selected=index">
                <div class="m-auto my-2 text-center text-xs text-gray-700 whitespace-nowrap">
                    {{team.name}}
                </div>
            </div>
        </div>

        <!-- 일정 -->
        <div v-for="data, index in $store.state.cacheStore.schedule" :key="index">
            <!-- 일정 타이틀 -->
            <div class="w-full h-16 flex bg-gray-100 rounded-lg">
                <div class="px-4 my-auto">
                    {{data.month}}월 {{data.day}}일 ({{data.date}})
                </div>
            </div>
            <!-- 일정 내용 -->
            <div class="my-2 w-full h-16 flex border-b-1" v-for="game, index in data.games" :key="index">
                <div class="w-full px-4 my-auto flex">
                    {{game.time}}
                    <div class="my-auto text-sm text-gray-500 px-2">
                        {{game.round}}
                    </div>
                    <!-- 경기 결과 -->
                    <div class="mx-auto flex">
                        <div class="flex w-64">
                            <div class="text-sm ml-auto my-auto">
                                {{game.home.name}}
                            </div>
                            <img class="my-auto ml-4 w-8 h-8 object-cover" :src="game.home.img" alt="">
                        </div>
                        <div class="mx-6 my-auto text-sm text-red-600">
                            예정
                        </div>
                        <div class="flex w-64">
                            <img class="my-auto mr-4 w-8 h-8 object-cover" :src="game.away.img" alt="">
                            <div class="text-sm mr-auto my-auto">
                                {{game.away.name}}
                            </div>
                        </div>
                    </div>
                    <!-- 경기 위치 -->
                    <div class="my-auto px-2 text-gray-500">
                        {{game.stadium}}
                    </div>
                </div>
            </div>
            <div class="my-8"></div>
        </div>

    </div>
</template>
<script>


export default {
    components: {

    },
    data(){
        return {
            selected:0,

            teams:[
                {name:'전체', img:'./assets/logo/lck.png', colorImg:'./assets/logo/lck.png',}, 
                {name:'젠지', img:'./assets/logo/GEN.png', colorImg:'./assets/logo/color_GEN.png',}, 
                {name:'T1', img:'./assets/logo/SKT.png', colorImg:'./assets/logo/color_SKT.png',}, 
                {name:'KT', img:'./assets/logo/KT.png', colorImg:'./assets/logo/color_KT.png',}, 
                {name:'한화생명', img:'./assets/logo/HLE.png', colorImg:'./assets/logo/color_HLE.png',}, 
                {name:'DK', img:'./assets/logo/DK.png', colorImg:'./assets/logo/color_DK.png',}, 
                {name:'피어엑스', img:'./assets/logo/FOX.png', colorImg:'./assets/logo/color_FOX.png',}, 
                {name:'광동', img:'./assets/logo/KDF.png', colorImg:'./assets/logo/color_KDF.png',}, 
                {name:'OK저축은행', img:'./assets/logo/BRO.png', colorImg:'./assets/logo/color_BRO.png',}, 
                {name:'DRX', img:'./assets/logo/DRX.png', colorImg:'./assets/logo/color_DRX.png',}, 
                {name:'농심', img:'./assets/logo/NS.png', colorImg:'./assets/logo/color_NS.png',}, 
            ],
        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
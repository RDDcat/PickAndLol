<template>
    <!-- 일정 페이지 -->
    <div class="w-[64rem] flex flex-col mx-auto">
        <!-- 날짜 네비 -->

        <!-- 월 필터 -->

        <!-- 팀 별 필터 -->
        <div class="grid grid-cols-11 gap-10 mx-auto my-4">
            <!-- 팀 -->
            <div v-for="team, index in teams" :key="index">
                <img class="m-auto" :src="team.img">
                <div class="m-auto my-2 text-center text-xs text-gray-700">
                    {{team.name}}
                </div>
            </div>
        </div>

        <!-- 일정 -->
        <!-- 일정 타이틀 -->
        <div class="w-full h-16 flex bg-gray-100 rounded-lg">
            <div class="px-4 my-auto">
                06월 12일 (수)
            </div>
        </div>
        <!-- 일정 내용 -->
        <div class="w-full h-16 flex border-b-2">
            <div class="w-full px-4 my-auto flex">
                21:00
                <div class="my-auto text-sm text-gray-500 px-2">
                    정규시즌 1R
                </div>
                <!-- 경기 결과 -->
                <div class="mx-auto w-96 flex">
                    <div class="text-lg mx-4 my-auto">
                        한화생명e스포츠                        
                    </div>
                    <div class="mx-6 my-auto text-sm text-red-600">
                        예정
                    </div>
                    <div class="text-lg mx-4 my-auto">
                        피어엑스
                    </div>
                </div>
                <!-- 경기 위치 -->
                <div class="my-auto px-2">
                    서울 LoL Park
                </div>

            </div>
        </div>

    </div>
</template>
<script>


export default {
    components: {

    },
    data(){
        return {
            teams:[
                {name:'전체', img:'./assets/logo/lck.png'}, 
                {name:'젠지', img:'./assets/logo/GEN.png'}, 
                {name:'T1', img:'./assets/logo/SKT.png'}, 
                {name:'KT', img:'./assets/logo/KT.png'}, 
                {name:'한화생명', img:'./assets/logo/HLE.png'}, 
                {name:'DK', img:'./assets/logo/DK.png'}, 
                {name:'피어엑스', img:'./assets/logo/FOX.png'}, 
                {name:'광동', img:'./assets/logo/KDF.png'}, 
                {name:'OK저축은행', img:'./assets/logo/BRO.png'}, 
                {name:'DRX', img:'./assets/logo/DRX.png'}, 
                {name:'농심', img:'./assets/logo/NS.png'}, 
            ],
        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
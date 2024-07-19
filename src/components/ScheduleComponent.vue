<template>
    <!-- 일정 페이지 -->
    <div class="w-[64rem] flex flex-col mx-auto">
        <!-- 날짜 네비 -->

        <!-- 월 필터 -->

        <!-- 팀 별 필터 -->
        <div class="grid grid-cols-11 gap-10 my-4">
            <!-- 팀 -->
            <div v-for="team, index in teams" :key="index">
                <img class="m-auto w-12 h-12 object-cover" :src="team.colorImg" v-if="selected==index" @click="filterTeam(teams[0], 0)">
                <img class="m-auto w-12 h-12 object-cover" :src="team.img" v-if="selected!=index" @click="filterTeam(team, index)">
                <div class="m-auto my-2 text-center text-xs text-gray-700 whitespace-nowrap">
                    {{team.name}}
                </div>
            </div>
        </div>
        <!-- 일정 -->
        <div v-for="data, index in scheduleStore.schedule" :key="index">
            <!-- 일정 타이틀 -->
            <div :class="['w-full h-16 flex rounded-lg', isToday(data) ? 'bg-red-100' : 'bg-gray-100']" 
                v-if="shouldShowTitle(data, index)">
                <div :class="['px-4 my-auto', isToday(data) ? 'text-red-600' : '']">
                    {{data.month}}월 {{data.day}}일 ({{getDate(data)}})
                </div>
            </div>
            <!-- 일정 내용 -->
            <div class="my-2 w-full h-16 flex border-b-1" 
                v-if="data.homeClubId==selected||data.awayClubId==selected||selected==0">
                <div class="w-full px-4 my-auto flex">
                    {{data.time}}
                    <div class="my-auto text-sm text-gray-500 px-2">
                        {{data.round}}
                    </div>
                    <!-- 경기 결과 -->
                    <div class="mx-auto flex">
                        <div class="flex w-64">
                            <div class="text-sm ml-auto my-auto">
                                {{teams[data.homeClubId].name}}
                            </div>
                            <img class="my-auto ml-4 w-8 h-8 object-cover" :src="teams[data.homeClubId].colorImg" alt="">
                        </div>
                        <!-- 경기 예정일때 텍스트 -->
                        <div v-if="data.matchStatus!=='END'" 
                            class="mx-6 my-auto text-sm text-red-600" >
                            예정
                        </div>
                        <!-- 경기 결과 점수 -->
                        <div v-if="data.matchStatus==='END'" 
                            class="mx-6 my-auto text-sm text-gray-600" >
                            {{data.homeScore}} : {{data.awayScore}}
                        </div>
                        <div class="flex w-64">
                            <img class="my-auto mr-4 w-8 h-8 object-cover" :src="teams[data.awayClubId].colorImg" alt="">
                            <div class="text-sm mr-auto my-auto">
                                {{teams[data.awayClubId].name}}
                            </div>
                        </div>
                    </div>
                    <!-- 경기 위치 -->
                    <div class="my-auto px-2 text-gray-500">
                        {{data.stadium}}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import {useCacheStore} from '@/store/cacheStore'
import {useScheduleStore} from '@/store/scheduleStore'

import api from '@/api/api'

export default {
    components: {

    },
    setup(){
        const cacheStore = useCacheStore()
        const scheduleStore = useScheduleStore()
        const today = new Date()

        return { cacheStore, scheduleStore, today }
    },
    data(){
        return {
            // 이거 백엔드랑 같은 아이디 공유함
            selected:0,
            selectedTeam:'LCK',

            teams:[
                {name:'전체', team:'LCK', img:'./assets/logo/lck.png', colorImg:'./assets/logo/lck.png',}, 
                {name:'젠지', team:'GEN', img:'./assets/logo/GEN.png', colorImg:'./assets/logo/color_GEN.png',}, 
                {name:'T1', team:'T1', img:'./assets/logo/T1.png', colorImg:'./assets/logo/color_T1.png',}, 
                {name:'KT', team:'KT', img:'./assets/logo/KT.png', colorImg:'./assets/logo/color_KT.png',}, 
                {name:'한화생명', team:'HLE', img:'./assets/logo/HLE.png', colorImg:'./assets/logo/color_HLE.png',}, 
                {name:'NUN', team:'NUN', img:'./assets/logo/DK.png', colorImg:'./assets/logo/color_DK.png',}, 
                {name:'피어엑스', team:'FOX', img:'./assets/logo/FOX.png', colorImg:'./assets/logo/color_FOX.png',}, 
                {name:'광동', team:'KDF', img:'./assets/logo/KDF.png', colorImg:'./assets/logo/color_KDF.png',}, 
                {name:'OK저축은행', team:'BRO', img:'./assets/logo/BRO.png', colorImg:'./assets/logo/color_BRO.png',}, 
                {name:'DRX', team:'DRX', img:'./assets/logo/DRX.png', colorImg:'./assets/logo/color_DRX.png',}, 
                {name:'농심', team:'NS', img:'./assets/logo/NS.png', colorImg:'./assets/logo/color_NS.png',}, 
            ],
            showMatchIds:[],
        }
    },
    methods: {
        filterTeam(team, index){
            this.selected=index
            this.selectedTeam=team.team
        },
        isToday(date) {
            return date.year === this.today.getFullYear() && date.month === this.today.getMonth()+1 && date.day === this.today.getDate();
        },
        getDate(data){
            const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
            const date = new Date(data.year , data.month - 1, data.day);
            const dayOfWeek = date.getDay();
            return daysOfWeek[dayOfWeek];
        },
        shouldShowTitle(data){
            if(data)
            if(data.homeClubId===this.selected||data.awayClubId===this.selected||this.selected===0) return true

        }
        

    },
    mounted(){
        // 일정 정보 가져오기
        api.getMatches()
        .then(response=>{
            this.scheduleStore.schedule = response.data;
        })
        .catch(function (e){
            console.log(e);
        });
    }
}
</script>
<style scoped>



</style>
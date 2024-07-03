<template>
    <!-- 선수 랭킹 페이지 -->
    <div class="flex flex-col mx-auto w-[72rem]">
        <!-- 타이틀 -->
        <div class="mx-auto my-4 text-lg">
            {{title}}
        </div>
        <!-- 네비게이션 -->
        <!-- <div class="w-full mx-auto my-2 flex">
            <div class="w-16 text-center text-gray-600" :class="cacheStore.clubRankingNav===0?'text-red-600':''" @click="cacheStore.clubRankingNav=0">
                팀
            </div>
            <div class="w-16 text-center text-gray-600" :class="cacheStore.clubRankingNav===1?'text-red-600':''" @click="cacheStore.clubRankingNav=1">
                개인
            </div>
        </div> -->

        <!-- 네비 하단 라인 -->
        <!-- <div class="w-full h-[2px] bg-gray-600"></div> -->

        <ClubRanking v-if="cacheStore.clubRankingNav===0"/>
        <PlayerRanking v-if="cacheStore.clubRankingNav===1"/>


    </div>
</template>
<script>
import ClubRanking from '@/components/PlayerRanking/ClubRankingComponent.vue'
import PlayerRanking from '@/components/PlayerRanking/PlayerRankingComponent.vue'

import {useCacheStore} from '@/store/cacheStore'

export default {
    components: {
        ClubRanking,
        PlayerRanking,

    },
    setup(){
        const cacheStore = useCacheStore()

        return { cacheStore }
    },
    data(){
        return {

            title:"2024 LCK 서머",
        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
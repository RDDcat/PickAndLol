<template>
    <!-- 이미지 컨테이너 (지도좌표) -->
    <div class="relative flex">
        <img class="mx-auto w-96" src="@/assets/map.png" alt="">
        <button class="absolute left-6 top-6 bg-white rounded-full bg-opacity-80">
            <img v-if="!cacheStore.myTeam.players.top.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/top.png">
            <img v-if="cacheStore.myTeam.players.top.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.top.img">
            <div v-if="cacheStore.myTeam.players.top.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
        </button>
        <button class="absolute left-20 top-24 bg-white rounded-full bg-opacity-80">
            <img v-if="!cacheStore.myTeam.players.jgl.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/jgl.png">
            <img v-if="cacheStore.myTeam.players.jgl.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.jgl.img">
            <div v-if="cacheStore.myTeam.players.jgl.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
        </button>
        <button class="absolute left-40 top-40 bg-white rounded-full bg-opacity-80">
            <img v-if="!cacheStore.myTeam.players.mid.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/mid.png">
            <img v-if="cacheStore.myTeam.players.mid.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.mid.img">
            <div v-if="cacheStore.myTeam.players.mid.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
        </button>
        <button class="absolute right-24 bottom-20 bg-white rounded-full bg-opacity-80">
            <img v-if="!cacheStore.myTeam.players.adc.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/adc.png">
            <img v-if="cacheStore.myTeam.players.adc.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.adc.img">
            <div v-if="cacheStore.myTeam.players.adc.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
        </button>
        <button class="absolute right-8 bottom-8 bg-white rounded-full bg-opacity-80">
            <img v-if="!cacheStore.myTeam.players.sup.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/sup.png">
            <img v-if="cacheStore.myTeam.players.sup.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.sup.img">
            <div v-if="cacheStore.myTeam.players.sup.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
        </button>
    </div>
</template>
<script>
import {useCacheStore} from '@/store/cacheStore'

export default {
    components: {

    },
    setup(){
        const cacheStore = useCacheStore()

        return { cacheStore }
    },
    data(){
        return {

        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
<template>
<div class="fixed overscroll-contain bg-opacity-90 bg-red-950 flex w-full h-screen z-40" @click.stop="this.modalStore.isPlayerModal=false">
    <!-- 전체 프레임 -->
    <div class="relative mx-auto w-[1080px] flex flex-col" >
        <!-- 안내 문구 -->
        <div class="mx-auto mt-8 text-gray-200 opacity-20">
            배경 클릭시 꺼짐
        </div>
        <!-- 윗 프레임 -->
        <div class="relative mx-auto mt-8 w-full h-[700px] flex" @click.stop>
            <!-- 큰 선수 이미지 -->
            <img class="absolute left-4 bottom-0 w-[400px] object-contain" :src="'./assets/player/'+modalStore.selectPlayer.clubName+'_'+modalStore.selectPlayer.playerName+'.svg'">
            <!-- 왼쪽 프레임 -->
            <div class="w-[380px] h-full bg-red-600 rounded-l-lg">

            </div>
            <!-- 오른쪽 프레임 -->
            <div class="flex w-[700px] h-full bg-white rounded-r-lg ">
                <img class="m-auto w-80 object-contain" src="@/assets/coming-soon-logo.png">

            </div>
        </div>
    </div>
    <!-- <img class="mx-auto w-80 object-contain" src="@/assets/coming-soon-logo.png"> -->
</div>
</template>
<script>
import {useModalStore} from '@/store/modalStore'

export default {
    components: {

    },
    setup(){
        const modalStore = useModalStore()

        return { modalStore }
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
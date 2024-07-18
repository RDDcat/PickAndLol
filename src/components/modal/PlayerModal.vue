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
                <!-- 팀 로고 -->
                <div class="ml-6 mt-8">
                    <img class="object-cover w-10 h-10 p-1 rounded-full bg-red-100" :src="'./assets/logo/color_'+modalStore.selectPlayer.clubName+'.png'"
                        @error="setDefaultImage($event)">
                </div>
                <!-- 시즌 누적 점수 -->
                <div class="text-white ml-6 mt-4">
                    시즌 누적 점수 {{modalStore.selectPlayer.stat}}
                </div>
            </div>
            <!-- 오른쪽 프레임 -->
            <div class="flex flex-col w-[700px] h-full bg-white rounded-r-lg ">
                <!-- 이름 -->
                <div class="ml-12 mt-8 text-3xl font-bold">
                    {{modalStore.selectPlayer.clubName}} {{modalStore.selectPlayer.playerName}}
                </div>
                <!-- 플레이어 정보 -->

                <!-- 플레이어 지표 -->
                <div class="ml-12">
                    <!-- 지표 타이틀 -->
                    <div class="text-red-600">플레이 지표</div>
                    <!-- 지표 정보 -->
                    <div class="flex flex-wrap gap-2 mt-4">
                        <!-- 지표 -->
                        <div class="flex flex-col w-20 h-20 rounded-full p-2 bg-red-200">
                            <div class="text-white mx-auto mt-auto text-base">
                                {{formatNumber(modalStore.selectPlayer.kda)}}
                            </div>
                            <div class="text-white mx-auto mb-auto text-xs">
                                KDA
                            </div>
                        </div>
                        <!-- 지표 -->
                        <div class="flex flex-col w-20 h-20 rounded-full p-2 bg-red-200">
                            <div class="text-white mx-auto mt-auto text-base">
                                {{modalStore.selectPlayer.damage}}
                            </div>
                            <div class="text-white mx-auto mb-auto text-xs">
                                Damage
                            </div>
                        </div>
                        <!-- 지표 -->
                        <div class="flex flex-col w-20 h-20 rounded-full p-2 bg-red-200">
                            <div class="text-white mx-auto mt-auto text-base">
                                {{modalStore.selectPlayer.playCount}}
                            </div>
                            <div class="text-white mx-auto mb-auto text-xs">
                                출전경기
                            </div>
                        </div>

                    </div>
                </div>

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

        const formatNumber = (number) => {
            if (number === undefined || number === null || isNaN(number)) {
                return '';
            }
            return number % 1 === 0 ? number : number.toFixed(2);
        };

        return { modalStore, formatNumber }
    },
    data(){
        return {

        }
    },
    methods: {
        setDefaultImage(event) {
            event.target.src = './assets/logo.png';
        },

    },
}
</script>
<style scoped>



</style>
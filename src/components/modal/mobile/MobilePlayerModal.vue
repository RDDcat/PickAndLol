<template>
<div class="fixed overscroll-contain bg-opacity-90 bg-point-600 flex w-full h-screen z-50" @click.stop="close">
    <!-- 전체 프레임 -->
    <div class="relative w-full flex flex-col" >
        <!-- 타이틀 -->
        <div class="w-full flex px-8 my-4 ">
            <div class="w-6"></div>
            <!-- 텍스트 -->
            <div class="w-full mx-auto flex flex-col text-white ">
                <div class="mx-auto text-sm">
                    {{modalStore.selectPlayer.playerPosition}}
                </div>
                <div class="flex text-xl">
                    <div class="mx-auto">
                        {{modalStore.selectPlayer.clubName}} {{modalStore.selectPlayer.playerName}}
                    </div>
                </div>
            </div>
            <img class="my-auto w-6 h-6 object-contain" src="@/assets/arrow_back.svg">
        </div>        
        <!-- 윗 프레임 -->
        <div class="relative w-full h-5/6 bg-white flex flex-col" @click.stop>
            <!-- 첫 섹터 -->
            <div class="w-full flex mx-auto">
                <!-- 선수 카드 -->
                <button @click="close" 
                    class="w-1/2 my-2 aspect-[2/3] flex flex-col rounded-lg cursor-pointer">
                    <!-- 카드 -->
                    <div class="shadow-md m-auto">
                        <!-- 선수 카드 내용 -->
                        <div class="px-2 font-bold text-sm">
                            {{modalStore.selectPlayer.playerName}}
                        </div>
                        <div class="w-full px-2 flex text-xs">
                            <div class="my-auto font-medium text-gray-600" v-if="modalStore.selectPlayer.playerPosition">{{modalStore.selectPlayer.playerPosition.toUpperCase()}} </div>
                            <img class="object-cover mx-1 w-4 h-4" :src="'./assets/logo/color_'+modalStore.selectPlayer.clubName+'.png'"
                                @error="setDefaultImage($event)">
                            <div class="flex my-auto font-medium text-red-600">
                                {{modalStore.selectPlayer.vp}}
                                <img class="ml-1 w-3 h-3" src="@/assets/icon/vp.png">
                            </div>
                        </div>
                        <!-- 선수 이미지 -->
                        <div class="relative w-full pt-[120%]">
                            <div class="absolute inset-2 bg-gray-100 rounded-lg"></div>
                            <div class="absolute inset-2 bg-gray-100 rounded-lg flex">
                                <img class="w-full object-cover object-top rounded-lg"
                                @error="setDefaultImage($event)"
                                :src="'./assets/player/'+modalStore.selectPlayer.clubName+'_'+modalStore.selectPlayer.playerName+'.svg'">
                            </div>
                        </div>
                    </div>
                </button>
                <!-- 선수 정보 -->
                <div class="w-1/2 flex flex-col">
                    <div class="flex text-base my-auto mx-auto">{{ selectedPlayerInfo }} <div class="w-4"></div> </div>
                </div>
            </div>
            <!-- 지표 섹터 -->
            <div class="w-full flex flex-col my-2">
                <!-- 지표 타이틀 -->
                <div class="mx-auto text-point-600 ">플레이 지표</div>
                <!-- 지표 정보 -->
                <div class="px-8 flex flex-wrap justify-center gap-2 mt-4">
                    <!-- 지표 -->
                    <div class="flex flex-col w-24 h-24 rounded-full p-2 bg-red-200">
                        <div class="text-white mx-auto mt-auto text-lg font-bold">
                            {{formatNumber(modalStore.selectPlayer.kda)}}
                        </div>
                        <div class="text-white mx-auto mb-auto text-sm">
                            KDA
                        </div>
                    </div>
                    <!-- 지표 -->
                    <div class="flex flex-col w-24 h-24 rounded-full p-2 bg-red-200">
                        <div class="text-white mx-auto mt-auto text-lg font-bold">
                            {{modalStore.selectPlayer.damage}}
                        </div>
                        <div class="text-white mx-auto mb-auto text-sm">
                            Damage
                        </div>
                    </div>
                    <!-- 지표 -->
                    <div class="flex flex-col w-24 h-24 rounded-full p-2 bg-red-200">
                        <div class="text-white mx-auto mt-auto text-lg font-bold">
                            {{formatNumber(modalStore.selectPlayer.killRate)}}
                        </div>
                        <div class="text-white mx-auto mb-auto text-sm">
                            킬관여율
                        </div>
                    </div>
                    <!-- 지표 -->
                    <div class="flex flex-col w-24 h-24 rounded-full p-2 bg-red-200">
                        <div class="text-white mx-auto mt-auto text-lg font-bold">
                            {{modalStore.selectPlayer.playCount}}
                        </div>
                        <div class="text-white mx-auto mb-auto text-sm">
                            출전경기
                        </div>
                    </div>
                    <!-- 지표 -->
                    <div class="flex flex-col w-24 h-24 rounded-full p-2 bg-red-200">
                        <div class="text-white mx-auto mt-auto text-lg font-bold">
                            {{modalStore.selectPlayer.cs}}
                        </div>
                        <div class="text-white mx-auto mb-auto text-sm">
                            cs
                        </div>
                    </div>
                </div>
            </div>
            <!-- 최근경기 섹터 -->
            <!-- <div class="w-full flex">
                <img class="m-auto w-80 object-contain" src="@/assets/coming-soon-logo.png">
            </div> -->
        </div>
    </div>
</div>
</template>
<script>
import { computed } from 'vue'
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

        const selectedPlayerInfo = computed(() => {
            const infoArray = modalStore.selectPlayer.playerInfo
            if (infoArray && infoArray.length > 0) {
                const randomIndex = Math.floor(Math.random() * infoArray.length)
                return infoArray[randomIndex]
            }
            return ''
        })

        return { modalStore, formatNumber, selectedPlayerInfo }
    },
    data(){
        return {

        }
    },
    methods: {
        setDefaultImage(event) {
            event.target.src = './assets/logo.png';
        },
        close(){
            this.modalStore.isMobilePlayerModal=false
        },

    },
}
</script>
<style scoped>



</style>
<template>
    <div class="fixed inset-0 flex flex-col bg-white z-50">
        <!-- 상단 -->
        <div class="flex py-10 px-6">
            <!-- 뒤로가기 버튼 -->
            <img class="w-6 h-6 object-contain" src="@/assets/arrow_back_black.svg" @click="modalStore.isMobilePlayerListModal=false">
        </div>
        <!-- 필터 -->

        <!-- 스크롤 가능한 콘텐츠 영역 -->
        <div class="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar">
        <!-- 선수 카드 그리드 -->
        <div class="grid grid-cols-2 gap-2 p-4">
            <template v-for="(player, index) in cacheStore.players" :key="index">
            <div v-if="(this.cacheStore.mainLineNav.toLowerCase() === player.playerPosition || this.cacheStore.mainLineNav==='전체') &&
                        (this.cacheStore.mainTeamNav=== player.clubName || this.cacheStore.mainTeamNav=== 'LCK')"
                class="w-full">
                <!-- 선수 카드 -->
                <button @click="clickPlayer(player)" class="relative w-full aspect-[2/3] flex flex-col rounded-lg"
                        :class="hover===index?'shadow-2xl':'shadow-md'"
                        @mouseover="hover=index"
                        @mouseleave="hover=''">
                
                    <!-- 선수 카드 내용 -->
                    <div class="px-2 font-bold text-sm">
                        {{player.playerName}}
                    </div>
                    <div class="w-full px-2 flex text-xs">
                        <div class="my-auto font-medium text-gray-600" v-if="player.playerPosition">{{player.playerPosition.toUpperCase()}} </div>
                        <img class="object-cover mx-1 w-4 h-4" :src="'./assets/logo/color_'+player.clubName+'.png'"
                            @error="setDefaultImage($event)">
                        <div class="flex my-auto font-medium text-red-600">
                        {{player.vp}}
                        <img class="ml-1 w-3 h-3" src="@/assets/icon/vp.png">
                        </div>
                    </div>
                    <!-- 선수 이미지 -->
                    <div class="relative w-full pt-[120%]"> <!-- 4:5 비율 유지 -->
                        <div class="absolute inset-2 bg-gray-100 rounded-lg"></div>
                        <div class="absolute inset-2 bg-gray-100 rounded-lg flex">
                            <img class="w-full object-cover object-top rounded-lg"
                            @error="setDefaultImage($event)"
                            :src="'./assets/player/'+player.clubName+'_'+player.playerName+'.svg'">
                        </div>
                    </div>
                </button>
                <!-- 선택하기 버튼 -->
                <button v-if="!cacheStore.isSave &&
                        (this.cacheStore.mainLineNav.toLowerCase() === player.playerPosition || this.cacheStore.mainLineNav==='전체') &&
                        (this.cacheStore.mainTeamNav=== player.clubName || this.cacheStore.mainTeamNav=== 'LCK')"
                    @click="click(player.playerName);"
                    class="w-full h-10 my-2 inline-flex items-center justify-center overflow-hidden text-xs font-medium rounded-lg group bg-point-50 group-hover:bg-gray-dark">
                    <span class="relative w-52  px-5 py-3 transition-all ease-in duration-75 rounded-md  group-hover:text-white group-hover:bg-gray-dark"
                        :class="this.cacheStore.myTeam.players.top.name ===player.playerName ||
                        this.cacheStore.myTeam.players.jgl.name ===player.playerName ||
                        this.cacheStore.myTeam.players.mid.name ===player.playerName ||
                        this.cacheStore.myTeam.players.adc.name ===player.playerName ||
                        this.cacheStore.myTeam.players.sup.name ===player.playerName
                        ? 'bg-point-600 text-white group-hover:bg-gray-dark group-hover:text-white' : 'text-point-600'">
                        {{ this.cacheStore.myTeam.players.top.name ===player.playerName ||
                        this.cacheStore.myTeam.players.jgl.name ===player.playerName ||
                        this.cacheStore.myTeam.players.mid.name ===player.playerName ||
                        this.cacheStore.myTeam.players.adc.name ===player.playerName ||
                        this.cacheStore.myTeam.players.sup.name ===player.playerName
                        ? '선택완료' : '선택하기'}}
                    </span>
                </button>
            </div>
            </template>
        </div>
        </div>
    </div>
</template>
<script>
import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'
import {useStaticStore} from '@/store/staticStore'

export default {
    components: {
    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()
        const staticStore = useStaticStore()

        const formatNumber = (number) => {
            if (number === undefined || number === null || isNaN(number)) {
                return '';
            }
            return number % 1 === 0 ? number : number.toFixed(2);
        };

        return { cacheStore, modalStore, staticStore, formatNumber }
    },
    data(){
        return {

        }
    },
    methods: {
        setDefaultImage(event) {
            event.target.src = './assets/logo.png';
            event.target.style.opacity = '0.2';
        },
    },
}
</script>
<style scoped>


.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* WebKit */
}

</style>
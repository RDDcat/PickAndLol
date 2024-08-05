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
        <div v-if="players && players.length > 0" class="grid grid-cols-2 gap-2 p-4">
            <template v-for="player in players" :key="player.playerId">
            <div v-if="showPlayer(player)"
                class="w-full">
                <!-- 선수 카드 -->
                <button @click="clickSpin(player.playerId)" 
                        class="relative w-full aspect-[2/3] flex flex-col rounded-lg cursor-pointer"
                        :class="{'flipped': isFlipped[player.playerId], 'shadow-2xl': isFlipped[player.playerId], 'shadow-md': !isFlipped[player.playerId]}">

                    <!-- 카드 앞면 -->
                    <div class="card-front">
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
                    </div>
                    <!-- 카드 뒷면 -->
                    <div class="card-back">
                        <!-- 여기에 뒷면 컴포넌트를 추가하세요 -->
                        <div class="p-4">
                            <h3 class="font-bold">{{ player.playerName }} 상세 정보</h3>
                            <!-- 추가적인 선수 정보를 여기에 표시 -->
                        </div>
                    </div>
                </button>
                <!-- 선택하기 버튼 -->
                <button v-if="!cacheStore.isSave &&
                        (this.cacheStore.mainLineNav.toLowerCase() === player.playerPosition || this.cacheStore.mainLineNav==='전체') &&
                        (this.cacheStore.mainTeamNav=== player.clubName || this.cacheStore.mainTeamNav=== 'LCK')"
                    @click="click(player.playerName);"
                    class="w-full h-10 my-2 inline-flex items-center justify-center overflow-hidden text-xs font-medium rounded-lg group  group-hover:bg-gray-dark">
                    <span class="relative w-52  px-5 py-3 transition-all ease-in duration-75 rounded-md  group-hover:text-white group-hover:bg-gray-dark"
                        :class="this.cacheStore.myTeam.players.top.name ===player.playerName ||
                        this.cacheStore.myTeam.players.jgl.name ===player.playerName ||
                        this.cacheStore.myTeam.players.mid.name ===player.playerName ||
                        this.cacheStore.myTeam.players.adc.name ===player.playerName ||
                        this.cacheStore.myTeam.players.sup.name ===player.playerName
                        ? 'bg-gray-dark text-white' : 'bg-point-50 text-point-600'">
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
        <div v-else class="text-center p-4">
            선수 데이터를 불러오는 중입니다...
        </div>
        </div>
    </div>
</template>
<script>
import { ref, computed, onMounted, watch } from 'vue'
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
        const isFlipped = ref({})

        const players = computed(() => cacheStore.players || [])

        const initializeIsFlipped = () => {
            players.value.forEach(player => {
                if (!(player.playerId in isFlipped.value)) {
                    isFlipped.value[player.playerId] = false
                }
            })
        }

        const clickSpin = (playerId) => {
            if (playerId in isFlipped.value) {
                isFlipped.value[playerId] = !isFlipped.value[playerId]
            } else {
                isFlipped.value[playerId] = true
            }
        }
        const showPlayer = (player) => {
            return (cacheStore.mainLineNav.toLowerCase() === player.playerPosition || cacheStore.mainLineNav === '전체') &&
                (cacheStore.mainTeamNav === player.clubName || cacheStore.mainTeamNav === 'LCK')
        }

        const formatNumber = (number) => {
            if (number === undefined || number === null || isNaN(number)) {
                return '';
            }
            return number % 1 === 0 ? number : number.toFixed(2);
        };
        onMounted(() => {
            initializeIsFlipped()
        })

        watch(players, () => {
            initializeIsFlipped()
        })


        return { cacheStore, modalStore, staticStore, players, isFlipped, initializeIsFlipped, clickSpin, showPlayer, formatNumber }
    },
    data(){
        return {
            step:0,

            selected:0,

            onlyTeams:[
                {name:'젠지', team:'GEN', img:'./assets/logo/GEN.png', colorImg:'./assets/logo/color_GEN.png',}, 
                {name:'T1', team:'T1', img:'./assets/logo/T1.png', colorImg:'./assets/logo/color_T1.png',}, 
                {name:'KT', team:'KT', img:'./assets/logo/KT.png', colorImg:'./assets/logo/color_KT.png',}, 
                {name:'한화생명', team:'HLE', img:'./assets/logo/HLE.png', colorImg:'./assets/logo/color_HLE.png',}, 
                // {name:'DK', team:'DK', img:'./assets/logo/DK.png', colorImg:'./assets/logo/color_DK.png',}, 
                {name:'피어엑스', team:'FOX', img:'./assets/logo/FOX.png', colorImg:'./assets/logo/color_FOX.png',}, 
                {name:'광동', team:'KDF', img:'./assets/logo/KDF.png', colorImg:'./assets/logo/color_KDF.png',}, 
                {name:'OK저축은행', team:'BRO', img:'./assets/logo/BRO.png', colorImg:'./assets/logo/color_BRO.png',}, 
                {name:'DRX', team:'DRX', img:'./assets/logo/DRX.png', colorImg:'./assets/logo/color_DRX.png',}, 
                {name:'농심', team:'NS', img:'./assets/logo/NS.png', colorImg:'./assets/logo/color_NS.png',}, 
            ],
            lines:[
                {name:'전체', img:'./assets/icon/total_icon.png'}, 
                {name:'TOP', img:'./assets/icon/top_icon.png'}, 
                {name:'JGL', img:'./assets/icon/jgl_icon.png'}, 
                {name:'MID', img:'./assets/icon/mid_icon.png'}, 
                {name:'ADC', img:'./assets/icon/adc_icon.png'}, 
                {name:'SUP', img:'./assets/icon/sup_icon.png'}, 
            ],
        }
    },
    methods: {
        lineFilter(index){
            if(this.lines[index].name===this.cacheStore.mainLineNav){
                this.cacheStore.mainLineNav=this.lines[0].name
                return
            }
            this.cacheStore.mainLineNav = this.lines[index].name

        },
        teamFilter(name){
            this.cacheStore.mainTeamNav = name

        },
        clickPlayer(player){
            this.modalStore.isPlayerModal=true
            this.modalStore.selectPlayer=player
        },
        // 토탈 vp 계산
        count(){
            this.cacheStore.myTeam.totalVP = this.cacheStore.myTeam.players.top.vp + this.cacheStore.myTeam.players.jgl.vp + this.cacheStore.myTeam.players.mid.vp + this.cacheStore.myTeam.players.adc.vp + this.cacheStore.myTeam.players.sup.vp
        },
        click(name){
            let players = this.cacheStore.players

            // 선수 재선택시 초기화
            if(this.cacheStore.myTeam.players.top.name===name){
                this.cacheStore.myTeam.players.top={isMvp: false, id:"", name:"", team:"", vp:0, img: "./assets/logo.png"}
                this.count()
                return
            }
            if(this.cacheStore.myTeam.players.jgl.name===name){
                this.cacheStore.myTeam.players.jgl={isMvp: false, id:"", name:"", team:"", vp:0, img: "./assets/logo.png"}
                this.count()
                return
            }
            if(this.cacheStore.myTeam.players.mid.name===name){
                this.cacheStore.myTeam.players.mid={isMvp: false, id:"", name:"", team:"", vp:0, img: "./assets/logo.png"}
                this.count()
                return
            }
            if(this.cacheStore.myTeam.players.adc.name===name){
                this.cacheStore.myTeam.players.adc={isMvp: false, id:"", name:"", team:"", vp:0, img: "./assets/logo.png"}
                this.count()
                return
            }
            if(this.cacheStore.myTeam.players.sup.name===name){
                this.cacheStore.myTeam.players.sup={isMvp: false, id:"", name:"", team:"", vp:0, img: "./assets/logo.png"}
                this.count()
                return
            }


            for(let player of players){
                if(player.playerName===name){
                    if(player.playerPosition === 'top'){
                        this.cacheStore.myTeam.players.top.isMvp = false
                        this.cacheStore.myTeam.players.top.id = player.playerId
                        this.cacheStore.myTeam.players.top.name = player.playerName
                        this.cacheStore.myTeam.players.top.team = player.clubName
                        this.cacheStore.myTeam.players.top.img = './assets/player/'+player.clubName+'_'+player.playerName+'.svg'
                        this.cacheStore.myTeam.players.top.vp = player.vp
                    }
                    else if(player.playerPosition === 'jgl'){
                        this.cacheStore.myTeam.players.jgl.isMvp = false
                        this.cacheStore.myTeam.players.jgl.id = player.playerId
                        this.cacheStore.myTeam.players.jgl.name = player.playerName
                        this.cacheStore.myTeam.players.jgl.team = player.clubName
                        this.cacheStore.myTeam.players.jgl.img = './assets/player/'+player.clubName+'_'+player.playerName+'.svg'
                        this.cacheStore.myTeam.players.jgl.vp = player.vp
                    }
                    else if(player.playerPosition === 'mid'){
                        this.cacheStore.myTeam.players.mid.isMvp = false
                        this.cacheStore.myTeam.players.mid.id = player.playerId
                        this.cacheStore.myTeam.players.mid.name = player.playerName
                        this.cacheStore.myTeam.players.mid.team = player.clubName
                        this.cacheStore.myTeam.players.mid.img = './assets/player/'+player.clubName+'_'+player.playerName+'.svg'
                        this.cacheStore.myTeam.players.mid.vp = player.vp
                    }
                    else if(player.playerPosition === 'adc'){
                        this.cacheStore.myTeam.players.adc.isMvp = false
                        this.cacheStore.myTeam.players.adc.id = player.playerId
                        this.cacheStore.myTeam.players.adc.name = player.playerName
                        this.cacheStore.myTeam.players.adc.team = player.clubName
                        this.cacheStore.myTeam.players.adc.img = './assets/player/'+player.clubName+'_'+player.playerName+'.svg'
                        this.cacheStore.myTeam.players.adc.vp = player.vp
                    }
                    else if(player.playerPosition === 'sup'){
                        this.cacheStore.myTeam.players.sup.isMvp = false
                        this.cacheStore.myTeam.players.sup.id = player.playerId
                        this.cacheStore.myTeam.players.sup.name = player.playerName
                        this.cacheStore.myTeam.players.sup.team = player.clubName
                        this.cacheStore.myTeam.players.sup.img = './assets/player/'+player.clubName+'_'+player.playerName+'.svg'
                        this.cacheStore.myTeam.players.sup.vp = player.vp
                    }
                }
            }
            this.count()
        },
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

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 0.5rem;
}

.card-front {
  background-color: #fff;
  z-index: 2;
}

.card-back {
  background-color: #f0f0f0;
  transform: rotateY(180deg);
}
.relative {
  perspective: 1000px;
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
}

.flipped .card-front {
  transform: rotateY(180deg);
}

.flipped .card-back {
  transform: rotateY(0deg);
}
</style>
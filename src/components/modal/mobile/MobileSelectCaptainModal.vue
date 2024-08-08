<template>
    <!-- 주장 설정 모달 -->
    <div class="fixed overscroll-contain flex flex-col bg-white bg-opacity-90 backdrop-blur-sm w-full h-full z-50">
        <div class="flex py-10 px-6" @click="modalStore.isMobileSelectCaptainModal=false">
            <!-- 뒤로가기 버튼 -->
            <img class="w-6 h-6 object-contain" src="@/assets/arrow_back_black.svg" >
            <div class="mx-auto">
                주장선택
            </div>
            <div class="w-6"></div>
        </div>
        <div class="relative mx-auto mt-2 md:mt-24 flex flex-col w-full max-w-[90vw] md:max-w-[70rem] px-4">
            <!-- 타이틀 텍스트 -->
            <div class="flex flex-col">
                <div class="mt-2 flex gap-2 ">
                    <!-- 응원팀 아이콘 -->
                    <img class="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full" :src="cacheStore.myTeam.teamLogo">
                    <div class="flex text-black text-xl md:text-4xl">
                        <div class="text-point-600">
                            원하는 주장
                        </div>
                        을 선택하세요
                    </div>
                </div>
                <div class="mt-4 md:mt-10 text-gray-400 text-sm md:text-lg">주장은 점수가 두배로 적용됩니다.</div>
                
                <div v-show="isMyTeam" 
                    class="mx-auto mt-2 md:mt-4 text-point-600 text-lg md:text-2xl text-center">
                    자신의 응원팀에서 주장을 설정해야합니다.
                </div>
                <div v-show="isPlayer" 
                    class="mx-auto mt-2 md:mt-4 text-point-600 text-lg md:text-2xl text-center">
                    선수를 선택해주세요.
                </div>
            </div>
            
            <!-- 주장 선택 창 -->
            <div class="mx-auto mt-8 md:mt-16 flex flex-col w-full">
                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <!-- 각 포지션별 선수 -->
                    <template v-for="(position, index) in ['top', 'jgl', 'mid', 'adc', 'sup']" :key="index">
                        <div class="flex flex-col items-center">
                            <img class="w-8 h-8 md:w-auto md:h-auto" :src="`./assets/icon/${position}_icon.png`">
                            <img class="my-2 md:my-4 rounded-full w-20 h-20 md:w-36 md:h-36 object-cover" 
                                :class="click === index + 1 ? 'outline-none ring-red-500 ring-4' : ''" 
                                :src="cacheStore.myTeam.players[position].img"
                                @click="click = index + 1">
                            <div class="text-center text-white text-sm md:text-xl">{{cacheStore.myTeam.players[position].name}}</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <!-- 하단 버튼 -->
        <div class="p-4 mt-auto mb-2">
            <button @click="select()" 
                    class="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
                선택하기
            </button>
        </div>
    </div>
</template>
<script>
import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'


export default {
    components: {

    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()

        return { cacheStore, modalStore }
    },
    data(){
        return {
            isMyTeam:false,
            isPlayer:false,
            click: 0,
        }
    },
    methods: {
        valid(){
            // 선수가 있는지 확인
            if(!this.cacheStore.myTeam.players.top.name && this.click===1){
                this.isPlayer=true
                this.isMyTeam=false
                return true
            }
            else if(!this.cacheStore.myTeam.players.jgl.name && this.click===2){
                this.isPlayer=true
                this.isMyTeam=false
                return true
            }
            else if(!this.cacheStore.myTeam.players.mid.name && this.click===3){
                this.isPlayer=true
                this.isMyTeam=false
                return true
            }
            else if(!this.cacheStore.myTeam.players.adc.name && this.click===4){
                this.isPlayer=true
                this.isMyTeam=false
                return true
            }
            else if(!this.cacheStore.myTeam.players.sup.name && this.click===5){
                this.isPlayer=true
                this.isMyTeam=false
                return true
            }

            // 팀이 맞는지 확인
            // 24.08.08 삭제
            // if(this.click===1){
            //     if(this.cacheStore.myTeam.team!==this.cacheStore.myTeam.players.top.team){
            //         this.isMyTeam =true
            //         this.isPlayer=false
            //         return true
            //     }
            // } else if(this.click===2){
            //     if(this.cacheStore.myTeam.team!==this.cacheStore.myTeam.players.jgl.team){
            //         this.isMyTeam =true
            //         this.isPlayer=false
            //         return true
            //     }
            // } else if(this.click===3){
            //     if(this.cacheStore.myTeam.team!==this.cacheStore.myTeam.players.mid.team){
            //         this.isMyTeam =true
            //         this.isPlayer=false
            //         return true
            //     }
            // } else if(this.click===4){
            //     if(this.cacheStore.myTeam.team!==this.cacheStore.myTeam.players.adc.team){
            //         this.isMyTeam =true
            //         this.isPlayer=false
            //         return true
            //     }
            // } else if(this.click===5){
            //     if(this.cacheStore.myTeam.team!==this.cacheStore.myTeam.players.sup.team){
            //         this.isMyTeam =true
            //         this.isPlayer=false
            //         return true
            //     }
            // }
            

        },
        select(){
            if(this.valid())return

            if(this.click===1 && this.cacheStore.myTeam.players.top.name){
                this.cacheStore.myTeam.players.top.isMvp = true
                this.cacheStore.myTeam.players.jgl.isMvp = false
                this.cacheStore.myTeam.players.mid.isMvp = false
                this.cacheStore.myTeam.players.adc.isMvp = false
                this.cacheStore.myTeam.players.sup.isMvp = false
            } else if(this.click===2 && this.cacheStore.myTeam.players.jgl.name){
                this.cacheStore.myTeam.players.top.isMvp = false
                this.cacheStore.myTeam.players.jgl.isMvp = true
                this.cacheStore.myTeam.players.mid.isMvp = false
                this.cacheStore.myTeam.players.adc.isMvp = false
                this.cacheStore.myTeam.players.sup.isMvp = false
            } else if(this.click===3 && this.cacheStore.myTeam.players.mid.name){
                this.cacheStore.myTeam.players.top.isMvp = false
                this.cacheStore.myTeam.players.jgl.isMvp = false
                this.cacheStore.myTeam.players.mid.isMvp = true
                this.cacheStore.myTeam.players.adc.isMvp = false
                this.cacheStore.myTeam.players.sup.isMvp = false
            } else if(this.click===4 && this.cacheStore.myTeam.players.adc.name){
                this.cacheStore.myTeam.players.top.isMvp = false
                this.cacheStore.myTeam.players.jgl.isMvp = false
                this.cacheStore.myTeam.players.mid.isMvp = false
                this.cacheStore.myTeam.players.adc.isMvp = true
                this.cacheStore.myTeam.players.sup.isMvp = false
            } else if(this.click===5 && this.cacheStore.myTeam.players.sup.name){
                this.cacheStore.myTeam.players.top.isMvp = false
                this.cacheStore.myTeam.players.jgl.isMvp = false
                this.cacheStore.myTeam.players.mid.isMvp = false
                this.cacheStore.myTeam.players.adc.isMvp = false
                this.cacheStore.myTeam.players.sup.isMvp = true
            }
            this.modalStore.isSelectCaptainModal = false
        }
    },
}
</script>
<style scoped>



</style>
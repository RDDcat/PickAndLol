<template>
    <!-- 주장 설정 모달 -->
    <div class="fixed overscroll-contain flex bg-red-950 bg-opacity-90 backdrop-blur-sm w-full h-[200vw] z-40">
        <div class="relative mx-auto mt-24 flex flex-col max-w-[70rem]">
            <!-- back -->
            <div class="absolute right-4 top-4 text-white" @click="modalStore.isSelectCaptainModal = false">
                x
            </div>
            <!-- 타이틀 택스트 -->
            <div class="mx-auto flex flex-col">
                <div class="mx-auto mt-4 flex gap-2">
                    <!-- 응원팀 아이콘 -->
                    <img class="w-10 h-10 my-auto object-cover rounded-full" :src="cacheStore.myTeam.teamLogo">
                    <div class="my-auto text-white text-4xl">원하는 주장을 선택하세요</div>
                </div>
                <div class="mx-auto mt-10 text-white text-lg">(주장은 점수 두배)</div>
                
                <div v-show="isMyTeam" 
                    class="mx-auto mt-4 text-red-200 text-2xl">
                    자신의 응원팀에서 주장을 설정해야합니다.
                </div>
                <div v-show="isPlayer" 
                    class="mx-auto mt-4 text-red-200 text-2xl">
                    선수를 선택해주세요.
                </div>
            </div>
            
            <!-- 주장 선택 창 -->
            <div class="mx-auto mt-16 flex flex-col">
                <div class="grid grid-cols-5">
                    <!-- top -->
                    <div class="flex flex-col w-48 h-72 ">
                        <img class="m-auto" src="@/assets/icon/top_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===1?'outline-none ring-red-500 ring-4':''" 
                            :src="cacheStore.myTeam.players.top.img"
                            @click="click=1">
                        <div class="text-center text-white text-xl">{{cacheStore.myTeam.players.top.name}}</div>
                    </div>
                    <!-- jgl -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/jgl_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===2?'outline-none ring-red-500 ring-4':''" 
                            :src="cacheStore.myTeam.players.jgl.img"
                            @click="click=2">
                        <div class="text-center text-white text-xl">{{cacheStore.myTeam.players.jgl.name}}</div>
                    </div>

                    <!-- mid -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/mid_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===3?'outline-none ring-red-500 ring-4':''" 
                            :src="cacheStore.myTeam.players.mid.img"
                            @click="click=3">
                        <div class="text-center text-white text-xl">{{cacheStore.myTeam.players.mid.name}}</div>
                    </div>

                    <!-- adc -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/adc_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===4?'outline-none ring-red-500 ring-4':''" 
                            :src="cacheStore.myTeam.players.adc.img"
                            @click="click=4">
                        <div class="text-center text-white text-xl">{{cacheStore.myTeam.players.adc.name}}</div>
                    </div>

                    <!-- sup -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/sup_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===5?'outline-none ring-red-500 ring-4':''" 
                            :src="cacheStore.myTeam.players.sup.img"
                            @click="click=5">
                        <div class="text-center text-white text-xl">{{cacheStore.myTeam.players.sup.name}}</div>
                    </div>
                </div>
            </div>

            <!-- 선택하기 버튼 -->
            <div class="mx-auto mt-14">
                <button type="button" class="text-red-600 bg-gradient-to-r from-gray-100 via-white to-gray-100 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-10 py-2.5 text-center"
                    @click="select()">
                    선택하기
                </button>
            </div>
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
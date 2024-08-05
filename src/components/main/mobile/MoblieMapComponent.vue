<template>
    <div class="flex flex-col w-full">
        <!-- 가이드 텍스트 -->
        <div class="my-2">
            <div class="flex w-full my-2 px-8 text-point-600 text-sm ">
                2/3
            </div>
            <div class="flex w-full px-8 text-xl">
                <div class="text-point-600">
                    내 선수단</div><div>을 만들어주세요</div>
            </div>
            <div class="flex w-full my-4 px-8 text-gray-300 text-sm ">
                선수 총 가치는 최대 {{cacheStore.limitVp}}까지 입니다.
            </div>
        </div>

        <!-- 지도 -->
        <div class="flex mx-auto">
            <img class="mx-auto w-96" src="@/assets/map.png" alt="">
        </div>
        
        <!-- 현재 선수단 가치 -->
        <div class="flex mx-auto px-4 py-1.5 bg-gray-200 rounded-md">
            <div class="">
                선수단 가치 
            </div>
            <div class="text-point-600 mx-1">
                - {{cacheStore.myTeam.totalVP}}
            </div>
            <img class="my-auto w-4 h-4 object-cover" src="@/assets/icon/vp.png" alt="">
        </div>

        <!-- 선수단 리스트 -->
        <div class="flex flex-col w-full">
            <!-- 탑 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.top.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/top_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.top.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.top.name ? cacheStore.myTeam.players.top.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.top.name ? cacheStore.myTeam.players.top.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.top.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>
            <!-- 정글 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.jgl.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/jgl_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.jgl.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.jgl.name ? cacheStore.myTeam.players.jgl.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.jgl.name ? cacheStore.myTeam.players.jgl.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.jgl.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>

            <!-- 미드 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.mid.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/mid_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.mid.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.mid.name ? cacheStore.myTeam.players.mid.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.mid.name ? cacheStore.myTeam.players.mid.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.mid.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>

            <!-- 바텀 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.adc.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/adc_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.adc.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.adc.name ? cacheStore.myTeam.players.adc.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.adc.name ? cacheStore.myTeam.players.adc.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.adc.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>

            <!-- 서폿 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.sup.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/sup_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.sup.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.sup.name ? cacheStore.myTeam.players.sup.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.sup.name ? cacheStore.myTeam.players.sup.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.sup.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>
        </div>
        
        <!-- 버튼 -->
        <div class="w-full flex items-center space-x-1 px-6 my-4">
            <!-- 주장 설정하기 -->
            <button class="relative py-2.5 px-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-white ring-1 ring-point-600 "
                @click="modalStore.isMobileSelectCaptainModal=true">
                주장 설정하기
            </button>

            <!-- 다음 -->            
            <button @click="submit"
                class="flex-grow bg-point-600 text-white text-base py-2.5 rounded-lg">
                다음
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
            selectAllFlag: false,
            selectTeamFlag: false,
            moreThanTwoFlag: false,
            moreThanTwoFlagText:'',
            oneFromOneFlag: false,
            vpFlag: false,
            mvpFlag: false,
        }
    },
    methods: {
        setDefaultImage(event) {
            event.target.src = './assets/logo.png';
            event.target.style.opacity = '0.2';
        },
        valid(){
            // selectTeamFlag Validation
            if(!this.cacheStore.myTeam.team){
                this.selectTeamFlag = true
                return true
            } else{
                this.selectTeamFlag = false
            }

            // selectAllFlag Validation            
            if(!this.cacheStore.myTeam.players.top.name ||
                !this.cacheStore.myTeam.players.jgl.name ||
                !this.cacheStore.myTeam.players.mid.name ||
                !this.cacheStore.myTeam.players.adc.name ||
                !this.cacheStore.myTeam.players.sup.name ){
                this.selectAllFlag = true
                return true
            } else{
                this.selectAllFlag = false
            }



            // moreThanTwoFlag Validation
            let count=0;
            for(let index in this.cacheStore.myTeam.players){
                if(this.cacheStore.myTeam.players[index].team===this.cacheStore.myTeam.team){
                    count++
                }
            }
            if(count>2){
                this.moreThanTwoFlag = true
                this.moreThanTwoFlagText='응원팀 선수가 너무 많습니다. 다시 구성해주세요.'
                return true
            }else if(count <2){
                this.moreThanTwoFlagText='응원팀 선수가 너무 적습니다. 다시 구성해주세요.'
                this.moreThanTwoFlag = true
                return true


            } else{
                this.moreThanTwoFlag = false
            }
            
            // oneFromOneFlag Validation
            let hold=[]
            for(let index in this.cacheStore.myTeam.players){
                hold.push(this.cacheStore.myTeam.players[index].team);
            }
            let uniqueTeams = new Set(hold);
            if(uniqueTeams.size<4){
                this.oneFromOneFlag = true
                return true
            } else{
                this.oneFromOneFlag = false
            }

            // vpFlag Validation
            if(this.cacheStore.myTeam.totalVP > this.cacheStore.limitVp){
                this.vpFlag = true
                return true
            } else{
                this.vpFlag = false
            }
            // console.log(!this.cacheStore.myTeam.players.top.isMvp &&
            //     !this.cacheStore.myTeam.players.jgl.isMvp &&
            //     !this.cacheStore.myTeam.players.mid.isMvp &&
            //     !this.cacheStore.myTeam.players.adc.isMvp &&
            //     !this.cacheStore.myTeam.players.sup.isMvp)
            // console.log(this.cacheStore.myTeam.players)
            // mvpFlag Validation
            if(!this.cacheStore.myTeam.players.top.isMvp &&
                !this.cacheStore.myTeam.players.jgl.isMvp &&
                !this.cacheStore.myTeam.players.mid.isMvp &&
                !this.cacheStore.myTeam.players.adc.isMvp &&
                !this.cacheStore.myTeam.players.sup.isMvp ){
                this.mvpFlag = true
                return true
            } else{
                this.mvpFlag = false
            }


        },
        submit(){
            // 예외처리
            if(this.valid())return

            // 팀명 설정 모달 켜기
            this.modalStore.isSetTeamNameModal = true

        },

    },
    // 초기 설정
    mounted(){

    }
}
</script>
<style scoped>



</style>
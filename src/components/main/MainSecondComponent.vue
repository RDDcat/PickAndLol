<template>
    <!-- 선수단 등록 페이지 -->
    <div class="w-full flex flex-col mb-12">
        <!-- 공지 -->
        <div class="flex w-1/3 py-2 bg-gray-100 rounded-b-lg mx-auto">
            <div class="mx-auto text-sm text-gray-500">
                변경가능시간 : 매일 밤 자정 00:00 ~ 17:00
            </div>
        </div>
        
        <!-- 히어로 페이지 -->
        <div class="w-full flex">
            <!-- 선수 라인 선택지 -->
            <div class="w-full flex flex-col">
                <!-- 이미지 컨테이너 (지도좌표) -->
                <div class="relative flex mx-auto">
                    <img class="mx-auto w-96" src="@/assets/map.png" alt="">
                    <div class="absolute left-6 top-6">
                        <img @click="cacheStore.mainLineNav='TOP'" v-if="cacheStore.myTeam.players.top.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.top.img">
                        <div v-if="cacheStore.myTeam.players.top.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                    <div class="absolute left-20 top-24">
                        <img @click="cacheStore.mainLineNav='JGL'" v-if="cacheStore.myTeam.players.jgl.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.jgl.img">
                        <div v-if="cacheStore.myTeam.players.jgl.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                    <div class="absolute left-40 top-40">
                        <img @click="cacheStore.mainLineNav='MID'" v-if="cacheStore.myTeam.players.mid.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.mid.img">
                        <div v-if="cacheStore.myTeam.players.mid.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                    <div class="absolute right-24 bottom-20">
                        <img @click="cacheStore.mainLineNav='ADC'" v-if="cacheStore.myTeam.players.adc.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.adc.img">
                        <div v-if="cacheStore.myTeam.players.adc.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                    <div class="absolute right-8 bottom-8">
                        <img @click="cacheStore.mainLineNav='SUP'" v-if="cacheStore.myTeam.players.sup.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.sup.img">
                        <div v-if="cacheStore.myTeam.players.sup.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                </div>

                <!-- 유저 정보 -->
                <div class="my-8 mx-auto w-72 flex py-2 px-4 ring-2 ring-red-400 rounded-lg">
                    <!-- 응원팀 -->
                    <div class="w-1/2 flex flex-col">
                        <div class="mx-auto text-red-600">응원팀</div>
                        <div class="flex mx-auto my-auto">
                            <div class="my-auto font-bold text-sm">{{cacheStore.myTeam.team}}</div>
                            <img class="w-8 object-contain" :src="cacheStore.myTeam.teamLogo">
                        </div>
                    </div>
                    <!-- 유저이름 -->
                    <div class="w-1/2 flex flex-col">
                        <div class="mx-auto text-red-600">팀명</div>
                        <div class="flex mx-auto my-auto">
                            <div class="font-bold text-xs">{{cacheStore.myTeam.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 선수 필터 -->
        <div class="mx-auto flex flex-col">
            <!-- 팀 별 필터 -->
            <div class="grid grid-cols-11 gap-10 mx-auto my-4">
                <!-- 팀 -->
                <button v-for="team, index in teams" :key="index">
                    <img class="m-auto w-12 h-12 object-cover" :src="team.colorImg" v-if="team.team==cacheStore.mainTeamNav" @click="teamFilter(teams[0].team)">
                    <img class="m-auto w-12 h-12 object-cover" :src="team.img" v-if="team.team!=cacheStore.mainTeamNav" @click="teamFilter(team.team)">
                    <div class="m-auto my-2 text-center text-xs text-gray-700">
                        {{team.name}}
                    </div>
                </button>
            </div>
            <!-- 라인 별 필터 -->
            <div class="grid grid-cols-6 gap-4 my-4 mr-auto">
                <!-- 라인 -->
                <div v-for="line, index in lines" :key="index">
                    <button @click="lineFilter(index)"
                        type="button" class="flex text-gray-600 bg-gray-200 hover:bg-red-200 rounded-full px-6 py-3"
                        :class="cacheStore.mainLineNav===line.name?'text-white bg-red-500 outline-none':''">
                        <img class="m-auto " :src="line.img">
                        <div class="flex my-auto ml-2 mr-2 text-center text-sm ">
                            {{line.name}}
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- 선수 카드 그리드 -->
        <div class="mx-auto grid grid-cols-5 gap-10">
            <template v-for="player, index in cacheStore.players" :key="index">
                <div v-if="(this.cacheStore.mainLineNav.toLowerCase() === player.playerPosition || this.cacheStore.mainLineNav==='전체') &&
                        (this.cacheStore.mainTeamNav=== player.clubName || this.cacheStore.mainTeamNav=== 'LCK')">
                <!-- 선수 카드 -->
                <button @click="clickPlayer(player)" class="relative w-52 h-72 flex flex-col rounded-lg "
                    :class="hover===index?'shadow-2xl':'shadow-md'"
                    @mouseover="hover=index"
                    @mouseleave="hover=''">
                    
                    <!--선수 정보 -->
                    <div class="font-base mx-auto">
                        {{player.rank}}
                    </div>
                    <div class="px-4 font-bold">
                        {{player.playerName}}
                    </div>
                    <div class="w-full px-4 flex">
                        <div class="my-auto font-medium text-gray-600">{{player.playerPosition.toUpperCase()}} </div>
                        <img class="object-cover mx-2 w-6 h-6" :src="'./assets/logo/color_'+player.clubName+'.png'">
                        <div class="flex my-auto font-medium text-red-600">
                            {{player.vp}}
                            <img class="ml-1 w-5 h-5" src="@/assets/icon/vp.png">
                        </div>
                    </div>
                    <!-- 선수 이미지 -->
                    <div class="relative w-44 h-52 mx-auto mt-auto mb-4">
                        <div class="absolute rounded-lg w-full h-full bg-gray-100"></div>
                        <img class="absolute rounded-lg mx-auto mt-auto mb-3 w-full h-full object-cover" :src="'./assets/player/'+player.clubName+'_'+player.playerName+'.svg'"
                            @error="this.src = './assets/logo.png'">
                        <!-- 호버시 스탯창 -->
                        <div v-show="hover===index" 
                            class="absolute flex flex-col top-0 left-0 w-full h-full bg-black bg-opacity-90 rounded-lg z-20 break-all">
                            <!-- 스탯 정보 -->
                            <div class="mx-auto mt-2 text-gray-400">
                                KDA {{formatNumber(player.kda)}}
                            </div>
                            <div class="my-auto mx-auto flex flex-col">
                                <div class="mx-auto text-white">
                                    시즌 획득 점수
                                </div>
                                <div class="mx-auto  text-white text-2xl font-bold">
                                    {{player.stat}}
                                </div>
                            </div>
                            <div class="mx-auto px-2 mt-auto mb-1 text-white whitespace-pre-wrap ">
                                <!-- {{player.playerInfo}} -->
                            </div>
                            <div class="mx-auto px-2 mb-3 text-gray-400 whitespace-pre-wrap ">
                                click!
                            </div>
                        </div>
                    </div>
                </button>
                </div>
            </template>
        </div>
    </div>
</template>
<script>

import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'

import api from '@/api/api'

export default {
    components: {
        
    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()

        const formatNumber = (number) => {
            return number % 1 === 0 ? number : number.toFixed(2);
        }

        return { cacheStore, modalStore, formatNumber }
    },
    data(){
        return {
            selectAllFlag: false,
            selectTeamFlag: false,
            moreThanTwoFlag: false,
            oneFromOneFlag: false,
            vpFlag: false,
            mvpFlag: false,

            step:0,

            selected:0,
            limitVp:380,

            hover: '',

            teams:[
                {name:'전체', team:'LCK', img:'./assets/logo/lck.png', colorImg:'./assets/logo/lck.png',}, 
                {name:'젠지', team:'GEN', img:'./assets/logo/GEN.png', colorImg:'./assets/logo/color_GEN.png',}, 
                {name:'T1', team:'T1', img:'./assets/logo/T1.png', colorImg:'./assets/logo/color_T1.png',}, 
                {name:'KT', team:'KT', img:'./assets/logo/KT.png', colorImg:'./assets/logo/color_KT.png',}, 
                {name:'한화생명', team:'HLE', img:'./assets/logo/HLE.png', colorImg:'./assets/logo/color_HLE.png',}, 
                {name:'DK', team:'DK', img:'./assets/logo/DK.png', colorImg:'./assets/logo/color_DK.png',}, 
                {name:'피어엑스', team:'FOX', img:'./assets/logo/FOX.png', colorImg:'./assets/logo/color_FOX.png',}, 
                {name:'광동', team:'KDF', img:'./assets/logo/KDF.png', colorImg:'./assets/logo/color_KDF.png',}, 
                {name:'OK저축은행', team:'BRO', img:'./assets/logo/BRO.png', colorImg:'./assets/logo/color_BRO.png',}, 
                {name:'DRX', team:'DRX', img:'./assets/logo/DRX.png', colorImg:'./assets/logo/color_DRX.png',}, 
                {name:'농심', team:'NS', img:'./assets/logo/NS.png', colorImg:'./assets/logo/color_NS.png',}, 
            ],
            onlyTeams:[
                {name:'젠지', team:'GEN', img:'./assets/logo/GEN.png', colorImg:'./assets/logo/color_GEN.png',}, 
                {name:'T1', team:'T1', img:'./assets/logo/T1.png', colorImg:'./assets/logo/color_T1.png',}, 
                {name:'KT', team:'KT', img:'./assets/logo/KT.png', colorImg:'./assets/logo/color_KT.png',}, 
                {name:'한화생명', team:'HLE', img:'./assets/logo/HLE.png', colorImg:'./assets/logo/color_HLE.png',}, 
                {name:'DK', team:'DK', img:'./assets/logo/DK.png', colorImg:'./assets/logo/color_DK.png',}, 
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
        clickStep(num){
            console.log(this.step, num)
            if(this.step === num){
                this.step=9
                return
            } 
            this.step=num
        },
        selectTeam(name){
            this.cacheStore.myTeam.team=name
            this.cacheStore.myTeam.teamLogo='./assets/logo/color_'+name+'.png'
        },
        valid(){
            // selectAllFlag Validation            
            if(!this.cacheStore.myTeam.players.top.name ||
                !this.cacheStore.myTeam.players.jgl.name ||
                !this.cacheStore.myTeam.players.mid.name ||
                !this.cacheStore.myTeam.players.adc.name ||
                !this.cacheStore.myTeam.players.sup.name ){
                this.selectAllFlag = true
            } else{
                this.selectAllFlag = false
            }

            // selectTeamFlag Validation
            if(!this.cacheStore.myTeam.team){
                this.selectTeamFlag = true
            } else{
                this.selectTeamFlag = false
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
            } else{
                this.oneFromOneFlag = false
            }

            // vpFlag Validation
            if(this.cacheStore.myTeam.totalVP > this.limitVp){
                this.vpFlag = true
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
            } else{
                this.mvpFlag = false
            }


        },
        submit(){
            // 예외처리
            this.valid()
            if(this.selectAllFlag || this.selectTeamFlag || this.moreThanTwoFlag || this.oneFromOneFlag || this.vpFlag  || this.mvpFlag)  return
            // 서버 전송
            let body = {
                oauthId:this.cacheStore.userId,
                data:JSON.stringify(this.cacheStore.myTeam)
            }
            api.postTeam(body)
            .then(response=>{
                console.log(response.data)
                this.cacheStore.isSave=true
            })
            .catch(function (e){
                console.log(e);
            });
        
        },
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
        click(name){
            let players = this.cacheStore.players
            if(this.cacheStore.myTeam.players.top.name===name){
                this.cacheStore.myTeam.players.top={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }
            if(this.cacheStore.myTeam.players.jgl.name===name){
                this.cacheStore.myTeam.players.jgl={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }
            if(this.cacheStore.myTeam.players.mid.name===name){
                this.cacheStore.myTeam.players.mid={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }
            if(this.cacheStore.myTeam.players.adc.name===name){
                this.cacheStore.myTeam.players.adc={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }
            if(this.cacheStore.myTeam.players.sup.name===name){
                this.cacheStore.myTeam.players.sup={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }


            for(let player in players){
                if(players[player].name===name){
                    if(players[player].line === 'TOP'){
                        this.cacheStore.myTeam.players.top.isMvp = false
                        this.cacheStore.myTeam.players.top.name = players[player].name
                        this.cacheStore.myTeam.players.top.team = players[player].team
                        this.cacheStore.myTeam.players.top.img = players[player].img
                        this.cacheStore.myTeam.players.top.vp = players[player].vp
                    }
                    else if(players[player].line === 'JGL'){
                        this.cacheStore.myTeam.players.jgl.isMvp = false
                        this.cacheStore.myTeam.players.jgl.name = players[player].name
                        this.cacheStore.myTeam.players.jgl.team = players[player].team
                        this.cacheStore.myTeam.players.jgl.img = players[player].img
                        this.cacheStore.myTeam.players.jgl.vp = players[player].vp
                    }
                    else if(players[player].line === 'MID'){
                        this.cacheStore.myTeam.players.mid.isMvp = false
                        this.cacheStore.myTeam.players.mid.name = players[player].name
                        this.cacheStore.myTeam.players.mid.team = players[player].team
                        this.cacheStore.myTeam.players.mid.img = players[player].img
                        this.cacheStore.myTeam.players.mid.vp = players[player].vp
                    }
                    else if(players[player].line === 'ADC'){
                        this.cacheStore.myTeam.players.adc.isMvp = false
                        this.cacheStore.myTeam.players.adc.name = players[player].name
                        this.cacheStore.myTeam.players.adc.team = players[player].team
                        this.cacheStore.myTeam.players.adc.img = players[player].img
                        this.cacheStore.myTeam.players.adc.vp = players[player].vp
                    }
                    else if(players[player].line === 'SUP'){
                        this.cacheStore.myTeam.players.sup.isMvp = false
                        this.cacheStore.myTeam.players.sup.name = players[player].name
                        this.cacheStore.myTeam.players.sup.team = players[player].team
                        this.cacheStore.myTeam.players.sup.img = players[player].img
                        this.cacheStore.myTeam.players.sup.vp = players[player].vp
                    }
                }
            }
            // 토탈 vp 계산
            this.cacheStore.myTeam.totalVP = this.cacheStore.myTeam.players.top.vp + this.cacheStore.myTeam.players.jgl.vp + this.cacheStore.myTeam.players.mid.vp + this.cacheStore.myTeam.players.adc.vp + this.cacheStore.myTeam.players.sup.vp
        },
    },
}
</script>
<style scoped>


</style>
<template>
    <!-- 선수단 등록 페이지 -->
    <div class="w-full flex flex-col">
        <!-- 공지 -->
        <div class="w-1/2  bg-red-100 rounded-lg mx-auto mb-1">
            <!-- 공지 내용물 -->
            <!-- 선수단 전부 선택 -->
            <div v-if="selectAllFlag"
                class="flex w-full py-2 px-4">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                    선수단이 다 구성되지 않았습니다.
                </div>
            </div>
            <!-- 응원 팀에 2명 이상 -->
            <div v-if="moreThanTwoFlag"
                class="flex w-full py-2 px-4">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                    응원팀의 선수는 최대 2명까지 내 선수단에 포함할 수 있습니다.
                </div>
            </div>
            <!--  팀에 1명 이상 넣을 수 없음 -->
            <div v-if="oneFromOneFlag"
                class="flex w-full py-2 px-4">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                    응원팀을 제외한 나머지 팀에서는 선수를 1명씩 선정해야 합니다.
                </div>
            </div>
            <!--  토탈 금액이 넘어섬 -->
            <div v-if="vpFlag"
                class="flex w-full py-2 px-4">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                    vp 포인트의 총합은 350을 넘을 수 없습니다.
                </div>
            </div>
        </div>

        <!-- 히어로 페이지 -->
        <div class="w-full flex">
            <!-- 선수 라인 선택지 -->
            <div class="w-1/2 flex flex-col">
                <!-- 이미지 컨테이너 (지도좌표) -->
                <div class="relative flex ml-auto mr-12">
                    <img class="mx-auto w-96" src="@/assets/map.png" alt="">
                    <img v-if="!$store.state.cacheStore.myTeam.players.top.name" class="absolute left-6 top-6 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" src="@/assets/top.png">
                    <img v-if="$store.state.cacheStore.myTeam.players.top.name" class="absolute left-6 top-6 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" :src="$store.state.cacheStore.myTeam.players.top.img">
                    <img v-if="!$store.state.cacheStore.myTeam.players.jug.name" class="absolute left-20 top-24 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" src="@/assets/jug.png">
                    <img v-if="$store.state.cacheStore.myTeam.players.jug.name" class="absolute left-20 top-24 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" :src="$store.state.cacheStore.myTeam.players.jug.img">
                    <img v-if="!$store.state.cacheStore.myTeam.players.mid.name" class="absolute left-40 top-40 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" src="@/assets/mid.png">
                    <img v-if="$store.state.cacheStore.myTeam.players.mid.name" class="absolute left-40 top-40 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" :src="$store.state.cacheStore.myTeam.players.mid.img">
                    <img v-if="!$store.state.cacheStore.myTeam.players.bot.name" class="absolute right-20 bottom-20 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" src="@/assets/bot.png">
                    <img v-if="$store.state.cacheStore.myTeam.players.bot.name" class="absolute right-20 bottom-20 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" :src="$store.state.cacheStore.myTeam.players.bot.img">
                    <img v-if="!$store.state.cacheStore.myTeam.players.sup.name" class="absolute right-8 bottom-8 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" src="@/assets/sup.png">
                    <img v-if="$store.state.cacheStore.myTeam.players.sup.name" class="absolute right-8 bottom-8 w-16 h-16 hover:ring-2 hover:ring-red-400 rounded-full" :src="$store.state.cacheStore.myTeam.players.sup.img">
                </div>

                <!-- 버튼 -->
                <div class="ml-auto mr-20 my-8">
                    <button 
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 w-36 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-red-600 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200"
                        @click="$store.state.modalStore.isSelectCaptainModal=true">
                        <span class="relative w-36 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            주장 설정하기
                        </span>
                    </button>
                    <button type="button" class="text-white bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40">저장하기</button>
                </div>
            </div>

            <!-- 히어로 우측 -->
            <div class="w-1/2 flex flex-col pl-12">
                <!-- 제목 -->
                <div class="w-full px-8 mt-3 mb-4 text-lg text-gray-700">
                    2024 LOL 챔피언스 코리아 서머
                </div>

                <!-- 내 선수단 리스트 -->
                <div class="w-1/2 flex flex-col shadow-md">
                    <!-- 선수단 타이틀 -->
                    <div class="flex my-1 h-12 bg-gray-50">
                        <!-- 타이틀 텍스트 -->
                        <div class="my-auto ml-6 text-lg text-gray-800">
                            내 선수단
                        </div>
                        <!-- 토탈 vp 포인트 -->
                        <div class="flex ml-auto my-auto mr-4">
                            <div class="text-red-600 mr-1">
                                {{$store.state.cacheStore.myTeam.totalVP}}
                            </div>
                            <img class="w-5 h-5 object-cover" src="@/assets/icon/vp.png">
                        </div>
                    </div>
                    <!-- 선수단 리스트 -->
                    <div class="w-full my-6 flex flex-col">
                        <!-- 탑 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <img class="my-auto mr-4 w-6 h-6" src="@/assets/icon/top_icon.png">
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.top.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.top.name ?$store.state.cacheStore.myTeam.players.top.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{$store.state.cacheStore.myTeam.players.top.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 정글 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <img class="my-auto mr-4 w-6 h-6" src="@/assets/icon/jug_icon.png">
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.jug.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.jug.name ?$store.state.cacheStore.myTeam.players.jug.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{$store.state.cacheStore.myTeam.players.jug.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 미드 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <img class="my-auto mr-4 w-6 h-6" src="@/assets/icon/mid_icon.png">
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.mid.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.mid.name ?$store.state.cacheStore.myTeam.players.mid.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{$store.state.cacheStore.myTeam.players.mid.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 바텀 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <img class="my-auto mr-4 w-6 h-6" src="@/assets/icon/bot_icon.png">
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.bot.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.bot.name ?$store.state.cacheStore.myTeam.players.bot.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{$store.state.cacheStore.myTeam.players.bot.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 서폿 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <img class="my-auto mr-4 w-6 h-6" src="@/assets/icon/sup_icon.png">
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.sup.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.sup.name ?$store.state.cacheStore.myTeam.players.sup.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{$store.state.cacheStore.myTeam.players.sup.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--  -->

        <!-- 선수 필터 -->
        <div class="mx-auto flex flex-col">
            <!-- 팀 별 필터 -->
            <div class="grid grid-cols-11 gap-10 mx-auto my-4">
                <!-- 팀 -->
                <div v-for="team, index in teams" :key="index">
                    <img class="m-auto w-12 h-12 object-cover" :src="team.colorImg" v-if="team.team==$store.state.cacheStore.mainTeamNav">
                    <img class="m-auto w-12 h-12 object-cover" :src="team.img" v-if="team.team!=$store.state.cacheStore.mainTeamNav" @click="teamFilter(team.team)">
                    <div class="m-auto my-2 text-center text-xs text-gray-700">
                        {{team.name}}
                    </div>
                </div>
            </div>
            <!-- 라인 별 필터 -->
            <div class="grid grid-cols-6 gap-4 my-4 mr-auto">
                <!-- 라인 -->
                <div v-for="line, index in lines" :key="index">
                    <button @click="lineFilter(line.name)"
                        type="button" class="flex text-gray-600 bg-gray-200 hover:bg-red-200 rounded-full px-6 py-3"
                        :class="$store.state.cacheStore.mainLineNav===line.name?'text-white bg-red-500 outline-none':''">
                        <img class="m-auto" :src="line.img">
                        <div class="flex my-auto ml-2 mr-2 text-center text-sm ">
                            {{line.name}}
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- 선수 카드 그리드 -->
        <div class="mx-auto grid grid-cols-5 gap-10">
            <template v-for="player, index in $store.state.cacheStore.players" :key="index">
                <div v-if="(this.$store.state.cacheStore.mainLineNav === player.line || this.$store.state.cacheStore.mainLineNav==='전체') &&
                        (this.$store.state.cacheStore.mainTeamNav=== player.team || this.$store.state.cacheStore.mainTeamNav=== 'LCK')">
                <!-- 선수 카드 -->
                <div class="relative w-52 h-72 flex flex-col rounded-lg shadow-lg hover:shadow-2xl">
                    <div class="font-base mx-auto">
                        {{player.rank}}
                    </div>
                    <div class="font-bold mx-auto">
                        {{player.name}}
                    </div>
                    <div class="mx-auto flex">
                        <div class="my-auto font-medium text-gray-500">{{player.line}} </div>
                        <img class="object-cover mx-2" :src="'./assets/logo/color_'+player.team+'.png'">
                        <div class="flex my-auto font-medium text-red-600">
                            {{player.vp}}
                            <img class="ml-1 w-5 h-5" src="@/assets/icon/vp.png">
                        </div>
                    </div>
                    <div class="absolute right-4 bottom-4 rounded-lg z-0 w-44 h-52 bg-gray-100"></div>
                    <img class="rounded-lg z-10 mx-auto mt-auto mb-3 w-44 h-52 object-cover" :src="player.img">

                </div>
                <!-- 선택하기 버튼 -->
                <button v-if="(this.$store.state.cacheStore.mainLineNav === player.line || this.$store.state.cacheStore.mainLineNav==='전체') &&
                        (this.$store.state.cacheStore.mainTeamNav=== player.team || this.$store.state.cacheStore.mainTeamNav=== 'LCK')"
                    @click="click(player.name)"
                    class="w-52 h-12 my-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-red-600 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200">
                    <span class="relative w-52  px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        선택하기
                    </span>
                </button>
                </div>
            </template>
        </div>
    </div>
</template>
<script>


export default {
    components: {

    },
    data(){
        return {
            selectAllFlag: 0,
            moreThanTwoFlag: 0,
            oneFromOneFlag: 0,
            vpFlag: 0,

            selected:0,

            teams:[
                {name:'전체', team:'LCK', img:'./assets/logo/lck.png', colorImg:'./assets/logo/lck.png',}, 
                {name:'젠지', team:'GEN', img:'./assets/logo/GEN.png', colorImg:'./assets/logo/color_GEN.png',}, 
                {name:'T1', team:'T1', img:'./assets/logo/SKT.png', colorImg:'./assets/logo/color_SKT.png',}, 
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
                {name:'JUG', img:'./assets/icon/jug_icon.png'}, 
                {name:'MID', img:'./assets/icon/mid_icon.png'}, 
                {name:'BOT', img:'./assets/icon/bot_icon.png'}, 
                {name:'SUP', img:'./assets/icon/sup_icon.png'}, 
            ],
        }
    },
    methods: {
        valid(){
            // playerRuleFlag Validation

            // vpFlag Validation
            
        },
        submit(){
            // 예외처리
            console.log('submit')
            if(this.playerRuleFlag){
                console.log('playerRuleFlag')
            }
            if(this.vpFlag){
                console.log('vpFlag')
            }
            // 서버 전송

        },
        lineFilter(name){
            this.$store.state.cacheStore.mainLineNav = name

        },
        teamFilter(name){
            this.$store.state.cacheStore.mainTeamNav = name

        },
        click(name){
            let players = this.$store.state.cacheStore.players
            for(let player in players){
                if(players[player].name===name){
                    if(players[player].line === 'TOP'){
                        this.$store.state.cacheStore.myTeam.players.top.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.top.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.top.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.top.vp = players[player].vp
                    }
                    else if(players[player].line === 'JUG'){
                        this.$store.state.cacheStore.myTeam.players.jug.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.jug.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.jug.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.jug.vp = players[player].vp
                    }
                    else if(players[player].line === 'MID'){
                        this.$store.state.cacheStore.myTeam.players.mid.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.mid.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.mid.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.mid.vp = players[player].vp
                    }
                    else if(players[player].line === 'BOT'){
                        this.$store.state.cacheStore.myTeam.players.bot.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.bot.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.bot.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.bot.vp = players[player].vp
                    }
                    else if(players[player].line === 'SUP'){
                        this.$store.state.cacheStore.myTeam.players.sup.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.sup.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.sup.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.sup.vp = players[player].vp
                    }
                }
            }
            // 토탈 vp 계산
            this.$store.state.cacheStore.myTeam.totalVP = this.$store.state.cacheStore.myTeam.players.top.vp + this.$store.state.cacheStore.myTeam.players.jug.vp + this.$store.state.cacheStore.myTeam.players.mid.vp + this.$store.state.cacheStore.myTeam.players.bot.vp + this.$store.state.cacheStore.myTeam.players.sup.vp

        },

    },
}
</script>
<style scoped>


</style>
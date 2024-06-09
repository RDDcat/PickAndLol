<template>
    <!-- 선수단 등록 페이지 -->
    <div class="w-full flex flex-col">
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
            <div class="w-1/2 flex flex-col">
                <!-- 제목 -->
                <div class="w-full px-8 mt-8 mb-4 text-lg text-gray-700">
                    2024 LOL 챔피언스 코리아 서머
                </div>
                <!-- 공지 -->
                <div class="w-1/2  bg-red-100 rounded-lg">
                    <!-- 공지 내용물 -->
                    <div class="flex w-full py-2 px-4">
                        <!-- ! 아이콘 -->
                        <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                        <!-- 텍스트 -->
                        <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                            {{announce}}
                        </div>

                        <!-- x 마크 -->
                        <!-- <div class="my-auto ml-auto mr-4">x</div> -->

                    </div>
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
                    <img class="m-auto" :src="team.img">
                    <div class="m-auto my-2 text-center text-xs text-gray-700">
                        {{team.name}}
                    </div>
                </div>
            </div>
            <!-- 라인 별 필터 -->
            <div class="grid grid-cols-6 gap-4 my-4 mr-auto">
                <!-- 라인 -->
                <div v-for="line, index in lines" :key="index">
                    <button type="button" class="flex text-gray-600 focus:text-white bg-gray-200 hover:bg-red-200 focus:outline-none focus:bg-red-500 rounded-full px-6 py-3">
                        <img class="m-auto" :src="line.img">
                        <div class="flex my-auto ml-2 mr-2 text-center text-sm ">
                            {{line.name}}
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- 선수 카드 그리드 -->
        <div class="mx-auto my-8 grid grid-cols-5 gap-10">
            <div v-for="player, index in $store.state.cacheStore.players" :key="index">
                <!-- 선수 카드 -->
                <div class="relative w-52 h-80 flex flex-col rounded-lg shadow-lg hover:shadow-2xl">
                    <div class="font-base mx-auto">
                        {{player.rank}}
                    </div>
                    <div class="font-bold mx-auto">
                        {{player.name}}
                    </div>
                    <div class="mx-auto flex">
                        <div class="my-auto font-medium text-gray-500">{{player.line}} </div>
                        <img class="object-cover mx-2" :src="'./assets/logo/color_'+player.team+'.png'" alt="">
                        <div class="flex my-auto font-medium text-red-600">
                            {{player.vp}}
                            <img class="ml-1 w-5 h-5" src="@/assets/icon/vp.png">
                        </div>
                    </div>
                    <div class="absolute right-4 bottom-4 rounded-lg z-0 w-44 h-52 bg-gray-100"></div>
                    <img class="rounded-lg z-10 mx-auto mt-auto mb-3 w-44 h-52 object-cover" :src="player.img">

                </div>
                <!-- 선택하기 버튼 -->
                <button @click="click(player.name)"
                    class="w-52 h-12 my-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-red-600 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200">
                    <span class="relative w-52  px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        선택하기
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    components: {

    },
    data(){
        return {
            vpFlag: false,
            playerRuleFlag: false,

            announce: '선수단이 다 구성되지 않았습니다.',

            teams:[
                {name:'전체', img:'./assets/logo/lck.png'}, 
                {name:'젠지', img:'./assets/logo/GEN.png'}, 
                {name:'T1', img:'./assets/logo/SKT.png'}, 
                {name:'KT', img:'./assets/logo/KT.png'}, 
                {name:'한화생명', img:'./assets/logo/HLE.png'}, 
                {name:'DK', img:'./assets/logo/DK.png'}, 
                {name:'피어엑스', img:'./assets/logo/FOX.png'}, 
                {name:'광동', img:'./assets/logo/KDF.png'}, 
                {name:'OK저축은행', img:'./assets/logo/BRO.png'}, 
                {name:'DRX', img:'./assets/logo/DRX.png'}, 
                {name:'농심', img:'./assets/logo/NS.png'}, 
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
        click(name){
            let players = this.$store.state.cacheStore.players
            for(let player in players){
                if(players[player].name===name){
                    if(players[player].line === 'TOP'){
                        this.$store.state.cacheStore.myTeam.players.top.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.top.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.top.img = players[player].img
                    }
                    else if(players[player].line === 'JUG'){
                        this.$store.state.cacheStore.myTeam.players.jug.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.jug.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.jug.img = players[player].img
                    }
                    else if(players[player].line === 'MID'){
                        this.$store.state.cacheStore.myTeam.players.mid.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.mid.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.mid.img = players[player].img
                    }
                    else if(players[player].line === 'BOT'){
                        this.$store.state.cacheStore.myTeam.players.bot.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.bot.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.bot.img = players[player].img
                    }
                    else if(players[player].line === 'SUP'){
                        this.$store.state.cacheStore.myTeam.players.sup.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.sup.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.sup.img = players[player].img
                    }
                }
            }
        },

    },
}
</script>
<style scoped>


</style>
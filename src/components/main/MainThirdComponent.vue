<template>
    <!-- 선수단 등록 페이지 -->
    <div class="w-full flex flex-col mb-12">
        <!-- 공지 -->
        <!-- <div class="flex w-1/3 py-2 bg-gray-100 rounded-b-lg mx-auto">
            <div class="mx-auto text-sm text-gray-500">
                {{cacheStore.mainInfo}}
            </div>
        </div> -->
        
        
        <!-- 에러 공지 -->
        <div class="mx-auto w-my-60">
            <!-- 공지 내용물 -->
            <!-- 선수단 전부 선택 -->
            <div class="flex px-3 bg-red-50 rounded-lg mb-1 "
                v-if="selectAllFlag">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">선수단이 비어있습니다. </div> 
                    <div class="text-sm">5명을 채워 선수단을 구성해주세요.</div> 
                </div>
            </div>
            <!-- 응원팀 선택 -->
            <div v-if="selectTeamFlag"
                class="flex px-3 bg-red-50 rounded-lg mb-1">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2  my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">응원팀을 선택해주세요. </div> 
                    <div class="text-sm">당신의 최애의 팀을 알려주세요.</div> 
                </div>
            </div>
            <!-- 응원 팀에 2명 이상 -->
            <div v-if="moreThanTwoFlag"
                class="flex  px-3 bg-red-50 rounded-lg mb-1">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2  my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">선정된 응원팀 선수는 최대 2명만 선택 가능합니다.</div> 
                    <div class="text-sm">선수단을 다시 구성해주세요.</div>
                    
                </div>
            </div>
            <!--  팀에 1명 이상 넣을 수 없음 -->
            <div v-if="oneFromOneFlag"
                class="flex  px-3 bg-red-50 rounded-lg mb-1">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2  my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">다양한 팀의 선수들을 선택해주세요. </div> 
                    <div class="text-sm">응원팀을 제외한 나머지 팀에서는 선수를 1명씩 선정해야 합니다.</div> 
                </div>
            </div>
            <!--  토탈 금액이 넘어섬 -->
            <div v-if="vpFlag"
                class="flex  px-3 bg-red-50 rounded-lg mb-1">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2  my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">지출할 수 있는 금액을 초과했습니다. </div> 
                    <div class="text-sm">최대 지출 가능 vp는 {{limitVp}} 입니다.</div>                     
                </div>
            </div>
            <!--  주장 선택이 안됨 -->
            <div v-if="mvpFlag"
                class="flex px-3 bg-red-50 rounded-lg mb-1">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2  my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">주장이 선택되지 않았습니다. </div>
                    <div class="text-sm">선정된 응원팀 내에서 주장이 될 선수를 선택해 주세요.</div> 
                </div>
            </div>
            <!--  isCount -->
            <div v-if="isCount"
                class="flex px-3 bg-red-50 rounded-lg mb-1">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2  my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">최대 2명까지 선수를 교체할 수 있습니다 </div>
                    <div class="text-sm">선수단을 다시 구성해주세요.</div> 
                </div>
            </div>
            <!--  isCount zero -->
            <div v-if="isCountZero"
                class="flex px-3 bg-red-50 rounded-lg mb-1">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2  my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">1명 이상 변경할 선수를 선택해주세요. </div>
                    <div class="text-sm">변경된 선수가 있어야 팀을 교체할 수 있습니다.</div> 
                </div>
            </div>
        </div>

        <!-- 히어로 페이지 -->
        <div class="w-full flex" >
            <!-- 히어로 좌측 -->
            <!-- 선수 라인 선택지 -->
            <div class="w-10/12 flex flex-col">
                <!-- 이미지 컨테이너 (지도좌표) -->
                <div class="relative flex ml-auto mr-12">
                    <img class="mx-auto w-96" src="@/assets/map.png" alt="">
                    <button class="absolute left-6 top-6 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='TOP'" v-if="!snapStore.myTeamSnap.players.top.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/top.png">
                        <img @click="cacheStore.mainLineNav='TOP'" v-if="snapStore.myTeamSnap.players.top.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="snapStore.myTeamSnap.players.top.img">
                        <div v-if="snapStore.myTeamSnap.players.top.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                    <button class="absolute left-20 top-24 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='JGL'" v-if="!snapStore.myTeamSnap.players.jgl.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/jgl.png">
                        <img @click="cacheStore.mainLineNav='JGL'" v-if="snapStore.myTeamSnap.players.jgl.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="snapStore.myTeamSnap.players.jgl.img">
                        <div v-if="snapStore.myTeamSnap.players.jgl.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                    <button class="absolute left-40 top-40 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='MID'" v-if="!snapStore.myTeamSnap.players.mid.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/mid.png">
                        <img @click="cacheStore.mainLineNav='MID'" v-if="snapStore.myTeamSnap.players.mid.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="snapStore.myTeamSnap.players.mid.img">
                        <div v-if="snapStore.myTeamSnap.players.mid.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                    <button class="absolute right-24 bottom-20 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='ADC'" v-if="!snapStore.myTeamSnap.players.adc.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/adc.png">
                        <img @click="cacheStore.mainLineNav='ADC'" v-if="snapStore.myTeamSnap.players.adc.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="snapStore.myTeamSnap.players.adc.img">
                        <div v-if="snapStore.myTeamSnap.players.adc.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                    <button class="absolute right-8 bottom-8 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='SUP'" v-if="!snapStore.myTeamSnap.players.sup.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/sup.png">
                        <img @click="cacheStore.mainLineNav='SUP'" v-if="snapStore.myTeamSnap.players.sup.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="snapStore.myTeamSnap.players.sup.img">
                        <div v-if="snapStore.myTeamSnap.players.sup.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                </div>

                <!-- 버튼 -->
                <div class="flex ml-auto my-auto">
                    <!-- 주장 변경 버튼 -->
                    <!-- <button 
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 w-36 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-red-600 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200"
                        @click="modalStore.isSelectCaptainModal=true">
                        <span class="relative w-36 px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                            주장 설정하기
                        </span>
                    </button> -->
                    <button @click="submit"
                        type="button" v-if="cacheStore.canChange"
                        class="text-white bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400  shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 w-40">
                        변경하기
                        </button>
                    <div class="w-36"></div>
                </div>
            </div>

            <!-- 히어로 우측 -->
            <div class="w-9/12 flex flex-col pl-12">
                <!-- 제목 -->
                <div class="w-full max-w-[24rem] mt-3 mb-1 text-lg font-bold text-gray-700">
                    2024 LOL 챔피언스 코리아 서머
                </div>

                <!-- 응원팀 선정 -->
                <div class="w-9/12 max-w-[24rem] flex flex-col shadow-md rounded-md ">
                    <!-- 타이틀 -->
                    <div class="flex bg-gray-50 py-1" >
                        <!-- 타이틀 텍스트 -->
                        <!-- 응원팀 -->
                        <div class="flex flex-1 ">
                            <div class="w-full flex flex-col my-auto text-gray-600">
                                <div class="mx-auto mt-auto bg-white px-2.5 py-1 rounded-full">
                                    <div class="text-sm text-red-500">응원팀</div>
                                </div>
                                <div class="flex text-base mx-auto mb-auto">{{snapStore.myTeamSnap.team}}
                                    <img class="ml-1 w-6 h-6 object-cover rounded-full" :src="snapStore.myTeamSnap.teamLogo">
                                </div>
                            </div>
                        </div>
                        <!--  -->
                        <div class="flex flex-1">
                            <div class="w-full flex flex-col my-auto text-gray-600">
                                <div class="mx-auto mt-auto bg-white px-2.5 py-1 rounded-full">
                                    <div class="text-sm text-red-500">팀명</div>
                                </div>
                                <div class="flex text-base mx-auto mb-auto">{{snapStore.myTeamSnap.name}}
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-1">
                            <div class="w-full flex flex-col my-auto">
                                <div class="mx-auto mt-auto bg-red-500 px-2.5 py-1 rounded-full">
                                    <div class="text-sm text-white">선수변경권</div>
                                </div>
                                <div class="flex text-base mx-auto mb-auto">
                                    <div class="text-red-500">{{cacheStore.temporaryChangeCount}}</div>회
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 내 선수단 리스트 -->
                <div class="mt-1 w-9/12 max-w-[24rem] flex flex-col shadow-md rounded-md ">
                    <!-- 선수단 타이틀 -->
                    <div class="flex h-12 bg-red-100 rounded-t-md">
                        <!-- 타이틀 텍스트 -->
                        <div class="flex my-auto ml-6 text-sm text-gray-600">
                            <div class="ml-2 text-base text-gray-800">내 선수단</div>
                        </div>
                        <!-- 토탈 vp 포인트 -->
                        <div class="flex ml-auto my-auto mr-4">
                            <div class="text-red-600 mr-1">
                                {{snapStore.myTeamSnap.totalVP}}
                            </div>
                            <img class="w-5 h-5 object-cover" src="@/assets/icon/vp.png">
                        </div>
                    </div>
                    <!-- 선수단 리스트 -->
                    <div class="w-full my-6 flex flex-col">
                        <!-- 탑 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <div class="relative my-auto mr-4 ">
                                <img v-if="snapStore.myTeamSnap.players.top.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/top_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="snapStore.myTeamSnap.players.top.img">
                            <!-- 선수 이름 -->
                            <div class="flex my-auto ml-6 text-base ">
                                <div class="font-bold">{{snapStore.myTeamSnap.players.top.name ? snapStore.myTeamSnap.players.top.team : ''}}</div>
                                &nbsp; {{snapStore.myTeamSnap.players.top.name ? snapStore.myTeamSnap.players.top.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{snapStore.myTeamSnap.players.top.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 정글 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <div class="relative my-auto mr-4 ">
                                <img v-if="snapStore.myTeamSnap.players.jgl.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/jgl_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="snapStore.myTeamSnap.players.jgl.img">
                            <!-- 선수 이름 -->
                            <div class="flex my-auto ml-6 text-base ">
                                <div class="font-bold">{{snapStore.myTeamSnap.players.jgl.name ? snapStore.myTeamSnap.players.jgl.team : ''}}</div>
                                &nbsp; {{snapStore.myTeamSnap.players.jgl.name ? snapStore.myTeamSnap.players.jgl.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{snapStore.myTeamSnap.players.jgl.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 미드 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <div class="relative my-auto mr-4 ">
                                <img v-if="snapStore.myTeamSnap.players.mid.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/mid_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="snapStore.myTeamSnap.players.mid.img">
                            <!-- 선수 이름 -->
                            <div class="flex my-auto ml-6 text-base ">
                                <div class="font-bold">{{snapStore.myTeamSnap.players.mid.name ? snapStore.myTeamSnap.players.mid.team : ''}}</div>
                                &nbsp; {{snapStore.myTeamSnap.players.mid.name ? snapStore.myTeamSnap.players.mid.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{snapStore.myTeamSnap.players.mid.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 바텀 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <div class="relative my-auto mr-4 ">
                                <img v-if="snapStore.myTeamSnap.players.adc.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/adc_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="snapStore.myTeamSnap.players.adc.img">
                            <!-- 선수 이름 -->
                            <div class="flex my-auto ml-6 text-base ">
                                <div class="font-bold">{{snapStore.myTeamSnap.players.adc.name ? snapStore.myTeamSnap.players.adc.team : ''}}</div>
                                &nbsp; {{snapStore.myTeamSnap.players.adc.name ? snapStore.myTeamSnap.players.adc.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{snapStore.myTeamSnap.players.adc.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 서폿 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <div class="relative my-auto mr-4 ">
                                <img v-if="snapStore.myTeamSnap.players.sup.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/sup_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="snapStore.myTeamSnap.players.sup.img">
                            <!-- 선수 이름 -->
                            <div class="flex my-auto ml-6 text-base ">
                                <div class="font-bold">{{snapStore.myTeamSnap.players.sup.name ? snapStore.myTeamSnap.players.sup.team : ''}}</div>
                                &nbsp; {{snapStore.myTeamSnap.players.sup.name ? snapStore.myTeamSnap.players.sup.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{snapStore.myTeamSnap.players.sup.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
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
                        <img class="object-cover mx-2 w-6 h-6" :src="'./assets/logo/color_'+player.clubName+'.png'"
                            @error="setDefaultImage($event)">
                            <div class="flex my-auto font-medium text-red-600">
                            {{player.vp}}
                            <img class="ml-1 w-5 h-5" src="@/assets/icon/vp.png">
                        </div>
                    </div>
                    <!-- 선수 이미지 -->
                    <div class="relative w-44 h-52 mx-auto mt-auto mb-4">
                        <div class="absolute rounded-lg w-full h-full bg-gray-100"></div>
                        <img class="absolute rounded-lg mx-auto mt-auto mb-3 w-full h-full object-cover" @error="setDefaultImage($event)" :src="'./assets/player/'+player.clubName+'_'+player.playerName+'.svg'"
                            >
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
                <!-- 선택하기 버튼 -->
                <button v-if="
                        (this.cacheStore.mainLineNav.toLowerCase() === player.playerPosition || this.cacheStore.mainLineNav==='전체') &&
                        (this.cacheStore.mainTeamNav=== player.clubName || this.cacheStore.mainTeamNav=== 'LCK')"
                    @click="click(player.name);"
                    class="w-52 h-12 my-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-red-600 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200">
                    <span class="relative w-52  px-5 py-3 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-gray-100"
                        :class="this.snapStore.myTeamSnap.players.top.name ===player.playerName ||
                        this.snapStore.myTeamSnap.players.jgl.name ===player.playerName ||
                        this.snapStore.myTeamSnap.players.mid.name ===player.playerName ||
                        this.snapStore.myTeamSnap.players.adc.name ===player.playerName ||
                        this.snapStore.myTeamSnap.players.sup.name ===player.playerName
                        ? 'bg-opacity-0 group-hover:bg-opacity-0' : ''">
                        {{ this.snapStore.myTeamSnap.players.top.name ===player.playerName ||
                        this.snapStore.myTeamSnap.players.jgl.name ===player.playerName ||
                        this.snapStore.myTeamSnap.players.mid.name ===player.playerName ||
                        this.snapStore.myTeamSnap.players.adc.name ===player.playerName ||
                        this.snapStore.myTeamSnap.players.sup.name ===player.playerName
                        ? '선택됨' : '선택하기'}}
                    </span>
                </button>
                </div>
            </template>
        </div>
    </div>
</template>
<script>

import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'
import {useSnapStore} from '@/store/snapStore'

import api from '@/api/api'

export default {
    components: {
        
    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()
        const snapStore = useSnapStore()

        const formatNumber = (number) => {
            return number % 1 === 0 ? number : number.toFixed(2);
        }

        return { cacheStore, modalStore, snapStore, formatNumber }
    },
    data(){
        return {
            selectAllFlag: false,
            selectTeamFlag: false,
            moreThanTwoFlag: false,
            oneFromOneFlag: false,
            vpFlag: false,
            mvpFlag: false,
            isCount: false,
            isCountZero: false,

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
                // {name:'DK', team:'DK', img:'./assets/logo/DK.png', colorImg:'./assets/logo/color_DK.png',}, 
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
        setDefaultImage(event) {
            event.target.src = './assets/logo.png';
            event.target.style.opacity = '0.2';
        },
        selectTeam(name){
            this.snapStore.myTeamSnap.team=name
            this.snapStore.myTeamSnap.teamLogo='./assets/logo/color_'+name+'.png'
        },
        valid(){
            // selectTeamFlag Validation
            if(!this.snapStore.myTeamSnap.team){
                this.selectTeamFlag = true
                return true
            } else{
                this.selectTeamFlag = false
            }

            // selectAllFlag Validation            
            if(!this.snapStore.myTeamSnap.players.top.name ||
                !this.snapStore.myTeamSnap.players.jgl.name ||
                !this.snapStore.myTeamSnap.players.mid.name ||
                !this.snapStore.myTeamSnap.players.adc.name ||
                !this.snapStore.myTeamSnap.players.sup.name ){
                this.selectAllFlag = true
                return true
            } else{
                this.selectAllFlag = false
            }



            // moreThanTwoFlag Validation
            let count=0;
            for(let index in this.snapStore.myTeamSnap.players){
                if(this.snapStore.myTeamSnap.players[index].team===this.snapStore.myTeamSnap.team){
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
            for(let index in this.snapStore.myTeamSnap.players){
                hold.push(this.snapStore.myTeamSnap.players[index].team);
            }
            let uniqueTeams = new Set(hold);
            if(uniqueTeams.size<4){
                this.oneFromOneFlag = true
                return true
            } else{
                this.oneFromOneFlag = false
            }

            // vpFlag Validation
            if(this.snapStore.myTeamSnap.totalVP > this.limitVp){
                this.vpFlag = true
                return true
            } else{
                this.vpFlag = false
            }
            // console.log(!this.snapStore.myTeamSnap.players.top.isMvp &&
            //     !this.snapStore.myTeamSnap.players.jgl.isMvp &&
            //     !this.snapStore.myTeamSnap.players.mid.isMvp &&
            //     !this.snapStore.myTeamSnap.players.adc.isMvp &&
            //     !this.snapStore.myTeamSnap.players.sup.isMvp)
            // console.log(this.snapStore.myTeamSnap.players)
            // mvpFlag Validation
            if(!this.snapStore.myTeamSnap.players.top.isMvp &&
                !this.snapStore.myTeamSnap.players.jgl.isMvp &&
                !this.snapStore.myTeamSnap.players.mid.isMvp &&
                !this.snapStore.myTeamSnap.players.adc.isMvp &&
                !this.snapStore.myTeamSnap.players.sup.isMvp ){
                this.mvpFlag = true
                return true
            } else{
                this.mvpFlag = false
            }

            // 선수 변경 2명이하인지 확인
            let changeCount = 0;
            const positions = ['top', 'jgl', 'mid', 'adc', 'sup'];

            for (let pos of positions) {
                if (this.snapPlayers[pos].id !== this.cachePlayers[pos].id) {
                    changeCount++;
                }
            }
            if(changeCount >2){
                this.isCount = true
                return true
            } else if(changeCount===0){
                this.isCountZero = true
                return true
            } else{
                this.isCount = false
                this.isCountZero = false
            }



        },
        submit(){
            // 예외처리
            if(this.valid())return
            
            // 서버 전송
            console.log(this.cacheStore.userId)
            console.log(this.snapStore.myTeamSnap)
            let body = {
                oauthId:this.cacheStore.userId,
                data:JSON.stringify(this.snapStore.myTeamSnap),
                canChange:false
            }
            console.log('body',body)
            api.postTeam(body)
            .then(response=>{
                console.log(response)
                this.cacheStore.isSave=true
                this.cacheStore.canChange=false
                this.cacheStore.myTeam = this.snapStore.myTeamSnap
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
            console.log(this.snapStore.myTeamSnap.players.top.name)
            console.log(name)
            console.log(this.snapStore.myTeamSnap.players.top.name===name)
            if(this.snapStore.myTeamSnap.players.top.name===name){
                this.snapStore.myTeamSnap.players.top={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }
            if(this.snapStore.myTeamSnap.players.jgl.name===name){
                this.snapStore.myTeamSnap.players.jgl={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }
            if(this.snapStore.myTeamSnap.players.mid.name===name){
                this.snapStore.myTeamSnap.players.mid={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }
            if(this.snapStore.myTeamSnap.players.adc.name===name){
                this.snapStore.myTeamSnap.players.adc={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }
            if(this.snapStore.myTeamSnap.players.sup.name===name){
                this.snapStore.myTeamSnap.players.sup={isMvp: false, name:"", team:"", vp:0, img: "./assets/logo.png"}
                return
            }


            for(let player in players){
                if(players[player].name===name){
                    if(players[player].line === 'TOP'){
                        this.snapStore.myTeamSnap.players.top.isMvp = false
                        this.snapStore.myTeamSnap.players.top.name = players[player].name
                        this.snapStore.myTeamSnap.players.top.team = players[player].team
                        this.snapStore.myTeamSnap.players.top.img = players[player].img
                        this.snapStore.myTeamSnap.players.top.vp = players[player].vp
                    }
                    else if(players[player].line === 'JGL'){
                        this.snapStore.myTeamSnap.players.jgl.isMvp = false
                        this.snapStore.myTeamSnap.players.jgl.name = players[player].name
                        this.snapStore.myTeamSnap.players.jgl.team = players[player].team
                        this.snapStore.myTeamSnap.players.jgl.img = players[player].img
                        this.snapStore.myTeamSnap.players.jgl.vp = players[player].vp
                    }
                    else if(players[player].line === 'MID'){
                        this.snapStore.myTeamSnap.players.mid.isMvp = false
                        this.snapStore.myTeamSnap.players.mid.name = players[player].name
                        this.snapStore.myTeamSnap.players.mid.team = players[player].team
                        this.snapStore.myTeamSnap.players.mid.img = players[player].img
                        this.snapStore.myTeamSnap.players.mid.vp = players[player].vp
                    }
                    else if(players[player].line === 'ADC'){
                        this.snapStore.myTeamSnap.players.adc.isMvp = false
                        this.snapStore.myTeamSnap.players.adc.name = players[player].name
                        this.snapStore.myTeamSnap.players.adc.team = players[player].team
                        this.snapStore.myTeamSnap.players.adc.img = players[player].img
                        this.snapStore.myTeamSnap.players.adc.vp = players[player].vp
                    }
                    else if(players[player].line === 'SUP'){
                        this.snapStore.myTeamSnap.players.sup.isMvp = false
                        this.snapStore.myTeamSnap.players.sup.name = players[player].name
                        this.snapStore.myTeamSnap.players.sup.team = players[player].team
                        this.snapStore.myTeamSnap.players.sup.img = players[player].img
                        this.snapStore.myTeamSnap.players.sup.vp = players[player].vp
                    }
                }
            }
            // 토탈 vp 계산
            this.snapStore.myTeamSnap.totalVP = this.snapStore.myTeamSnap.players.top.vp + this.snapStore.myTeamSnap.players.jgl.vp + this.snapStore.myTeamSnap.players.mid.vp + this.snapStore.myTeamSnap.players.adc.vp + this.snapStore.myTeamSnap.players.sup.vp
        },
    },
    beforeMount(){
        this.snapStore.myTeamSnap = this.cacheStore.myTeam
    }
}
</script>
<style scoped>


</style>
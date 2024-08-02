<template>
    <!-- 선수단 등록 페이지 -->
    <div class="w-full flex flex-col mb-12">
        <!-- 공지 -->
        <div class="flex w-1/3 py-2 bg-gray-100 rounded-b-lg mx-auto">
            <div class="mx-auto text-sm text-gray-500">
                {{cacheStore.mainInfo}}
            </div>
        </div>
        
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
                    <div class="text-red-600">선정된 응원팀 선수는 2명을 선택해야합니다.</div> 
                    <div class="text-sm">{{moreThanTwoFlagText}}</div>
                    
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
                    <div class="text-sm">최대 지출 가능 vp는 {{cacheStore.limitVp}} 입니다.</div>                     
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
        </div>

        <!-- 히어로 페이지 1 -->
        <div class="w-full flex" v-if="!cacheStore.isSave">
            <!-- 선수 라인 선택지 -->
            <div class="w-10/12 flex flex-col">
                <!-- 이미지 컨테이너 (지도좌표) -->
                <div class="relative flex ml-auto mr-12">
                    <img class="mx-auto w-96" src="@/assets/map.png" alt="">
                    <button class="absolute left-6 top-6 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='TOP'" v-if="!cacheStore.myTeam.players.top.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/top.png">
                        <img @click="cacheStore.mainLineNav='TOP'" v-if="cacheStore.myTeam.players.top.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.top.img">
                        <div v-if="cacheStore.myTeam.players.top.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                    <button class="absolute left-20 top-24 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='JGL'" v-if="!cacheStore.myTeam.players.jgl.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/jgl.png">
                        <img @click="cacheStore.mainLineNav='JGL'" v-if="cacheStore.myTeam.players.jgl.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.jgl.img">
                        <div v-if="cacheStore.myTeam.players.jgl.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                    <button class="absolute left-40 top-40 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='MID'" v-if="!cacheStore.myTeam.players.mid.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/mid.png">
                        <img @click="cacheStore.mainLineNav='MID'" v-if="cacheStore.myTeam.players.mid.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.mid.img">
                        <div v-if="cacheStore.myTeam.players.mid.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                    <button class="absolute right-24 bottom-20 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='ADC'" v-if="!cacheStore.myTeam.players.adc.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/adc.png">
                        <img @click="cacheStore.mainLineNav='ADC'" v-if="cacheStore.myTeam.players.adc.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.adc.img">
                        <div v-if="cacheStore.myTeam.players.adc.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                    <button class="absolute right-8 bottom-8 bg-white rounded-full bg-opacity-80">
                        <img @click="cacheStore.mainLineNav='SUP'" v-if="!cacheStore.myTeam.players.sup.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/sup.png">
                        <img @click="cacheStore.mainLineNav='SUP'" v-if="cacheStore.myTeam.players.sup.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="cacheStore.myTeam.players.sup.img">
                        <div v-if="cacheStore.myTeam.players.sup.isMvp" class="absolute -left-1.5 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </button>
                </div>

                <!-- 버튼 -->
                <div class="ml-auto mr-20 my-8">
                    <button 
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 w-36 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-red-600 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200"
                        @click="modalStore.isSelectCaptainModal=true">
                        <span class="relative w-36 px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                            주장 설정하기
                        </span>
                    </button>
                    <button @click="submit"
                        type="button" 
                        class="text-white bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400  shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40">저장하기</button>
                </div>
            </div>

            <!-- 히어로 우측 -->
            <div class="w-9/12 flex flex-col pl-12">
                <!-- 제목 -->
                <div class="w-full max-w-[24rem] mt-3 mb-4 text-lg text-gray-700">
                    2024 LOL 챔피언스 코리아 서머
                </div>

                <!-- step1 응원팀 선정 -->
                <div class="w-9/12 max-w-[24rem] flex flex-col shadow-md rounded-md ">
                    <!-- 타이틀 -->
                    <div class="flex h-12 bg-gray-50" :class="step===0?'bg-red-100 rounded-t-md':'rounded-md'" @click="clickStep(0)">
                        <!-- 타이틀 텍스트 -->
                        <div class="flex my-auto ml-6 text-sm text-gray-600">
                            step1. 
                            <div class="ml-2 text-base text-gray-800">응원팀 선정</div>
                        </div>
                        <!-- 응원팀 아이콘 -->
                        <div class="flex ml-auto my-auto mr-4">
                            <img class="w-6 h-6 object-cover rounded-full" :src="cacheStore.myTeam.teamLogo">
                        </div>
                    </div>
                    <!-- 선수단 리스트 -->
                    <div class="w-full my-6 flex flex-col" v-show="step===0">
                        <!-- 1열 -->
                        <div class="px-4 flex w-full flex-wrap">
                            <div v-for="team in onlyTeams" :key="team.name" class="my-2 flex flex-col">
                                <img :class="this.cacheStore.myTeam.team===team.team?'ring-red-500 ring-2 bg-red-50':''" 
                                    class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" :src="team.colorImg" @click="selectTeam(team.team)">
                                <div :class="this.cacheStore.myTeam.team===team.team?'text-gray-900':''" 
                                    class="text-xs text-gray-500 mx-auto mt-1">{{team.team}}</div>
                            </div>
                        </div>
                    </div>

                
                </div>
                <!-- step2 내 선수단 리스트 -->
                <div class="mt-1 w-9/12 max-w-[24rem] flex flex-col shadow-md rounded-md ">
                    <!-- 선수단 타이틀 -->
                    <div class="flex h-12 bg-gray-50" :class="step===1?'bg-red-100 rounded-t-md':'rounded-md'" @click="clickStep(1)">
                        <!-- 타이틀 텍스트 -->
                        <div class="flex my-auto ml-6 text-sm text-gray-600">
                            step2. 
                            <div class="ml-2 text-base text-gray-800">내 선수단</div>
                        </div>
                        <!-- 토탈 vp 포인트 -->
                        <div class="flex ml-auto my-auto mr-4">
                            <div class="text-red-600 mr-1">
                                {{cacheStore.myTeam.totalVP}}
                            </div>
                            <img class="w-5 h-5 object-cover" src="@/assets/icon/vp.png">
                        </div>
                    </div>
                    <!-- 선수단 리스트 -->
                    <div class="w-full my-6 flex flex-col" v-show="step===1">
                        <!-- 탑 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <div class="relative my-auto mr-4 ">
                                <img v-if="cacheStore.myTeam.players.top.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/top_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.top.img">
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
                            <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.jgl.img">
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
                            <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.mid.img">
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
                            <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.adc.img">
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
                            <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.sup.img">
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
                    </div>
            </div>

        </div>

        <!-- 히어로 페이지 2 -->
        <div class="w-full flex" v-if="cacheStore.isSave">
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
                <button v-for="team, index in staticStore.teams" :key="index">
                    <img class="m-auto w-12 h-12 object-cover" :src="team.colorImg" v-if="team.team==cacheStore.mainTeamNav" @click="teamFilter(staticStore.teams[0].team)">
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
                    
                    <div class="px-4 font-bold">
                        {{player.playerName}}
                    </div>
                    <div class="w-full px-4 flex">
                        <div class="my-auto font-medium text-gray-600" v-if="player.playerPosition">{{player.playerPosition.toUpperCase()}} </div>
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
                        <transition
                            enter-active-class="transition duration-200 ease-in-out"
                            enter-from-class="opacity-0"
                            enter-to-class="opacity-100"
                            leave-active-class="transition duration-200 ease-in-out"
                            leave-from-class="opacity-100"
                            leave-to-class="opacity-0">
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
                                    {{player.info}}
                                </div>
                                <div class="mx-auto px-2 mb-3 text-gray-400 whitespace-pre-wrap ">
                                    click!
                                </div>
                            </div>
                        </transition>
                    </div>

                </button>
                <!-- 선택하기 버튼 -->
                <button v-if="!cacheStore.isSave &&
                        (this.cacheStore.mainLineNav.toLowerCase() === player.playerPosition || this.cacheStore.mainLineNav==='전체') &&
                        (this.cacheStore.mainTeamNav=== player.clubName || this.cacheStore.mainTeamNav=== 'LCK')"
                    @click="click(player.playerName);"
                    class="w-52 h-12 my-3 inline-flex items-center justify-center  mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-point-50  group group-hover:bg-gray-dark">
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
            selectAllFlag: false,
            selectTeamFlag: false,
            moreThanTwoFlag: false,
            moreThanTwoFlagText:'',
            oneFromOneFlag: false,
            vpFlag: false,
            mvpFlag: false,

            step:0,

            selected:0,

            hover: '',

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
        clickStep(num){
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
    },
}
</script>
<style scoped>
.w-my-60{
    width:50rem
}

</style>
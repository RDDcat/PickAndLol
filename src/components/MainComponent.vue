<template>
    <LoginWarnModal v-if="$store.state.modalStore.isLoginWarnModal"/>
    <!-- 선수단 등록 페이지 -->
    <div class="w-full flex flex-col mb-12">
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
                    <div class="text-red-600">선수단이 비어있습니다. </div> 
                    <div class="text-sm">5명을 채워 선수단을 구성해주세요.</div> 
                </div>
            </div>
            <!-- 응원팀 선택 -->
            <div v-if="selectTeamFlag"
                class="flex w-full py-2 px-4">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">응원팀을 선택해주세요. </div> 
                    <div class="text-sm">당신의 최애의 팀을 알려주세요.</div> 
                </div>
            </div>
            <!-- 응원 팀에 2명 이상 -->
            <div v-if="moreThanTwoFlag"
                class="flex w-full py-2 px-4">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">선정된 응원팀 선수는 최대 2명만 선택 가능합니다.</div> 
                    <div class="text-sm">선수단을 다시 구성해주세요.</div>
                    
                </div>
            </div>
            <!--  팀에 1명 이상 넣을 수 없음 -->
            <div v-if="oneFromOneFlag"
                class="flex w-full py-2 px-4">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">주장이 선택되지 않았습니다. </div> 
                    <div class="text-sm">응원팀을 제외한 나머지 팀에서는 선수를 1명씩 선정해야 합니다.</div> 
                </div>
            </div>
            <!--  토탈 금액이 넘어섬 -->
            <div v-if="vpFlag"
                class="flex w-full py-2 px-4">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">지출할 수 있는 금액을 초과했습니다. </div> 
                    <div class="text-sm">최대 지출 가능 vp는 {{limitVp}} 입니다.</div>                     
                </div>
            </div>
            <!--  주장 선택이 안됨 -->
            <div v-if="mvpFlag"
                class="flex w-full py-2 px-4">
                <!-- ! 아이콘 -->
                <img class="my-auto mx-4 w-6 h-6 object-cover" src="@/assets/icon/error.png">

                <!-- 에러 텍스트 -->
                <div class="p-2 w-4/5 my-auto text-base text-gray-600 text-ellipsis break-words">
                    <div class="text-red-600">주장이 선택되지 않았습니다. </div>
                    <div class="text-sm">선정된 응원팀 내에서 주장이 될 선수를 선택해 주세요.</div> 
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
                    <div class="absolute left-6 top-6">
                        <img @click="$store.state.cacheStore.mainLineNav='TOP'" v-if="!$store.state.cacheStore.myTeam.players.top.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/top.png">
                        <img @click="$store.state.cacheStore.mainLineNav='TOP'" v-if="$store.state.cacheStore.myTeam.players.top.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="$store.state.cacheStore.myTeam.players.top.img">
                        <div v-if="$store.state.cacheStore.myTeam.players.top.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                    <div class="absolute left-20 top-24">
                        <img @click="$store.state.cacheStore.mainLineNav='JGL'" v-if="!$store.state.cacheStore.myTeam.players.jgl.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/jgl.png">
                        <img @click="$store.state.cacheStore.mainLineNav='JGL'" v-if="$store.state.cacheStore.myTeam.players.jgl.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="$store.state.cacheStore.myTeam.players.jgl.img">
                        <div v-if="$store.state.cacheStore.myTeam.players.jgl.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                    <div class="absolute left-40 top-40">
                        <img @click="$store.state.cacheStore.mainLineNav='MID'" v-if="!$store.state.cacheStore.myTeam.players.mid.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/mid.png">
                        <img @click="$store.state.cacheStore.mainLineNav='MID'" v-if="$store.state.cacheStore.myTeam.players.mid.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="$store.state.cacheStore.myTeam.players.mid.img">
                        <div v-if="$store.state.cacheStore.myTeam.players.mid.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                    <div class="absolute right-24 bottom-20">
                        <img @click="$store.state.cacheStore.mainLineNav='ADC'" v-if="!$store.state.cacheStore.myTeam.players.adc.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/adc.png">
                        <img @click="$store.state.cacheStore.mainLineNav='ADC'" v-if="$store.state.cacheStore.myTeam.players.adc.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="$store.state.cacheStore.myTeam.players.adc.img">
                        <div v-if="$store.state.cacheStore.myTeam.players.adc.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                    <div class="absolute right-8 bottom-8">
                        <img @click="$store.state.cacheStore.mainLineNav='SUP'" v-if="!$store.state.cacheStore.myTeam.players.sup.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" src="@/assets/sup.png">
                        <img @click="$store.state.cacheStore.mainLineNav='SUP'" v-if="$store.state.cacheStore.myTeam.players.sup.name" class="w-16 h-16 ring-2 ring-red-500 hover:ring-4 hover:ring-red-500 rounded-full" :src="$store.state.cacheStore.myTeam.players.sup.img">
                        <div v-if="$store.state.cacheStore.myTeam.players.sup.isMvp" class="absolute -left-1 top-14 px-1.5 py-0.5 bg-red-500 text-white rounded-full z-10 text-xs">CAPTAIN</div>
                    </div>
                </div>

                <!-- 버튼 -->
                <div class="ml-auto mr-20 my-8" v-if="!$store.state.cacheStore.isSave">
                    <button 
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 w-36 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-red-600 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200"
                        @click="$store.state.modalStore.isSelectCaptainModal=true">
                        <span class="relative w-36 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            주장 설정하기
                        </span>
                    </button>
                    <button @click="submit"
                        type="button" 
                        class="text-white bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40">저장하기</button>
                </div>
            </div>

            <!-- 히어로 우측 -->
            <div v-if="!$store.state.cacheStore.isSave" class="w-3/5 max-w-[58rem] flex flex-col pl-12">
                <!-- 제목 -->
                <div class="w-full mt-3 mb-4 text-lg text-gray-700">
                    2024 LOL 챔피언스 코리아 서머
                </div>

                <!-- step1 응원팀 선정 -->
                <div class="w-3/5 flex flex-col shadow-md">
                    <!-- 타이틀 -->
                    <div class="flex my-1 h-12 bg-gray-50" @click="step=0">
                        <!-- 타이틀 텍스트 -->
                        <div class="flex my-auto ml-6 text-sm text-gray-600">
                            step1. 
                            <div class="ml-2 text-base text-gray-800">응원팀 선정</div>
                        </div>
                        <!-- 토탈 vp 포인트 -->
                        <div class="flex ml-auto my-auto mr-4">
                            <img class="w-6 h-6 object-cover rounded-full" :src="$store.state.cacheStore.myTeam.teamLogo">
                        </div>
                    </div>
                    <!-- 선수단 리스트 -->
                    <div class="w-full my-6 flex flex-col" v-show="step===0">
                        <!-- 1열 -->
                        <div class="px-4 flex w-full flex-wrap">
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_T1.png" @click="selectTeam('T1')">
                                <div class="text-sm text-gray-500 mx-auto mt-1">T1</div>
                            </div>
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_GEN.png" @click="selectTeam('GEN')" >
                                <div class="text-sm text-gray-500 mx-auto mt-1">GEN</div>
                            </div>
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_DK.png" @click="selectTeam('DK')">
                                <div class="text-sm text-gray-500 mx-auto mt-1">DK</div>
                            </div>
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_KDF.png" @click="selectTeam('KDF')">
                                <div class="text-sm text-gray-500 mx-auto mt-1">KDF</div>
                            </div>
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_DRX.png" @click="selectTeam('DRX')">
                                <div class="text-sm text-gray-500 mx-auto mt-1">DRX</div>
                            </div>
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_NS.png" @click="selectTeam('NS')">
                                <div class="text-sm text-gray-500 mx-auto mt-1">NS</div>
                            </div>
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_FOX.png" @click="selectTeam('FOX')">
                                <div class="text-sm text-gray-500 mx-auto mt-1">FOX</div>
                            </div>
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_HLE.png" @click="selectTeam('HLE')">
                                <div class="text-sm text-gray-500 mx-auto mt-1">HLE</div>
                            </div>
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_KT.png" @click="selectTeam('KT')">
                                <div class="text-sm text-gray-500 mx-auto mt-1">KT</div>
                            </div>
                            <div class="my-2 flex flex-col">
                                <img class="w-11 h-11 object-contain rounded-full bg-gray-50 mx-3 hover:ring-red-400 hover:ring-2" src="@/assets/logo/color_BRO.png" @click="selectTeam('BRO')">
                                <div class="text-sm text-gray-500 mx-auto mt-1">BRO</div>
                            </div>
                        </div>
                    </div>

                
                </div>
                <!-- step2 내 선수단 리스트 -->
                <div class="w-3/5 flex flex-col shadow-md">
                    <!-- 선수단 타이틀 -->
                    <div class="flex my-1 h-12 bg-gray-50" @click="step=1">
                        <!-- 타이틀 텍스트 -->
                        <div class="flex my-auto ml-6 text-sm text-gray-600">
                            step2. 
                            <div class="ml-2 text-base text-gray-800">내 선수단</div>
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
                    <div class="w-full my-6 flex flex-col" v-show="step===1">
                        <!-- 탑 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <div class="relative my-auto mr-4 ">
                                <img v-if="$store.state.cacheStore.myTeam.players.top.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/top_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.top.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.top.name ? $store.state.cacheStore.myTeam.players.top.team+' '+$store.state.cacheStore.myTeam.players.top.name : '-'}}
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
                            <div class="relative my-auto mr-4 ">
                                <img v-if="$store.state.cacheStore.myTeam.players.jgl.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/jgl_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.jgl.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.jgl.name ?$store.state.cacheStore.myTeam.players.jgl.team+' '+$store.state.cacheStore.myTeam.players.jgl.name  : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{$store.state.cacheStore.myTeam.players.jgl.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 미드 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <div class="relative my-auto mr-4 ">
                                <img v-if="$store.state.cacheStore.myTeam.players.mid.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/mid_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.mid.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.mid.name ?$store.state.cacheStore.myTeam.players.mid.team+' '+$store.state.cacheStore.myTeam.players.mid.name : '-'}}
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
                            <div class="relative my-auto mr-4 ">
                                <img v-if="$store.state.cacheStore.myTeam.players.adc.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/adc_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.adc.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.adc.name ?$store.state.cacheStore.myTeam.players.adc.team+' '+$store.state.cacheStore.myTeam.players.adc.name : '-'}}
                            </div>
                            <!-- 선수 vp 포인트 -->
                            <div class="flex ml-auto my-auto mr-2">
                                <div class="text-red-600 mr-1">
                                    {{$store.state.cacheStore.myTeam.players.adc.vp}}
                                </div>
                                <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                            </div>
                        </div>

                        <!-- 서폿 -->
                        <div class="my-2 px-4 flex w-full">
                            <!-- 아이콘 -->
                            <div class="relative my-auto mr-4 ">
                                <img v-if="$store.state.cacheStore.myTeam.players.sup.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                                <img class="w-6 h-6" src="@/assets/icon/sup_icon.png">
                            </div>
                            <!-- 선수 초상화 -->
                            <img class="my-auto w-10 h-10 rounded-full" :src="$store.state.cacheStore.myTeam.players.sup.img">
                            <!-- 선수 이름 -->
                            <div class="my-auto ml-6 text-base">
                                {{$store.state.cacheStore.myTeam.players.sup.name ?$store.state.cacheStore.myTeam.players.sup.team+' '+$store.state.cacheStore.myTeam.players.sup.name : '-'}}
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
                <div @click="this.$store.state.modalStore.isPlayerModal=true" class="relative w-52 h-72 flex flex-col rounded-lg shadow-lg hover:shadow-2xl">
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
                <button v-if="!$store.state.cacheStore.isSave &&
                        (this.$store.state.cacheStore.mainLineNav === player.line || this.$store.state.cacheStore.mainLineNav==='전체') &&
                        (this.$store.state.cacheStore.mainTeamNav=== player.team || this.$store.state.cacheStore.mainTeamNav=== 'LCK')"
                    @click="click(player.name);"
                    class="w-52 h-12 my-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-red-600 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200">
                    <span class="relative w-52  px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {{ this.$store.state.cacheStore.myTeam.players.top.name ===player.name ||
                        this.$store.state.cacheStore.myTeam.players.jgl.name ===player.name ||
                        this.$store.state.cacheStore.myTeam.players.mid.name ===player.name ||
                        this.$store.state.cacheStore.myTeam.players.adc.name ===player.name ||
                        this.$store.state.cacheStore.myTeam.players.sup.name ===player.name
                        ? '선택됨' : '선택하기'}}
                    </span>
                </button>
                </div>
            </template>
        </div>
    </div>
    <FooterComponent/>
</template>
<script>
import FooterComponent from '@/components/footer/FooterComponent'
import LoginWarnModal from '@/components/modal/LoginWarnModal.vue'

import api from '@/api/api'

export default {
    components: {
        FooterComponent,
        LoginWarnModal,
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
            limitVp:350,

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
        selectTeam(name){
            this.$store.state.cacheStore.myTeam.team=name
            this.$store.state.cacheStore.myTeam.teamLogo='./assets/logo/color_'+name+'.png'
        },
        valid(){
            // selectAllFlag Validation            
            if(!this.$store.state.cacheStore.myTeam.players.top.name ||
                !this.$store.state.cacheStore.myTeam.players.jgl.name ||
                !this.$store.state.cacheStore.myTeam.players.mid.name ||
                !this.$store.state.cacheStore.myTeam.players.adc.name ||
                !this.$store.state.cacheStore.myTeam.players.sup.name ){
                this.selectAllFlag = true
            } else{
                this.selectAllFlag = false
            }

            // selectTeamFlag Validation
            if(!this.$store.state.cacheStore.myTeam.team){
                this.selectTeamFlag = true
            } else{
                this.selectTeamFlag = false
            }


            // moreThanTwoFlag Validation
            let count=0;
            for(let index in this.$store.state.cacheStore.myTeam.players){
                if(this.$store.state.cacheStore.myTeam.players[index].team===this.$store.state.cacheStore.myTeam.team){
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
            for(let index in this.$store.state.cacheStore.myTeam.players){
                hold.push(this.$store.state.cacheStore.myTeam.players[index].team);
            }
            let uniqueTeams = new Set(hold);
            if(uniqueTeams.size<4){
                this.oneFromOneFlag = true
            } else{
                this.oneFromOneFlag = false
            }

            // vpFlag Validation
            if(this.$store.state.cacheStore.myTeam.totalVP > this.limitVp){
                this.vpFlag = true
            } else{
                this.vpFlag = false
            }
            // console.log(!this.$store.state.cacheStore.myTeam.players.top.isMvp &&
            //     !this.$store.state.cacheStore.myTeam.players.jgl.isMvp &&
            //     !this.$store.state.cacheStore.myTeam.players.mid.isMvp &&
            //     !this.$store.state.cacheStore.myTeam.players.adc.isMvp &&
            //     !this.$store.state.cacheStore.myTeam.players.sup.isMvp)
            // console.log(this.$store.state.cacheStore.myTeam.players)
            // mvpFlag Validation
            if(!this.$store.state.cacheStore.myTeam.players.top.isMvp &&
                !this.$store.state.cacheStore.myTeam.players.jgl.isMvp &&
                !this.$store.state.cacheStore.myTeam.players.mid.isMvp &&
                !this.$store.state.cacheStore.myTeam.players.adc.isMvp &&
                !this.$store.state.cacheStore.myTeam.players.sup.isMvp ){
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
            console.log(this.$store.state.cacheStore.userId)
            console.log(this.$store.state.cacheStore.myTeam)
            let body = {
                oauthId:this.$store.state.cacheStore.userId,
                data:JSON.stringify(this.$store.state.cacheStore.myTeam)
            }
            console.log('body',body)
            api.postTeam(body)
            .then(response=>{
                console.log(response)
                this.$store.state.cacheStore.isSave=true
            })
            .catch(function (e){
                console.log(e);
            });

        


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
                        this.$store.state.cacheStore.myTeam.players.top.isMvp = false
                        this.$store.state.cacheStore.myTeam.players.top.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.top.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.top.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.top.vp = players[player].vp
                    }
                    else if(players[player].line === 'JGL'){
                        this.$store.state.cacheStore.myTeam.players.jgl.isMvp = false
                        this.$store.state.cacheStore.myTeam.players.jgl.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.jgl.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.jgl.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.jgl.vp = players[player].vp
                    }
                    else if(players[player].line === 'MID'){
                        this.$store.state.cacheStore.myTeam.players.mid.isMvp = false
                        this.$store.state.cacheStore.myTeam.players.mid.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.mid.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.mid.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.mid.vp = players[player].vp
                    }
                    else if(players[player].line === 'ADC'){
                        this.$store.state.cacheStore.myTeam.players.adc.isMvp = false
                        this.$store.state.cacheStore.myTeam.players.adc.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.adc.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.adc.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.adc.vp = players[player].vp
                    }
                    else if(players[player].line === 'SUP'){
                        this.$store.state.cacheStore.myTeam.players.sup.isMvp = false
                        this.$store.state.cacheStore.myTeam.players.sup.name = players[player].name
                        this.$store.state.cacheStore.myTeam.players.sup.team = players[player].team
                        this.$store.state.cacheStore.myTeam.players.sup.img = players[player].img
                        this.$store.state.cacheStore.myTeam.players.sup.vp = players[player].vp
                    }
                }
            }
            // 토탈 vp 계산
            this.$store.state.cacheStore.myTeam.totalVP = this.$store.state.cacheStore.myTeam.players.top.vp + this.$store.state.cacheStore.myTeam.players.jgl.vp + this.$store.state.cacheStore.myTeam.players.mid.vp + this.$store.state.cacheStore.myTeam.players.adc.vp + this.$store.state.cacheStore.myTeam.players.sup.vp

        },

    },
    beforeMount(){
        if(this.$route.query.id){
            this.$store.state.cacheStore.userId = this.$route.query.id
            this.$store.state.cacheStore.myTeam.name = this.$route.query.name
            
            // 팀 데이터 sync 넣기
            api.getSync(this.$store.state.cacheStore.userId)
            .then(response=>{
                console.log(response)
            })
            .catch(function (e){
                console.log(e);
            });
        }

        // 비 로그인시 모달로 막기
        if(this.$store.state.cacheStore.userId===0){
            this.$store.state.modalStore.isLoginWarnModal=true
        }
    },
    unmounted(){
        this.$store.state.modalStore.isLoginWarnModal=false
    }
}
</script>
<style scoped>


</style>
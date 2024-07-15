<template>
    <!-- 타이틀 -->
    <div class="w-full h-24 p-9 text-lg flex">
        <img class="w-6 h-6 mr-2" src="@/assets/logo.png" alt="">
        경기 결과 입력
    </div>

    <!-- 매치 ID 입력 -->
    <form class="max-w-xl mx-auto">
        <label class="block mb-2 text-sm font-medium text-gray-900 ">매치 ID </label>
        <input v-model="matchId" type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="matchId" required />
    </form>

    <!-- 경기 결과 입력 -->
    <div class="flex">
        <!-- 홈 -->
        <div class="w-1/2">
            <div class="max-w-xl mx-auto">
                홈 (home) 
                {{home.clubId}}
            </div>
            
            <!-- 팀선택 -->
            <div class="max-w-xl mx-auto">
                <select v-model="home.clubId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="1">젠지</option>
                    <option value="2">T1</option>
                    <option value="3">KT</option>
                    <option value="4">한화생명</option>
                    <option value="5">DK</option>
                    <option value="6">FOX BNK</option>
                    <option value="7">광동</option>
                    <option value="8">BRO OK 저축은행</option>
                    <option value="9">DRX</option>
                    <option value="10">농심</option>
                </select>
            </div>
            <!-- 경기 결과 선택(승/패) -->
            <div class="max-w-xl mx-auto">
                승리?
                <select v-model="home.clubId.matchResult" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="WIN">승리 WIN</option>
                    <option value="LOSE">패배 LOSE</option>
                </select>
            </div>
            <!-- 팀 전체 KDA 확인 -->
            <div class="max-w-xl mx-auto my-1 text-xl">
                전체 KDA : {{homeTotalKill}} / {{homeTotalDeath}} / {{homeTotalAssist}}
            </div>

            <!-- 유충 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">유충</label>
                <div class="relative flex items-center">
                    <button type="button" @click="home.voidGrubs===0?home.voidGrubs=0:home.voidGrubs--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.voidGrubs" required />
                    <button type="button" @click="home.voidGrubs++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- 전령 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">전령</label>
                <div class="relative flex items-center">
                    <button type="button" @click="home.heralds===0?home.heralds=0:home.heralds--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.heralds" required />
                    <button type="button" @click="home.heralds++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- 용 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">용</label>
                <div class="relative flex items-center">
                    <button type="button" @click="home.drakes===0?home.drakes=0:home.drakes--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.drakes" required />
                    <button type="button" @click="home.drakes++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- 장로용 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">장로용</label>
                <div class="relative flex items-center">
                    <button type="button" @click="home.elders===0?home.elders=0:home.elders--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.elders" required />
                    <button type="button" @click="home.elders++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- 바론 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">바론</label>
                <div class="relative flex items-center">
                    <button type="button" @click="home.barons===0?home.barons=0:home.barons--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.barons" required />
                    <button type="button" @click="home.barons++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- 탑 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">탑 선수 ID : {{home.top_player.playerId}}</label>
                <input type="text" v-model="home.top_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500  ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="home.top_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="home.top_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="home.top_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.top_player.failureHerald===0?home.top_player.failureHerald=0:home.top_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.top_player.failureHerald" required />
                        <button type="button" @click="home.top_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.top_player.soloKill===0?home.top_player.soloKill=0:home.top_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.top_player.soloKill" required />
                        <button type="button" @click="home.top_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 맞라이너 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.top_player.lineSoloKill===0?home.top_player.lineSoloKill=0:home.top_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.top_player.lineSoloKill" required />
                        <button type="button" @click="home.top_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="home.top_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.top_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="home.top_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.top_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="home.top_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.top_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{home.top_player}}
                </label>
            </div>

            <!-- 정글 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">정글 선수 ID : {{home.jgl_player.name}}</label>
                <input type="text" v-model="home.jgl_player.name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="home.jgl_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="home.jgl_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="home.jgl_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.jgl_player.failureHerald===0?home.jgl_player.failureHerald=0:home.jgl_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.jgl_player.failureHerald" required />
                        <button type="button" @click="home.jgl_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.jgl_player.soloKill===0?home.jgl_player.soloKill=0:home.jgl_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.jgl_player.soloKill" required />
                        <button type="button" @click="home.jgl_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.jgl_player.lineSoloKill===0?home.jgl_player.lineSoloKill=0:home.jgl_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.jgl_player.lineSoloKill" required />
                        <button type="button" @click="home.jgl_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="home.jgl_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.jgl_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="home.jgl_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.jgl_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="home.jgl_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.jgl_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{home.jgl_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">미드 선수 ID : {{home.mid_player.name}}</label>
                <input type="text" v-model="home.mid_player.name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="home.mid_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="home.mid_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="home.mid_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.mid_player.failureHerald===0?home.mid_player.failureHerald=0:home.mid_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.mid_player.failureHerald" required />
                        <button type="button" @click="home.mid_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.mid_player.soloKill===0?home.mid_player.soloKill=0:home.mid_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.mid_player.soloKill" required />
                        <button type="button" @click="home.mid_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.mid_player.lineSoloKill===0?home.mid_player.lineSoloKill=0:home.mid_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.mid_player.lineSoloKill" required />
                        <button type="button" @click="home.mid_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="home.mid_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.mid_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="home.mid_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.mid_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="home.mid_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.mid_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{home.mid_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">원딜 선수 ID : {{home.adc_player.name}}</label>
                <input type="text" v-model="home.adc_player.name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="home.adc_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="home.adc_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="home.adc_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.adc_player.failureHerald===0?home.adc_player.failureHerald=0:home.adc_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.adc_player.failureHerald" required />
                        <button type="button" @click="home.adc_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.adc_player.soloKill===0?home.adc_player.soloKill=0:home.adc_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.adc_player.soloKill" required />
                        <button type="button" @click="home.adc_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.adc_player.lineSoloKill===0?home.adc_player.lineSoloKill=0:home.adc_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.adc_player.lineSoloKill" required />
                        <button type="button" @click="home.adc_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="home.adc_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.adc_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="home.adc_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.adc_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="home.adc_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.adc_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{home.adc_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">서폿 선수 ID : {{home.sup_player.name}}</label>
                <input type="text" v-model="home.sup_player.name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="home.sup_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="home.sup_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="home.sup_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.sup_player.failureHerald===0?home.sup_player.failureHerald=0:home.sup_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.sup_player.failureHerald" required />
                        <button type="button" @click="home.sup_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.sup_player.soloKill===0?home.sup_player.soloKill=0:home.sup_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.sup_player.soloKill" required />
                        <button type="button" @click="home.sup_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.sup_player.lineSoloKill===0?home.sup_player.lineSoloKill=0:home.sup_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.sup_player.lineSoloKill" required />
                        <button type="button" @click="home.sup_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="home.sup_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.sup_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="home.sup_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.sup_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="home.sup_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="home.sup_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{home.sup_player}}
                </label>
            </div>

        </div>
        
        <!-- 홈 -->
        <div class="w-1/2">
            <div class="max-w-xl mx-auto">
                어웨이
                {{away.clubId}}
            </div>
            
            <!-- 팀선택 -->
            <div class="max-w-xl mx-auto">
                <select v-model="away.clubId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="1">젠지</option>
                    <option value="2">T1</option>
                    <option value="3">KT</option>
                    <option value="4">한화생명</option>
                    <option value="5">DK</option>
                    <option value="6">FOX BNK</option>
                    <option value="7">광동</option>
                    <option value="8">BRO OK 저축은행</option>
                    <option value="9">DRX</option>
                    <option value="10">농심</option>
                </select>
            </div>
            <!-- 경기 결과 선택(승/패) -->
            <div class="max-w-xl mx-auto">
                승리?
                <select v-model="away.clubId.matchResult" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="WIN">승리 WIN</option>
                    <option value="LOSE">패배 LOSE</option>
                </select>
            </div>
            <!-- 팀 전체 KDA 확인 -->
            <div class="max-w-xl mx-auto my-1 text-xl">
                전체 KDA : {{awayTotalKill}} / {{awayTotalDeath}} / {{awayTotalAssist}}
            </div>

            <!-- 유충 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">유충</label>
                <div class="relative flex items-center">
                    <button type="button" @click="away.voidGrubs===0?away.voidGrubs=0:away.voidGrubs--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.voidGrubs" required />
                    <button type="button" @click="away.voidGrubs++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- 전령 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">전령</label>
                <div class="relative flex items-center">
                    <button type="button" @click="away.heralds===0?away.heralds=0:away.heralds--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.heralds" required />
                    <button type="button" @click="away.heralds++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- 용 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">용</label>
                <div class="relative flex items-center">
                    <button type="button" @click="away.drakes===0?away.drakes=0:away.drakes--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.drakes" required />
                    <button type="button" @click="away.drakes++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- 장로용 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">장로용</label>
                <div class="relative flex items-center">
                    <button type="button" @click="away.elders===0?away.elders=0:away.elders--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.elders" required />
                    <button type="button" @click="away.elders++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- 바론 -->
            <div class="max-w-xl mx-auto my-1">
                <label class="block mb-1 text-sm font-medium text-gray-900">바론</label>
                <div class="relative flex items-center">
                    <button type="button" @click="away.barons===0?away.barons=0:away.barons--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.barons" required />
                    <button type="button" @click="away.barons++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- 탑 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">탑 선수 ID : {{away.top_player.name}}</label>
                <input type="text" v-model="away.top_player.name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="away.top_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="away.top_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="away.top_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.top_player.failureHerald===0?away.top_player.failureHerald=0:away.top_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.top_player.failureHerald" required />
                        <button type="button" @click="away.top_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.top_player.soloKill===0?away.top_player.soloKill=0:away.top_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.top_player.soloKill" required />
                        <button type="button" @click="away.top_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 맞라이너 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.top_player.lineSoloKill===0?away.top_player.lineSoloKill=0:away.top_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.top_player.lineSoloKill" required />
                        <button type="button" @click="away.top_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="away.top_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.top_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="away.top_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.top_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="away.top_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.top_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{away.top_player}}
                </label>
            </div>

            <!-- 정글 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">정글 선수 ID : {{away.jgl_player.name}}</label>
                <input type="text" v-model="away.jgl_player.name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="away.jgl_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="away.jgl_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="away.jgl_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.jgl_player.failureHerald===0?away.jgl_player.failureHerald=0:away.jgl_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.jgl_player.failureHerald" required />
                        <button type="button" @click="away.jgl_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.jgl_player.soloKill===0?away.jgl_player.soloKill=0:away.jgl_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.jgl_player.soloKill" required />
                        <button type="button" @click="away.jgl_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.jgl_player.lineSoloKill===0?away.jgl_player.lineSoloKill=0:away.jgl_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.jgl_player.lineSoloKill" required />
                        <button type="button" @click="away.jgl_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="away.jgl_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.jgl_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="away.jgl_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.jgl_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="away.jgl_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.jgl_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{away.jgl_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">미드 선수 ID : {{away.mid_player.name}}</label>
                <input type="text" v-model="away.mid_player.name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="away.mid_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="away.mid_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="away.mid_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.mid_player.failureHerald===0?away.mid_player.failureHerald=0:away.mid_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.mid_player.failureHerald" required />
                        <button type="button" @click="away.mid_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.mid_player.soloKill===0?away.mid_player.soloKill=0:away.mid_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.mid_player.soloKill" required />
                        <button type="button" @click="away.mid_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.mid_player.lineSoloKill===0?away.mid_player.lineSoloKill=0:away.mid_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.mid_player.lineSoloKill" required />
                        <button type="button" @click="away.mid_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="away.mid_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.mid_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="away.mid_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.mid_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="away.mid_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.mid_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{away.mid_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">원딜 선수 ID : {{away.adc_player.name}}</label>
                <input type="text" v-model="away.adc_player.name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="away.adc_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="away.adc_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="away.adc_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.adc_player.failureHerald===0?away.adc_player.failureHerald=0:away.adc_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.adc_player.failureHerald" required />
                        <button type="button" @click="away.adc_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.adc_player.soloKill===0?away.adc_player.soloKill=0:away.adc_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.adc_player.soloKill" required />
                        <button type="button" @click="away.adc_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.adc_player.lineSoloKill===0?away.adc_player.lineSoloKill=0:away.adc_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.adc_player.lineSoloKill" required />
                        <button type="button" @click="away.adc_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="away.adc_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.adc_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="away.adc_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.adc_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="away.adc_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.adc_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{away.adc_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">서폿 선수 ID : {{away.sup_player.name}}</label>
                <input type="text" v-model="away.sup_player.name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
                <!-- 퍼스트 블러드 달성 -->
                <label class="inline-flex items-center cursor-pointer mt-4">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 달성</span>
                    <input v-model="away.sup_player.isFirstKill" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 퍼스트 블러드 당함 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">퍼스트 블러드 당함</span>
                    <input v-model="away.sup_player.isFirstDeath" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- MOM(POG) 선정 -->
                <label class="inline-flex items-center cursor-pointer mt-1">
                    <span class="ms-3 mr-4 text-sm font-medium text-gray-900 ">MOM(POG) 선정</span>
                    <input v-model="away.sup_player.isPog" type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                </label>
                <!-- 전령 실패 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">전령 실패 횟수</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.sup_player.failureHerald===0?away.sup_player.failureHerald=0:away.sup_player.failureHerald--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.sup_player.failureHerald" required />
                        <button type="button" @click="away.sup_player.failureHerald++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <label class="block mb-1 text-sm font-medium text-gray-900 mt-3 mr-2">솔로킬</label>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.sup_player.soloKill===0?away.sup_player.soloKill=0:away.sup_player.soloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.sup_player.soloKill" required />
                        <button type="button" @click="away.sup_player.soloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로킬 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">맞라이너 솔로킬</label>
                        <label class="block mb-1 text-sm font-medium text-gray-300">(**솔로킬과 중복 카운트)</label>
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.sup_player.lineSoloKill===0?away.sup_player.lineSoloKill=0:away.sup_player.lineSoloKill--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.sup_player.lineSoloKill" required />
                        <button type="button" @click="away.sup_player.lineSoloKill++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 킬 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">kill 킬</label>
                    <input v-model="away.sup_player.kill" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.sup_player.kill" required />
                </form>
                <!-- 데스 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">death 데스</label>
                    <input v-model="away.sup_player.death" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.sup_player.kill" required />
                </form>
                <!-- 어시스트 -->
                <form class="max-w-xl mx-auto">
                    <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assist 어시스트</label>
                    <input v-model="away.sup_player.assist" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="away.sup_player.kill" required />
                </form>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{away.sup_player}}
                </label>
            </div>

        </div>
    </div>
    <div @click="console.log('submit 제출')" class="flex mx-auto mt-10 rounded-lg w-60 h-12 bg-red-300 ">
        <div class="m-auto">
            제출하기
        </div>
    </div>
    <div class="h-56"></div>
</template>
<script>


export default {
    components: {

    },
    data(){
        return {
            matchId:0,
            home:{
                clubId:'',
                matchResult:'',
                voidGrubs:0,
                heralds:0,
                drakes:0,
                elders:0,
                barons:0,
                totalKill:0,
                totalDeath:0,
                totalAssist:0,
                top_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:0,
                    kill:0,
                    death:0,
                    assist:0,
                },
                jgl_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:0,
                    kill:0,
                    death:0,
                    assist:0,
                },
                mid_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:0,
                    kill:0,
                    death:0,
                    assist:0,
                },
                adc_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:0,
                    kill:0,
                    death:0,
                    assist:0,
                },
                sup_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:0,
                    kill:0,
                    death:0,
                    assist:0,
                },
            },
            away:{
                clubId:'',
                matchmatchResult:'',
                voidGrubs:0,
                heralds:0,
                drakes:0,
                elders:0,
                barons:0,
                top_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:false,
                    kill:0,
                    death:0,
                    assist:0,
                },
                jgl_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:false,
                    kill:0,
                    death:0,
                    assist:0,
                },
                mid_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:false,
                    kill:0,
                    death:0,
                    assist:0,
                },
                adc_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:false,
                    kill:0,
                    death:0,
                    assist:0,
                },
                sup_player:{
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    failureHerald:0,
                    soloKill:0,
                    lineSoloKill:false,
                    kill:0,
                    death:0,
                    assist:0,
                },
            },
        }
    },
    methods: {
    },
    computed: {
        homeTotalKill() {
            return (
                this.home.top_player.kill +
                this.home.jgl_player.kill +
                this.home.mid_player.kill +
                this.home.adc_player.kill +
                this.home.sup_player.kill
            );
        },
        homeTotalDeath() {
            return (
                this.home.top_player.death +
                this.home.jgl_player.death +
                this.home.mid_player.death +
                this.home.adc_player.death +
                this.home.sup_player.death
            );
        },
        homeTotalAssist() {
            return (
                this.home.top_player.assist +
                this.home.jgl_player.assist +
                this.home.mid_player.assist +
                this.home.adc_player.assist +
                this.home.sup_player.assist
            );
        },
        awayTotalKill() {
            return (
                this.away.top_player.kill +
                this.away.jgl_player.kill +
                this.away.mid_player.kill +
                this.away.adc_player.kill +
                this.away.sup_player.kill
            );
        },
        awayTotalDeath() {
        return (
            this.away.top_player.death +
            this.away.jgl_player.death +
            this.away.mid_player.death +
            this.away.adc_player.death +
            this.away.sup_player.death
        );
        },
        awayTotalAssist() {
        return (
            this.away.top_player.assist +
            this.away.jgl_player.assist +
            this.away.mid_player.assist +
            this.away.adc_player.assist +
            this.away.sup_player.assist
        );
        },
    },
    watch: {
        homeTotalKill(newVal) {
            this.home.totalKill = newVal;
        },
        homeTotalDeath(newVal) {
            this.home.totalDeath = newVal;
        },
        homeTotalAssist(newVal) {
            this.home.totalAssist = newVal;
        },
        awayTotalKill(newVal) {
            this.away.totalKill = newVal;
        },
        awayTotalDeath(newVal) {
            this.away.totalDeath = newVal;
        },
        awayTotalAssist(newVal) {
            this.away.totalAssist = newVal;
        },
    },
}
</script>
<style scoped>



</style>
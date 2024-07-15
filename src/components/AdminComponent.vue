<template>
    <!-- 타이틀 -->
    <div class="w-full h-24 p-9 text-lg flex">
        <img class="w-6 h-6 mr-2" src="@/assets/logo.png" alt="">
        경기 결과 입력
    </div>

    <!-- 매치 ID 입력 -->
    <form class="max-w-xl mx-auto">
        <label class="block mb-1 text-sm font-medium text-gray-900 ">매치 ID </label>
        <input v-model="matchId" type="number" class="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   " :placeholder="matchId" required />
    </form>
    <div class="max-w-xl flex mx-auto mb-4">
        <!-- 시간 입력 -->
        <form class="w-56 mt-auto">
            <label class="block mb-1 text-sm font-medium text-gray-900 ">경기 시간 (플레이타임) (00:00) </label>
            <input v-model="playTime" type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5   " :placeholder="playTime" required />
        </form>
        <div class="w-44 mt-auto ml-4">
            <label class="block mb-1 text-sm font-medium text-gray-900 ">오더셋 </label>
            <select v-model="orderSet" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                <option value="FRIST">FRIST</option>
                <option value="SECOND">SECOND</option>
                <option value="THIRD">THIRD</option>
            </select>
        </div>
    </div>
    

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
                <select v-model="home.matchResult" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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
                        <button type="button" @click="home.top_player.heraldDriveFail===0?home.top_player.heraldDriveFail=0:home.top_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.top_player.heraldDriveFail" required />
                        <button type="button" @click="home.top_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="home.top_player.soloKills===0?home.top_player.soloKills=0:home.top_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.top_player.soloKills" required />
                        <button type="button" @click="home.top_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.top_player.soloDeaths===0?home.top_player.soloDeaths=0:home.top_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.top_player.soloDeaths" required />
                        <button type="button" @click="home.top_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="home.top_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.top_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="home.top_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.top_player.deathCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="home.top_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.top_player.assistCount" required />
                    </form>
                </div>
                
                <div class="w-full flex ">
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="home.top_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.top_player.damage" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="home.top_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.top_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{home.top_player}}
                </label>
            </div>

            <!-- 정글 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">정글 선수 ID : {{home.jgl_player.playerId}}</label>
                <input type="text" v-model="home.jgl_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
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
                        <button type="button" @click="home.jgl_player.heraldDriveFail===0?home.jgl_player.heraldDriveFail=0:home.jgl_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.jgl_player.heraldDriveFail" required />
                        <button type="button" @click="home.jgl_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="home.jgl_player.soloKills===0?home.jgl_player.soloKills=0:home.jgl_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.jgl_player.soloKills" required />
                        <button type="button" @click="home.jgl_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.jgl_player.soloDeaths===0?home.jgl_player.soloDeaths=0:home.jgl_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.jgl_player.soloDeaths" required />
                        <button type="button" @click="home.jgl_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="home.jgl_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.jgl_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="home.jgl_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.jgl_player.deathCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="home.jgl_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.jgl_player.assistCount" required />
                    </form>
                </div>

                <div class="w-full flex ">
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="home.jgl_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.jgl_player.damage" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="home.jgl_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.jgl_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{home.jgl_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">미드 선수 ID : {{home.mid_player.playerId}}</label>
                <input type="text" v-model="home.mid_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
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
                        <button type="button" @click="home.mid_player.heraldDriveFail===0?home.mid_player.heraldDriveFail=0:home.mid_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.mid_player.heraldDriveFail" required />
                        <button type="button" @click="home.mid_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="home.mid_player.soloKills===0?home.mid_player.soloKills=0:home.mid_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.mid_player.soloKills" required />
                        <button type="button" @click="home.mid_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.mid_player.soloDeaths===0?home.mid_player.soloDeaths=0:home.mid_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.mid_player.soloDeaths" required />
                        <button type="button" @click="home.mid_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="home.mid_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.mid_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="home.mid_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.mid_player.deathCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="home.mid_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.mid_player.assistCount" required />
                    </form>
                </div>

                <div class="w-full flex ">
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="home.mid_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.mid_player.damage" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="home.mid_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.mid_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{home.mid_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">원딜 선수 ID : {{home.adc_player.playerId}}</label>
                <input type="text" v-model="home.adc_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
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
                        <button type="button" @click="home.adc_player.heraldDriveFail===0?home.adc_player.heraldDriveFail=0:home.adc_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.adc_player.heraldDriveFail" required />
                        <button type="button" @click="home.adc_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="home.adc_player.soloKills===0?home.adc_player.soloKills=0:home.adc_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.adc_player.soloKills" required />
                        <button type="button" @click="home.adc_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.adc_player.soloDeaths===0?home.adc_player.soloDeaths=0:home.adc_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.adc_player.soloDeaths" required />
                        <button type="button" @click="home.adc_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="home.adc_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.adc_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="home.adc_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.adc_player.deathCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="home.adc_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.adc_player.assistCount" required />
                    </form>
                </div>

                <div class="w-full flex ">
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="home.adc_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.adc_player.damage" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="home.adc_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.adc_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{home.adc_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">서폿 선수 ID : {{home.sup_player.playerId}}</label>
                <input type="text" v-model="home.sup_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
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
                        <button type="button" @click="home.sup_player.heraldDriveFail===0?home.sup_player.heraldDriveFail=0:home.sup_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.sup_player.heraldDriveFail" required />
                        <button type="button" @click="home.sup_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="home.sup_player.soloKills===0?home.sup_player.soloKills=0:home.sup_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.sup_player.soloKills" required />
                        <button type="button" @click="home.sup_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="home.sup_player.soloDeaths===0?home.sup_player.soloDeaths=0:home.sup_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="home.sup_player.soloDeaths" required />
                        <button type="button" @click="home.sup_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="home.sup_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.sup_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="home.sup_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.sup_player.deathCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="home.sup_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.sup_player.assistCount" required />
                    </form>
                </div>

                <div class="w-full flex ">
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="home.sup_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.sup_player.damage" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="home.sup_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="home.sup_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

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
                <select v-model="away.matchResult" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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
                <label class="block mb-2 text-sm font-medium text-gray-900 ">탑 선수 ID : {{away.top_player.playerId}}</label>
                <input type="text" v-model="away.top_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
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
                        <button type="button" @click="away.top_player.heraldDriveFail===0?away.top_player.heraldDriveFail=0:away.top_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.top_player.heraldDriveFail" required />
                        <button type="button" @click="away.top_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="away.top_player.soloKills===0?away.top_player.soloKills=0:away.top_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.top_player.soloKills" required />
                        <button type="button" @click="away.top_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.top_player.soloDeaths===0?away.top_player.soloDeaths=0:away.top_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.top_player.soloDeaths" required />
                        <button type="button" @click="away.top_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="away.top_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.top_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="away.top_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.top_player.killCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="away.top_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.top_player.killCount" required />
                    </form>
                </div>

                <div class="w-full flex ">
                    <!-- damage 데미지 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="away.top_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.top_player.damage" required />
                    </form>
                    <!-- cs -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="away.top_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.top_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{away.top_player}}
                </label>
            </div>

            <!-- 정글 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">정글 선수 ID : {{away.jgl_player.playerId}}</label>
                <input type="text" v-model="away.jgl_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
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
                        <button type="button" @click="away.jgl_player.heraldDriveFail===0?away.jgl_player.heraldDriveFail=0:away.jgl_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.jgl_player.heraldDriveFail" required />
                        <button type="button" @click="away.jgl_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="away.jgl_player.soloKills===0?away.jgl_player.soloKills=0:away.jgl_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.jgl_player.soloKills" required />
                        <button type="button" @click="away.jgl_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.jgl_player.soloDeaths===0?away.jgl_player.soloDeaths=0:away.jgl_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.jgl_player.soloDeaths" required />
                        <button type="button" @click="away.jgl_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="away.jgl_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.jgl_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="away.jgl_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.jgl_player.killCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="away.jgl_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.jgl_player.killCount" required />
                    </form>
                </div>

                <div class="w-full flex ">
                    <!-- damage 데미지 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="away.jgl_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.jgl_player.damage" required />
                    </form>
                    <!-- cs -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="away.jgl_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.jgl_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{away.jgl_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">미드 선수 ID : {{away.mid_player.playerId}}</label>
                <input type="text" v-model="away.mid_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
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
                        <button type="button" @click="away.mid_player.heraldDriveFail===0?away.mid_player.heraldDriveFail=0:away.mid_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.mid_player.heraldDriveFail" required />
                        <button type="button" @click="away.mid_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="away.mid_player.soloKills===0?away.mid_player.soloKills=0:away.mid_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.mid_player.soloKills" required />
                        <button type="button" @click="away.mid_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.mid_player.soloDeaths===0?away.mid_player.soloDeaths=0:away.mid_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.mid_player.soloDeaths" required />
                        <button type="button" @click="away.mid_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="away.mid_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.mid_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="away.mid_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.mid_player.killCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="away.mid_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.mid_player.killCount" required />
                    </form>
                </div>

                <div class="w-full flex ">
                    <!-- damage 데미지 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="away.mid_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.mid_player.damage" required />
                    </form>
                    <!-- cs -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="away.mid_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.mid_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{away.mid_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">원딜 선수 ID : {{away.adc_player.playerId}}</label>
                <input type="text" v-model="away.adc_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
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
                        <button type="button" @click="away.adc_player.heraldDriveFail===0?away.adc_player.heraldDriveFail=0:away.adc_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.adc_player.heraldDriveFail" required />
                        <button type="button" @click="away.adc_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="away.adc_player.soloKills===0?away.adc_player.soloKills=0:away.adc_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.adc_player.soloKills" required />
                        <button type="button" @click="away.adc_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.adc_player.soloDeaths===0?away.adc_player.soloDeaths=0:away.adc_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.adc_player.soloDeaths" required />
                        <button type="button" @click="away.adc_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="away.adc_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.adc_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="away.adc_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.adc_player.killCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="away.adc_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.adc_player.killCount" required />
                    </form>
                </div>

                <div class="w-full flex ">
                    <!-- damage 데미지 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="away.adc_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.adc_player.damage" required />
                    </form>
                    <!-- cs -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="away.adc_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.adc_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

                <label class="inline-flex items-center cursor-pointer mt-3">
                    {{away.adc_player}}
                </label>
            </div>

            <!-- 선수 정보 입력 -->
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 ">
            <div class="max-w-xl mx-auto">
                <label class="block mb-2 text-sm font-medium text-gray-900 ">서폿 선수 ID : {{away.sup_player.playerId}}</label>
                <input type="text" v-model="away.sup_player.playerId" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500   ">
            
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
                        <button type="button" @click="away.sup_player.heraldDriveFail===0?away.sup_player.heraldDriveFail=0:away.sup_player.heraldDriveFail--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.sup_player.heraldDriveFail" required />
                        <button type="button" @click="away.sup_player.heraldDriveFail++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
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
                        <button type="button" @click="away.sup_player.soloKills===0?away.sup_player.soloKills=0:away.sup_player.soloKills--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.sup_player.soloKills" required />
                        <button type="button" @click="away.sup_player.soloKills++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- 솔로데스 -->
                <div class="flex">
                    <div class="my-4 mr-2">
                        <label class="block mb-1 text-sm font-medium text-gray-900 ">솔로데스 </label>
                        <!-- <label class="block mb-1 text-sm font-medium text-gray-300"></label> -->
                    </div>
                    <div class="relative flex items-center">
                        <button type="button" @click="away.sup_player.soloDeaths===0?away.sup_player.soloDeaths=0:away.sup_player.soloDeaths--" class="flex-shrink-0 bg-gray-100  hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input type="text" class="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model="away.sup_player.soloDeaths" required />
                        <button type="button" @click="away.sup_player.soloDeaths++" class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg class="w-2.5 h-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="w-full flex ">
                    <!-- 킬 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">killCount 킬</label>
                        <input v-model="away.sup_player.killCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.sup_player.killCount" required />
                    </form>
                    <!-- 데스 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">deathCount 데스</label>
                        <input v-model="away.sup_player.deathCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.sup_player.killCount" required />
                    </form>
                    <!-- 어시스트 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">assistCount 어시스트</label>
                        <input v-model="away.sup_player.assistCount" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.sup_player.killCount" required />
                    </form>
                </div>

                <div class="w-full flex ">
                    <!-- damage 데미지 -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">damage 데미지</label>
                        <input v-model="away.sup_player.damage" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.sup_player.damage" required />
                    </form>
                    <!-- cs -->
                    <form class="max-w-xl mx-auto w-40">
                        <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 ">cs</label>
                        <input v-model="away.sup_player.cs" type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full  " :placeholder="away.sup_player.cs" required />
                    </form>
                    <div class="mx-auto w-40"></div>
                </div>

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
import api from '@/api/api'


export default {
    components: {

    },
    data(){
        return {
            matchId:0,
            playTime:'',
            orderSet:'',
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
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0,
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
                jgl_player:{
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0, 
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
                mid_player:{
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0, 
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
                adc_player:{
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0, 
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
                sup_player:{
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0, 
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
            },
            away:{
                clubId:'',
                matchResult:'',
                voidGrubs:0,
                heralds:0,
                drakes:0,
                elders:0,
                barons:0,
                top_player:{
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0,
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
                jgl_player:{
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0,
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
                mid_player:{
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0,
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
                adc_player:{
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0,
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
                sup_player:{
                    clubLogId:0,
                    playerId:0,
                    isFirstKill:false,
                    isFirstDeath:false,
                    isPog:false,
                    heraldDriveFail:0,
                    soloKills:0,
                    soloDeaths: 0,
                    killCount:0,
                    deathCount:0,
                    assistCount:0,
                    damage:0,
                    cs:0
                },
            },
        }
    },
    methods: {
        async submit(){
            let homeClubLogId = 0
            let awayClubLogId = 0

            let homeBody = {
                matchId:this.matchId,
                matchType:"HOME",
                matchResult:this.home.matchResult,
                playTime:this.playTime,
                orderSet:this.orderSet,
                voidGrubs:this.home.voidGrubs,
                heralds:this.home.heralds,
                drakes:this.home.drakes,
                elders:this.home.elders,
                barons:this.home.barons,
                killCount:this.home.totalKill,
                deathCount:this.home.totalDeath,
                assistCount:this.home.totalAssist,
                clubId:this.home.clubId,
                topId:this.home.top_player.playerId,
                jglId:this.home.jgl_player.playerId,
                midId:this.home.mid_player.playerId,
                adcId:this.home.adc_player.playerId,
                supId:this.home.sup_player.playerId,
            }
            let awayBody = {
                matchId:this.matchId,
                matchType:"AWAY",
                matchResult:this.away.matchResult,
                playTime:this.playTime,
                orderSet:this.orderSet,
                voidGrubs:this.away.voidGrubs,
                heralds:this.away.heralds,
                drakes:this.away.drakes,
                elders:this.away.elders,
                barons:this.away.barons,
                killCount:this.away.totalKill,
                deathCount:this.away.totalDeath,
                assistCount:this.away.totalAssist,
                clubId:this.away.clubId,
                topId:this.away.top_player.playerId,
                jglId:this.away.jgl_player.playerId,
                midId:this.away.mid_player.playerId,
                adcId:this.away.adc_player.playerId,
                supId:this.away.sup_player.playerId,
            }

            // 선수단 데이터 저장 
            // 리턴값으로 클럽로그 아이디 얻어와야함
            await api.postMatchClub(homeBody)
            .then(response=>{
                console.log(response);
                homeClubLogId = response.data
            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMatchClub(awayBody)
            .then(response=>{
                console.log(response);
                awayClubLogId = response.data
            })
            .catch(function (e){
                console.log(e);
            });

            let homeTopPlayerBody={
                clubLogId:homeClubLogId,
                playerId:this.home.top_player.playerId,
                isFirstKill:this.home.top_player.isFirstKill,
                isFirstDeath:this.home.top_player.isFirstDeath,
                isPog:this.home.top_player.isPog,
                heraldDriveFail:this.home.top_player.heraldDriveFail,
                soloKills:this.home.top_player.soloKills,
                soloDeaths: this.home.top_player.soloDeaths,
                killCount:this.home.top_player.killCount,
                deathCount:this.home.top_player.deathCount,
                assistCount:this.home.top_player.assistCount,
                damage:this.home.top_player.damage,
                cs:this.home.top_player.cs
            }
            let homeJglPlayerBody={
                clubLogId:homeClubLogId,
                playerId:this.home.jgl_player.playerId,
                isFirstKill:this.home.jgl_player.isFirstKill,
                isFirstDeath:this.home.jgl_player.isFirstDeath,
                isPog:this.home.jgl_player.isPog,
                heraldDriveFail:this.home.jgl_player.heraldDriveFail,
                soloKills:this.home.jgl_player.soloKills,
                soloDeaths: this.home.jgl_player.soloDeaths,
                killCount:this.home.jgl_player.killCount,
                deathCount:this.home.jgl_player.deathCount,
                assistCount:this.home.jgl_player.assistCount,
                damage:this.home.jgl_player.damage,
                cs:this.home.jgl_player.cs
            }
            let homeMidPlayerBody={
                clubLogId:homeClubLogId,
                playerId:this.home.mid_player.playerId,
                isFirstKill:this.home.mid_player.isFirstKill,
                isFirstDeath:this.home.mid_player.isFirstDeath,
                isPog:this.home.mid_player.isPog,
                heraldDriveFail:this.home.mid_player.heraldDriveFail,
                soloKills:this.home.mid_player.soloKills,
                soloDeaths: this.home.mid_player.soloDeaths,
                killCount:this.home.mid_player.killCount,
                deathCount:this.home.mid_player.deathCount,
                assistCount:this.home.mid_player.assistCount,
                damage:this.home.mid_player.damage,
                cs:this.home.mid_player.cs
            }
            let homeAdcPlayerBody={
                clubLogId:homeClubLogId,
                playerId:this.home.adc_player.playerId,
                isFirstKill:this.home.adc_player.isFirstKill,
                isFirstDeath:this.home.adc_player.isFirstDeath,
                isPog:this.home.adc_player.isPog,
                heraldDriveFail:this.home.adc_player.heraldDriveFail,
                soloKills:this.home.adc_player.soloKills,
                soloDeaths: this.home.adc_player.soloDeaths,
                killCount:this.home.adc_player.killCount,
                deathCount:this.home.adc_player.deathCount,
                assistCount:this.home.adc_player.assistCount,
                damage:this.home.adc_player.damage,
                cs:this.home.adc_player.cs
            }
            let homeSupPlayerBody={
                clubLogId:homeClubLogId,
                playerId:this.home.sup_player.playerId,
                isFirstKill:this.home.sup_player.isFirstKill,
                isFirstDeath:this.home.sup_player.isFirstDeath,
                isPog:this.home.sup_player.isPog,
                heraldDriveFail:this.home.sup_player.heraldDriveFail,
                soloKills:this.home.sup_player.soloKills,
                soloDeaths: this.home.sup_player.soloDeaths,
                killCount:this.home.sup_player.killCount,
                deathCount:this.home.sup_player.deathCount,
                assistCount:this.home.sup_player.assistCount,
                damage:this.home.sup_player.damage,
                cs:this.home.sup_player.cs
            }
            let awayTopPlayerBody={
                clubLogId:awayClubLogId,
                playerId:this.home.top_player.playerId,
                isFirstKill:this.home.top_player.isFirstKill,
                isFirstDeath:this.home.top_player.isFirstDeath,
                isPog:this.home.top_player.isPog,
                heraldDriveFail:this.home.top_player.heraldDriveFail,
                soloKills:this.home.top_player.soloKills,
                soloDeaths: this.home.top_player.soloDeaths,
                killCount:this.home.top_player.killCount,
                deathCount:this.home.top_player.deathCount,
                assistCount:this.home.top_player.assistCount,
                damage:this.home.top_player.damage,
                cs:this.home.top_player.cs
            }
            let awayJglPlayerBody={
                clubLogId:awayClubLogId,
                playerId:this.home.jgl_player.playerId,
                isFirstKill:this.home.jgl_player.isFirstKill,
                isFirstDeath:this.home.jgl_player.isFirstDeath,
                isPog:this.home.jgl_player.isPog,
                heraldDriveFail:this.home.jgl_player.heraldDriveFail,
                soloKills:this.home.jgl_player.soloKills,
                soloDeaths: this.home.jgl_player.soloDeaths,
                killCount:this.home.jgl_player.killCount,
                deathCount:this.home.jgl_player.deathCount,
                assistCount:this.home.jgl_player.assistCount,
                damage:this.home.jgl_player.damage,
                cs:this.home.jgl_player.cs
            }
            let awayMidPlayerBody={
                clubLogId:awayClubLogId,
                playerId:this.home.mid_player.playerId,
                isFirstKill:this.home.mid_player.isFirstKill,
                isFirstDeath:this.home.mid_player.isFirstDeath,
                isPog:this.home.mid_player.isPog,
                heraldDriveFail:this.home.mid_player.heraldDriveFail,
                soloKills:this.home.mid_player.soloKills,
                soloDeaths: this.home.mid_player.soloDeaths,
                killCount:this.home.mid_player.killCount,
                deathCount:this.home.mid_player.deathCount,
                assistCount:this.home.mid_player.assistCount,
                damage:this.home.mid_player.damage,
                cs:this.home.mid_player.cs
            }
            let awayAdcPlayerBody={
                clubLogId:awayClubLogId,
                playerId:this.home.adc_player.playerId,
                isFirstKill:this.home.adc_player.isFirstKill,
                isFirstDeath:this.home.adc_player.isFirstDeath,
                isPog:this.home.adc_player.isPog,
                heraldDriveFail:this.home.adc_player.heraldDriveFail,
                soloKills:this.home.adc_player.soloKills,
                soloDeaths: this.home.adc_player.soloDeaths,
                killCount:this.home.adc_player.killCount,
                deathCount:this.home.adc_player.deathCount,
                assistCount:this.home.adc_player.assistCount,
                damage:this.home.adc_player.damage,
                cs:this.home.adc_player.cs
            }
            let awaySupPlayerBody={
                clubLogId:awayClubLogId,
                playerId:this.home.sup_player.playerId,
                isFirstKill:this.home.sup_player.isFirstKill,
                isFirstDeath:this.home.sup_player.isFirstDeath,
                isPog:this.home.sup_player.isPog,
                heraldDriveFail:this.home.sup_player.heraldDriveFail,
                soloKills:this.home.sup_player.soloKills,
                soloDeaths: this.home.sup_player.soloDeaths,
                killCount:this.home.sup_player.killCount,
                deathCount:this.home.sup_player.deathCount,
                assistCount:this.home.sup_player.assistCount,
                damage:this.home.sup_player.damage,
                cs:this.home.sup_player.cs
            }
            // 선수 데이터 저장
            await api.postMatchPlayer(homeTopPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMatchPlayer(homeJglPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMatchPlayer(homeMidPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMatchPlayer(homeAdcPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMatchPlayer(homeSupPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
            // 선수 데이터 저장
            await api.postMatchPlayer(awayTopPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMatchPlayer(awayJglPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMatchPlayer(awayMidPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMatchPlayer(awayAdcPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMatchPlayer(awaySupPlayerBody)
            .then(response=>{
                console.log(response);
            })
            .catch(function (e){
                console.log(e);
            });
    
        }
    },
    computed: {
        homeTotalKill() {
            return (
                this.home.top_player.killCount +
                this.home.jgl_player.killCount +
                this.home.mid_player.killCount +
                this.home.adc_player.killCount +
                this.home.sup_player.killCount
            );
        },
        homeTotalDeath() {
            return (
                this.home.top_player.deathCount +
                this.home.jgl_player.deathCount +
                this.home.mid_player.deathCount +
                this.home.adc_player.deathCount +
                this.home.sup_player.deathCount
            );
        },
        homeTotalAssist() {
            return (
                this.home.top_player.assistCount +
                this.home.jgl_player.assistCount +
                this.home.mid_player.assistCount +
                this.home.adc_player.assistCount +
                this.home.sup_player.assistCount
            );
        },
        awayTotalKill() {
            return (
                this.away.top_player.killCount +
                this.away.jgl_player.killCount +
                this.away.mid_player.killCount +
                this.away.adc_player.killCount +
                this.away.sup_player.killCount
            );
        },
        awayTotalDeath() {
        return (
            this.away.top_player.deathCount +
            this.away.jgl_player.deathCount +
            this.away.mid_player.deathCount +
            this.away.adc_player.deathCount +
            this.away.sup_player.deathCount
        );
        },
        awayTotalAssist() {
        return (
            this.away.top_player.assistCount +
            this.away.jgl_player.assistCount +
            this.away.mid_player.assistCount +
            this.away.adc_player.assistCount +
            this.away.sup_player.assistCount
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
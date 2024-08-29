<template>
    <div class="fixed flex flex-col bg-black bg-opacity-90 w-full h-full z-50" @click="change()">
        <!-- 1 번 화면 -->
        <!-- 응원팀 선택 -->
        <div v-show="tutorial==0" class="bg-clip-border flex flex-col">
            <!-- 타이틀 텍스트 -->
            <div class="w-full flex pt-8 pb-6">
                <div class="mx-auto text-white text-2xl">
                    응원팀 선택!
                </div>
            </div>
            <!-- gif -->
            <div class="p-6 w-3/4">
                <img src="@/assets/tutorial/tutorial1.gif" class="w-full rounded-lg">
            </div>
            <!-- 버튼 강조 -->
            <div class="fixed flex flex-col right-0 top-32">
                <!-- 응원팀으로 가기 -->
                <div class="glow-effect flex mb-1 w-10 h-10 bg-point-600 rounded-l-lg">
                    <img class="m-auto w-8 h-8  rounded-lg bg-white object-contain" :src="cacheStore.myTeam.teamLogo" 
                        @click="modalStore.isMobileSelectClubModal=true"/>
                </div>
                <!-- 선수 리스트로 가기 -->
                <div class="invisible flex flex-col w-10 py-6 bg-gray-700 rounded-l-lg" 
                    @click="modalStore.isMobilePlayerListModal=true">
                    <div class="text-white mx-auto [writing-mode:vertical-rl]">
                        선수리스트
                    </div>
                </div>
            </div>
        </div>

        <!-- 2 번 화면 -->
        <!-- 선수 선택 -->
        <div v-show="tutorial==1">
            <!-- 타이틀 텍스트 -->
            <div class="w-full flex pt-8 pb-6">
                <div class="mx-auto text-white text-2xl">
                    선수단 구성!
                </div>
            </div>
            <!-- gif -->
            <div class="p-6 w-3/4">
                <img src="@/assets/tutorial/tutorial2.gif" class="w-full rounded-lg">
            </div>
            <!-- 버튼 강조 -->
            <div class="fixed flex flex-col right-0 top-32">
                <!-- 응원팀으로 가기 -->
                <div class="invisible flex mb-1 w-10 h-10 bg-point-600 rounded-l-lg">
                    <img class="m-auto w-8 h-8  rounded-lg bg-white object-contain" :src="cacheStore.myTeam.teamLogo" 
                        @click="modalStore.isMobileSelectClubModal=true"/>
                </div>
                <!-- 선수 리스트로 가기 -->
                <div class="glow-effect flex flex-col w-10 py-6 bg-gray-700 rounded-l-lg" 
                    @click="modalStore.isMobilePlayerListModal=true">
                    <div class="text-white mx-auto [writing-mode:vertical-rl]">
                        선수리스트
                    </div>
                </div>
            </div>
        </div>

        <!-- 4 번 화면 -->
        <!-- 주장 선택 -->
        <div v-show="tutorial==2">
            <!-- 타이틀 텍스트 -->
            <div class="w-full flex pt-8 pb-6">
                <div class="mx-auto text-white text-2xl">
                    주장 선택!
                </div>
            </div>
            <!-- gif -->
            <div class="p-6 w-3/4">
                <img src="@/assets/tutorial/tutorial3.gif" class="w-full rounded-lg">
            </div>
            <!-- 버튼 강조 -->
            <div class="fixed bottom-6 w-full flex items-center space-x-1 px-6 ">
                <!-- 주장 설정하기 -->
                <button class="glow-effect relative py-2.5 px-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-white ring-1 ring-point-600 "
                    >
                    주장 설정하기
                </button>

                <!-- 다음 -->
                <button
                    class="invisible flex-grow bg-point-600 text-white text-base py-2.5 rounded-lg">
                    다음
                </button>
            </div>
        </div>

        <!-- 4번 화면 -->
        <!-- 다음 버튼 클릭 하면 끝남 가이드 -->
        <div v-show="tutorial==3">
            <!-- 타이틀 텍스트 -->
            <div class="w-full flex pt-8 pb-6">
                <div class="mx-auto text-white text-2xl">
                    등록하기!
                </div>
            </div>
            <!-- gif -->
            <div class="p-6 w-3/4">
                <img src="@/assets/tutorial/tutorial4.gif" class="w-full rounded-lg">
            </div>
            <!-- 버튼 강조 -->
            <div class="fixed bottom-6 w-full flex items-center space-x-1 px-6 ">
                <!-- 주장 설정하기 -->
                <button class="invisible relative py-2.5 px-2 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-white ring-1 ring-point-600 "
                    >
                    주장 설정하기
                </button>

                <!-- 다음 -->            
                <button
                    class="glow-effect flex-grow bg-point-600 text-white text-base py-2.5 rounded-lg">
                    다음
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
            tutorial:0,
            pageEnd:4
        }
    },
    methods: {
        change(){
            this.tutorial++
            if(this.tutorial==this.pageEnd) this.close()
        },
        close(){
            this.modalStore.isMobileTutorialModal=false
        }
    },
    watch: {
        // 모달이 열릴 때 tutorial 값을 초기화
        'modalStore.isMobileTutorialModal'(newVal) {
            if (newVal) {
                this.tutorial = 0;
            }
        }
    },
}
</script>
<style scoped>
.glow-effect {
    position: relative;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5); /* 블러 효과를 위한 그림자 */
}

.glow-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%; /* 원형 유지 */
    box-shadow: 0 0 20px 20px rgba(255, 255, 255, 0.5); /* 퍼지는 빛 효과 */
    filter: blur(10px); /* 블러 처리로 자연스러운 테두리 */
    z-index: -1; /* 배경 뒤로 배치 */
}


</style>
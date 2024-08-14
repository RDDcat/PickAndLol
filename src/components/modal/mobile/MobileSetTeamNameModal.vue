<template>
    <div class="fixed flex flex-col bg-white w-full h-full z-50">
        <!-- 상단 -->
        <div class="flex py-10 px-6" @click="modalStore.isMobileSetTeamNameModal=false">
            <!-- 뒤로가기 버튼 -->
            <img class="w-6 h-6 object-contain" src="@/assets/arrow_back_black.svg" >
            <div class="mx-auto text-gray-900">
                팀명 생성
            </div>
            <div class="w-6"></div>
        </div>

        <!-- 선수단 지도 -->
        <div class="w-full flex justify-center ">
            <MapComponent />
        </div>

        <!-- 가이드 텍스트 -->
        <div class="mx-auto text-gray-700 text-xl">
            방금 내가 구성한 선수단의
        </div>
        <div class="flex mx-auto text-gray-700 text-xl">
            <div class="font-bold text-gray-900">팀명</div>을 정해주세요.
        </div>

        <!-- 인풋박스 -->
        <div class="w-full px-6 my-6">
            <div 
                :class="{'border-2 border-point-600 rounded-xl px-4 py-2': true, '': !isEmpty && !isOver, 'bg-red-50': isEmpty || isOver, }">
                <h3 :class="{'text-base': true, 'text-point-600': !isEmpty && !isOver}">
                    팀명
                </h3>
                <div class="relative">
                <input 
                    type="text" 
                    placeholder="10자 이내로 입력해주세요." 
                    class="w-full py-2 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-0"
                    v-model="cacheStore.myTeam.name"
                >
                <button 
                    class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                    @click="cacheStore.myTeam.name = ''"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                </div>
                <p v-if="isEmpty" class="text-red-500 text-sm mt-2">팀명을 입력해주세요.</p>
                <p v-if="isOver" class="text-red-500 text-sm mt-2">팀명은 10자 이내로 입력해주세요.</p>
                <p v-if="hasInvalidChars" class="text-red-500 text-sm mt-2">특수 문자는 '_', '-'만 사용 가능합니다.</p>
            </div>
        </div>

        <!-- 버튼 -->
        <div class="w-full flex px-6 mt-auto mb-4">
            <button class="py-4 rounded-xl w-full bg-point-600 text-white" @click="submit">
                완료
            </button>
        </div>
    </div>
</template>

<script>
import { useCacheStore } from '@/store/cacheStore'
import { useModalStore } from '@/store/modalStore'
import MapComponent from '@/components/MapComponent'

import api from '@/api/api'

export default {
    components: {
        MapComponent,
    },
    setup() {
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()

        return { cacheStore, modalStore }
    },
    data() {
        return {
            isEmpty: false,
            isOver: false,
            hasInvalidChars: false,
        }
    },
    methods: {
        valid() {
            const validPattern = /^[ㄱ-힣a-zA-Z0-9_-]+$/;

            this.isEmpty = !this.cacheStore.myTeam.name;
            this.isOver = this.cacheStore.myTeam.name.length > 6;
            this.hasInvalidChars = !validPattern.test(this.cacheStore.myTeam.name);

            return !this.isEmpty && !this.isOver && !this.hasInvalidChars;
        },
        async submit() {
            if (!this.valid()) return;

            this.modalStore.isMobileSetTeamNameModal = false;
            if (this.cacheStore.canChange === false && this.cacheStore.isSave === true) {
                console.log('변경할 수 없습니다.');
                return;
            }

            try {
                // 서버 전송
                let body = {
                    oauthId: this.cacheStore.userId,
                    data: JSON.stringify(this.cacheStore.myTeam),
                    canChange: false
                };
                
                const response = await api.postTeam(body);
                console.log(response);
                this.cacheStore.isSave = true;
                this.cacheStore.isMaking = false;
                this.cacheStore.canChange = false;

                let mvpId = 0;
                for (let index in this.cacheStore.myTeam.players) {
                    if (this.cacheStore.myTeam.players[index].isMvp) {
                        mvpId = this.cacheStore.myTeam.players[index].id;
                    }
                }

                let logBody = {
                    oauthId: this.cacheStore.userId,
                    topId: this.cacheStore.myTeam.players.top.id,
                    jglId: this.cacheStore.myTeam.players.jgl.id,
                    midId: this.cacheStore.myTeam.players.mid.id,
                    adcId: this.cacheStore.myTeam.players.adc.id,
                    supId: this.cacheStore.myTeam.players.sup.id,
                    mvpId: mvpId
                };

                const logResponse = await api.postTeamLog(logBody);
                console.log(logResponse.data);
                this.cacheStore.isSave = true;
                this.cacheStore.isMaking = false;
            }
            catch (e) {
                console.log(e);
                this.cacheStore.isSave = false;
                this.cacheStore.isMaking = true;
            }
        },
    },
    watch: {
        // 모달 켜졌을때 스크롤 불가능
        'modalStore.isMobileSetTeamNameModal': function (newValue) {
            if (newValue) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
            }
        },
    },
}
</script>

<style scoped>

</style>

<template>
    <div class="fixed overscroll-contain flex flex-col bg-black bg-opacity-60 w-full h-screen z-50">
        <!-- 중앙 -->
        <div class="m-auto w-5/6 flex flex-col opacity-100 bg-white ring-1 ring-point-600 rounded-lg">
            <!-- 타이틀 -->
            <div class="mt-6 mb-4 text-xl mx-auto text-gray-800">
                선수단을 저장하시겠습니까?
            </div>
            <!-- 설명 -->
            <div class="flex flex-col w-full text-base text-gray-500">
                <div class="mx-auto">선수단 저장 시, 한 라운드가 진행되는 동안</div>
                <div class="mx-auto">응원팀과 주장변경이 불가합니다.</div>
                <div class="mx-auto">계속 진행하시겠습니까?</div>
            </div>
            <div class="flex flex-col w-full my-2 text-xs text-gray-300">
                <div class="mx-auto">*매일 밤 자정 00:00 ~ 17:00에</div>
                <div class="mx-auto">주장을 제외한 선수변경권 2회가 제공됩니다.</div>
            </div>

            <!-- 버튼 2개 -->
            <div class="w-full flex items-center space-x-1 px-6 my-4">
                <!-- 네 -->
                <button class="flex-1 relative py-4 text-base font-medium text-gray-900 rounded-lg group bg-white ring-1 ring-point-600 "
                    @click="yes">
                    네
                </button>

                <!-- 아니오 -->
                <button @click="modalStore.isMobileSaveWarningModal=false"
                    class="flex-1 bg-point-600 text-white text-base py-4 rounded-lg">
                    아니오
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

        }
    },
    methods: {
        yes(){
            // 선수단 저장시
            // 모달 닫기 + 팀이름 작성 모달 노출
            this.modalStore.isMobileSaveWarningModal=false
            this.modalStore.isMobileSetTeamNameModal=true
        },

    },
}
</script>
<style scoped>



</style>
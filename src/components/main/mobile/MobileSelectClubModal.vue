<template>
    <div class="fixed overscroll-contain flex flex-col bg-white w-full h-screen z-50">
        <!-- 상단 -->
        <div class="flex py-10 px-6">
            <!-- 뒤로가기 버튼 -->
            <img class="w-6 h-6 object-contain" src="@/assets/arrow_back_black.svg" @click.prevent="modalStore.isMobileSelectClubModal=false">
        </div>

        <!-- 가이드 텍스트 -->

        <!-- 팀 선택 스크롤 -->

        <!-- 하단고정 -->
        <div class="fixed bottom-4 flex flex-col w-full px-6">
            <!-- 태그 -->
            <div class="mx-auto px-5 py-1.5 text-sm rounded-full bg-gray-200 mb-2">
                TAG
            </div>
            <!-- 버튼 -->
            <button class="w-full bg-point-600 text-white text-lg py-1.5 rounded-lg">다음</button>

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

    },
}
</script>
<style scoped>



</style>
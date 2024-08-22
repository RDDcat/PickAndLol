<template>
    <div class="fixed overscroll-none flex flex-col bg-black bg-opacity-75 w-full h-screen z-50" @click="modalStore.isTutorialModal=false">
        <!-- 네비게이션의 ? 아이콘 강조 -->
        <div class="mx-auto flex py-2 px-2">
            <!-- blank -->
            <div class="flex space-x-1">
                <div class="w-24"></div>
                <div class="w-24"></div>
                <div class="w-24"></div>
                <div class="w-24"></div>
            </div>
            <div class="flex my-auto">
                <i class="my-auto bg-opacity-60 bg-white rounded-full p-4 fa-regular fa-circle-question text-gray-700 mb-2"></i>
                <div class="p-1 w-6 h-6"></div>
            </div>
        </div>
        <!-- ? 아이콘과 가이드 텍스트 -->
        <div class="flex flex-col items-center justify-center mt-10">
            <i class="fa-regular fa-circle-question text-point-600 text-4xl mb-2"></i>
            <p class="text-white text-lg">여기서 자세한 정보를 확인할 수 있습니다.</p>
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
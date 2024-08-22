<template>
    <div class="fixed overscroll-none flex flex-col bg-black bg-opacity-90 w-full h-screen z-50" @click="modalStore.isTutorialModal=false">
        <!-- 네비게이션의 ? 아이콘 강조 -->
        <div class="mx-auto flex py-2 px-2 z-10">
            <!-- blank -->
            <div class="flex space-x-1">
                <div class="w-24"></div>
                <div class="w-24"></div>
                <div class="w-24"></div>
                <div class="w-24"></div>
            </div>
            <div class="flex my-auto mb-2">
                <div class="glow-effect my-auto bg-opacity-90 bg-white rounded-full  ">
                    <i class="p-4 fa-regular fa-circle-question text-point-600  "></i>
                </div>
                <div class="p-1 w-6 h-6"></div>
            </div>
        </div>
        <!-- 가이드 라인 -->
        <div class="flex mx-auto mt-6 z-0">
            <div class="w-[23rem]"></div>
            <div class="line "></div>
        </div>
        <!-- ? 아이콘과 가이드 텍스트 -->
        <div class="flex flex-col items-center justify-center mt-10 z-10">
            <div class="bg-white bg-opacity-90 rounded-full p-4">
                <i class="aspect-square m-auto fa-regular fa-circle-question text-point-600 text-4xl"></i>
            </div>
            <p class="text-white text-lg mt-10">여기서 자세한 정보를 확인할 수 있습니다.</p>
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
.line {
    width: 100%;           /* 선의 길이 */
    height: 2px;            /* 선의 두께 */
    background-color: rgb(245, 245, 245); /* 선의 색상 */
    transform: rotate(-32deg); /* 45도 회전 */
    position: relative;
    opacity: 85%;
}
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
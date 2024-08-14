<template>
    <div class="fixed overscroll-contain flex flex-col w-full z-50 mt-12">
        <div class="mx-8 px-6 py-4 rounded-lg bg-opacity-60 bg-point-600 text-white relative">
            <!-- 닫기 버튼과 카운트다운 -->
            <div class="absolute top-2 right-2 flex flex-col items-end">
                <button @click="closeModal" class="text-white hover:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <span class="text-xs mt-1">{{ countdown }}s</span>
            </div>
            <!-- 타이틀 -->
            <h2 class="text-xl font-bold mb-2">{{ modalStore.mobileErrorTitle }}</h2>
            <!-- 내용 -->
            <p class="text-sm">{{ modalStore.mobileErrorText }}</p>
        </div>
    </div>
</template>

<script>
import { useCacheStore } from '@/store/cacheStore'
import { useModalStore } from '@/store/modalStore'
import { onMounted, onUnmounted, ref } from 'vue'

export default {
    setup() {
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()
        const countdown = ref(10)

        let timer
        let countdownTimer

        const closeModal = () => {
            modalStore.isMobileErrorModal = false
        }

        const startCountdown = () => {
            countdownTimer = setInterval(() => {
                countdown.value--
                if (countdown.value <= 0) {
                    clearInterval(countdownTimer)
                }
            }, 1000)
        }

        onMounted(() => {
            // 10초 후에 모달 자동 닫기
            timer = setTimeout(() => {
                closeModal()
            }, 10000)

            // 카운트다운 시작
            startCountdown()
        })

        onUnmounted(() => {
            // 컴포넌트가 언마운트될 때 타이머 클리어
            clearTimeout(timer)
            clearInterval(countdownTimer)
        })

        return { cacheStore, modalStore, closeModal, countdown }
    },
}
</script>

<style scoped>
</style>
<template>
<div v-if="modalStore.isMobileErrorModal" :key="modalKey">
    <div class="fixed overscroll-contain flex flex-col w-full z-50 mt-12">
        <div class="mx-8 px-6 py-4 rounded-lg bg-opacity-80 bg-point-600 text-white relative">
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
</div>
</template>

<script>
import { useCacheStore } from '@/store/cacheStore'
import { useModalStore } from '@/store/modalStore'
import { onUnmounted, ref, watch } from 'vue'

export default {
    setup() {
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()
        const countdown = ref(10)
        const modalKey = ref(0)

        let timer
        let countdownTimer

        const closeModal = () => {
        modalStore.isMobileErrorModal = false
        }

        const startCountdown = () => {
        clearInterval(countdownTimer)  // 기존 타이머 제거
        countdown.value = 10  // 카운트다운 초기화
        countdownTimer = setInterval(() => {
            countdown.value--
            if (countdown.value <= 0) {
            clearInterval(countdownTimer)
            closeModal()
            }
        }, 1000)
        }

        const resetModal = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            closeModal()
        }, 10000)
        startCountdown()
        modalKey.value++  // 모달 재생성을 위한 key 증가
        }

        watch(() => modalStore.isMobileErrorModal, (newValue) => {
            if (newValue) {
                resetModal()
            } else {
                clearTimeout(timer)
                clearInterval(countdownTimer)
            }
        })

        onUnmounted(() => {
            clearTimeout(timer)
            clearInterval(countdownTimer)
        })

        return { cacheStore, modalStore, closeModal, countdown, modalKey }
    },
}
</script>

<style scoped>
</style>
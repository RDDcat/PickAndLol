<template>
    <div class="flex flex-col w-full">
        <div class="mx-auto my-16">
            <img src="@/assets/Union.svg" alt="">
        </div>

        <div class="fixed flex flex-col bottom-6 w-full px-6">
            <div class="mx-auto text-xs text-gray-400 mb-1" v-if="cacheStore.userId===0">* 로그인 후 이용하실 수 있습니다.</div>
            <button 
                type="button"
                @mousedown="isMouseDown = true"
                @mouseup="isMouseDown = false"
                @mouseleave="isMouseDown = false"
                @touchstart="isMouseDown = true"
                @touchend="isMouseDown = false"
                @touchcancel="isMouseDown = false"
                @click="start()"
                class="w-full h-14 text-white rounded-lg text-sm bg-point-600  px-5 py-2.5"
                :class="{ 'bg-gray-dark': isMouseDown }">
                만들기
            </button>
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
            isMouseDown: false, // 버튼 클릭시 이벤트
        }
    },
    methods: {
        start(){
            // 로그인이 안되어있으면 로그인창
            if(this.cacheStore.userId===0){
                console.log('로그인 안됨')
                this.modalStore.isMobileLoginModal=true
                return
            }
            console.log('로그인 됨')

            // 로그인이 되어있으면 지도창
            this.modalStore.isMobileSelectClubModal = true

        },

    },
    // 초기 설정
    mounted(){
        
    }
}
</script>
<style scoped>



</style>
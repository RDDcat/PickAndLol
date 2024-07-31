<template>
    <!-- 모바일 모달  -->
    <MobilePlayerListModal v-if="modalStore.isMobilePlayerListModal" />
    <MobileSelectClubModal v-if="modalStore.isMobileSelectClubModal" />
    <!-- 모바일 메인 화면 -->
    <div class="flex flex-col w-full">
        <div class="mx-auto my-16">
            <img src="@/assets/Union.svg" alt="">
        </div>

        <div class="fixed bottom-6 w-full h-16 px-6">
            <button class="w-full h-full text-white rounded-lg text-sm bg-point-600  px-5 py-2.5">
                만들기
            </button>
        </div>

    </div>
</template>
<script>
import MobilePlayerListModal from '@/components/main/mobile/MobilePlayerListModal.vue'
import MobileSelectClubModal from '@/components/main/mobile/MobileSelectClubModal.vue'

import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'

export default {
    components: {
        MobilePlayerListModal,
        MobileSelectClubModal,
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
    // 초기 설정
    mounted(){
        // 응원팀이 설정되지 않았다면 응원팀 모달 노출
        console.log('응원팀 없나? : ', !this.cacheStore.team)
        if(!this.cacheStore.team){
            this.modalStore.isMobilePlayerListModal=true
        }
    }
}
</script>
<style scoped>



</style>
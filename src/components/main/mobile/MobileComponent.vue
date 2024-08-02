<template>
    <!-- 모바일 모달  -->
    <MobilePlayerListModal v-if="modalStore.isMobilePlayerListModal" />
    <MobileSelectClubModal v-if="modalStore.isMobileSelectClubModal" />
    <!-- 모바일 메인 화면 -->
    <MoblieIntroComponent v-if="modalStore.isMoblieIntroComponent" />
    <MoblieMapComponent v-if="modalStore.isMoblieMapComponent" />
    <!-- 플로팅 아이콘 -->
    <MobileFloatingComponent v-if="modalStore.isMoblieMapComponent"/>

    
</template>
<script>
import MobilePlayerListModal from '@/components/main/mobile/MobilePlayerListModal.vue'
import MobileSelectClubModal from '@/components/main/mobile/MobileSelectClubModal.vue'
import MoblieIntroComponent from '@/components/main/mobile/MoblieIntroComponent.vue'
import MoblieMapComponent from '@/components/main/mobile/MoblieMapComponent.vue'

import MobileFloatingComponent from '@/components/main/mobile/MobileFloatingComponent.vue'

import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'

export default {
    components: {
        MobilePlayerListModal,
        MobileSelectClubModal,
        MoblieIntroComponent,
        MoblieMapComponent,
        MobileFloatingComponent,
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

    },
    // 초기 설정
    mounted(){
        this.modalStore.isMoblieIntroComponent = true

        // 로그인 이후에 응원팀 모달로 유도
        // 로그인이 되어있고, 응원팀이 설정되지 않았다면 응원팀 모달 노출
        console.log('응원팀 없나? : ', !this.cacheStore.team)
        if(!this.cacheStore.team && this.cacheStore.userId!==0){
            this.modalStore.isMobileSelectClubModal=true
            this.modalStore.isMoblieIntroComponent = false
            this.modalStore.isMoblieMapComponent=true
            return
        }
    }
}
</script>
<style scoped>



</style>
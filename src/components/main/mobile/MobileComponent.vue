<template>
    <!-- 모바일 메인 화면 -->
    <MoblieIntroComponent v-if="modalStore.isMoblieIntroComponent" />
    <MoblieMapComponent v-if="modalStore.isMoblieMapComponent" />
    <!-- 플로팅 아이콘 -->
    <MobileFloatingComponent v-if="modalStore.isMoblieMapComponent"/>

    <!-- 모바일 메인 화면 2 -->
    <!-- {{this.cacheStore.isSave}} -->

    <!-- 모바일 메인 화면 2 -->

</template>
<script>
import MoblieIntroComponent from '@/components/main/mobile/MoblieIntroComponent.vue'
import MoblieMapComponent from '@/components/main/mobile/MoblieMapComponent.vue'

import MobileFloatingComponent from '@/components/main/mobile/MobileFloatingComponent.vue'

import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'

export default {
    components: {
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
        // 유저 아이디가 있을때를 로그인 시점으로 봄
        console.log('응원팀 없나? : ', !this.cacheStore.myTeam.team)
        if(!this.cacheStore.myTeam.team && this.cacheStore.userId!==0){
            this.modalStore.isMobileSelectClubModal=true
            this.modalStore.isMoblieIntroComponent = false
            this.modalStore.isMoblieMapComponent=true
            return
        }
        
        // 외부에서 갑자기 접근했을때 
        // > 로그인 안됨
        // > 로그인 됨
        // >> 응원팀이 있을때
        // >> 팀이 있을때
        // >> 팀을 만들던중
        if(this.cacheStore.isMaking && this.cacheStore.userId!==0){
            this.modalStore.isMoblieIntroComponent = false
            this.modalStore.isMoblieMapComponent=true
            return
        }

    }
}
</script>
<style scoped>



</style>
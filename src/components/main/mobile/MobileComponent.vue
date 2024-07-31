<template>
    <!-- 모바일 모달  -->
    <MobilePlayerListModal v-if="modalStore.isMobilePlayerListModal" />
    <MobileSelectClubModal v-if="modalStore.isMobileSelectClubModal" />
    <!-- 모바일 메인 화면 -->
    <div class="sample">
        모바일 홤면
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
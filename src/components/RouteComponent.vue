<template>
    <!-- 네비게이션 -->
    <TitleNav />
    
    <!-- 페이지 컴포넌트 -->
    <MainComponent v-if="modalStore.isMain"/>
    <TeamComponent v-if="modalStore.isTeam"/>
    <ScheduleComponent v-if="modalStore.isSchedule"/>
    <PlayerRankingComponent v-if="modalStore.isPlayerRanking"/>
    <UserRankingComponent v-if="modalStore.isUserRanking"/>
    <GuideComponent v-if="modalStore.isGuideComponent"/>
</template>
<script>
import TitleNav from '@/components/TitleNav.vue'
import MainComponent from '@/components/MainComponent.vue'
import TeamComponent from '@/components/TeamComponent.vue'
import ScheduleComponent from '@/components/ScheduleComponent.vue'
import PlayerRankingComponent from '@/components/PlayerRankingComponent.vue'
import UserRankingComponent from '@/components/UserRankingComponent.vue'
import GuideComponent from '@/components/GuideComponent.vue'

import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'

export default {
    components: {
        TitleNav,
        MainComponent,
        TeamComponent,
        ScheduleComponent,
        PlayerRankingComponent,
        UserRankingComponent,
        GuideComponent,

    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()

        return { cacheStore, modalStore }
    },
    methods: {

    },
    mounted(){
        if(this.$route.query.id){
            this.cacheStore.userId = this.$route.query.id
        }
    }
}
</script>
<style scoped>



</style>
<template>
    <!-- 네비게이션 -->
    <TitleNav />
    
    <!-- 페이지 컴포넌트 -->
    <MainComponent v-if="$store.state.modalStore.isMain"/>
    <TeamComponent v-if="$store.state.modalStore.isTeam"/>
    <ScheduleComponent v-if="$store.state.modalStore.isSchedule"/>
    <PlayerRankingComponent v-if="$store.state.modalStore.isPlayerRanking"/>
    <UserRankingComponent v-if="$store.state.modalStore.isUserRanking"/>
</template>
<script>
import TitleNav from '@/components/TitleNav.vue'
import MainComponent from '@/components/MainComponent.vue'
import TeamComponent from '@/components/TeamComponent.vue'
import ScheduleComponent from '@/components/ScheduleComponent.vue'
import PlayerRankingComponent from '@/components/PlayerRankingComponent.vue'
import UserRankingComponent from '@/components/UserRankingComponent.vue'

export default {
    components: {
        TitleNav,
        MainComponent,
        TeamComponent,
        ScheduleComponent,
        PlayerRankingComponent,
        UserRankingComponent,

    },
    data(){
        return {

        }
    },
    methods: {

    },
    mounted(){
        if(this.$route.query.id){
            this.$store.state.cacheStore.userId = this.$route.query.id
        }
    }
}
</script>
<style scoped>



</style>
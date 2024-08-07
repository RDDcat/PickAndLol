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
    <MyComponent v-if="modalStore.isMyComponent"/>
</template>
<script>
import TitleNav from '@/components/TitleNav/TitleNav.vue'
import MainComponent from '@/components/main/MainComponent.vue'
import TeamComponent from '@/components/TeamComponent.vue'
import ScheduleComponent from '@/components/ScheduleComponent.vue'
import PlayerRankingComponent from '@/components/PlayerRankingComponent.vue'
import UserRankingComponent from '@/components/UserRankingComponent.vue'
import GuideComponent from '@/components/GuideComponent.vue'
import MyComponent from '@/components/MyComponent.vue'

import api from '@/api/api'

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
        MyComponent,

    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()

        return { cacheStore, modalStore }
    },
    methods: {

    },
    async created(){
        // 앱의 시작지점
        // 토큰으로 가져오기
        if(this.$route.query.token){
            console.log('this.$route.query.token : ', this.$route.query.token)
            this.cacheStore.token = this.$route.query.token
            // 가져온 토큰으로 access, refresh 요청
            await api.getToken(this.$route.query.token)
            .then(response=>{
                console.log('getToken response.data : ', response.data)
                // 데이터 저장
                this.cacheStore.accessToken=response.data.accessToken
                this.cacheStore.refreshToken=response.data.refreshToken
                this.modalStore.isLoginWarnModal=false

            })
            .catch(function (e){
                console.log(e);
            });
            await api.postMember()
            .then(response=>{
                console.log('postMember response.data : ', response.data)
                // 데이터 저장
                this.cacheStore.userName=response.data.name
                this.cacheStore.userId=response.data.oauthId
                this.modalStore.isLoginWarnModal=false

            })
            .catch(function (e){
                console.log(e);
            });
            // 팀 데이터 sync 넣기
            await api.getSync(this.cacheStore.userId)
            .then(response=>{
                console.log('response:',response)
                this.cacheStore.myTeam = JSON.parse(response.data.data)
                this.cacheStore.canChange = response.data.canChange
                this.cacheStore.isSave=true
            })
            .catch(function (e){
                console.log(e);
            });
        }

        // 로그인 토큰 관련 로직
        // param이 있는지 확인해서 있으면 로그인 절차 실행
        // console.log('mounted')
        // if(this.$route.query.id && !this.cacheStore.userId){
        //     this.cacheStore.userId = this.$route.query.id
        //     console.log('check')
        //     this.modalStore.isLoginWarnModal=false
        // }
        // if(this.$route.query.name && !this.cacheStore.name){
        //     this.cacheStore.userName = this.$route.query.name
        // }
    }
}
</script>
<style scoped>



</style>
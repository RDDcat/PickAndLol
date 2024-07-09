<template>
    <!-- 로그인 확인 모달 -->
    <LoginWarnModal v-if="modalStore.isLoginWarnModal"/>
    <!-- 메인 3가지 페이지 -->
    <MainFirstComponent v-if="index===0"/>
    <!-- 시간 제한 둬서 컴포넌트 가르기 -->
    <MainSecondComponent v-if="index===1"/>
    <MainThirdComponent v-if="index===2"/>
    <div @click="index=0">asdfasdfsafs</div>

    <FooterComponent/>
</template>
<script>
import FooterComponent from '@/components/footer/FooterComponent'
import LoginWarnModal from '@/components/modal/LoginWarnModal.vue'
import MainFirstComponent from '@/components/main/MainFirstComponent.vue'
import MainSecondComponent from '@/components/main/MainSecondComponent.vue'
import MainThirdComponent from '@/components/main/MainThirdComponent.vue'

import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'

import api from '@/api/api'

export default {
    components: {
        FooterComponent,
        LoginWarnModal,
        MainFirstComponent,
        MainSecondComponent,
        MainThirdComponent,
    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()

        return { cacheStore, modalStore }
    },
    data(){
        return {
            index:0,

        }
    },
    methods: {
        route(){
            // 비 로그인시 모달로 막기
            if(this.cacheStore.userId===0){
                this.modalStore.isLoginWarnModal=true
                this.index=0
                return
            }

            // 로그인 되어있고 팀이 있다면
            if(this.cacheStore.isSave || this.cacheStore.myTeam.name){
                // 시간이 해당하는 시간이라면 (추후에 우리 서버시간으로 변경)
                const now = new Date(); // 현재 시간을 가져옴
                const hours = now.getHours(); // 현재 시간의 시간을 가져옴 (0 ~ 23)
                console.log("now", now)
                console.log("hours", hours)

                // 시간이 17:00 ~ 24:00 사이인지 확인
                if(hours >= 17 && hours < 24){
                    // 변경 불가능시간임 2번화면
                    this.index=1
                    return
                } else {
                    // 변경 불가능 시간임 3번화면
                    this.index=2
                    return
                }
            }
        }
    },
    mounted(){
        this.route()
    },
    async beforeMount(){
        console.log('beforeMount')
        if(this.cacheStore.userId){
            // 팀 데이터 sync 넣기
            await api.getSync(this.cacheStore.userId)
            .then(response=>{
                this.cacheStore.myTeam = JSON.parse(response.data.data)
                this.cacheStore.isSave=true
            })
            .catch(function (e){
                console.log(e);
            });
        }

        await this.route()

    },
    unmounted(){
        this.modalStore.isLoginWarnModal=false
    }
}
</script>
<style scoped>


</style>
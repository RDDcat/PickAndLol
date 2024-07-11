<template>
    <!-- 로그인 확인 모달 -->
    <LoginWarnModal v-if="modalStore.isLoginWarnModal"/>
    
    <!-- 메인 3가지 페이지 -->
    <MainFirstComponent v-show="index===0"/>
    <!-- 시간 제한 둬서 컴포넌트 가르기 -->
    <MainSecondComponent v-show="index===1"/>
    <MainThirdComponent v-show="index===2"/>

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
        const now = new Date(); // 현재 시간을 가져옴
        // 시간이 해당하는 시간이라면 (추후에 우리 서버시간으로 변경)
        const hours = now.getHours(); // 현재 시간의 시간을 가져옴 (0 ~ 23)

        return { cacheStore, modalStore, hours }
    },
    data(){
        return {
            index:0,

        }
    },
    methods: {
        route(){
            // 로그인 안됨
            if(this.cacheStore.userId===0){
                this.modalStore.isLoginWarnModal=true
                console.log("1")
                this.modalStore.mainInfo = '팀 변경가능시간: 평일 00:00~17:00, 주말 00:00~15:00'
                this.index=0
                return
            } 

            // 로그인 되어있고 팀이 있다면
            if (this.cacheStore.isSave) {
                const isWeekday = [1, 2, 3, 4, 5].includes(new Date().getDay());
                const isWeekend = [0, 6].includes(new Date().getDay());

                // 시간 확인
                const isWeekdayRestrictedTime = 20 <= this.hours && this.hours < 24;
                const isWeekendRestrictedTime = 15 <= this.hours && this.hours < 24;
                console.log("this.hours", this.hours);
                console.log("isWeekday", isWeekday);
                console.log("isWeekend", isWeekend);
                console.log("isWeekdayRestrictedTime", isWeekdayRestrictedTime);
                console.log("isWeekendRestrictedTime", isWeekendRestrictedTime);
                console.log("isWeekendRestrictedTime", isWeekday && isWeekdayRestrictedTime);
                console.log("isWeekendRestrictedTime", isWeekend && isWeekendRestrictedTime);

                if ((isWeekday && isWeekdayRestrictedTime) || (isWeekend && isWeekendRestrictedTime)) {
                    // 변경 불가능 시간임 2번 화면
                    this.modalStore.mainInfo = '팀 변경가능시간: 평일 00:00~17:00, 주말 00:00~15:00';
                    console.log("2");
                    this.index = 1;
                    return;
                }

                // 선수단 수정이 가능할 때
                if (this.cacheStore.canChange) {
                    // 변경 가능 시간임 3번 화면
                    console.log("3");
                    this.index = 2;
                } else {
                    // 이미 선수단을 변경한 경우
                    this.index = 1;
                }
                return;
            }
        }
    },
    mounted(){
        this.route()
    },
    async beforeMount(){
        if(this.cacheStore.userId){
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

        await this.route()

    },
    unmounted(){
        this.modalStore.isLoginWarnModal=false
    }
}
</script>
<style scoped>


</style>
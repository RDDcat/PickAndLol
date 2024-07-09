<template>
    <div class="fixed overscroll-contain flex bg-red-950 w-full h-screen z-40" 
        @click.stop="modalStore.isSaveWarningModal=false">
        <div class="w-full flex" >
                <!-- 모달 내용 -->
            <div class="flex flex-col w-[30rem] mx-auto mt-60" @click.stop="">
                <div class="w-full h-[26rem] bg-white rounded-lg border-2 border-red-500 flex flex-col">
                    <!-- 내용 -->
                    <div class="text-3xl text-gray-900 mx-auto mt-12 mb-6 flex">선수단을 저장하시겠습니까?</div>
                    <div class="text-xl flex text-gray-700 mx-auto mt-6 px-8 ">
                        선수단 저장 시, 한 라운드가 진행되는 동안</div>
                    <div class="text-xl flex text-gray-700 mx-auto mb-6 px-8 ">
                        <div class="font-bold text-gray-800">
                            응원팀과 주장 변경이 불가
                        </div>
                        합니다
                    </div>

                    <!-- 안내 -->
                    <div class="text-gray-300 text-sm mx-auto">*매일 밤 자정 00:00~17:00에</div>
                    <div class="text-gray-300 text-sm mx-auto mb-8">주장을 제외한 선수변경권 2회가 제공됩니다.</div>

                    <!-- 확인 버튼 -->
                    <div class="flex px-8 mx-auto mt-auto mb-8 gap-4">
                        <button type="button" 
                            @click.stop="save(); modalStore.isSaveWarningModal=false"
                            class=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 w-36 ">
                            저장하기
                        </button>
                        <button type="button" 
                            @click.stop="modalStore.isSaveWarningModal = false"
                            class=" text-red-500 border-2 border-red-500 bg-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 w-36 ">
                            취소하기
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'

import api from '@/api/api'

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

        }
    },
    methods: {
        
        async save(){
            // 서버 전송
            console.log(this.cacheStore.userId)
            console.log(this.cacheStore.myTeam)
            let body = {
                oauthId:this.cacheStore.userId,
                data:JSON.stringify(this.cacheStore.myTeam)
            }
            console.log('body',body)
            await api.postTeam(body)
            .then(response=>{
                console.log(response)
                this.cacheStore.isSave=true
            })
            .catch(function (e){
                console.log(e);
                this.cacheStore.isSave=false
            });

            console.log(this.cacheStore.myTeam)

            let logBody = {
                oauthId:this.cacheStore.userId,
                topId: this.cacheStore.myTeam.players.top.id,
                jglId: this.cacheStore.myTeam.players.jgl.id,
                midId: this.cacheStore.myTeam.players.mid.id,
                adcId: this.cacheStore.myTeam.players.adc.id,
                supId: this.cacheStore.myTeam.players.sup.id,

            }
            console.log('logBody',logBody)

            await api.postTeamLog(logBody)
            .then(response=>{
                console.log(response)
                this.cacheStore.isSave=true
            })
            .catch(function (e){
                console.log(e);
                this.cacheStore.isSave=false
            });
        },
    },
}
</script>
<style scoped>



</style>
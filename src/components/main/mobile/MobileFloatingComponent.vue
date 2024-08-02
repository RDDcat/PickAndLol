<template>
    <div class="fixed flex flex-col right-0 top-32">
        <!-- 응원팀으로 가기 -->
        <div class="flex mb-1 w-10 h-10 bg-point-600 rounded-l-lg">
            <img class="m-auto w-8 h-8 p-0.5 rounded-full bg-white object-contain" :src="cacheStore.myTeam.teamLogo" 
                @click="modalStore.isMobilePlayerListModal=true"/>
        </div>
        <!-- 선수 리스트로 가기 -->
        <div class="flex flex-col w-10 py-6 bg-gray-700 rounded-l-lg" 
            @click="modalStore.isMobileSelectClubModal=true">
            <div class="text-white mx-auto [writing-mode:vertical-rl]">
                선수리스트
            </div>
        </div>
    </div>
</template>
<script>
import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'

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

    },
    // 초기 설정
    mounted(){

    }
}
</script>
<style scoped>



</style>
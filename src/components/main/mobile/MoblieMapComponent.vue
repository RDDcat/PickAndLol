<template>
    <div class="flex flex-col w-full">
        <!-- 가이드 텍스트 -->
        <div class="my-2">
            <div class="flex w-full my-2 px-8 text-point-600 text-sm ">
                2/3
            </div>
            <div class="flex w-full px-8 text-xl">
                <div class="text-point-600">
                    내 선수단</div><div>을 만들어주세요</div>
            </div>
            <div class="flex w-full my-4 px-8 text-gray-300 text-sm ">
                선수 총 가치는 최대 {{cacheStore.limitVp}}까지 입니다.
            </div>
        </div>

        <!-- 지도 -->
        <div class="flex mx-auto">
            <img class="mx-auto w-96" src="@/assets/map.png" alt="">
        </div>
        
        <!-- 현재 선수단 가치 -->
        <div class="flex mx-auto px-4 py-2 bg-gray-200 rounded-md">
            <div>
                선수단 가치 
            </div>
            <div class="text-point-600">
                - {{cacheStore.myTeam.totalVP}}
            </div>
            <img class="my-auto w-4 h-4 object-cover" src="@/assets/icon/vp.png" alt="">
        </div>

        <!-- 선수단 리스트 -->
        <div class="flex flex-col w-full">
            <!-- 탑 -->
            <div class="w-full flex p-6">
                <!-- 라인 아이콘 -->
                <img class="" src="" alt="">
                <!-- 선수 사진 -->

                <!-- 선수 이름 + 팀 -->
                <!-- vp -->
            </div>
            <!-- 정글 -->
            <!-- 미드 -->
            <!-- 바텀 -->
            <!-- 서폿 -->
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
        start(){

        },

    },
    // 초기 설정
    mounted(){

    }
}
</script>
<style scoped>



</style>
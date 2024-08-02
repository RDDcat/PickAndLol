<template>
    <div class="fixed overscroll-contain flex flex-col bg-white w-full h-screen z-50">
        <!-- 상단 -->
        <div class="flex py-10 px-6">
            <!-- 뒤로가기 버튼 -->
            <img class="w-6 h-6 object-contain" src="@/assets/arrow_back_black.svg" @click.prevent="modalStore.isMobileSelectClubModal=false">
        </div>

        <!-- 가이드 텍스트 -->
        <div class="my-4">
            <div class="flex w-full my-2 px-8 text-point-600 text-sm ">
                1/2
            </div>
            <div class="flex w-full px-8 text-xl">
                <div class="text-point-600">
                    응원팀</div><div>을 선정해주세요.</div>
            </div>
            <div class="flex w-full my-4 px-8 text-gray-300 text-sm ">
                시즌이 끝날때까지 응원팀을 수정할 수 없습니다.
            </div>
        </div>

        <!-- 팀 선택 스크롤 -->

        <!-- 하단고정 -->
        <div class="fixed bottom-4 flex flex-col w-full px-6">
            <!-- 태그 -->
            <div class="mx-auto px-5 py-1.5 text-sm rounded-full bg-gray-200 mb-2 text-point-600" v-if="cacheStore.myTeam.team">
                {{cacheStore.myTeam.team}}
            </div>
            <!-- 버튼 -->
            <button class="w-full bg-point-600 text-white text-lg py-1.5 rounded-lg">다음</button>

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
}
</script>
<style scoped>



</style>
<template>
    <div class="fixed overscroll-contain flex flex-col bg-white w-full h-screen z-50">
        <!-- 상단 -->
        <div class="flex py-10 px-6">
            <!-- 뒤로가기 버튼 -->
            <img class="w-6 h-6 object-contain" src="@/assets/arrow_back_black.svg" @click.prevent="modalStore.isMobileSelectClubModal=false">
        </div>

        팀선택
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
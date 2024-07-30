<template>
    <div class="flex py-4 px-2 w-full z-30 bg-white" :class="modalStore.isLoginWarnModal?'fixed':''">
        <!-- 로고 -->
        <div class="flex font-bold md:w-60 w-10">
            <img class="my-auto ml-auto w-8 h-8" src="@/assets/logo-beta.png">
        </div>

        <!-- 버거메뉴 -->

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
            index:0,

        }
    },
    methods: {
        nav(index){     
            this.index = index       
            // this.modalStore.isMain= false
            this.modalStore.isMain= index === 0
            this.modalStore.isSchedule= index === 1
            this.modalStore.isPlayerRanking= index === 2
            this.modalStore.isUserRanking= index === 3
            this.modalStore.isGuideComponent= index === 4
            this.modalStore.isMyComponent= index === 5
        },
        discord(){
            window.open('https://discord.gg/ZhCgbyGcQk', '_blank');
        },
    },
}
</script>
<style scoped>
.btn {
    @apply font-bold py-0 px-0 rounded-lg w-20 h-12 my-auto;
}
.btn-gray {
    @apply bg-gray-700 text-white;
}
.btn-gray:hover {
    @apply bg-gray-900;
}

</style>
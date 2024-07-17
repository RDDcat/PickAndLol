<template>
    <div class="flex py-4 px-2 w-full z-30 bg-white" :class="modalStore.isLoginWarnModal?'fixed':''">
        <!-- 로고 -->
        <div class="flex font-bold md:w-60 w-10">
            <img class="ml-auto w-8 h-8" src="@/assets/logo-beta.png">
            <div class="invisible md:visible flex my-auto mr-auto mx-3 text-2xl ">
                Pick
                <div class="text-red-600 text-sm">&</div>
                LOL
            </div>
        </div>
        <!-- 네비 -->
        <div class="flex space-x-1 items-center justify-around m-auto font-semibold">
            <button class="w-24 text-center " :class="index===0?'text-red-600':'hover:text-gray-400'" @click="nav(0)">
                MY선수단
            </button>
            <button class="w-24 text-center" :class="index===1?'text-red-600':'hover:text-gray-400'" @click="nav(1)">
                일정
            </button>
            <button class="w-24 text-center" :class="index===2?'text-red-600':'hover:text-gray-400'" @click="nav(2)">
                분석
            </button>
            <button class="w-24 text-center" :class="index===3?'text-red-600':'hover:text-gray-400'" @click="nav(3)">
                랭킹
            </button>
            <button class="my-auto" @click="nav(4)">
                <i class="fa-regular fa-circle-question " :class="index===4?'text-red-600':'hover:text-gray-400'" ></i>
            </button>
            <button class="my-auto" @click="discord()">
                <img class="rounded-full bg-gray-100 p-1 w-6 h-6 object-contain hover:bg-gray-300" src="@/assets/discord.svg" alt="">
            </button>
        </div>
        <!-- 로그인 회원가입 -->
        <div class="flex font-bold w-60" v-if="cacheStore.userId===0">
            <button class="btn btn-gray mx-auto" @click="modalStore.isLoginModal=true">
                로그인
            </button>
        </div>
        <div class="flex w-60" v-if="cacheStore.userId!==0" @click="nav(5)">
            <img class="m-auto w-6 h-6 rounded-full hover:ring-4 hover:ring-gray-200 object-contain" src="@/assets/logo.png" >
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
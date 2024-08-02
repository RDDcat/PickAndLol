<template>
    <!-- 사이드 메뉴 모달 -->
    <div v-show="isMenuOpen" class="fixed left-0 top-0 w-1/5 h-full z-30" @click="toggleMenu()"></div>
    <transition name="slide" v-show="isMenuOpen">
        <div  class="fixed right-0 top-0 w-4/5 h-full bg-black opacity-95 z-40">
            <!-- 메뉴 내용 -->
            <div class="text-white my-12 space-y-6 p-4 flex flex-col">
                <!-- 메뉴1 -->
                <button class="mx-auto w-28 text-center " :class="index===0?'text-red-600':'hover:text-gray-400'" @click="nav(0)">
                    MY선수단
                </button>
                <!-- 메뉴2 -->
                <!-- <button class="mx-auto w-28 text-center" :class="index===1?'text-red-600':'hover:text-gray-400'" @click="nav(1)">
                    일정
                </button> -->
                <!-- 메뉴3 -->
                <!-- <button class="mx-auto w-28 text-center" :class="index===2?'text-red-600':'hover:text-gray-400'" @click="nav(2)">
                    분석
                </button> -->
                <!-- 메뉴4 -->
                <button class="mx-auto w-28 text-center" :class="index===3?'text-red-600':'hover:text-gray-400'" @click="nav(3)">
                    랭킹
                </button>
            </div>
        </div>
    </transition>
    <div class="flex py-4 px-6 w-full z-20 bg-white"
        :class="modalStore.isLoginWarnModal ? 'fixed' : ''">
        <!-- 로고 -->
        <div class="flex font-bold ">
            <img class="my-auto w-8 h-8" src="@/assets/logo-beta.png" />
        </div>

        <!-- 버거메뉴 -->
        <a class="ml-auto my-auto menu-trigger z-40"
            :class="{'active-2': isMenuOpen }"
            @click.prevent="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>

    
</template>

<script>
import { useCacheStore } from "@/store/cacheStore";
import { useModalStore } from "@/store/modalStore";

export default {
    components: {},
    setup() {
        const cacheStore = useCacheStore();
        const modalStore = useModalStore();

        return { cacheStore, modalStore };
    },
    data() {
        return {
            index: 0,
            isMenuOpen: false,
        };
    },
    methods: {
        nav(index) {
            this.index = index;
            this.modalStore.isMain = index === 0;
            this.modalStore.isSchedule = index === 1;
            this.modalStore.isPlayerRanking = index === 2;
            this.modalStore.isUserRanking = index === 3;
            this.modalStore.isGuideComponent = index === 4;
            this.modalStore.isMyComponent = index === 5;
        },
        discord() {
            window.open("https://discord.gg/ZhCgbyGcQk", "_blank");
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
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
.menu-trigger {
    display: inline-block;
    cursor: pointer;
}
.menu-trigger span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: #333;
    transition: all 0.3s;
}
.menu-trigger.active-2 span:nth-of-type(1) {
    transform: translateY(8px) rotate(-45deg);
    background-color: white;
}
.menu-trigger.active-2 span:nth-of-type(2) {
    opacity: 0;
}
.menu-trigger.active-2 span:nth-of-type(3) {
    transform: translateY(-8px) rotate(45deg);
    background-color: white;
}
/* Vue 트랜지션 */
.slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
    transform: translateX(30%);
    opacity: 0;
}
</style>

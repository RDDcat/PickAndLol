<template>
    <div class="flex py-4 px-6 w-full z-30 bg-white"
        :class="modalStore.isLoginWarnModal ? 'fixed' : ''">
        <!-- 로고 -->
        <div class="flex font-bold ">
            <img class="my-auto w-8 h-8" src="@/assets/logo-beta.png" />
        </div>

        <!-- 버거메뉴 -->
        <a class="ml-auto my-auto menu-trigger"
            :class="{ 'active-2': isMenuOpen }"
            href="#"
            @click.prevent="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>

    <div v-if="isMenuOpen" class="menu-content">
        <!-- 메뉴 내용 -->
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
        isMenuOpen: false, // 메뉴의 상태를 추가
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
}
.menu-trigger.active-2 span:nth-of-type(2) {
    opacity: 0;
}
.menu-trigger.active-2 span:nth-of-type(3) {
    transform: translateY(-8px) rotate(45deg);
}
.menu-content {
    /* 메뉴 내용 스타일링 */
}
</style>

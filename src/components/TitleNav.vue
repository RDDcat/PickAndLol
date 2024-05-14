<template>
    <div class="flex px-20 py-4 w-screen">
        <!-- 로고 -->
        <div class="flex font-bold">
            <img class="w-16 h-16" src="@/assets/logo.png">
            <div class="flex my-auto mx-3 text-2xl">
                Pick
                <div class="text-red-600 text-sm">&</div>
                LOL
            </div>
        </div>
        <!-- 네비 -->
        <div class="flex w-320 m-auto font-semibold">
            <div class="text-red-600 w-24 text-center">
                MY선수단
            </div>
            <div class="w-24 text-center">
                일정
            </div>
            <div class="w-24 text-center">
                선수랭킹
            </div>
            <div class="w-24 text-center">
                유저랭킹
            </div>
            <i class="fa-solid fa-file" @click="$store.state.modalStore.isGuideModal=true"></i>
        </div>
        <!-- 로그인 회원가입 -->
        <div class="flex font-bold">
            <button class="btn btn-gray mx-2" @click="$store.state.modalStore.isLoginModal=true">
                로그인
            </button>
        </div>

    </div>
</template>
<script>


export default {
    components: {

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
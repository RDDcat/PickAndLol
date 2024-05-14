<template>
    <div class="absolute bg-red-950 opacity-90 w-screen h-screen flex">
        <!--  -->
        <div class="m-auto w-[30rem] h-[36rem] relative">
            <!-- back -->
            <div class="absolute right-4 top-4" @click="$store.state.modalStore.isLoginModal = false">
                x
            </div>
            <!-- logo -->
            <div class="absolute right-0 top-12" >
                <img src="@/assets/Subtract.png" alt="">
            </div>
            <!-- 상단 -->
            <div class="bg-red-600 rounded-t-xl w-full h-52">
                <img class="pt-8 pl-8 z-0" src="@/assets/white-login-logo.png">
                <div class="mt-20 ml-7 text-white text-2xl">로그인</div>
            </div>
            <!-- 하단 -->
            <div class="flex flex-col text-2xl font-semibold bg-white rounded-b-xl w-full h-72 z-20">
                <div class="flex mx-auto mt-12">
                    지금 로그인하고,
                </div>
                <div class="mx-auto flex">
                    <div class="font-bold">MY 선수단 순위권</div>에 도전하세요
                </div>
                <div class="mx-auto mt-8">
                    <img src="@/assets/button_google.png">
                </div>
                <div class="mx-auto mt-12 flex text-sm text-gray-400">
                    로그인 진행시 <div class="underline text-gray-700">이용약관</div>과 <div class="underline text-gray-00">개인정보 취급방침</div>에 동의하게 됩니다.
                </div>
            </div>
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



</style>
<template>
    <div class="fixed overscroll-contain bg-red-950 bg-opacity-90 w-full h-full flex z-20">
        <!-- 빨간 네모 -->
        <div class="m-auto w-[380px] h-[360px] relative bg-red-600 rounded-xl flex flex-col">
            <img class="mx-auto mt-10 w-20" src="@/assets/logo-white.svg">
            <div class="mt-10 mx-auto text-white text-2xl">
                나만의 최고 선수단을
            </div>
            <div class="flex mt-2 mx-auto text-white text-2xl">
                지금 &nbsp;<div class="font-bold">픽앤롤</div>에서 만들어 보세요!
            </div>
            <!-- 로그인 버튼 -->
            <div @click="login"
                class="flex mt-10 mx-auto px-6 py-2 text-red-600 bg-white rounded-lg text-xl hover:bg-red-50" >
                로그인하러 가기
            </div>
        </div>        
    </div>
</template>
<script>
// import axios from "axios"

export default {
    components: {
    },
    data(){
        return {

        }
    },
    methods: {
        login(){
            // window.location.href ="https://accounts.google.com/o/oauth2/auth?client_id=94560297607-at6vc76ph2jqecqp43bd8o8oa6j5fbjs.apps.googleusercontent.com&redirect_uri=http://localhost:8080/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
            window.location.href = "http://localhost:8080/oauth2/authorization/google"
            // axios.get('http://localhost:8080',{
            //     headers: {

            //     },
            // });
        }

    },
}
</script>
<style scoped>



</style>
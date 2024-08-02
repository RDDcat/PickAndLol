<template>
    <div class="fixed overscroll-contain flex flex-col bg-point-600 w-full h-screen z-50" >
        <!-- 배경 img -->
        <img class="fixed w-full object-contain -bottom-40 -right-36 opacity-40" src="@/assets/Union.svg" alt="" >
        <!-- 상단 -->
        <div class="flex py-10 px-6">
            <!-- 뒤로가기 버튼 -->
            <img class="w-6 h-6 object-contain" src="@/assets/arrow_back.svg" @click.prevent="modalStore.isMobileLoginModal=false">
        </div>

        <!-- 메인 텍스트 -->
        <div class="flex flex-col pl-6 my-8 text-white">
            <div class="text-xl">지금 로그인하고,</div>
            <div class="flex text-xl my-1">
                <div class="font-bold">
                MY선수단 순위권 
                </div>
                에
            </div>
            <div class="text-xl">도전하세요!</div>

        </div>
        <!-- 하단 -->
        <div class="fixed bottom-8 flex flex-col w-full px-6">
            <!--  버튼 -->
            <img class="w-full" src="@/assets/login/button_google.svg">
            <!-- 가이드 텍스트 -->
            <div class="mx-auto mt-2 flex text-xs text-gray-100">
                *로그인 진행시&nbsp;<div class="underline ">이용약관</div>과&nbsp;<div class="underline ">개인정보 취급방침</div>에 동의하게 됩니다.
            </div>
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
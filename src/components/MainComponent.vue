<template>
    <!-- 선수단 등록 페이지 -->
    <div class="w-full flex flex-col">
        <!-- 이미지 컨테이너 (지도좌표) -->
        <div class="relative flex mx-auto">
            <img class="mx-auto" src="@/assets/map.png" alt="">
            <img class="absolute left-10 top-10 hover:ring-4 hover:ring-red-400 rounded-full" src="@/assets/top.png">
            <img class="absolute left-28 top-40 hover:ring-4 hover:ring-red-400 rounded-full" src="@/assets/jug.png">
            <img class="absolute left-60 top-60 hover:ring-4 hover:ring-red-400 rounded-full" src="@/assets/mid.png">
            <img class="absolute right-32 bottom-20 hover:ring-4 hover:ring-red-400 rounded-full" src="@/assets/bot.png">
            <img class="absolute right-8 bottom-8 hover:ring-4 hover:ring-red-400 rounded-full" src="@/assets/sup.png">
        </div>

        <!-- 버튼 -->
        <div class="mx-auto my-8">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 w-36 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 via-red-500 to-red-600 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200">
                <span class="relative w-36 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    주장 설정하기
                </span>
            </button>
            <button type="button" class="text-white bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40">저장하기</button>
        </div>

        <!-- 선수단 네비 -->

        <!-- 선수 카드 -->
        <div class="w-24 h-32">

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
<template>
    <!-- 선수 랭킹 페이지 -->
    <div class="flex flex-col">
        <!-- 타이틀 -->
        <div class="mx-auto my-4 text-3xl flex">
            2024 LCK 서머 유저 <div class="text-red-600">&nbsp;랭킹</div>
        </div>

        <!--  -->
        <div class="flex min-w-[50rem] h-16 bg-red-600 shadow-lg rounded mx-auto">
            <div class="text-white flex my-auto px-4">
                나의 랭킹 <div class="text-sm my-auto">&nbsp; 축하드립니다</div>
            </div>
            <img class="my-auto ml-auto w-12 h-12 rounded-full object-cover" :src="img" alt="">
            <div class="my-auto mx-2 text-white flex">
                {{name}}<div class="text-sm my-auto">&nbsp;님의 순위는</div>&nbsp;{{rank}}<div class="text-sm my-auto">&nbsp;입니다</div>
            </div>
            <!-- 내 기록 상세보기 버튼 -->
            <button class="mx-2 px-4 py-2">
                내 기록 상세보기
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
            name:'내이름',
            img:'./assets/player/faker.png',
            rank:'6위',

        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
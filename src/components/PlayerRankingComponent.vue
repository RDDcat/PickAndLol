<template>
    <!-- 선수 랭킹 페이지 -->
    <div class="flex flex-col mx-auto w-[72rem]">
        <!-- 타이틀 -->
        <div class="mx-auto my-4">
            {{title}}
        </div>
        <!-- 네비게이션 -->
        <div class="w-full mx-auto my-2 flex">
            <div class="w-16 text-center text-gray-600">
                팀랭킹
            </div>
            <div class="w-16 text-center text-red-600">
                개인랭킹
            </div>
        </div>

        <!-- 네비 하단 라인 -->
        <div class="w-full h-[2px] bg-gray-600"></div>

        <!-- 필터 -->
        
    </div>
</template>
<script>


export default {
    components: {

    },
    data(){
        return {
            title:"2024 LCK 서머",
            nav:0,
        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
<template>
    <div class="relative bg w-full flex flex-col">
        <img class="absolute left-0 top-0 w-96" src="@/assets/guide/bg-pattern-1.svg">
        <img class="absolute right-0 -top-8 w-[640px] z-0" src="@/assets/guide/bg-pattern-2.svg">
        <div class="flex flex-col my-20">
            <img class="mx-auto mt-10 mb-12" src="@/assets/guide/logo-guide.svg">
            <img class="mx-auto my-16 w-[40rem] z-10" src="@/assets/guide/title.png">
            <div class="relative mx-auto mt-4 mb-80 flex z-10">
                <img class="absolute -top-10 mx-2" src="@/assets/guide/line.png">
                <img class="absolute top-24 left-64 mx-2" src="@/assets/guide/arrow.svg">
                <img class="mx-2" src="@/assets/guide/guide-explain-1.png">
                <img class="mx-2" src="@/assets/guide/guide-explain-2.png">
                <img class="mx-2" src="@/assets/guide/guide-explain-3.png">
            </div>

            <!-- 타이틀 -->
            <div class="mx-auto mt-80 text-white text-lg z-10">
                MY 선수단 구성하기
            </div>
            <div class="mx-auto text-white text-sm z-10">
                다음 단계에 맞춰 자신만의 선수단을 구성해주세요.
            </div>

            <img class="mx-auto my-2 z-10" src="@/assets/guide/guide-1.png">
            <img class="mx-auto my-2 z-10" src="@/assets/guide/guide-2.png">
            <img class="mx-auto my-2 z-10" src="@/assets/guide/guide-3.png">
        </div>
        <img class="mx-auto my-28" src="@/assets/guide/guide-table.png">
        <div class="mx-auto mt-20 w-[1080px]">
            <spline-viewer url="https://prod.spline.design/Iltiz2S3Ob47CyIw/scene.splinecode"></spline-viewer>
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
.bg{
    background-color: #151515;
}


</style>
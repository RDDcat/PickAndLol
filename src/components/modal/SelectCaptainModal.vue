<template>
    <!-- 주장 설정 모달 -->
    <div class="absolute flex bg-red-950 bg-opacity-90 backdrop-blur-sm w-screen h-screen z-40">
        <div class="relative mx-auto mt-24 flex flex-col max-w-[70rem]">
            <!-- back -->
            <div class="absolute right-4 top-4 text-white" @click="$store.state.modalStore.isSelectCaptainModal = false">
                x
            </div>
            <!-- 타이틀 택스트 -->
            <div class="mx-auto flex flex-col">
                <div class="mt-4 text-white text-4xl">원하는 주장을 선택하세요</div>
                <div class="mx-auto mt-10 text-white text-lg">(주장은 점수 두배)</div>
            </div>
            
            <!-- 주장 선택 창 -->
            <div class="mx-auto mt-16 flex flex-col">
                <div class="grid grid-cols-5">
                    <!-- top -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/top_white.png">
                        <img class="mx-auto" src="@/assets/player/perfect_circle.png">
                        <div class="text-center text-white text-xl">PerfecT</div>
                    </div>
                    <!-- jug -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/jug_white.png">
                        <img class="mx-auto" src="@/assets/player/canyon_circle.png">
                        <div class="text-center text-white text-xl">Canyon</div>
                    </div>

                    <!-- mid -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/mid_white.png">
                        <img class="mx-auto" src="@/assets/player/faker_circle.png">
                        <div class="text-center text-white text-xl">Faker</div>
                    </div>

                    <!-- bot -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/bot_white.png">
                        <img class="mx-auto" src="@/assets/player/viper_circle.png">
                        <div class="text-center text-white text-xl">Viper</div>
                    </div>

                    <!-- sup -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/sup_white.png">
                        <img class="mx-auto" src="@/assets/player/keria_circle.png">
                        <div class="text-center text-white text-xl">Keria</div>
                    </div>
                </div>
            </div>

            <!-- 선택하기 버튼 -->
            <div class="mx-auto mt-14">
                <button type="button" class="text-red-600 bg-gradient-to-r from-gray-100 via-white to-gray-100 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-10 py-2.5 text-center">선택하기</button>
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
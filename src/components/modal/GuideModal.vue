<template>
    <div class="absolute bg-red-950 w-full h-screen bg-opacity-95 flex z-40">
        <div class="relative opacity-100 min-w-[1280px] flex mx-auto bg-white">
            <!-- back -->
            <div class="absolute right-4 top-4" @click="$store.state.modalStore.isGuideModal = false">
                x
            </div>
            <!-- 상단 -->
            <div class="mx-auto mt-20 w-full">
                <spline-viewer url="https://prod.spline.design/Iltiz2S3Ob47CyIw/scene.splinecode"></spline-viewer>
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
<template>
    <div class="absolute bg-red-950 opacity-90 w-screen h-screen flex">
        <!--  -->
        <div class="m-auto w-96 h-96 relative">
            <!-- back -->
            <div class="absolute right-4 top-4" @click="$store.state.modalStore.isLoginModal = false">
                x
            </div>
            <!-- 상단 -->
            <div class="bg-red-600 rounded-t-xl w-full h-48">
                로그인
            </div>
            <!-- 하단 -->
            <div class="bg-white rounded-b-xl w-full h-72">

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
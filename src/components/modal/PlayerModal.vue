<template>
    <div class="fixed overscroll-contain bg-red-950 flex w-full h-screen z-40" @click="this.$store.state.modalStore.isPlayerModal=false">
        <img class="mx-auto w-80 object-contain" src="@/assets/coming-soon-logo.png">
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
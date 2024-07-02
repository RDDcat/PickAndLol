<template>
    <div class="fixed overscroll-contain bg-opacity-90 bg-red-950 flex w-full h-screen z-40" @click="this.modalStore.isPlayerModal=false">
        <img class="mx-auto w-80 object-contain" src="@/assets/coming-soon-logo.png">
    </div>
</template>
<script>
import {useModalStore} from '@/store/modalStore'

export default {
    components: {

    },
    setup(){
        const modalStore = useModalStore()

        return { modalStore }
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
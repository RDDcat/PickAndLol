<template>
    <div class="fixed overscroll-contain flex bg-red-950 w-full h-screen z-50" @click.prevent="modalStore.isMobileLoginModal=false">
        asdfasdfasdf
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
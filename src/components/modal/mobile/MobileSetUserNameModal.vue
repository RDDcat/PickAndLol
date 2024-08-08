<template>
    <div class="fixed overscroll-contain flex flex-col bg-red-950 w-full h-screen z-50">
        
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
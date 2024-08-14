<template>
    <div class="fixed overscroll-contain flex flex-col bg-opacity-60 bg-point-600 w-full z-50 px-6 mt-8" >
        <div class="w-full">
            에러 텍스트
        </div>
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
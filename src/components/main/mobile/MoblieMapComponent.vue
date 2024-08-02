<template>
    <div class="flex flex-col w-full">
        <div class="mx-auto my-16">
            <img src="@/assets/Union.svg" alt="">
        </div>
        지도지도지도

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
        start(){

        },

    },
    // 초기 설정
    mounted(){

    }
}
</script>
<style scoped>



</style>
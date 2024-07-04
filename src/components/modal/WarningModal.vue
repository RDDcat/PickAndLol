<template>
    <div class="fixed overscroll-contain bg-black bg-opacity-10 w-full h-screen z-40 flex" @click.stop="modalStore.isWarningModal = false">
        <div class="relative flex flex-col w-96 h-52 my-72 mx-auto border-2 border-red-400 bg-white rounded-lg z-50" @click.stop="">
            <!-- 타이틀 -->
            <div class="text-xl text-lx mx-auto mt-8 pb-10 text-ellipsis flex flex-col">
                <div class="mx-auto"> * {{modalStore.warningTitle}}</div>
                <div class="mx-auto text-sm mt-1 text-gray-300">({{modalStore.warningInfo}})</div>
            </div>
            <div class="flex">
                <button @click="yes"
                    type="button" class="mx-auto text-red-400 hover:text-white border border-red-400 hover:bg-red-600 rounded-lg text-sm px-5 py-2.5 text-center ">
                    네
                </button>
                <button @click.stop="modalStore.isWarningModal = false"
                    type="button" class="mx-auto text-red-400 hover:text-white border border-red-400 hover:bg-red-600  rounded-lg text-sm px-5 py-2.5 text-center ">
                    아니오
                </button>
            </div>
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
        yes(){
            if(this.modalStore.warningFrom==='inactive'){
                console.log('계정 비활성화')
            } else if(this.modalStore.warningFrom==='logout'){
                console.log('로그아웃')
                this.cacheStore.$reset()
                this.modalStore.$reset()

            }
            // this.$emit(this.modalStore.warningFrom)
            this.modalStore.isWarningModal = false
        }
    },
}
</script>
<style scoped>



</style>
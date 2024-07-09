<template>
    <div class="fixed overscroll-contain flex bg-red-950 w-full h-screen z-40" @click.stop="modalStore.isSetTeamNameModal=false">
        <div class="w-full flex" >
                <!-- 모달 내용 -->
            <div class="flex flex-col w-[30rem] mx-auto mt-60" @click.stop="">
                <!-- 타이틀 -->
                <div class="w-full flex py-6 bg-red-500 rounded-t-lg">
                    <!-- 팀명 생성 -->
                    <div class="px-8 my-auto text-white text-2xl font-bold">
                        팀명 생성
                    </div>
                    <!-- x -->
                </div>
                <!-- 바디 -->
                <div class="w-full h-[22rem] bg-white rounded-b-lg flex flex-col">
                    <!-- 내용 -->
                    <div class="text-xl mx-auto my-10 flex">내 선수단의&nbsp;<div class="font-bold">팀명</div>을 정해주세요.</div>
                    

                    <!-- 입력창 -->
                    <div class="mb-6 px-10">
                        <input type="text" id="default-input" v-model="cacheStore.myTeam.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 ">
                    </div>
                    <!-- 밸리데이션 안내 -->
                    <div class="text-red-400 text-sm mx-auto my-1" v-if="isName">이름을 입력해주세요</div>
                    

                    <!-- 안내 -->
                    <div class="text-gray-200 text-sm mx-auto">6자 이내로 작성해주세요.</div>
                    <div class="text-gray-200 text-sm mx-auto">시즌 중에는 팀명 변경이 불가능합니다.</div>

                    <!-- 확인 버튼 -->
                    <button type="button" 
                        @click.stop="save()"
                        class=" text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-5 py-2.5 w-36 mx-auto mt-auto mb-8">
                        확인하기
                    </button>

                </div>
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
            isName:false,

        }
    },
    methods: {
        valid(){
            // 이름이 입력되지 않을때
            console.log("!this.cacheStore.myTeam.name", !this.cacheStore.myTeam.name)
            if(!this.cacheStore.myTeam.name) {
                this.isName=true
                return true
            }

            return false
        },
        save(){
            if(this.valid())return

            this.modalStore.isSetTeamNameModal=false
            this.modalStore.isSaveWarningModal = true
        }
    },
}
</script>
<style scoped>



</style>
<template>
    <!-- 전체 -->
    <div class="flex w-full">
        <!-- 프레임 -->
        <div class="max-w-[1080px] w-[1280px] mx-auto flex flex-col">
            <!-- 유저 정보 및 수정 -->
            <div class="w-full h-52 shadow-md rounded-lg px-20 py-4 flex my-8">
                <!-- 프로필 사진 -->
                <div class="relative w-32 h-32 my-auto">
                    <img class="w-full h-full object-contain rounded-full" src="@/assets/logo.png">
                    <!-- <img class="absolute w-8 h-8 bg-gray-300 right-0 bottom-0 rounded-full" src="@/assets/logo.png" @click="console.log('프로필 사진 수정')"> -->
                </div>
                <!-- 유저 정보 -->
                <div class="flex flex-col pl-8 py-12">
                    <!-- 유저 이름 -->
                    <div class="text-3xl">
                        {{cacheStore.userName}}
                    </div>
                    <!-- 유저 이름 -->
                    <div class="text-xl">
                        {{cacheStore.myTeam.name}}
                    </div>
                </div>
                
            </div>
            
            <!-- 알림 설정 -->
            <div class="w-full mb-2">
                <!-- 타이틀 -->
                <div class="flex relative w-full mb-4">
                    <div class="border-b-2 border-red-500 text-red-600 p-4 ">알림 설정</div>
                    <div class="border-b-[1px] border-gray-300 flex-1"></div>
                </div>
                <!-- 내용 -->
            </div>

            <!-- 계정 설정 -->
            <div class="w-full mb-2">
                <!-- 타이틀 -->
                <div class="flex relative w-full mb-4">
                    <div class="border-b-2 border-red-500 text-red-600 p-4 ">계정 설정</div>
                    <div class="border-b-[1px] border-gray-300 flex-1"></div>
                </div>
                <!-- 내용 -->
            </div>

            <!-- 계정 관리 -->
            <div class="w-full mb-2">
                <!-- 타이틀 -->
                <div class="flex relative w-full mb-4">
                    <div class="border-b-2 border-red-500 text-red-600 p-4 ">계정 관리</div>
                    <div class="border-b-[1px] border-gray-300 flex-1"></div>
                </div>
                <!-- 내용 -->
                <div class="flex w-full p-2">
                    <button type="button" class="text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 ">
                        계정 비활성화
                    </button>
                    <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 ">
                        계정 로그아웃
                    </button>
                </div>
            </div>

        </div>
    </div>

</template>
<script>
import {useCacheStore} from '@/store/cacheStore'

export default {
    components: {

    },
    setup(){
        const cacheStore = useCacheStore()

        return { cacheStore }
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
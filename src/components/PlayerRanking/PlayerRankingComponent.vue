<template>
    <!-- 필터 -->
    <!-- 선수 필터 -->
    <div class="mr-auto flex flex-col">
        <!-- 라인 별 필터 -->
        <div class="grid grid-cols-6 gap-2 my-4 mr-auto">
            <!-- 라인 -->
            <div v-for="line, index in lines" :key="index">
                <button type="button" class="flex text-gray-600 focus:text-white bg-gray-200 hover:bg-red-200 focus:outline-none focus:bg-red-500 rounded-full px-6 py-3">
                    <img class="m-auto" :src="line.img">
                    <div class="flex my-auto ml-2 mr-2 text-center text-sm ">
                        {{line.name}}
                    </div>
                </button>
            </div>
        </div>
    </div>

    <!-- 선수 대표 카드 -->

    <!-- 선수 순위 -->
    
    a



</template>
<script>


export default {
    components: {

    },
    data(){
        return {
            lines:[
                {name:'전체', img:'./assets/icon/total_icon.png'}, 
                {name:'TOP', img:'./assets/icon/top_icon.png'}, 
                {name:'JUG', img:'./assets/icon/jug_icon.png'}, 
                {name:'MID', img:'./assets/icon/mid_icon.png'}, 
                {name:'BOT', img:'./assets/icon/bot_icon.png'}, 
                {name:'SUP', img:'./assets/icon/sup_icon.png'}, 
            ],

        }
    },
    methods: {

    },
}
</script>
<style scoped>



</style>
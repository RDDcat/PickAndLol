<template>
    <!-- 주장 설정 모달 -->
    <div class="fixed overscroll-contain flex bg-red-950 bg-opacity-90 backdrop-blur-sm w-screen h-[200vw] z-40">
        <div class="relative mx-auto mt-24 flex flex-col max-w-[70rem]">
            <!-- back -->
            <div class="absolute right-4 top-4 text-white" @click="$store.state.modalStore.isSelectCaptainModal = false">
                x
            </div>
            <!-- 타이틀 택스트 -->
            <div class="mx-auto flex flex-col">
                <div class="mt-4 text-white text-4xl">원하는 주장을 선택하세요</div>
                <div class="mx-auto mt-10 text-white text-lg">(주장은 점수 두배)</div>
            </div>
            
            <!-- 주장 선택 창 -->
            <div class="mx-auto mt-16 flex flex-col">
                <div class="grid grid-cols-5">
                    <!-- top -->
                    <div class="flex flex-col w-48 h-72 ">
                        <img class="m-auto" src="@/assets/icon/top_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===1?'outline-none ring-red-500 ring-4':''" 
                            :src="$store.state.cacheStore.myTeam.players.top.img"
                            @click="click=1">
                        <div class="text-center text-white text-xl">{{$store.state.cacheStore.myTeam.players.top.name}}</div>
                    </div>
                    <!-- jug -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/jug_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===2?'outline-none ring-red-500 ring-4':''" 
                            :src="$store.state.cacheStore.myTeam.players.jug.img"
                            @click="click=2">
                        <div class="text-center text-white text-xl">{{$store.state.cacheStore.myTeam.players.jug.name}}</div>
                    </div>

                    <!-- mid -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/mid_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===3?'outline-none ring-red-500 ring-4':''" 
                            :src="$store.state.cacheStore.myTeam.players.mid.img"
                            @click="click=3">
                        <div class="text-center text-white text-xl">{{$store.state.cacheStore.myTeam.players.mid.name}}</div>
                    </div>

                    <!-- bot -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/bot_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===4?'outline-none ring-red-500 ring-4':''" 
                            :src="$store.state.cacheStore.myTeam.players.bot.img"
                            @click="click=4">
                        <div class="text-center text-white text-xl">{{$store.state.cacheStore.myTeam.players.bot.name}}</div>
                    </div>

                    <!-- sup -->
                    <div class="flex flex-col w-48 h-72">
                        <img class="m-auto" src="@/assets/icon/sup_white.png">
                        <img class="mx-auto my-4 rounded-full w-36 h-36 object-cover hover:ring-red-400 hover:ring-4" 
                            :class="click===5?'outline-none ring-red-500 ring-4':''" 
                            :src="$store.state.cacheStore.myTeam.players.sup.img"
                            @click="click=5">
                        <div class="text-center text-white text-xl">{{$store.state.cacheStore.myTeam.players.sup.name}}</div>
                    </div>
                </div>
            </div>

            <!-- 선택하기 버튼 -->
            <div class="mx-auto mt-14">
                <button type="button" class="text-red-600 bg-gradient-to-r from-gray-100 via-white to-gray-100 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-10 py-2.5 text-center"
                    @click="select()">
                    선택하기
                </button>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    components: {

    },
    data(){
        return {
            click: 0,
        }
    },
    methods: {
        select(){
            if(this.click===1 && this.$store.state.cacheStore.myTeam.players.top.name){
                this.$store.state.cacheStore.myTeam.players.top.isMvp = true
            } else if(this.click===2 && this.$store.state.cacheStore.myTeam.players.jug.name){
                this.$store.state.cacheStore.myTeam.players.jug.isMvp = true
            } else if(this.click===3 && this.$store.state.cacheStore.myTeam.players.mid.name){
                this.$store.state.cacheStore.myTeam.players.mid.isMvp = true
            } else if(this.click===4 && this.$store.state.cacheStore.myTeam.players.bot.name){
                this.$store.state.cacheStore.myTeam.players.bot.isMvp = true
            } else if(this.click===5 && this.$store.state.cacheStore.myTeam.players.sup.name){
                this.$store.state.cacheStore.myTeam.players.sup.isMvp = true
            }
            this.$store.state.modalStore.isSelectCaptainModal = false
        }
    },
}
</script>
<style scoped>



</style>
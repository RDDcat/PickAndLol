<template>
    <div class="flex flex-col w-full">
        <!-- 가이드 텍스트 -->
        <div class="my-2">
            <div class="flex w-full px-8 text-xl">
                <div class="text-point-600">
                    {{cacheStore.myTeam.name}}</div><div> 선수단</div>
            </div>
            <div class="flex w-full my-4 px-8 text-gray-300 text-sm ">
                현재는 선수단을 변경할 수 없습니다.
            </div>
        </div>

        <!-- 지도 -->
        <div class="flex mx-auto">
            <MapComponent/>
        </div>
        
        <!-- 현재 선수단 가치 -->
        <div class="flex mx-auto px-4 py-1.5 bg-gray-200 rounded-md">
            <div class="">
                선수단 가치 
            </div>
            <div class="text-point-600 mx-1">
                - {{cacheStore.myTeam.totalVP}}
            </div>
            <img class="my-auto w-4 h-4 object-cover" src="@/assets/icon/vp.png" alt="">
        </div>

        <!-- 선수단 리스트 -->
        <div class="flex flex-col w-full">
            <!-- 탑 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.top.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/top_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.top.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.top.name ? cacheStore.myTeam.players.top.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.top.name ? cacheStore.myTeam.players.top.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.top.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>
            <!-- 정글 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.jgl.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/jgl_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.jgl.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.jgl.name ? cacheStore.myTeam.players.jgl.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.jgl.name ? cacheStore.myTeam.players.jgl.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.jgl.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>

            <!-- 미드 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.mid.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/mid_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.mid.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.mid.name ? cacheStore.myTeam.players.mid.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.mid.name ? cacheStore.myTeam.players.mid.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.mid.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>

            <!-- 바텀 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.adc.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/adc_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.adc.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.adc.name ? cacheStore.myTeam.players.adc.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.adc.name ? cacheStore.myTeam.players.adc.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.adc.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>

            <!-- 서폿 -->
            <div class="my-2 px-4 flex w-full">
                <!-- 아이콘 -->
                <div class="relative my-auto mr-4 ">
                    <img v-if="cacheStore.myTeam.players.sup.isMvp" class="absolute -top-2.5 left-1.5 w-2.5 object-contain" src="@/assets/icon/crown.svg" >
                    <img class="w-6 h-6" src="@/assets/icon/sup_icon.png">
                </div>
                <!-- 선수 초상화 -->
                <img class="my-auto w-10 h-10 rounded-full" :src="cacheStore.myTeam.players.sup.img" @error="setDefaultImage($event)">
                <!-- 선수 이름 -->
                <div class="flex my-auto ml-6 text-base ">
                    <div class="font-bold">{{cacheStore.myTeam.players.sup.name ? cacheStore.myTeam.players.sup.team : ''}}</div>
                    &nbsp; {{cacheStore.myTeam.players.sup.name ? cacheStore.myTeam.players.sup.name : '-'}}
                </div>
                <!-- 선수 vp 포인트 -->
                <div class="flex ml-auto my-auto mr-2">
                    <div class="text-red-600 mr-1">
                        {{cacheStore.myTeam.players.sup.vp}}
                    </div>
                    <img class="w-4 h-4 object-cover" src="@/assets/icon/vp.png">
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'
import MapComponent from '@/components/MapComponent'

export default {
    components: {
        MapComponent,
    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()

        return { cacheStore, modalStore }
    },
    data(){
        return {
            selectAllFlag: false,
            selectTeamFlag: false,
            moreThanTwoFlag: false,
            moreThanTwoFlagText:'',
            oneFromOneFlag: false,
            vpFlag: false,
            mvpFlag: false,
        }
    },
    methods: {
        setDefaultImage(event) {
            event.target.src = './assets/logo.png';
            event.target.style.opacity = '0.2';
        },
        
    },
    // 초기 설정
    mounted(){

    }
}
</script>
<style scoped>



</style>
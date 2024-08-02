<template>
    <div class="fixed overscroll-contain flex flex-col bg-white w-full h-screen z-50">
        <!-- 상단 -->
        <div class="flex py-10 px-6">
            <!-- 뒤로가기 버튼 -->
            <img class="w-6 h-6 object-contain" src="@/assets/arrow_back_black.svg" @click.prevent="modalStore.isMobileSelectClubModal=false">
        </div>

        <!-- 가이드 텍스트 -->
        <div class="my-4">
            <div class="flex w-full my-2 px-8 text-point-600 text-sm ">
                1/2
            </div>
            <div class="flex w-full px-8 text-xl">
                <div class="text-point-600">
                    응원팀</div><div>을 선정해주세요.</div>
            </div>
            <div class="flex w-full my-4 px-8 text-gray-300 text-sm ">
                시즌이 끝날때까지 응원팀을 수정할 수 없습니다.
            </div>
        </div>

        <!-- 팀 선택 스크롤 -->
        <div class="flex-grow relative overflow-hidden"
            @mousedown="startDrag"
            @mousemove="onDrag"
            @mouseup="endDrag"
            @mouseleave="endDrag"
            @touchstart="startDrag"
            @touchmove="onDrag"
            @touchend="endDrag">
            <div class="flex items-center justify-center h-1/2">
                <div v-for="(club, index) in filteredClubs" 
                    :key="club.clubId" 
                    class="club-item absolute transition-all duration-300"
                    :style="getClubStyle(index)">
                    <img  
                        :src="club.clubLogo" 
                        :alt="club.clubName" 
                        class="object-contain transition-all duration-300"
                        :class="getImageClass(index)">
                </div>
            </div>
        </div>

        <!-- 하단고정 -->
        <div class="fixed bottom-4 flex flex-col w-full px-6">
            <!-- 태그 -->
            <div class="mx-auto px-5 py-1.5 text-sm rounded-full bg-gray-200 mb-2 text-point-600" v-if="cacheStore.myTeam.team">
                {{cacheStore.myTeam.team}}
            </div>
            <!-- 버튼 -->
            <button class="w-full bg-point-600 text-white text-lg py-1.5 rounded-lg">다음</button>

        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue'
import {useCacheStore} from '@/store/cacheStore'
import {useModalStore} from '@/store/modalStore'
import {useClubStore} from '@/store/clubStore'
import { onMounted } from 'vue'


export default {
    components: {
    },
    setup(){
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()
        const clubStore = useClubStore()

        const filteredClubs = computed(() => {
            return clubStore.clubs.filter(club => club.clubName !== 'NUN')
        })

        const currentIndex = ref(0)
        const dragStart = ref(null)
        const dragAmount = ref(0)

        const itemWidth = 120 // 아이템 간 간격

        const updateSelectedClub = () => {
            cacheStore.myTeam.team = filteredClubs.value[currentIndex.value].clubName
        }

        const startDrag = (event) => {
            dragStart.value = event.clientX || event.touches[0].clientX
        }

        const onDrag = (event) => {
            if (dragStart.value === null) return
            const currentPosition = event.clientX || event.touches[0].clientX
            dragAmount.value = currentPosition - dragStart.value
        }

        const endDrag = () => {
            if (dragAmount.value > 50 && currentIndex.value > 0) {
                currentIndex.value--
            } else if (dragAmount.value < -50 && currentIndex.value < filteredClubs.value.length - 1) {
                currentIndex.value++
            }
            dragStart.value = null
            dragAmount.value = 0
            updateSelectedClub()
        }

        const getClubStyle = (index) => {
            const diff = index - currentIndex.value
            const baseTranslate = diff * itemWidth
            const dragOffset = dragAmount.value * 0.5
            const translateX = baseTranslate + dragOffset
            return {
                transform: `translateX(${translateX}px)`,
                opacity: Math.abs(diff) <= 1 ? 1 - Math.abs(diff) * 0.5 : 0,
                zIndex: 10 - Math.abs(diff)
            }
        }

        const getImageClass = (index) => {
            const diff = Math.abs(index - currentIndex.value)
            if (diff === 0) return 'w-32 h-32'
            if (diff === 1) return 'w-24 h-24'
            return 'w-20 h-20'
        }

        onMounted(() => {
            updateSelectedClub()
        })

        return { 
            cacheStore, 
            modalStore, 
            filteredClubs,
            currentIndex,
            startDrag,
            onDrag,
            endDrag,
            getClubStyle,
            getImageClass,
            updateSelectedClub
        }
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
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
}
.club-item {
  transition: all 0.3s ease;
  user-select: none;
}
</style>
<template>
    <div>
        <MobileComponent v-if="isMobile"></MobileComponent>
        <WebComponent v-else ></WebComponent>
    </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue'
import MobileComponent from '@/components/TitleNav/mobile/MobileTitleNav.vue'
import WebComponent from '@/components/TitleNav/web/WebTitleNav.vue'

export default {
    components: {
        MobileComponent,
        WebComponent
    },
    setup() {
        const isMobile = ref(window.innerWidth <= 768) // 모바일 기준을 768px로 설정

        const handleResize = () => {
            isMobile.value = window.innerWidth <= 768
        }

        onMounted(() => {
            window.addEventListener('resize', handleResize)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize)
        })

        return {
            isMobile
        }
    },
}
</script>

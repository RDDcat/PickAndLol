<template>
    <MoblieIntroComponent v-if="showIntro" />
    <MoblieMapComponent v-if="showMap" />
    <MobileFloatingComponent v-if="showMap"/>
    <MoblieMyTeamComponent v-if="showMyTeam"/>
</template>

<script>
import { computed, watch } from 'vue'

import MoblieIntroComponent from '@/components/main/mobile/MoblieIntroComponent.vue'
import MoblieMapComponent from '@/components/main/mobile/MoblieMapComponent.vue'
import MobileFloatingComponent from '@/components/main/mobile/MobileFloatingComponent.vue'
import MoblieMyTeamComponent from '@/components/main/mobile/MoblieMyTeamComponent.vue'

import { useCacheStore } from '@/store/cacheStore'
import { useModalStore } from '@/store/modalStore'
import api from '@/api/api'

export default {
    components: {
        MoblieIntroComponent,
        MoblieMapComponent,
        MobileFloatingComponent,
        MoblieMyTeamComponent,
    },
    setup() {
        const cacheStore = useCacheStore()
        const modalStore = useModalStore()

        const showMap = computed(() => modalStore.isMoblieMapComponent && !cacheStore.isSave)
        const showMyTeam = computed(() => modalStore.isMoblieMyTeamComponent)
        const showIntro = computed(() => modalStore.isMoblieIntroComponent)

        watch(() => cacheStore.isSave, (newValue) => {
            if (newValue) {
                modalStore.isMoblieIntroComponent = false
                modalStore.isMoblieMapComponent = false
                modalStore.isMoblieMyTeamComponent = true
            } else {
                updateRoute()
            }
        })

        function updateRoute() {
            modalStore.isMoblieIntroComponent = true

            if (!cacheStore.myTeam.team && cacheStore.userId !== 0) {
                modalStore.isMobileSelectClubModal = true
                modalStore.isMoblieIntroComponent = false
                modalStore.isMoblieMapComponent = true
                modalStore.isMoblieMyTeamComponent = false
                return
            }

            if (cacheStore.isMaking && cacheStore.userId !== 0) {
                modalStore.isMoblieIntroComponent = false
                modalStore.isMoblieMapComponent = true
                modalStore.isMoblieMyTeamComponent = false
                return
            }

            if (cacheStore.isSave) {
                modalStore.isMoblieIntroComponent = false
                modalStore.isMoblieMapComponent = false
                modalStore.isMoblieMyTeamComponent = true
            }
        }

        return { 
            cacheStore, 
            modalStore, 
            showMap, 
            showMyTeam, 
            showIntro,
            updateRoute 
        }
    },
    mounted() {
        this.updateRoute()
    },
    async beforeMount() {
        if (this.cacheStore.userId) {
            try {
                const response = await api.getSync(this.cacheStore.userId)
                console.log('response:', response)
                this.cacheStore.myTeam = JSON.parse(response.data.data)
                this.cacheStore.canChange = response.data.canChange
                this.cacheStore.isSave = true
                this.cacheStore.isMaking = false
            } catch (e) {
                console.log(e)
            }
        }

        this.updateRoute()
    },
}
</script>
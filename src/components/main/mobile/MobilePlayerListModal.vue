<template>
    <div class="sample">
        모바일 홤면123
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
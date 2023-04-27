<template>
    <div>
        <div class="tw-w-screen tw-h-screen tw-flex tw-bg-white">
            <img class="basic-img"
                 src="@/assets/bg-img1.jpg"
                 alt="">
            <div class="basic-main">
                <router-view v-slot="{ Component }">
                    <transition mode="out-in" v-motion="MotionPinia().motion">
                        <component :is="Component"/>
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {MotionPinia} from '@/store'
</script>

<style scoped>
.basic-img {
    @apply
    tw-flex-1
    tw-opacity-0
    tw-duration-300
    sm:tw-opacity-100
    tw-object-cover
}


.basic-main {
    @apply
    tw-absolute
    tw-w-full
    tw-h-full
    sm:tw-absolute
}
</style>
<template>
  <div class="layout-aside-top flex-base">
    <!--  logo  -->
    <img src="/vite.svg" alt="">
    <!--  标题  -->
    <p v-if="!menuStatus" class="layout-aside-title">
      {{ $t('SignName') }}</p>
  </div>
</template>

<script setup lang="ts">
import {useMenu} from "@/hooks/useMenu.ts";

const {
  menuStatus,
} = useMenu();
// TODO: 侧边栏顶部高度
</script>

<style scoped lang="postcss">
/* 侧边栏顶部样式 */
.layout-aside-top {
  @apply
  tw-w-full
  tw-select-none
  tw-h-[var(--vxp-layout-header-height)]
}

/* 侧边栏顶部标题样式 */
.layout-aside-title {
  @apply
  tw-ml-2
  tw-transition-all
  tw-animate-layout-aside-title-animation
}
</style>
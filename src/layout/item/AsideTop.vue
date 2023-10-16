<template>
  <div class="layout-aside-top flex items-center justify-center">
    <!--  logo  -->
    <img src="/vite.svg" alt="">
    <!--  标题  -->
    <p v-if="!menuStatus" class="layout-aside-title">
      {{ $t('SignName') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from "@/hooks/useMenu.ts";

const {
  menuStatus,
} = useMenu();
// TODO: 侧边栏顶部高度
</script>

<style scoped lang="postcss">
/* 侧边栏顶部样式 */
.layout-aside-top {
  @apply
  w-full
  select-none
  h-[var(--vxp-layout-header-height)]
}

/* 侧边栏顶部标题样式 */
.layout-aside-title {
  animation: layoutAsideTitle 1s ease-in-out;
  @apply
  ml-2
  transition-all
}

@keyframes layoutAsideTitle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
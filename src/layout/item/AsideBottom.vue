<template>
  <div class="layout-aside-button flex-base" @click.stop="menuSwitch">
    <!--  菜单展开收缩 icon  -->
    <icon-ep-fold v-if="menuStatus"/>
    <icon-ep-expand v-else/>
  </div>
</template>

<script setup lang="ts">
import IconEpExpand from "~icons/ep/expand";
import IconEpFold from "~icons/ep/fold";
import {useMenu} from "@/hooks/useMenu.ts";

const {
  menuStatus,
} = useMenu();

// 侧边栏展开收缩切换
function menuSwitch() {
  menuStatus.value = !menuStatus.value
  localStorage.setItem('menu', menuStatus.value.toString());
}

</script>

<style scoped lang="postcss">
/* 侧边栏展开收缩容器 */
.layout-aside-button {
  @apply
  tw-border-t-2
  tw-w-full
  tw-h-12
  tw-text-xl
  tw-cursor-pointer
  tw-caret-transparent
  tw-select-none
}
</style>
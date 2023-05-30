<template>
  <div class="layout-aside-button flex-base" @click.stop="menuSwitch">
    <!--  菜单展开收缩 icon  -->
    <icon-ep-fold v-if="globalStore.menuStatus"/>
    <icon-ep-expand v-else/>
  </div>
</template>

<script setup lang="ts">
import IconEpExpand from "~icons/ep/expand";
import IconEpFold from "~icons/ep/fold";
import {GlobalStore} from "@/store";

const globalStore = GlobalStore();

// 侧边栏展开收缩切换
function menuSwitch() {
  globalStore.menuStatus = !globalStore.menuStatus;
  window.localStorage.setItem('menu', globalStore.menuStatus.toString());
}

</script>

<style scoped>
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
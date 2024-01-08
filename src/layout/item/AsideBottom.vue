<template>
  <div
      class="border-t-2 w-full h-12 text-xl cursor-pointer caret-transparent select-none flex items-center justify-center"
      @click.stop="menuSwitch">
    <!--  菜单展开收缩 icon  -->
    <div i-ep-fold v-if="menuStatus"/>
    <div i-ep-expand v-else/>
  </div>
</template>

<script setup lang="ts">
import { useMenu } from "@/hooks/useMenu.ts";

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
</style>

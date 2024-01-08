<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
// 全屏切换函数
const {isFullscreen, toggle} = useFullscreen()
</script>

<template>
  <!-- 全屏切换模块 -->
  <n-tooltip>
    <template #trigger>
      <!-- 全屏 icon -->
      <div i-ant-design-fullscreen-outlined v-if="isFullscreen" @click.stop="toggle" class="w-8 h-8 cursor-pointer"/>
      <div i-ant-design-fullscreen-exit-outlined v-else @click.stop="toggle" class="w-8 h-8 cursor-pointer"/>
    </template>
    <!-- 提示 -->
    {{ $t('FullScreenMode.Tip') }}
  </n-tooltip>
</template>

<style scoped>

</style>

<template>
  <!-- 全屏切换模块 -->
  <n-tooltip>
    <template #trigger>
      <!-- 全屏 icon -->
      <icon-ant-design-fullscreen-exit-outlined v-if="isFullscreen" @click.stop="toggle" class="full-screen-mode"/>
      <icon-ant-design-fullscreen-outlined v-else @click.stop="toggle" class="full-screen-mode"/>
    </template>
    <!-- 提示 -->
    {{ $t('FullScreenMode.Tip') }}
  </n-tooltip>
</template>

<script setup lang="ts">
import IconAntDesignFullscreenOutlined from "~icons/ant-design/fullscreen-outlined";
import IconAntDesignFullscreenExitOutlined from "~icons/ant-design/fullscreen-exit-outlined";
import {useFullscreen} from "@vueuse/core";
// 全屏切换函数
const {isFullscreen, toggle} = useFullscreen()
</script>

<style scoped>
/* 全屏切换 */
.full-screen-mode {
  @apply
  tw-w-8
  tw-h-8
  tw-cursor-pointer
}
</style>
<script setup lang="ts">
import IconAntDesignFullscreenOutlined from "~icons/ant-design/fullscreen-outlined";
import IconAntDesignFullscreenExitOutlined from "~icons/ant-design/fullscreen-exit-outlined";
import {useFullscreen} from "@vueuse/core";
// 全屏切换函数
const {isFullscreen, toggle} = useFullscreen()
</script>

<template>
  <!-- 全屏切换模块 -->
  <n-tooltip>
    <template #trigger>
      <!-- 全屏 icon -->
      <icon-ant-design-fullscreen-exit-outlined v-if="isFullscreen" @click.stop="toggle"
                                                class="w-8 h-8 cursor-pointer"/>
      <icon-ant-design-fullscreen-outlined v-else @click.stop="toggle" class="w-8 h-8 cursor-pointer"/>
    </template>
    <!-- 提示 -->
    {{ $t('FullScreenMode.Tip') }}
  </n-tooltip>
</template>

<style scoped>

</style>
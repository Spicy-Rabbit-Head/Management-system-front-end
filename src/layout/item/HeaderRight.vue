<template>
  <div class="mr-2 flex items-center justify-center">
    <!-- 全屏切换 -->
    <full-screen-mode/>
    <!-- 语言切换 -->
    <language-switching class="mx-2"/>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitching from "@/components/LanguageSwitching.vue";
import FullScreenMode from "@/components/FullScreenMode.vue";
</script>

<style scoped>

</style>
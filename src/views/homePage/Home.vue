<template>
  <!-- 主页容器 -->
  <div class="tw-w-screen tw-h-screen tw-bg-white">
    <sidebar-layout>
      <div>
        <h1>File</h1>
        <vue-pdf-embed :source="source1"/>
      </div>
    </sidebar-layout>
  </div>
</template>

<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'
import SidebarLayout from "@/layout/SidebarLayout.vue";
// 读取本地文件
const source1 = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'

</script>

<style scoped>

</style>
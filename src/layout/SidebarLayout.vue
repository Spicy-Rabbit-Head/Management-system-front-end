<template>
  <vex-layout
      class="tw-z-10"
      :reduced="globalStore.menuStatus"
      :header-fixed="false"
  >
    <!-- 侧边栏顶部 -->
    <template #aside-top>
      <aside-top/>
    </template>
    <!-- 侧边栏主体 -->
    <template #aside-main>
      <aside-main/>
    </template>
    <!-- 侧边栏底部 -->
    <template #aside-bottom>
      <aside-bottom/>
    </template>
    <!-- 头部左侧 -->
    <template #header-left>
      1
    </template>
    <!-- 头部右侧 -->
    <template #header-right>
      <header-right/>
    </template>
    <!-- 头部用户信息 -->
    <template #header-user>
      <header-user/>
    </template>
    <!-- 主体 -->
    <template #main>
      <!-- 状态标签导航 -->
        <main-tab-nav/>
      <slot/>
    </template>
    <template #header-main>
      2
    </template>
  </vex-layout>
</template>

<script setup>
import {GlobalStore} from "@/store";
import {Layout as VexLayout} from "vexip-ui";
import AsideTop from "@/layout/item/AsideTop.vue";
import HeaderRight from "@/layout/item/HeaderRight.vue";
import HeaderUser from "@/layout/item/HeaderUser.vue";
import AsideBottom from "@/layout/item/AsideBottom.vue";
import AsideMain from "@/layout/item/AsideMain.vue";
import MainTabNav from "@/layout/item/MainTagsNav.vue";

const globalStore = GlobalStore();
</script>

<style scoped>

</style>
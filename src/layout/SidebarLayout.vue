<template>
  <vex-layout
      class="tw-z-10 tw-w-screen tw-h-screen tw-bg-white"
      :reduced="globalStore.menuStatus"
  >
    <!--:header-fixed="false"-->
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
      <!--<main-tab-nav/>-->
      <router-view v-slot="{ Component }">
        <transition mode="out-in"
                    enter-from-class="tw-opacity-0"
                    leave-to-class="tw-opacity-0"
                    leave-active-class="tw-transition-opacity tw-duration-300"
                    enter-active-class="tw-transition-opacity tw-duration-300">
          <component :is="Component"/>
        </transition>
      </router-view>
    </template>
    <template #header-main>
      2
    </template>
  </vex-layout>
</template>

<script setup lang="ts">
import {GlobalStore} from "@/store";
import {Layout as VexLayout} from "vexip-ui";
import AsideTop from "@/layout/item/AsideTop.vue";
import HeaderRight from "@/layout/item/HeaderRight.vue";
import HeaderUser from "@/layout/item/HeaderUser.vue";
import AsideBottom from "@/layout/item/AsideBottom.vue";
import AsideMain from "@/layout/item/AsideMain.vue";
// import MainTabNav from "@/layout/item/MainTagsNav.vue";

const globalStore = GlobalStore();
</script>

<style scoped>

</style>
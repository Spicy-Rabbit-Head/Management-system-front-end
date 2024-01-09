<template>
  <vex-layout
      class="z-10 w-screen h-screen bg-white box-border relative"
      :reduced="menuStatus"
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
      <div style="height: calc(100vh - 55px)" class="bg-[#E2E2E8] w-full relative">
        <router-view v-slot="{ Component }">
          <transition mode="out-in"
                      enter-from-class="opacity-0"
                      leave-to-class="opacity-0"
                      leave-active-class="transition-opacity duration-300"
                      enter-active-class="transition-opacity duration-300">
            <component class="h-full w-full bg-[#FFF]" :is="Component"/>
          </transition>
        </router-view>
      </div>
    </template>
    <template #header-main>

    </template>
  </vex-layout>
</template>

<script setup lang="ts">
import { Layout as VexLayout } from "vexip-ui";
import AsideTop from "@/layout/item/AsideTop.vue";
import HeaderRight from "@/layout/item/HeaderRight.vue";
import HeaderUser from "@/layout/item/HeaderUser.vue";
import AsideBottom from "@/layout/item/AsideBottom.vue";
import AsideMain from "@/layout/item/AsideMain.vue";
import { useMenu } from "@/hooks/useMenu.ts";

const {
  menuStatus,
} = useMenu();
</script>

<style scoped>

</style>

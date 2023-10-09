<script setup lang="ts">
import LoginPageSwitch from "@/views/login/LoginPageSwitch.vue";
import LanguageSwitching from "@/components/LanguageSwitching.vue";
</script>

<template>
  <!-- 注册登录界面风格切换 -->
  <login-page-switch class="absolute top-2 right-2 z-20"/>
  <!-- 语言切换 -->
  <language-switching class="absolute top-2.5 right-24 z-20"/>
  <!-- 登录界面路由 -->
  <router-view v-slot="{ Component }">
    <transition mode="out-in"
                enter-from-class="opacity-0"
                leave-to-class="opacity-0"
                leave-active-class="transition-opacity duration-300"
                enter-active-class="transition-opacity duration-300">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>


<style scoped>

</style>
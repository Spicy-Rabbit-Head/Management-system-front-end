<script setup lang="ts">
import LoginPageSwitch from "@/views/login/LoginPageSwitch.vue";
import LanguageSwitching from "@/components/LanguageSwitching.vue";
</script>

<template>
  <!-- 注册登录界面风格切换 -->
  <login-page-switch class="tw-absolute tw-top-2 tw-right-2 tw-z-20"/>
  <!-- 语言切换 -->
  <language-switching class="tw-absolute tw-top-2.5 tw-right-24 tw-z-20"/>
  <!-- 登录界面路由 -->
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


<style scoped>

</style>
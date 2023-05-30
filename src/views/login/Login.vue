<template>
  <!-- 注册登录界面风格切换 -->
  <login-page-switch class="tw-absolute tw-top-2 tw-right-2 tw-z-20"/>
  <!-- 语言切换 -->
  <language-switching class="tw-absolute tw-top-2.5 tw-right-24 tw-z-20"/>
  <!-- 登录界面路由 -->
  <router-view v-slot="{ Component}">
    <transition mode="out-in"
                enter-from-class="tw-opacity-0"
                leave-to-class="tw-opacity-0"
                leave-active-class="tw-transition-opacity tw-duration-300"
                enter-active-class="tw-transition-opacity tw-duration-300">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import LoginPageSwitch from "@/components/LoginPageSwitch.vue";
import LanguageSwitching from "@/components/LanguageSwitching.vue";

// const route = useRoute()
// const router = useRouter()

// function advance(url: string): void {
//   LoginPinia().type = url != 'LoginBasic';
//   if (url == null) {
//     router.push({name: 'RootPath'})
//     return
//   }
//   router.push({name: url})
// }

// onMounted(() => {
// let item = window.localStorage.getItem('login');
// if (item) {
//   advance(item)
// } else {
//   window.localStorage.setItem('login', 'LoginBasic')
//   advance('LoginBasic')
// }
// });

// watch(() => route.path, () => {
//   if (route.name === 'Login') {
//     advance("RootPath")
//   }
// })

</script>

<style scoped>

</style>
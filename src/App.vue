<template>
  <!-- 全局加载 -->
  <full-screen-loading/>
  <div class="tw-w-screen tw-h-screen tw-bg-gray-200 tw-z-40 !tw-font-mono tw-font-semibold tw-tracking-wide">
    <!-- naive ui 全局通知 -->
    <n-notification-provider>
      <!-- naive ui 全局配置 -->
      <n-config-provider :theme-overrides="themeOverrides">
        <router-view/>
      </n-config-provider>
    </n-notification-provider>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {GlobalThemeOverrides, NConfigProvider} from "naive-ui";
import {GlobalStore} from "@/store";
import FullScreenLoading from "@/components/FullScreenLoading.vue";
import {onMounted, watch} from "vue";
import {useI18n} from "vue-i18n";
import {useUser} from "@/hooks/useUser";

// naive ui 全局配置
const themeOverrides: GlobalThemeOverrides = {
  common: {
    // fontSizeMedium: '0.875rem',
    fontSizeMedium: '0.875rem',
    fontSizeLarge: '1.25rem',
  },
}
const route = useRoute();
// const router = useRouter();
const globalStore = GlobalStore();
const {locale, t} = useI18n();
const {automaticLogin} = useUser();


// 查询是否登录
// get('loginRelated/isLogin', () => {
//   toggleButton(true)
// }, () => {
//   toggleButton(false)
// }, () => {
//   toggleButton(false)
// })

// 切换登录状态
// function toggleButton(i: boolean) {
//   let url = window.localStorage.getItem('login') || 'LoginBasic';
//   loginStore.type = url != 'LoginBasic';
//   if (i) {
//     loginStore.isAuthenticated = true;
//     router.replace({name: 'Sidebar'})
//   } else {
//     loginStore.isAuthenticated = false;
//     router.replace({name: url})
//   }
// }

// 读取本地存储的全局配置
onMounted(() => {
  automaticLogin()
  // 读取语言
  let language = window.localStorage.getItem('locale') || 'zhCN'
  if (language) {
    locale.value = language
  }
  // 读取菜单样式
  let menu = window.localStorage.getItem('menu') || 'false'
  if (menu == 'false') {
    window.localStorage.setItem('menu', 'false')
    globalStore.menuStatus = false
  } else {
    window.localStorage.setItem('menu', 'true')
    globalStore.menuStatus = true
  }
})
// 监听路由变化，修改标题
watch(() => route.meta, (meta) => {
  if (meta.title) {
    window.document.title = t(meta.title as string) || "设备保养管理系统";
  }
})
</script>


<style scoped>
</style>

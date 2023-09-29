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
import {isLogin} from "@/api/userRequest"

// naive ui 全局配置
const themeOverrides: GlobalThemeOverrides = {
  common: {
    // fontSizeMedium: '0.875rem',
    fontSizeMedium: '0.875rem',
    fontSizeLarge: '1.25rem',
  },
}
const route = useRoute();
const globalStore = GlobalStore();
const {locale, t} = useI18n();


// 读取本地存储的全局配置
onMounted(() => {
  isLogin()
  // 读取语言
  locale.value = localStorage.getItem('locale') || 'zhCN'
  // 读取菜单样式
  let menu = localStorage.getItem('menu') || 'false'
  if (menu == 'false') {
    localStorage.setItem('menu', 'false')
    globalStore.menuStatus = false
  } else {
    localStorage.setItem('menu', 'true')
    globalStore.menuStatus = true
  }
})
// 监听路由变化，修改标题
watch(() => route.meta, (meta) => {
  if (meta.title) window.document.title = t(meta.title as string) || "设备保养管理系统";
  else window.document.title = "设备保养管理系统";
})
</script>


<style scoped>
</style>

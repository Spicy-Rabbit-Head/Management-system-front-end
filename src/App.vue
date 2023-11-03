<script setup lang="ts">
import { useRoute } from "vue-router";
import FullScreenLoading from "@/components/FullScreenLoading.vue";
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { isLogin } from "@/api/userManagement.ts"
import { useMenu } from "@/hooks/useMenu.ts";

const route = useRoute();
const {
  menuStatus,
} = useMenu();
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
    menuStatus.value = false
  } else {
    localStorage.setItem('menu', 'true')
    menuStatus.value = true
  }
})
// 监听路由变化，修改标题
watch(() => route.meta, (meta) => {
  if (meta.title) window.document.title = t(meta.title as string) || "设备保养管理系统";
  else window.document.title = "设备保养管理系统";
})
</script>

<template>
  <!-- 全局加载 -->
  <full-screen-loading/>
  <div class="w-screen h-screen bg-gray-200 z-40 tracking-wide"
       font="!mono semibold"
  >
    <router-view/>
  </div>
</template>


<style scoped>
</style>

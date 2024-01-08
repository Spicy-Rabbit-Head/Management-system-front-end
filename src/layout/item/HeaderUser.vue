<script setup lang="ts">
import { Avatar as VexAvatar, Dropdown as VexDropdown } from "vexip-ui";
import { ref } from "vue";
import PasswordReset from "@/components/PasswordReset.vue";
import { logout } from "@/api/userManagement.ts"

// 密码重置抽屉
const modifyPassword = ref(false)
</script>

<template>
  <!-- 头部用户模块 -->
  <vex-dropdown custom placement="bottom-start" trigger="click">
    <!-- 头像 -->
    <vex-avatar class="cursor-pointer" :size="40" src="/vite.svg"/>
    <!-- 功能列表 -->
    <template #drop>
      <div class="bg-white rounded-md mr-2 mt-2" style="box-shadow: 0 0 10px rgb(0 0 0 / 0.25)">
        <div class="border-b-2 p-3">
          <p class="font-bold text-base">小白猫</p>
          <p>qq1192469846@gmail.com</p>
        </div>
        <!-- 个人中心跳转 -->
        <div class="layout-header-user-option">
          <div i-ep-avatar mr-2/>
          个人中心
        </div>
        <!-- 修改密码抽屉显示 -->
        <div class="layout-header-user-option" @click.stop="modifyPassword = true">
          <div i-ep-edit mr-2/>
          修改密码
        </div>
        <!-- 退出登录 -->
        <div class="layout-header-user-option" @click.stop="logout">
          <div i-icomoon-free-exit mr-2/>
          退出登录
        </div>
      </div>
    </template>
  </vex-dropdown>
  <!-- 密码重置抽屉 -->
  <n-drawer class="!w-1/3" v-model:show="modifyPassword" :mask-closable="false">
    <n-drawer-content title="密码重置" closable>
      <password-reset :exit-display="false"/>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped lang="postcss">
/* 选择项 */
.layout-header-user-option {
  @apply
  p-3
  cursor-pointer
  flex
  items-center
  justify-center
  hover:bg-gray-100
}

</style>

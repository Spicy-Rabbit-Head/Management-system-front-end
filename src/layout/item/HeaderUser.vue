<script setup lang="ts">
import {Avatar as VexAvatar, Dropdown as VexDropdown} from "vexip-ui";
import {ref} from "vue";
import PasswordReset from "@/components/PasswordReset.vue";
import IconEpAvatar from "~icons/ep/avatar";
import IconEpEdit from "~icons/ep/edit";
import IconIcomoonFreeExit from "~icons/icomoon-free/exit";
import {logout} from "@/api/userRequest.ts"

// 密码重置抽屉
const modifyPassword = ref(false)
</script>

<template>
  <!-- 头部用户模块 -->
  <vex-dropdown custom placement="bottom-start" trigger="click">
    <!-- 头像 -->
    <vex-avatar class="tw-cursor-pointer" :size="40" src="/vite.svg"/>
    <!-- 功能列表 -->
    <template #drop>
      <div class="tw-bg-white tw-shadow-surround tw-rounded-md tw-mr-2 tw-mt-2">
        <div class="tw-border-b-2 tw-p-3">
          <p class="tw-font-bold tw-text-base">小白猫</p>
          <p>qq1192469846@gmail.com</p>
        </div>
        <!-- 个人中心跳转 -->
        <div class="layout-header-user-option">
          <icon-ep-avatar class="tw-mr-2"/>
          个人中心
        </div>
        <!-- 修改密码抽屉显示 -->
        <div class="layout-header-user-option" @click.stop="modifyPassword = true">
          <icon-ep-edit class="tw-mr-2"/>
          修改密码
        </div>
        <!-- 退出登录 -->
        <div class="layout-header-user-option" @click.stop="logout">
          <icon-icomoon-free-exit class="tw-mr-2"/>
          退出登录
        </div>
      </div>
    </template>
  </vex-dropdown>
  <!-- 密码重置抽屉 -->
  <n-drawer class="!tw-w-1/3" v-model:show="modifyPassword" :mask-closable="false">
    <n-drawer-content title="密码重置" closable>
      <password-reset :exit-display="false"/>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
/* 选择项 */
.layout-header-user-option {
  @apply
  tw-p-3
  tw-cursor-pointer
  tw-flex
  tw-items-center
  tw-justify-center
  hover:tw-bg-gray-100
}

</style>
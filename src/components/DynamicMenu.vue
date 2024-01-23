<template>
  <!-- 动态菜单 -->
  <vex-menu :reduced="menuStatus" transfer marker-type="left" @select="select" :active="active">
    <!-- 分组 -->
    <vex-menu-group v-for="(item1) in menuOptions" :label="item1.groupName" :key="item1.groupName">
      <!-- 一级菜单 -->
      <vex-menu-item v-for="(item2) in item1.menus"
                     :label="item2.menuName" :meta="{ path:item2.path }" :key="item2.menuName">
        <template #icon>
          <component :is="item2.icon as string"/>
        </template>
        {{ item2.menuDesc }}
        <!-- 二级菜单(如果有) -->
        <template #group v-if="item2.children && item2.children.length > 0">
          <vex-menu-item v-for="(item3) in item2.children"
                         :label="item3.menuName" :meta="{ path:item3.path }" :key="item3.menuName">
            <template #icon>
              <component :is="item3.icon as string"/>
            </template>
            {{ item3.menuDesc }}
          </vex-menu-item>
        </template>
      </vex-menu-item>
    </vex-menu-group>
  </vex-menu>
</template>

<script setup lang="ts">
import { Menu as VexMenu, MenuGroup as VexMenuGroup, MenuItem as VexMenuItem } from "vexip-ui";
import { useMenu } from "@/hooks/useMenu.ts";
import { computed } from 'vue'

const {
  menuStatus,
  menuOptions,
  select,
} = useMenu();

const active = computed(() => {
  return localStorage.getItem('router') ?? 'Home'
})

</script>

<style scoped>

</style>

<template>
  <!-- 动态菜单 -->
  <vex-menu :reduced="menuStatus" transfer marker-type="left">
    <!-- 分组 -->
    <vex-menu-group v-for="(item1) in options" :label="item1.label" :key="item1.label">
      <!-- 一级菜单 -->
      <vex-menu-item v-for="(item2) in item1.children"
                     :label="item2.label" :meta="{ path:item2.path }" :key="item2.name">
        <template #icon>
          <component :is="item2.icon as string"/>
        </template>
        {{ item2.name }}
        <!-- 二级菜单(如果有) -->
        <template #group v-if="item2.children && item2.children.length > 0">
          <vex-menu-item v-for="(item3) in item2.children"
                         :label="item3.label" :meta="{ path:item3.path }" :key="item3.name">
            <template #icon>
              <component :is="item3.icon as string"/>
            </template>
            {{ item3.name }}
          </vex-menu-item>
        </template>
      </vex-menu-item>
    </vex-menu-group>
  </vex-menu>
</template>

<script setup lang="ts">
import {Menu as VexMenu, MenuGroup as VexMenuGroup, MenuItem as VexMenuItem} from "vexip-ui";
import {DynamicMenuInterface} from "@/types/types.ts";
import {useMenu} from "@/hooks/useMenu.ts";

const {
  menuStatus,
} = useMenu();

const options: DynamicMenuInterface[] = [
  {
    label: '分组 0',
    children: [
      {
        label: '0-1',
        path: '/h1',
        icon: 'ZChartRadial',
        name: '主页',
      },
      {
        label: '0-2',
        path: '/h2',
        icon: 'ZChartWinLoss',
        name: '辅助页',
      }
    ]
  },
  {
    label: '分组 1',
    children: [
      {
        label: '1',
        icon: 'ZChartRing',
        name: '菜单 1',
        children: [
          {
            label: '1-1',
            path: '/h3',
            icon: 'ZChartRing',
            name: '子菜单 1'
          },
          {
            label: '1-2',
            path: '/h4',
            icon: 'ZChartRing',
            name: '子菜单 2'
          },
          {
            label: '1-3',
            path: '/h5',
            icon: 'ZChartRing',
            name: '子菜单 3'
          }
        ]
      },
    ]
  }
]
</script>

<style scoped>

</style>
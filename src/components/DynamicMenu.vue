<template>
  <!-- 动态菜单 -->
  <vex-menu :reduced="globalStore.menuStatus" @select="routeTrigger" accordion transfer marker-type="left">
    <!-- 分组 -->
    <vex-menu-group v-for="(item1) in options" :label="item1.label" :key="item1.label">
      <!-- 一级菜单 -->
      <vex-menu-item v-for="(item2) in item1.children"
                     :label="item2.label" :key="item2.name">
        <template #icon>
          <component :is="item2.icon"/>
        </template>
        {{ item2.name }}
        <!-- 二级菜单(如果有) -->
        <template #group v-if="item2.children && item2.children.length > 0">
          <vex-menu-item v-for="(item3) in item2.children"
                         :label="item3.label" :key="item3.name">
            <template #icon>
              <component :is="item3.icon"/>
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
import {GlobalStore} from "@/store";
import {DynamicMenuInterface} from "@/type/interface";
import {options} from "axios";
import {useTagsNav} from "@/hooks/useTagsNav";

const globalStore = GlobalStore();
const {routeTrigger} = useTagsNav();

const options: DynamicMenuInterface[] = [
  {
    label: '分组 0',
    children: [
      {
        label: '0-1',
        icon: 'ChartRadial',
        name: '主页',
      },
      {
        label: '0-2',
        icon: 'ChartWinLoss',
        name: '辅助页',
      }
    ]
  },
  {
    label: '分组 1',
    children: [
      {
        label: '1',
        icon: 'ChartRing',
        name: '菜单 1',
        children: [
          {
            label: '1-1',
            icon: 'ChartRing',
            name: '子菜单 1'
          },
          {
            label: '1-2',
            icon: 'ChartRing',
            name: '子菜单 2'
          },
          {
            label: '1-3',
            icon: 'ChartRing',
            name: '子菜单 3'
          }
        ]
      },
      {
        label: '2',
        icon: 'ChatBot',
        name: '菜单 2',
        children: [
          {
            label: '2-1',
            icon: 'ChartRing',
            name: '子菜单 1'
          },
          {
            label: '2-2',
            icon: 'ChartRing',
            name: '子菜单 2'
          },
          {
            label: '2-3',
            icon: 'ChartRing',
            name: '子菜单 3'
          },
          {
            label: '2-4',
            icon: 'ChartRing',
            name: '子菜单 4'
          },
          {
            label: '2-5',
            icon: 'ChartRing',
            name: '子菜单 5'
          },
          {
            label: '2-6',
            icon: 'ChartRing',
            name: '子菜单 6'
          },
          {
            label: '2-7',
            icon: 'ChartRing',
            name: '子菜单 7'
          },
          {
            label: '2-8',
            icon: 'ChartRing',
            name: '子菜单 8'
          },
          {
            label: '2-9',
            icon: 'ChartRing',
            name: '子菜单 9'
          },
        ]
      },
      {
        label: '3',
        icon: 'ChartRelationship',
        name: '菜单 3',
        children: [
          {
            label: '3-1',
            icon: 'ChartRing',
            name: '子菜单 1'
          },
          {
            label: '3-2',
            icon: 'ChartRing',
            name: '子菜单 2'
          },
        ]
      }
    ]
  },
  {
    label: '分组 2',
    children: [
      {
        label: '4',
        icon: 'ChartRadial',
        name: '菜单 4',
        children: [
          {
            label: '4-1',
            icon: 'ChartRing',
            name: '子菜单 1'
          },
          {
            label: '4-2',
            icon: 'ChartRing',
            name: '子菜单 2'
          }
        ],
      },
      {
        label: '5',
        icon: 'ChartWinLoss',
        name: '菜单 5',
        children: [
          {
            label: '3-1',
            icon: 'ChartRing',
            name: '子菜单 1'
          },
          {
            label: '3-2',
            icon: 'ChartRing',
            name: '子菜单 2'
          },
        ]
      }
    ]
  }
]
</script>

<style scoped>

</style>
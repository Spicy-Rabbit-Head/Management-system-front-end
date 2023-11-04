<script setup lang="ts">
import { Calendar as VCalendar } from 'v-calendar';
import 'v-calendar/style.css';
import { reactive, ref } from "vue";
import { AttributeConfig } from "v-calendar/dist/types/src/utils/attribute";
import { TodoList } from "@/types/shared.ts";

// 当前待办事项
const todos = reactive<Array<TodoList>>([
  {
    key: 'item1',
    backgroundColor: 'Red',
    icon: 'i-icomoon-free-display',
    title: 'Item 1',
    dates: new Date(2023, 9, 30, 10, 30),
  },
  {
    key: 'item2',
    backgroundColor: '#00ff00',
    icon: 'i-icomoon-free-bubble',
    title: 'Item 2',
    dates: new Date(2023, 10, 1, 9, 0),
  },
  {
    key: 'item3',
    backgroundColor: '#0bdff3',
    icon: 'i-icomoon-free-bubble',
    title: 'Item 3',
    dates: new Date(2023, 10, 2, 15, 0),
  },
]);


// 日历实例
const calendar = ref();

// 日历属性
const property = reactive<Array<AttributeConfig>>([
  {
    key: 'today',
    highlight: {
      color: 'purple',
      fillMode: 'outline',
    },
    dates: new Date(),
  },
  {
    key: 'item1',
    dot: {
      style: {
        backgroundColor: 'Red',
      },
    },
    dates: new Date(2023, 9, 30),
  },
  {
    key: 'item2',
    dot: {
      style: {
        backgroundColor: '#00ff00',
      },
    },
    dates: new Date(2023, 10, 1),
  },
  {
    key: 'item3',
    dot: {
      style: {
        backgroundColor: '#0bdff3',
      },
    },
    dates: new Date(2023, 10, 2),
  },
]);

function moveToday() {
  calendar.value?.move(new Date());
}
</script>

<template>
  <v-calendar borderless show-weeknumbers expanded title-position="left" view="weekly" ref="calendar"
              :attributes='property' class="flex-none">
    <template #footer>
      <div class="px-4 py-2">
        <button
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-full rounded-md p-2"
            @click.stop="moveToday">
          回到今天
        </button>
      </div>
    </template>
  </v-calendar>
  <div class="mt-2 px-2 ">
    <span class="text-2xl">提醒</span>
    <div i-ant-design-bell-twotone text-3xl text-indigo float-right></div>
  </div>
  <ul class="my-3 px-6 grid gap-2 overflow-y-auto">
    <li v-for="(item,index) in todos" :key="index" class="flex justify-between">
      <div p-3 rounded-2 :style="{background: item.backgroundColor}">
        <div :class="item.icon" text-white text-3xl></div>
      </div>
      <div flex flex-col justify-center flex-auto px-8>
        <div class="text-lg">{{ item.title }}</div>
        <div class="text-sm">{{ item.dates.toLocaleString() }}</div>
      </div>
      <div flex justify-center items-center>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-full rounded-md p-2">完成</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>
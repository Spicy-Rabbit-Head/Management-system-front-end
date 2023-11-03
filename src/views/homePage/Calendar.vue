<script setup lang="ts">
import { Calendar as VCalendar } from 'v-calendar';
import 'v-calendar/style.css';
import { reactive, ref } from "vue";
import { Attribute } from "v-calendar/dist/types/src/utils/attribute";

// 日历实例
const calendar = ref(null);

// 日历属性
const property = reactive<Array<Attribute>>([
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
]);

function moveToday() {
  calendar.value?.move(new Date());
}
</script>

<template>
  <v-calendar borderless show-weeknumbers expanded view="weekly" ref="calendar" :attributes='property'>
    <template #footer>
      <div class="w-full px-4 pb-3">
        <button
            class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold w-full px-3 py-1 rounded-md"
            @click="moveToday">
          回到今天
        </button>
      </div>
    </template>
  </v-calendar>
</template>

<style scoped>

</style>
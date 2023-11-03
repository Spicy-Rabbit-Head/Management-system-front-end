<script setup lang="ts">

import NoticeBoard from "@/views/homePage/NoticeBoard.vue";
import MaintenanceStatusDisplay from "@/views/homePage/MaintenanceStatusDisplay.vue";
import ModuleMaintenanceDisplay from "@/views/homePage/ModuleMaintenanceDisplay.vue";
import ImprovementItemDisplay from "@/views/homePage/ImprovementItemDisplay.vue";
import Calendar from "@/views/homePage/Calendar.vue";
</script>

<template>
  <div class="grid p-4 grid-cols-6 grid-rows-6 gap-4">
    <div class="col-span-2 row-span-3 bg-white rounded-4 flex flex-col  shadow-md">
      <!-- 通知公告 -->
      <notice-board/>
    </div>
    <div class="col-span-4 row-span-2 bg-white rounded-4 shadow-md">
      <!-- 例行保养排程 -->
      <maintenance-status-display/>
    </div>
    <div class="col-span-2 row-span-2 bg-white rounded-4 shadow-md">
      <!-- 例行模组保养 -->
      <module-maintenance-display/>
    </div>
    <div class="col-span-2 row-span-3 bg-white">
      <!-- 改善事项 -->
      <improvement-item-display/>
    </div>
    <div class="col-span-2 row-span-3 bg-white">
      <!-- 行事历 -->
      <calendar/>
    </div>
    <div class="bg-white">5</div>
    <div class="bg-white">6</div>
    <div class="bg-white">7</div>
    <div class="bg-white">8</div>
    <div class="bg-white">9</div>
    <div class="bg-white">10</div>
    <div class="bg-white">11</div>
    <div class="bg-white">12</div>
    <div class="bg-white">13</div>
    <div class="bg-white">14</div>
  </div>
</template>

<style scoped>

</style>
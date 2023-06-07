<template>
  <div class="tw-h-10 tw-border-b flex-base">
    <div class="tabs-item" v-for="(item,index) in tabs" :key="item.title">
      <component v-if="index !=1" :is="item['icon']" class="tw-w-1/2 tw-h-1/2"/>

    </div>
  </div>
</template>

<script setup lang="ts">
import {markRaw} from "vue";
import IconEpArrowLeftBold from "~icons/ep/arrow-left-bold"
import IconEpArrowRightBold from "~icons/ep/arrow-right-bold"
import IconEpArrowDownBold from "~icons/ep/arrow-down-bold"
// tw-overflow-x-auto tw-whitespace-nowrap
const tabs = markRaw([
  {
    title: '上一个',
    icon: IconEpArrowLeftBold
  },
  {
    title: '标签',
    tab: []
  },
  {
    title: '下一个',
    icon: IconEpArrowRightBold
  },
  {
    title: '下拉菜单',
    icon: IconEpArrowDownBold
  },
])
</script>

<style scoped>
.tabs-item {
  @apply
  tw-h-full
  tw-w-10
  tw-box-border
  tw-grow
  tw-border-l
  first:tw-border-0
  odd:tw-flex-none
  last:tw-flex-none
  tw-basis-1/4
  tw-flex
  tw-items-center
  tw-justify-center
}
</style>
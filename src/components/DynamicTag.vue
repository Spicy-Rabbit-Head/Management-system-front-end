<template>
  <div class="tabs-item" @mouseenter="showDeleteIcon(0)" @mouseleave="hideDeleteIcon">
    <slot/>
    <div i-ep-close class="hover:text-red-400  ml-2" v-if="deleteIndex === 0"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const deleteIndex = ref(-1);

// 显示删除图标
function showDeleteIcon(id: number) {
  deleteIndex.value = id;
}

// 隐藏删除图标
function hideDeleteIcon() {
  deleteIndex.value = -1;
}

</script>

<style scoped>
/* 选项 */
.tabs-item {
  @apply
  tw-mx-1
  tw-border
  tw-p-1
  tw-rounded-md
  tw-flex
  tw-items-center
  tw-justify-start
  tw-transition-all
  tw-duration-1250
  tw-w-10
  hover:tw-w-24
  hover:tw-cursor-pointer
}

</style>

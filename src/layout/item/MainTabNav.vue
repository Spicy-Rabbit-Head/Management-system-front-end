<template>
  <div class="tw-h-10 tw-border-b flex-base">
    <div class="tabs flex-base tw-select-none" v-for="(item1,index1) in tabs" :key="item1.title">
      <component v-if="index1 !=1" :is="item1.icon" @click.stop="tabsTrigger(index1)" class="tw-w-1/2 tw-h-1/2"/>
      <div v-else class="tw-h-8 tw-w-full  tw-overflow-hidden">
        <div ref="tabsWrapper" class="tw-h-10 tw-flex tw-items-start tw-overflow-x-auto tw-scroll-smooth tw-whitespace-nowrap">
          <div v-for="item2 in item1.tab" :key="item2.id" class="tabs-item">
            {{ item2.label }}
            <icon-ep-close v-if="item2.id" class="hover:tw-text-red-400 tw-ml-2"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {markRaw, ref} from "vue";
import IconEpArrowLeftBold from "~icons/ep/arrow-left-bold"
import IconEpArrowRightBold from "~icons/ep/arrow-right-bold"
import IconEpArrowDownBold from "~icons/ep/arrow-down-bold"
import IconEpClose from "~icons/ep/close"
import {TabNavInterface} from "@/type/interface";

const tabsWrapper = ref<HTMLDivElement [] | null>([])
const deleteIndex = ref(-1);

// 选项卡触发
function tabsTrigger(i: number) {
  if (tabsWrapper.value) {
    switch (i) {
      case 0 :
        tabsWrapper.value[0].scrollLeft -= 100;
        break;
      case 2 :
        tabsWrapper.value[0].scrollLeft += 100
        break;
      case 3 :
        console.log('下拉菜单');
    }
  }
}

// 选项卡数据
const tabs = markRaw<TabNavInterface[]>([
  {
    title: '上一个',
    icon: IconEpArrowLeftBold
  },
  {
    title: '标签',
    tab: [
      {
        id: 0,
        label: '首页',
      },
      {
        id: 1,
        label: '标签1',
      },
      {
        id: 2,
        label: '标签2',
      },
      {
        id: 3,
        label: '标签3',
      },
      {
        id: 4,
        label: '标签4',
      },
      {
        id: 5,
        label: '标签5',
      }
    ]
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
/* 选项卡 */
.tabs {
  @apply
  tw-h-full
  tw-w-10
  tw-box-border
  tw-grow
  tw-border-l
  first:tw-border-0
  odd:tw-flex-none
  last:tw-flex-none
  odd:hover:tw-cursor-pointer
  last:hover:tw-cursor-pointer
}

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
  hover:tw-cursor-pointer
}


.tab-enter-active,
.tab-leave-active {
  transition: all 2s ease;
}

.tab-enter-from,
.tab-leave-to {
  opacity: 0;
}
</style>
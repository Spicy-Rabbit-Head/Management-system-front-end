<template>
  <div class="tw-h-10 tw-border-b flex-base">
    <div class="tabs flex-base tw-select-none" v-for="(item1,index1) in tabs" :key="item1.title">
      <component v-if="index1 !=1" :is="item1.icon" @click.stop="tabsTrigger(index1)" class="tw-w-1/2 tw-h-1/2"/>
      <div v-else class="tw-h-8 tw-w-full  tw-overflow-hidden">
        <div ref="tabsWrapper" class="tw-h-10 tw-flex tw-items-start tw-overflow-x-auto tw-scroll-smooth tw-whitespace-nowrap">
          <transition-group name="list">
            <div v-for="(item2,index2) in tagsNav.tabsData" :class="item2.state" :key="item2.id" class="tabs-item">
              {{ item2.label }}
              <icon-ep-close v-if="item2.id" @click.stop="tagsNav.deleteTag(index2)" class="hover:tw-text-red-400 tw-ml-2"/>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {markRaw, nextTick, reactive, ref} from "vue";
import IconEpArrowLeftBold from "~icons/ep/arrow-left-bold"
import IconEpArrowRightBold from "~icons/ep/arrow-right-bold"
import IconEpArrowDownBold from "~icons/ep/arrow-down-bold"
import IconEpClose from "~icons/ep/close"
import {TabNavInterface} from "@/type/interface";
import {useTagsNav} from "@/utils/useTagsNav";

const tagsWrapper = ref<HTMLDivElement [] | null>([])

// 获取视图更新后dom
await nextTick();
const tagsNav = useTagsNav()
nextTick(() => {
  if (tagsWrapper.value) {
    tagsNav.wrapper.value = tagsWrapper.value[0]
  }
})

// 选项卡触发
function tabsTrigger(i: number) {
  if (tagsWrapper.value) {
    switch (i) {
      case 0 :
        tagsWrapper.value[0].scrollLeft -= 100;
        break;
      case 2 :
        tagsWrapper.value[0].scrollLeft += 100
        break;
      case 3 :
        console.log('下拉菜单');
    }
  }
}

// 选项卡数据
const tabs = reactive<TabNavInterface[]>([
  {
    title: '上一个',
    icon: markRaw(IconEpArrowLeftBold)
  },
  {
    title: '标签'
  },
  {
    title: '下一个',
    icon: markRaw(IconEpArrowRightBold)
  },
  {
    title: '下拉菜单',
    icon: markRaw(IconEpArrowDownBold)
  },
])
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

.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
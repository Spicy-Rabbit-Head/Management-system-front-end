<template>
  <!-- 标签导航容器 -->
  <div class="tw-h-10 tw-border-b flex-base tw-box-border">
    <!-- 循环方向动作及菜单 -->
    <div class="tabs tw-select-none" v-for="(item1,index1) in tabs" :key="item1.title">
      <span v-if="index1 !=1" class="tw-h-full tw-flex-1 flex-base">
        <component :is="item1.icon" @click.stop="functionTrigger(index1)" class="tw-w-1/2 tw-h-1/2"/>
      </span>
      <!-- 标签父容器 -->
      <div ref="tagsWrapper" v-else class="tw-overflow-hidden tw-relative tw-flex-1">
        <!-- 滑动容器 -->
        <div ref="tagWrapper" :style="getTabStyle"
             class="tw-transition-transform tw-duration-500 tw-relative tw-float-left tw-whitespace-nowrap">
          <transition-group name="list">
            <!-- 标签 -->
            <div v-for="(item2,index2) in tagsData" :class="item2.state" :key="index2" class="tabs-item">
              <div class="tw-flex tw-items-center">
                {{ item2.label }}
                <icon-ep-close v-if="index2 != 0" @click.stop="deleteTag(index2)"
                               class="hover:tw-text-red-400 tw-ml-2"/>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { markRaw, nextTick, reactive, watch } from "vue";
import IconEpArrowLeftBold from "~icons/ep/arrow-left-bold"
import IconEpArrowRightBold from "~icons/ep/arrow-right-bold"
import IconEpArrowDownBold from "~icons/ep/arrow-down-bold"
import IconEpClose from "~icons/ep/close"
import { TabNavInterface } from "@/types/shared.ts";
import { useTagsNav } from "@/hooks/useTagsNav";
// 闭包方法
const {
  tagsData,
  getTabStyle,
  tagsWrapper,
  tagWrapper,
  deleteTag,
  tagsScroll,
  functionTrigger
} = useTagsNav()

// 触发滑动
watch(() => tagsData.length, () => {
  console.log(tagsData.length)
  nextTick(() => {
    tagsScroll(-200)
  })
})

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

<style scoped lang="postcss">
/* 选项卡 */
.tabs {
  @apply
  tw-h-10
  tw-w-10
  tw-py-1
  tw-flex-1
  tw-flex
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
  tw-h-8
  tw-inline-block
  tw-border
  tw-p-1
  tw-rounded-md
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
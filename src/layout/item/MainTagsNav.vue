<template>
  <div class="tw-h-10 tw-border-b flex-base tw-box-border">
    <div class="tabs flex-base tw-select-none" v-for="(item1,index1) in tabs" :key="item1.title">
      <component v-if="index1 !=1" :is="item1.icon" @click.stop="functionTrigger(index1)" class="tw-w-1/2 tw-h-1/2"/>
      <div ref="tagsDom" v-else :style="getTabStyle" class="tw-w-full tw-overflow-hidden tw-transition-transform tw-duration-500">
        <div ref="tagDom" class="tw-flex tw-items-start tw-whitespace-nowrap">
          <transition-group name="list">
            <div v-for="(item2,index2) in tagsData" :class="item2.state" :key="index2" class="tabs-item">
              {{ item2.label }}
              <icon-ep-close v-if="index2 != 0" @click.stop="deleteTag(index2)" class="hover:tw-text-red-400 tw-ml-2"/>
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
import {useTagsNav} from "@/hooks/useTagsNav";

const tagsDom = ref<HTMLDivElement [] | null>(null)
const tagDom = ref<HTMLDivElement [] | null>(null)

const {
  tagsData,
  getTabStyle,
  tagsWrapper,
  tagWrapper,
  deleteTag,
  functionTrigger
} = useTagsNav()
// 获取滑动框DOM
nextTick(() => {
  if (tagsDom.value && tagDom.value) {
    tagsWrapper.value = tagsDom.value[0]
    tagWrapper.value = tagDom.value[0]
  }
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

<style scoped>
/* 选项卡 */
.tabs {
  @apply
  tw-h-10
  tw-w-10
  tw-relative
  tw-py-1
  tw-flex-1
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
  transform: translateY(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
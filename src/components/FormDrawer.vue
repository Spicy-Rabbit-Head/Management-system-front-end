<template>
  <!-- 全局表单抽屉 -->
  <n-drawer class="!tw-w-[v-bind(width)]" v-model:show="drawerShow" :mask-closable="false">
    <n-drawer-content :title="drawerTitle" closable :native-scrollbar="false">
      <slot/>
      <template #footer>
        <n-button @click="submit">提交</n-button>
        <n-button>取消</n-button>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import {ref} from "vue";

defineProps({
  // 抽屉标题
  drawerTitle: String,
  // 抽屉宽度
  drawerWidth: {
    type: String,
    default: '1/3'
  }
})
// 抽屉宽度
// const width = ref(props.drawerWidth)
// 抽屉显示状态
const drawerShow = ref(false)

// 打开抽屉
function openDrawer() {
  drawerShow.value = true
}

// 关闭抽屉
function closeDrawer() {
  drawerShow.value = false
}

// 提交
function submit() {
  emit('submit')
}

// 暴露事件submit
const emit = defineEmits(['submit'])
// 暴露方法
defineExpose({
  openDrawer,
  closeDrawer
})

</script>

<style scoped>

</style>
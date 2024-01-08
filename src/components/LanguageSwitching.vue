<script setup lang="ts">
import {useI18n} from "vue-i18n";
// 语言选项
const options = [
  {
    label: '简体中文',
    key: 'zhCN',
  },
  {
    label: '繁體中文',
    key: 'zhTW',
  },
  {
    label: 'English',
    key: 'enUS',
  },
]

const {locale} = useI18n()

// 语言切换
function handleSelect(key: string | number) {
  locale.value = key as string
  window.localStorage.setItem('locale', key as string)
}
</script>

<template>
  <div class="w-8 h-8 cursor-pointer">
    <!-- 语言选择下拉框 -->
    <n-dropdown
        text="center"
        trigger="hover"
        :options="options"
        :show-arrow="true"
        @select="handleSelect">
      <div i-ant-design-translation-outlined class="w-full h-full text-gray-600"/>
    </n-dropdown>
  </div>
</template>

<style scoped>

</style>

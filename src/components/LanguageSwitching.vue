<script setup lang="ts">
import {useI18n} from "vue-i18n";
import IconAntDesignTranslationOutlined from "~icons/ant-design/translation-outlined";
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
  <div class="tw-w-8 tw-h-8 tw-cursor-pointer">
    <!-- 语言选择下拉框 -->
    <n-dropdown
        class="tw-text-center"
        trigger="hover"
        :options="options"
        :show-arrow="true"
        @select="handleSelect">
      <icon-ant-design-translation-outlined class="tw-w-full tw-h-full tw-text-gray-600 click:tw-border-transparent"/>
    </n-dropdown>
  </div>
</template>

<style scoped>

</style>
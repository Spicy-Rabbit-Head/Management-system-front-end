<template>
  <div class="tw-w-9 tw-h-9">
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

<script setup lang="ts">
import {useI18n} from "vue-i18n";
import IconAntDesignTranslationOutlined from "~icons/ant-design/translation-outlined";

const options = [
  {
    label: '简体中文',
    key: 'CN',
  },
  {
    label: '繁體中文',
    key: 'TC',
  },
  {
    label: 'English',
    key: 'EN',
  },
]

const {locale} = useI18n()

function handleSelect(key: string | number) {
  locale.value = key as string
  window.localStorage.setItem('locale', key as string)
}


</script>

<style scoped>

</style>
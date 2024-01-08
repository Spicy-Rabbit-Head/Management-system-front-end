<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('1.N1201治具更换完成,抽真空中,膜厚附着力交接给中班.\n' +
    '2.清洗治具整理,白班完成了金的部分,铬的部分交给中班完成.\n' +
    '3.N3197靶材剩余厚的测量完成3次并更新到表单中')
</script>

<template>
  <div class="border-b-2 border-gray-3 px-4 h-1/3 text-sm font-bold flex items-center">
    <span text-xl>交接事项</span>
    <span ml-4>上次更新时间 : </span>
    <span ml-1>{{ new Date().toLocaleString() }}</span>
    <el-button type="success" ml-22>更新</el-button>
  </div>
  <el-input
      class="!text-base"
      v-model="textarea"
      :rows="4"
      type="textarea"
  />
</template>

<style scoped>

</style>
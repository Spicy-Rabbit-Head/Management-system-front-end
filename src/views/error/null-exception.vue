<template>
  <div class="tw-h-screen tw-grid tw-place-items-center">
      <el-result
              icon="error"
              title="访问异常"
              sub-title="无访问权限或无指定路径界面"
              class="tw-scale-100 sm:tw-scale-225"
      >
          <template #extra>
              <div>{{ CustomizeError().countdown_time }} 秒后自动跳转至登录界面</div>
          </template>
      </el-result>
  </div>
</template>

<script setup lang="ts">
import {CustomizeError} from "../../store"
import {onMounted} from "vue";

onMounted(() => {
  CustomizeError().countdown_run()
})

</script>

<style scoped>
</style>
<template>
  <div class="w-full h-screen login">
    <el-result
        icon="error"
        title="访问异常"
        sub-title="无访问权限或无指定路径界面"
        class="error"
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
/* 错误容器 */
.error {
  width: 400px;
  min-width: 400px;
  min-height: 400px;
  height: 400px;
  @apply
  scale-225
}
</style>
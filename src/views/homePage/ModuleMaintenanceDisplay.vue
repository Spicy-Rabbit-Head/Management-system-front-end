<script setup lang="ts">
import { ModuleInformation } from "@/types/moduleManagement.ts";
import { ScheduleTime } from "@/enum/maintenanceManagement.ts";

const moduleInformation: Array<ModuleInformation> = [
  {
    moduleName: 'IG 模组',
    moduleNumber: 'CT-0080',
    maintenanceQuantity: 1,
    moduleType: 'B03',
    maintenancePersonnel: '赵子奎',
    scheduleTime: ScheduleTime.afternoon,
  }
]

</script>

<template>
  <div class="border-b-2 text-xl border-gray-3 px-4 h-1/8 text-sm font-bold flex items-center">例行模组保养排程</div>
  <div class="h-7/8 py-5 overflow-y-auto grid">
    <div class="px-3 overflow-y-auto grid gap-4">
      <el-descriptions
          direction="vertical"
          :column="3"
          border
          v-for="(module,index) in moduleInformation"
          :key="index"
      >
        <el-descriptions-item label="模组名称" align="center">{{ module.moduleName }}</el-descriptions-item>
        <el-descriptions-item label="模组编号" align="center">{{ module.moduleNumber }}</el-descriptions-item>
        <el-descriptions-item label="保养数量(PCS)" align="center">
          {{ module.maintenanceQuantity }}
        </el-descriptions-item>
        <el-descriptions-item label="模组型号" align="center">{{ module.moduleType }}</el-descriptions-item>
        <el-descriptions-item label="保养人员" align="center">{{ module.maintenancePersonnel }}</el-descriptions-item>
        <el-descriptions-item label="排定保养时间" align="center">{{ module.scheduleTime }}</el-descriptions-item>
        <el-descriptions-item label="操作" align="center">
          <el-button type="success">进入详情页</el-button>
          <el-button type="primary">进入完成流程</el-button>
          <el-button type="danger">进入异常流程</el-button>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import { maintenanceStatusFormField } from "@/config/tableConfig.ts"
import { MaintenanceStatusTableData } from "@/types/maintenanceManagement.ts";
import {
  MaintenanceExecutionContent,
  MaintenanceInspectionContent,
  MaintenanceReserveContent,
  MaintenanceReviewContent,
  TagType
} from "@/enum/maintenanceManagement.ts";

const tableData: Array<MaintenanceStatusTableData> = []
for (let i = 0; i < 9; i++) {
  tableData.push(
      {
        id: 1,
        equipmentNumber: `N111${i}`,
        equipmentName: '设备A',
        maintenanceCycle: '月',
        directorsAndMembers: '张三 李四',
        maintenanceReserve: {
          content: MaintenanceReserveContent.prepared,
          status: TagType.success,
        },
        maintenanceExecution: {
          content: MaintenanceExecutionContent.executionCompleted,
          status: TagType.warning,
        },
        maintenanceInspection: {
          content: MaintenanceInspectionContent.confirmed,
          status: TagType.success,
        },
        maintenanceReview: {
          content: MaintenanceReviewContent.pendingDiscussion,
          status: TagType.warning,
        },
      },
  )
}

</script>

<template>
  <div class="border-b-2 border-gray-3 px-4 h-1/8 text-sm font-bold flex items-center">例行保养排程状态</div>
  <el-table :data="tableData" class="!h-7/8 rounded-4">
    <el-table-column v-for="(item,index) in maintenanceStatusFormField[0]" :key="index"
                     align="center" :prop="item.field" :label="item.label"/>
    <el-table-column v-for="(item,index) in maintenanceStatusFormField[1]" :key="index"
                     align="center" :prop="item.field" :label="item.label">
      <template #default="scope">
        <el-tag
            class="cursor-pointer"
            @click.stop="console.log(item.field)"
            :type="scope.row[item.field].status"
            disable-transitions
        >{{ scope.row[item.field].content }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>
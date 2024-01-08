<script setup lang="ts">
import { maintenanceStatusFormField } from "@/config/tableConfig.ts"
import { MaintenanceStatusTableData } from "@/types/maintenanceManagement.ts";
import {
  ExecutionState,
  SpotInspectionState,
  PrepareState,
  ReviewState,
  TagType
} from "@/enum/maintenanceManagement.ts";

const tableData: Array<MaintenanceStatusTableData> = [
  {
    id: 1,
    equipmentNumber: 'N2611',
    equipmentName: '自动微调机',
    maintenanceCycle: '月',
    directorsAndMembers: '赵子奎 王璇 王立虎',
    maintenanceReserve: {
      content: PrepareState.prepared,
      status: TagType.success,
    },
    maintenanceExecution: {
      content: ExecutionState.executionCompleted,
      status: TagType.warning,
    },
    maintenanceInspection: {
      content: SpotInspectionState.inspectionCompleted,
      status: TagType.warning,
    },
    maintenanceReview: {
      content: ReviewState.pendingDiscussion,
      status: TagType.info,
    },
  },
  {
    id: 2,
    equipmentNumber: 'N2554',
    equipmentName: '溅镀机',
    maintenanceCycle: '月',
    directorsAndMembers: '赵子奎 王璇 王立虎',
    maintenanceReserve: {
      content: PrepareState.prepared,
      status: TagType.success,
    },
    maintenanceExecution: {
      content: ExecutionState.executionCompleted,
      status: TagType.warning,
    },
    maintenanceInspection: {
      content: SpotInspectionState.inspectionCompleted,
      status: TagType.warning,
    },
    maintenanceReview: {
      content: ReviewState.pendingDiscussion,
      status: TagType.info,
    },
  },
  {
    id: 3,
    equipmentNumber: 'N2138',
    equipmentName: 'SEAM',
    maintenanceCycle: '月',
    directorsAndMembers: '赵子奎 王璇 王立虎',
    maintenanceReserve: {
      content: PrepareState.prepared,
      status: TagType.success,
    },
    maintenanceExecution: {
      content: ExecutionState.executed,
      status: TagType.success,
    },
    maintenanceInspection: {
      content: SpotInspectionState.confirmed,
      status: TagType.success,
    },
    maintenanceReview: {
      content: ReviewState.pendingDiscussion,
      status: TagType.info,
    },
  },
  {
    id: 4,
    equipmentNumber: 'N0344',
    equipmentName: '溅镀机',
    maintenanceCycle: '月',
    directorsAndMembers: '赵子奎 王璇 王立虎',
    maintenanceReserve: {
      content: PrepareState.prepared,
      status: TagType.success,
    },
    maintenanceExecution: {
      content: ExecutionState.pendingExecution,
      status: TagType.info,
    },
    maintenanceInspection: {
      content: SpotInspectionState.pendingInspection,
      status: TagType.info,
    },
    maintenanceReview: {
      content: ReviewState.pendingDiscussion,
      status: TagType.info,
    },
  },
  {
    id: 5,
    equipmentNumber: 'N2016',
    equipmentName: '排片机',
    maintenanceCycle: '月',
    directorsAndMembers: '赵子奎 王璇 王立虎',
    maintenanceReserve: {
      content: PrepareState.prepared,
      status: TagType.success,
    },
    maintenanceExecution: {
      content: ExecutionState.executing,
      status: TagType.warning,
    },
    maintenanceInspection: {
      content: SpotInspectionState.pendingInspection,
      status: TagType.info,
    },
    maintenanceReview: {
      content: ReviewState.pendingDiscussion,
      status: TagType.info,
    },
  },
]

</script>

<template>
  <div class="border-b-2 text-xl border-gray-3 px-4 h-1/8 text-sm font-bold flex items-center">例行保养排程状态</div>
  <el-table :data="tableData" class="!h-7/8 rounded-4" stripe table-layout="auto">
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
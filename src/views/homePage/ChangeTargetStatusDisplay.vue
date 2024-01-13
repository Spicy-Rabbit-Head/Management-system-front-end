<script setup lang="ts">

import { changeTargetStatusFormField } from "@/config/tableConfig.ts";
import { ChangeTargetStatusTableData } from "@/types/maintenanceManagement.ts";
import {
  AdhesionConfirmation,
  ExecutionState,
  ExtremeVacuumConfirmation,
  MembraneThicknessConfirmation,
  PrepareState,
  ProductionConfirmation,
  TagType
} from "@/enum/maintenanceManagement.ts";

const tableData: Array<ChangeTargetStatusTableData> = [
  {
    id: 1,
    equipmentNumber: 'N0344',
    personInCharge: '任炳',
    reserve: {
      content: PrepareState.prepared,
      status: TagType.success,
    },
    execution: {
      content: ExecutionState.executed,
      status: TagType.success,
    },
    productionConfirmation: {
      content: ProductionConfirmation.confirmed,
      status: TagType.success,
    },
    limitVacuumConfirmation: {
      content: ExtremeVacuumConfirmation.confirmed,
      status: TagType.success,
    },
    filmThicknessConfirmation: {
      content: MembraneThicknessConfirmation.unconfirmed,
      status: TagType.warning,
    },
    adhesionConfirmation: {
      content: AdhesionConfirmation.unconfirmed,
      status: TagType.warning,
    },
  },
  {
    id: 2,
    equipmentNumber: 'N2085',
    personInCharge: '任炳',
    reserve: {
      content: PrepareState.prepared,
      status: TagType.success,
    },
    execution: {
      content: ExecutionState.pendingExecution,
      status: TagType.info,
    },
    productionConfirmation: {
      content: ProductionConfirmation.unconfirmed,
      status: TagType.info,
    },
    limitVacuumConfirmation: {
      content: ExtremeVacuumConfirmation.unconfirmed,
      status: TagType.info,
    },
    filmThicknessConfirmation: {
      content: MembraneThicknessConfirmation.unconfirmed,
      status: TagType.info,
    },
    adhesionConfirmation: {
      content: AdhesionConfirmation.unconfirmed,
      status: TagType.info,
    },
  },
]
</script>

<template>
  <div class="border-b-2 text-xl border-gray-3 px-4 h-1/8 text-sm font-bold flex items-center">换靶状态</div>
  <el-table :data="tableData" class="!h-7/8 rounded-4" stripe table-layout="auto">
    <el-table-column v-for="(item,index) in changeTargetStatusFormField[0]" :key="index"
                     align="center" :prop="item.field" :label="item.label"/>
    <el-table-column v-for="(item,index) in changeTargetStatusFormField[1]" :key="index"
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
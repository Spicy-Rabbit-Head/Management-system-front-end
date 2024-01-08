<script setup lang="ts">

import { FilterScreenScheduleTableData, OtherScheduleTableData } from "@/types/maintenanceManagement.ts";

const tableData: Array<OtherScheduleTableData> = [
  {
    requirement: '备品规则整理',
    demander: '王永学',
    personInCharge: '赵子奎',
    demandDetail: '整理备品规则数据库,并添加到系统中,以便于后续备品领用等功能使用',
    expectedTime: new Date(2023, 10, 15),
  },
  {
    requirement: '备品规则整理',
    demander: '王永学',
    personInCharge: '赵子奎',
    demandDetail: '整理备品规则数据库,并添加到系统中,以便于后续备品领用等功能使用',
    expectedTime: new Date(2023, 10, 15),
  }
]

// const tableData: Array<FilterScreenScheduleTableData> = [
//   {
//     requirement: new Date(2023, 10, 9),
//     demander: 'N2151',
//     personInCharge: '任炳',
//   },
//   {
//     requirement: new Date(2023, 10, 9),
//     demander: 'N2458',
//     personInCharge: '任炳',
//   },
//   {
//     requirement: new Date(2023, 10, 9),
//     demander: 'N1475',
//     personInCharge: '任炳',
//   },
//   {
//     requirement: new Date(2023, 10, 9),
//     demander: 'N2147',
//     personInCharge: '任炳',
//   },
//   {
//     requirement: new Date(2023, 10, 9),
//     demander: 'N1578',
//     personInCharge: '任炳',
//   },
//   {
//     requirement: new Date(2023, 10, 9),
//     demander: 'N2458',
//     personInCharge: '任炳',
//   },
//   {
//     requirement: new Date(2023, 10, 9),
//     demander: 'N2151',
//     personInCharge: '任炳',
//   },
//   {
//     requirement: new Date(2023, 10, 9),
//     demander: 'N2458',
//     personInCharge: '任炳',
//   }
// ]


</script>

<template>
  <div class="border-b-2 text-xl border-gray-3 px-4 h-1/8 text-sm font-bold flex items-center">其他事项</div>
  <el-table :data="tableData" class="!h-7/8">
    <el-table-column type="expand">
      <template #default="props">
        <div grid gap-4 p-4>
          <span text-xl>需求详情:</span>
          <span>{{ props.row.demandDetail }}</span>
          <p>期望完成时间: {{ props.row.expectedTime.toLocaleDateString() }}</p>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="需求" prop="requirement"/>
    <el-table-column label="需求人" prop="demander"/>
    <el-table-column label="负责人" prop="personInCharge"/>
  </el-table>

  <!--<div class="border-b-2 text-xl border-gray-3 px-4 h-1/8 text-sm font-bold flex items-center">滤网更换排程</div>-->
  <!--<el-table :data="tableData" class="!h-7/8">-->
  <!--  <el-table-column label="预计时间" prop="requirement">-->
  <!--    <template #default="scope">-->
  <!--      <span>{{ scope.row.requirement.toLocaleDateString() }}</span>-->
  <!--    </template>-->
  <!--  </el-table-column>-->
  <!--  <el-table-column label="编号" prop="demander"/>-->
  <!--  <el-table-column label="更换人" prop="personInCharge"/>-->
  <!--</el-table>-->
</template>

<style scoped>

</style>
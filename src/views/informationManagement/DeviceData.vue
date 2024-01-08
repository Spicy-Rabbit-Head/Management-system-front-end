<script setup lang="ts">
import { ref, onMounted, reactive, watch, computed } from "vue";
import { TableField } from "@/config/tableConfig.ts";
import { DeviceData } from "@/types/informationManagement.ts";
import { GetDeviceData } from "@/api/informationManagement.ts";

const tableField: Array<TableField> = [
  {
    label: '设备名称',
    field: 'deviceName',
  },
  {
    label: '设备型号',
    field: 'deviceModel',
  },
  {
    label: '制作厂商',
    field: 'manufacturer',
  },
  {
    label: '车间',
    field: 'workshop',
  },
  {
    label: '站别',
    field: 'station',
  },
  {
    label: '位置',
    field: 'location',
  },
  {
    label: '设备状态',
    field: 'deviceStatus',
  },
  {
    label: '是否有效',
    field: 'isValid',
  },
  {
    label: '保养规则名',
    field: 'ruleName',
  },
  {
    label: '启用日期',
    field: 'enableDate',
  },
  {
    label: '保养基准文号',
    field: 'benchmarkDocumentNumber',
  },
  {
    label: 'OIS文号',
    field: 'oisDocumentNumber',
  },
  {
    label: '每日设备巡检基准',
    field: 'deviceInspectionBenchmark',
  },
  {
    label: '变更日期',
    field: 'changeDate',
  }
]
// 表格数据
const data = reactive<Array<DeviceData>>([])

// 当前页
const currentPage = ref<number>(1)
// 每页显示条数
const pageSize = ref<number>(20)
// 计算偏移量
const offset = computed(() => {
  return (currentPage.value - 1) * pageSize.value
})
// 计算排程的总数
const total = computed(() => {
  if (data.length != 0) {
    return data[0].total || data.length
  }
  return 0
})

// 更新表格数据
function updateTableData() {
  GetDeviceData(offset.value, pageSize.value).then(response => {
    data.length = 0
    data.push(...response.data)
    console.log(response)
  })
}

watch([currentPage, pageSize], () => {
  updateTableData()
})

// 挂载完成时
onMounted(() => {
  updateTableData()
})

</script>

<template>
  <div class="h-1/12 flex items-center px-4">
    <el-input class="!w-[160px]" placeholder="输入编号"></el-input>
  </div>
  <div class="h-10/12">
    <el-table height="100%" ref="scheduleTableReferences" size="large" :data="data">
      <el-table-column sortable align="center" type="selection"/>
      <el-table-column fixed align="center" prop="deviceNumber" label="设备编号" width="200"/>
      <el-table-column v-for="(item,index) in tableField" :key="index"
                       align="center" :prop="item.field" :label="item.label" width="200"/>
    </el-table>
  </div>
  <div class="h-1/12 flex justify-center bg-white">
    <el-pagination
        background
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[20, 40, 80, 160]"
        layout="total,sizes,prev, pager, next, jumper"
        :total="total"/>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { DeviceData } from "@/types/informationManagement.ts";
import { GetDeviceData } from "@/api/informationManagement.ts";
import { DynamicBusinessTable, Field, Pagination } from "@/components/AdvancedTable";

const deviceDataTableRef = ref<InstanceType<typeof DynamicBusinessTable> | null>(null)
// 当前页
const currentPage = ref<number>(1)
// 每页显示条数
const pageSize = ref<number>(15)
// 表格数据
const data = reactive<Array<DeviceData>>([])
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
function getTableData() {
  GetDeviceData(offset.value, pageSize.value).then(response => {
    data.length = 0
    data.push(...response.data)
    deviceDataTableRef.value?.refreshComplete()
  })
}

function pageChange(payload: Pagination) {
  currentPage.value = payload.currentPage
  pageSize.value = payload.pageSize
  getTableData()
}

onMounted(() => {
  getTableData()
})
const field = reactive<Field[]>([
  {
    label: '设备名称',
    prop: 'deviceNumber',
    defaultDisplay: true,
  },
  {
    label: '设备型号',
    prop: 'deviceModel',
  },
  {
    label: '制作厂商',
    prop: 'manufacturer',
  },
  {
    label: '车间',
    prop: 'workshop',
  },
  {
    label: '站别',
    prop: 'station',
  },
  {
    label: '位置',
    prop: 'location',
  },
  {
    label: '设备状态',
    prop: 'deviceStatus',
  },
  {
    label: '是否有效',
    prop: 'isValid',
  },
  {
    label: '保养规则名',
    prop: 'ruleName',
  },
  {
    label: '启用日期',
    prop: 'enableDate',
  },
  {
    label: '保养基准文号',
    prop: 'benchmarkDocumentNumber',
  },
  {
    label: 'OIS文号',
    prop: 'oisDocumentNumber',
  },
  {
    label: '每日设备巡检基准',
    prop: 'deviceInspectionBenchmark',
  },
  {
    label: '变更日期',
    prop: 'changeDate',
  }
])

</script>

<template>
  <dynamic-business-table
      ref="deviceDataTableRef"
      :table-data="data"
      :fields="field"
      :total="total"
      @refresh="getTableData"
      @page-change="pageChange">
  </dynamic-business-table>
</template>

<style scoped>

</style>

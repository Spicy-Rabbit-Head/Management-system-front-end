<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { ScheduleTableData, SchedulingSelect } from "@/types/maintenanceManagement.ts";
import { schedulingTimeList, workshopList } from "@/config/globalConfig.ts"
import type { DynamicBusinessTable, Pagination, } from "@/components/AdvancedTable";
import { ModifySchedulingData, SchedulingData, SchedulingInterfaceData } from "@/api/maintenanceManagement.ts";
import { Field } from "@/components/AdvancedTable";
import UniversalExhibit from "@/container/UniversalExhibit.vue";

onMounted(() => {
  // 获取排程界面
  SchedulingInterfaceData(offset.value, pageSize.value).then(response => {
    members.push(...response.data.members)
    schedule.length = 0
    schedule.push(...response.data.schedulingData)
  })
})

// 排程数据
const schedule = reactive<Array<ScheduleTableData>>([]);
// 当前车间
const currentWorkshop = ref<string>('製造一部車間')
// 当前页
const currentPage = ref<number>(1)
// 每页显示条数
const pageSize = ref<number>(15)
// 成员列表
const members = reactive<Array<string>>([])
// 动态表格
const dynamicTable = ref<InstanceType<typeof DynamicBusinessTable> | null>(null)
// 是否可见
const visible = ref<boolean>(false)
// 载荷
const payload = ref<any>({})
// 计算偏移量
const offset = computed(() => {
  return (currentPage.value - 1) * pageSize.value
})
// 计算排程的总数
const total = computed(() => {
  if (schedule.length != 0) {
    return schedule[0].total || schedule.length
  }
  return 0
})
// 排程选择
const schedulingSelect = reactive<SchedulingSelect>({
  machineSelect: [],
  personInCharge: '',
  memberSelect: [],
  schedulingTime: '',
})

// 重置选择
function resetOption() {
  schedulingSelect.personInCharge = ''
  schedulingSelect.memberSelect.length = 0
  schedulingSelect.schedulingTime = ''
  schedulingSelect.machineSelect.length = 0
}

// 清除选择
function clearOption() {
  dynamicTable.value!.clearSelection();
}

// 获取排程数据
function getScheduleData() {
  dynamicTable.value!.refresh();
  SchedulingData(currentWorkshop.value, offset.value, pageSize.value).then(response => {
    schedule.length = 0
    schedule.push(...response.data)
    schedulingSelect.machineSelect.length = 0
  })
  dynamicTable.value!.refreshComplete();
}

// 确认保养人员
function confirmMaintenancePersonnel() {
  schedulingSelect.machineSelect.push(...dynamicTable.value!.getSelectionRows().map(item => item.id))
  if (schedulingSelect.machineSelect.length == 0) {
    return
  }
  ModifySchedulingData(schedulingSelect).then(() => {
    getScheduleData()
  })
}

// 清除保养人员
function clearMaintenancePersonnel() {
  schedulingSelect.machineSelect.push(...dynamicTable.value!.getSelectionRows().map(item => item.id))
  if (schedulingSelect.machineSelect.length == 0) {
    return
  }
  ModifySchedulingData(schedulingSelect, false).then(() => {
    getScheduleData()
  })
}

const fields = reactive<Field[]>([
  // 主键id
  {
    prop: 'id',
    label: '标识',
    defaultDisplay: false
  },
  {
    prop: 'equipmentNumber',
    label: '设备编号',
    defaultDisplay: true
  },
  {
    prop: 'equipmentModelNumber',
    label: '设备型号',
    defaultDisplay: true
  },
  {
    prop: 'equipmentName',
    label: '设备名称',
    defaultDisplay: true
  },
  {
    prop: 'maintenanceCycle',
    label: '保养周期',
    defaultDisplay: true
  },
  {
    prop: 'planTime',
    label: '计划时间',
    defaultDisplay: true
  },
  {
    prop: 'schedulingTime',
    label: '排定时间',
    defaultDisplay: true
  },
  {
    prop: 'personInCharge',
    label: '负责人',
    defaultDisplay: true
  },
  {
    prop: 'member',
    label: '成员',
    defaultDisplay: true
  },
  {
    prop: 'schedulingStatus',
    label: '排程状态',
    defaultDisplay: false
  },
])

/**
 * 页面改变
 * @param page 页
 */
function pageChange(page: Pagination) {
  currentPage.value = page.currentPage
  pageSize.value = page.pageSize
  getScheduleData()
}

/**
 * 行详情
 * @param row 行数据
 */
function rowDetails(row: any) {
  payload.value = row
  visible.value = true
}
</script>

<template>
  <div>
    <universal-exhibit
        v-model:visible="visible"
        :payload="payload"
        title="排程机台信息"
        form-name="1"/>
    <dynamic-business-table ref="dynamicTable"
                            :default-page-size="15"
                            :operations="['Details']"
                            :total="total"
                            :is-search="false"
                            :table-data="schedule"
                            :fields="fields"
                            @refresh="getScheduleData"
                            @row-details="rowDetails"
                            @page-change="pageChange">
      <el-button type="warning" @click.stop="clearOption">清除选择</el-button>
      <el-popconfirm title="确认！" @confirm="clearMaintenancePersonnel">
        <template #reference>
          <el-button type="danger">清除保养人员</el-button>
        </template>
      </el-popconfirm>
      <el-select @change="getScheduleData" class="!w-[160px] mx-3" v-model="currentWorkshop" placeholder="选择车间">
        <el-option v-for="(workshop,index) in workshopList" :key="index" :label="workshop" :value="workshop"/>
      </el-select>
      <template #head-right>
        <el-popconfirm title="确认！" @confirm="confirmMaintenancePersonnel">
          <template #reference>
            <el-button type="success">确认保养人员</el-button>
          </template>
        </el-popconfirm>
        <el-button @click.stop="resetOption" class="!ml-0" type="warning">重置选择</el-button>
        <el-select v-model="schedulingSelect.personInCharge" placeholder="负责人" clearable>
          <el-option v-for="member in members" :key="member" :label="member"
                     :value="member"/>
        </el-select>
        <el-select v-model="schedulingSelect.memberSelect" placeholder="成员" multiple clearable
                   collapse-tags collapse-tags-tooltip>
          <el-option v-for="(member,index) in members" :key="index" :label="member"
                     :value="member"/>
        </el-select>
        <el-select v-model="schedulingSelect.schedulingTime" placeholder="排定时间" clearable>
          <el-option v-for="item in schedulingTimeList" :key="item.label" :label="item.label" :value="item.value"/>
        </el-select>
      </template>
    </dynamic-business-table>
  </div>
  <!--<div class="flex flex-col overflow-hidden">-->
  <!--  <div v-show="show" class="h-16 flex-none flex items-center px-4 border-b border-warmgray">-->
  <!--  </div>-->
  <!--  <div class="h-2/3 flex-auto">-->
  <!--    <div class="h-9/10">-->
  <!--      <el-table ref="scheduleTableReferences" size="large" :data="schedule" height="100%" @select-all="select"-->
  <!--                @select="select" :row-style="rowStyle">-->
  <!--        <el-table-column sortable align="center" type="selection"/>-->
  <!--        <el-table-column v-for="(item,index) in scheduleTableField" :key="index"-->
  <!--                         align="center" :prop="item.field" :label="item.label"/>-->
  <!--      </el-table>-->
  <!--    </div>-->
  <!--    <div class="h-1/10 flex justify-center bg-white">-->
  <!--      <el-pagination-->
  <!--          background-->
  <!--          v-model:current-page="currentPage"-->
  <!--          v-model:page-size="pageSize"-->
  <!--          :page-sizes="[20, 40, 80, 160]"-->
  <!--          layout="total,sizes,prev, pager, next, jumper"-->
  <!--          :total="total"/>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</div>-->
</template>

<style scoped>

</style>

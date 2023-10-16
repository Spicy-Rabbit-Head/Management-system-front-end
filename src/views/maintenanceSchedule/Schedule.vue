<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { Member, ScheduleTableData, SchedulingSelect } from "@/types/maintenanceManagement.ts";
import { scheduleTableField } from "@/config/tableConfig.ts"
import { schedulingTimeList, workshopList } from "@/config/globalConfig.ts"
import { ModifySchedulingData, SchedulingData, SchedulingInterfaceData } from "@/api/maintenanceManagement.ts";

onMounted(() => {
  // 获取排程界面
  SchedulingInterfaceData(offset.value, pageSize.value).then(response => {
    members.push(...response.members)
    schedule.length = 0
    schedule.push(...response.schedulingData)
  })
})

// 排程数据
const schedule = reactive<Array<ScheduleTableData>>([]);
// 当前车间
const currentWorkshop = ref<string>('製造一部車間')
// 当前页
const currentPage = ref<number>(1)
// 每页显示条数
const pageSize = ref<number>(20)
// 成员列表
const members = reactive<Array<Member>>([])
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
  responsiblePerson: '',
  memberSelect: [],
  schedulingTime: ''
})
// 机台选择
const machineSelect = reactive<Array<number>>([])
// 排程表引用
const scheduleTableReferences = ref<HTMLTableElement | null>(null)

watch([currentPage, pageSize], () => {
  getScheduleData()
})

// 选择机台
function select(raws: Array<ScheduleTableData>) {
  machineSelect.length = 0
  machineSelect.push(...raws.map((item: any) => item.id))
}

// 重置选择
function resetOption() {
  schedulingSelect.responsiblePerson = ''
  schedulingSelect.memberSelect = []
  schedulingSelect.schedulingTime = ''
}

// 清除选择
function clearOption() {
  if (scheduleTableReferences.value == null) {
    return
  }
  // @ts-expect-error
  scheduleTableReferences.value!.clearSelection();
}

// 获取排程数据
function getScheduleData() {
  SchedulingData(currentWorkshop.value, offset.value, pageSize.value).then(response => {
    schedule.length = 0
    schedule.push(...response)
    machineSelect.length = 0
  })
}

// 修改排程
function updateSchedule() {
  ModifySchedulingData(schedulingSelect);
}


</script>

<template>
  <div class="flex flex-col">
    <div class="h-16 flex-none flex items-center px-4 border-b border-warmgray">
      <el-button-group>
        <el-button type="primary" @click.stop="clearOption">清除选择</el-button>
        <el-popconfirm title="确认！">
          <template #reference>
            <el-button type="primary" @click.stop="">清除保养人员</el-button>
          </template>
        </el-popconfirm>
        <el-select @change="getScheduleData" class="w-[160px]" v-model="currentWorkshop" placeholder="选择车间">
          <el-option v-for="(workshop,index) in workshopList" :key="index" :label="workshop" :value="workshop"/>
        </el-select>
      </el-button-group>
      <el-button-group class="ml-auto">
        <el-popconfirm title="确认！" @confirm="updateSchedule">
          <template #reference>
            <el-button>确认保养人员</el-button>
          </template>
        </el-popconfirm>
        <el-button @click.stop="resetOption">重置选择</el-button>
        <el-select class="w-[100px]" v-model="schedulingSelect.responsiblePerson" placeholder="负责人" clearable>
          <el-option v-for="member in members" :key="member.memberName" :label="member.memberName"
                     :value="member.memberName"/>
        </el-select>
        <el-select class="w-[200px]" v-model="schedulingSelect.memberSelect" placeholder="成员" multiple clearable
                   collapse-tags collapse-tags-tooltip>
          <el-option v-for="(member,index) in members" :key="index" :label="member.memberName"
                     :value="member.memberName"/>
        </el-select>
        <el-select class="w-[100px]" v-model="schedulingSelect.schedulingTime" placeholder="排定时间" clearable>
          <el-option v-for="item in schedulingTimeList" :key="item.label" :label="item.label" :value="item.value"/>
        </el-select>
      </el-button-group>
    </div>
    <div class="h-2/3 flex-auto">
      <div class="h-9/10">
        <el-table ref="scheduleTableReferences" :data="schedule" height="100%" @select-all="select" @select="select">
          <el-table-column sortable align="center" type="selection"/>
          <el-table-column v-for="(item,index) in scheduleTableField" :key="index"
                           align="center" :prop="item.field" :label="item.label"/>
        </el-table>
      </div>
      <div class="h-1/10 flex justify-center">
        <el-pagination
            background
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[20, 40, 80, 160]"
            layout="total,sizes,prev, pager, next, jumper"
            :total="total"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
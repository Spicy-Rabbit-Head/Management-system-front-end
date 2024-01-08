<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
import { ModuleScheduling, NonRoutineMattersScheduling } from "@/types/maintenanceManagement.ts";
import {
  addNonRoutineSchedule, deleteNonRoutineSchedule,
  getMaintenanceMembers,
  getModuleSchedule,
  getNonRoutineSchedule
} from "@/api/maintenanceManagement.ts";

// 模组排程
const moduleScheduling = reactive<Array<ModuleScheduling>>([])
// 非例行排程
const nonRoutineMatters = reactive<Array<NonRoutineMattersScheduling>>([])
// 弹窗
const dialogVisible = ref(false)
// 弹窗
const viewerVisible = ref(false)
// 图片
const viewerSrc = ref<string>('https://t.mwm.moe/fj')
// 成员列表
const members = reactive<Array<string>>([])
// 表单
const form = reactive<NonRoutineMattersScheduling>({
  id: 0,
  mattersName: '',
  mattersDescription: '',
  acceptanceEvidence: '',
  member: '',
  mattersTime: '',
})

onMounted(() => {
  getModuleSchedule().then((res) => {
    moduleScheduling.push(...res.data)
  })
  getNonRoutineSchedule().then((res) => {
    nonRoutineMatters.push(...res.data)
  })
  getMaintenanceMembers().then((res) => {
    members.push(...res.data)
  })
})

// 添加非例行事项
function addNonRoutineMatters() {
  dialogVisible.value = false
  addNonRoutineSchedule(form).then(() => {
    getNonRoutineSchedule().then((res) => {
      nonRoutineMatters.length = 0
      nonRoutineMatters.push(...res.data)
    })
  })
}

// 修改非例行事项
function updateNonRoutineMatters() {

}

// 删除非例行事项
function deleteNonRoutineMatters(scope: any) {
  deleteNonRoutineSchedule(scope.row.id).then(() => {
    getNonRoutineSchedule().then((res) => {
      nonRoutineMatters.length = 0
      nonRoutineMatters.push(...res.data)
    })
  })
}

// 验收非例行事项
function acceptanceNonRoutineMatters() {

}
</script>

<template>
  <div h-full w-full>
    <el-dialog
        v-model="viewerVisible"
        title="查看"
        width="60%">
    </el-dialog>
    <el-dialog
        v-model="dialogVisible"
        title="新增"
        width="40%"
        align-center
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        class="flex items-center justify-center">
      <el-form label-position="left" label-width="80px">
        <el-form-item label="事项名称">
          <el-input v-model="form.mattersName"/>
        </el-form-item>
        <el-form-item label="事项描述">
          <el-input v-model="form.mattersDescription"/>
        </el-form-item>
        <el-form-item label="成员">
          <el-select v-model="form.member" placeholder="选择成员">
            <el-option v-for="item in members" :key="item" :label="item" :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item label="事项时间">
          <el-select v-model="form.mattersTime" placeholder="选择时间">
            <el-option label="上午" value="上午"/>
            <el-option label="下午" value="下午"/>
            <el-option label="全天" value="全天"/>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click.stop="addNonRoutineMatters">
          添加非例行事项
        </el-button>
      </span>
      </template>
    </el-dialog>

    <el-card class="h-1/2">
      <template #header>
        <span text-2xl>非例行事项</span>
        <el-button type="success" float-right @click.stop="dialogVisible = true">添加事项
        </el-button>
      </template>
      <el-table size="large" :data="nonRoutineMatters">
        <el-table-column align="center" prop="mattersName" label="事项名称"/>
        <el-table-column align="center" prop="mattersDescription" label="事项描述"/>
        <el-table-column align="center" prop="member" label="成员"/>
        <el-table-column align="center" prop="mattersTime" label="事项时间"/>
        <el-table-column align="center" prop="acceptanceEvidence" label="验收佐证">
          <template #default="scope">
            <el-button text type="success" @click.stop="viewerVisible = true">查看</el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="280">
          <template #default="scope">
            <el-button type="warning">修改</el-button>
            <el-button type="primary">验收</el-button>
            <el-button type="danger" @click.stop="deleteNonRoutineMatters(scope)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="h-1/2">
      <template #header>
        <span text-2xl>模组排程</span>
      </template>
      <div grid grid-cols-2 p-4 gap-4>
        <el-descriptions
            direction="vertical"
            :column="3"
            border
            v-for="(module,index) in moduleScheduling"
            :key="index"
            class="border-gray-3 border-2"
        >
          <el-descriptions-item label="模组名称" align="center">{{ module.moduleName }}</el-descriptions-item>
          <el-descriptions-item label="模组编号" align="center">{{ module.moduleNumber }}</el-descriptions-item>
          <el-descriptions-item label="保养数量(PCS)" align="center">
            {{ module.maintenanceQuantity }}
          </el-descriptions-item>
          <el-descriptions-item label="模组型号" align="center">{{ module.modelNumber }}</el-descriptions-item>
          <el-descriptions-item label="保养人员" align="center">{{ module.maintenancePersonnel }}</el-descriptions-item>
          <el-descriptions-item label="排定保养时间" align="center">{{ module.schedulingTime }}</el-descriptions-item>
          <el-descriptions-item label="操作" align="center">
            <el-button type="success">进入详情页</el-button>
            <el-button type="primary">进入完成流程</el-button>
            <el-button type="danger">进入异常流程</el-button>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </el-card>
  </div>
</template>

<style scoped>

</style>

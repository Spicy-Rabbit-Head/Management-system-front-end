<script setup lang="ts">
import { ProjectProgressData } from "@/types/shared.ts";

function getTime(startTime: Date, endTime: Date): string {
  return `${startTime.toLocaleDateString()} - ${endTime.toLocaleDateString()}`;
}

const tableData: Array<ProjectProgressData> = [
  {
    id: 1,
    phase: "标品量测机程式",
    timeNode: getTime(new Date(2023, 7, 1), new Date(2023, 11, 15)),
    schedule: 50,
    children: [
      {
        id: 2,
        phase: "需求分析",
        timeNode: getTime(new Date(2023, 7, 1), new Date(2023, 7, 5)),
        schedule: 100,
      },
      {
        id: 3,
        phase: "技术选型",
        timeNode: getTime(new Date(2023, 7, 6), new Date(2023, 7, 10)),
        schedule: 100,
      },
      {
        id: 4,
        phase: "设计软件架构",
        timeNode: getTime(new Date(2023, 7, 11), new Date(2023, 10, 1)),
        schedule: 100,
        children: [
          {
            id: 5,
            phase: "按 MVVM 设计结构",
            timeNode: getTime(new Date(2023, 7, 11), new Date(2023, 7, 20)),
            schedule: 100,
          },
          {
            id: 6,
            phase: "设计数据双向绑定模式",
            timeNode: getTime(new Date(2023, 7, 21), new Date(2023, 8, 5)),
            schedule: 100,
          }
        ]
      },
      {
        id: 7,
        phase: "驱动开发",
        timeNode: getTime(new Date(2023, 8, 6), new Date(2023, 9, 10)),
        schedule: 100,
        children: [
          {
            id: 8,
            phase: "编写Modbus TCP 客户端",
            timeNode: getTime(new Date(2023, 8, 6), new Date(2023, 8, 25)),
            schedule: 100,
          },
          {
            id: 9,
            phase: "使用信捷PLC测试",
            timeNode: getTime(new Date(2023, 8, 26), new Date(2023, 9, 10)),
            schedule: 100,
          }
        ]
      },
      {
        id: 10,
        phase: "界面开发",
        timeNode: getTime(new Date(2023, 9, 11), new Date(2023, 9, 15)),
        schedule: 100,
        children: [
          {
            id: 11,
            phase: "编写控制主页",
            timeNode: getTime(new Date(2023, 9, 11), new Date(2023, 9, 16)),
            schedule: 100,
          },
          {
            id: 12,
            phase: "编写设定配置页",
            timeNode: getTime(new Date(2023, 9, 17), new Date(2023, 9, 21)),
            schedule: 100,
          },
          {
            id: 13,
            phase: "编写关于帮助页",
            timeNode: getTime(new Date(2023, 9, 22), new Date(2023, 9, 26)),
            schedule: 100,
          }
        ]
      },
      {
        id: 14,
        phase: "实现各界面 Model",
        timeNode: getTime(new Date(2023, 9, 27), new Date(2023, 10, 3)),
        schedule: 100,
      },
      {
        id: 15,
        phase: "实现各界面 ViewModel",
        timeNode: getTime(new Date(2023, 10, 4), new Date(2023, 10, 15)),
        schedule: 37,
      },
      {
        id: 16,
        phase: "测试",
        timeNode: getTime(new Date(2023, 10, 16), new Date(2023, 10, 21)),
        schedule: 0,
        children: [
          {
            id: 17,
            phase: "无料测试",
            timeNode: getTime(new Date(2023, 10, 16), new Date(2023, 10, 18)),
            schedule: 0,
          },
          {
            id: 18,
            phase: "有料测试",
            timeNode: getTime(new Date(2023, 10, 19), new Date(2023, 10, 21)),
            schedule: 0,
          }
        ]
      },
      {
        id: 19,
        phase: "运行测试",
        timeNode: getTime(new Date(2023, 10, 22), new Date(2023, 11, 15)),
        schedule: 0,
      }
    ]
  },
]

</script>

<template>
  <div class="border-b-2 text-xl border-gray-3 px-4 h-1/8 text-sm font-bold flex items-center">项目进度</div>
  <el-table
      class="!h-7/8 rounded-4 !w-full"
      :data="tableData"
      row-key="id"
      default-expand-all
  >
    <el-table-column prop="phase" label="项目阶段" width="240"/>
    <el-table-column prop="timeNode" align="center" label="时间节点" width="195"/>
    <el-table-column prop="schedule" align="center" label="进度" width="100">
      <template #default="scope">
        <el-progress type="circle" width="70" :percentage="scope.row.schedule"
                     :status="scope.row.schedule == 100 ? 'success' : ''">
          <template #default="{ percentage }">
            <span class="text-xl">{{ percentage }}%</span>
          </template>
        </el-progress>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center" fixed="right">
      <el-button type="text" size="small">查看详情</el-button>
    </el-table-column>
  </el-table>
</template>

<style scoped>

</style>
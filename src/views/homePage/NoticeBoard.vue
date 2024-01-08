<script setup lang="ts">
import { Notification } from "@/types/shared.ts";

const activities: Array<Notification> = [
  {
    type: "warning",
    publisher: "王璇",
    title: "无尘服送洗",
    timestamp: new Date(2023, 10, 3, 8, 2, 54),
    hollow: true,
    content: [
      {
        type: "heading",
        content: "📢 中午12点前将旧衣服放置送洗袋"
      },
    ],
  },
  {
    type: "success",
    publisher: "赵子奎",
    title: "V 1.0.5 版本更新",
    timestamp: new Date(2023, 10, 1, 10, 15, 23),
    content: [
      {
        type: "heading",
        content: "🐞 BUG 修复"
      },
      {
        type: "paragraph",
        content: "修复页面开启缓存后第一次加载并未缓存页面的问题"
      },
      {
        type: "paragraph",
        content: "修复搜索菜单功能的弹框遮罩未覆盖左侧菜单的问题"
      },
      {
        type: "paragraph",
        content: "修复图标选择器未正确初始化预览问题"
      },
      {
        type: "heading",
        content: "🚀 系统优化"
      },
      {
        type: "paragraph",
        content: "优化菜单搜索功能和样式"
      },
      {
        type: "paragraph",
        content: "优化首页布局"
      },
      {
        type: "heading",
        content: "📰 新增功能"
      },
      {
        type: "paragraph",
        content: "可配置首页菜单显示与隐藏"
      },
    ]
  }
]

for (let i = 1; i < 30; i++) {
  activities.push({
    timestamp: new Date(2023, 8, i, 10, 15, 23),
  })
}

</script>
<template>
  <div class="border-b-2 border-gray-3 p-4 text-lg">通知(公告)</div>
  <div class="px-6 my-5 overflow-y-auto">
    <el-timeline>
      <el-timeline-item
          v-for="(activity, index1) in activities"
          :key="index1"
          :type="activity.type"
          :color="activity.color"
          :hollow="activity.hollow"
          :timestamp="activity.timestamp.toLocaleString() + ' 发布人 : ' + activity.publisher"
          placement="top"
      >
        <h1 text-3xl>{{ activity.title }}</h1>
        <div v-for="(item,index2) in activity.content" :key="index2">
          <h1 v-if="item.type === 'heading'" text-xl>{{ item.content }}</h1>
          <p v-else-if="item.type === 'paragraph'">{{ item.content }}</p>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped>

</style>
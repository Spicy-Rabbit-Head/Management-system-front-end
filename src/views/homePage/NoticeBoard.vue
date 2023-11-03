<script setup lang="ts">
const activities = [
  {
    content: '内容1',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
  },
  {
    content: '内容2',
    timestamp: '2018-04-05 20:46',
    color: '#0bbd87',
  },
  {
    content: '内容3',
    timestamp: '2018-04-04 20:46',
    size: 'large',
  },
  {
    content: '内容4',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: '内容5',
    timestamp: '2018-04-01 20:46',
  },
]
</script>
<template>
  <div class="border-b-2 border-gray-3 p-4 text-lg">通知(公告)</div>
  <div class="px-5 my-5 overflow-y-auto">
    <el-timeline>
      <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :type="activity.type"
          :color="activity.color"
          size="large"
          :hollow="activity.hollow"
          :timestamp="activity.timestamp"
          placement="top"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<style scoped>

</style>
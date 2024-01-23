<script setup lang="ts">
// import NoticeBoard from "@/views/homePage/NoticeBoard.vue";
// import Calendar from "@/views/homePage/Calendar.vue";
// import ExternalLink from "@/views/homePage/ExternalLink.vue";
// import ChangeTargetStatusDisplay from "@/views/homePage/ChangeTargetStatusDisplay.vue";
// import HandoverMatters from "@/views/homePage/HandoverMatters.vue";
// import MachineInformation from "@/views/homePage/MachineInformation.vue";
// import OtherMatterDisplay from "@/views/homePage/OtherMatterDisplay.vue";
// import MaintenanceStatusDisplay from "@/views/homePage/MaintenanceStatusDisplay.vue";
// import ModuleMaintenanceDisplay from "@/views/homePage/ModuleMaintenanceDisplay.vue";
// import ProjectProgressDisplay from "@/views/homePage/ProjectProgressDisplay.vue";
</script>

<template>
  <div>1</div>
  <!--<dynamic-business-table ref="dynamicTable"-->
  <!--                        :default-page-size="15"-->
  <!--                        @rowDetails="log"-->
  <!--                        @rowEdit="log"-->
  <!--                        @rowDelete="log"-->
  <!--                        @rowSelect="log"-->
  <!--                        :total="100"-->
  <!--                        :fields="fields"-->
  <!--                        :table-data="tableData"-->
  <!--                        @page-change="pageChange">-->
  <!--  <el-button type="primary" @click.stop="add">新增</el-button>-->
  <!--  <el-button type="warning">编辑</el-button>-->
  <!--  <el-button type="danger">删除</el-button>-->
  <!--</dynamic-business-table>-->
  <!--<div class="grid p-4 grid-cols-6 grid-rows-5 gap-4 ">-->
  <!--  <div class="col-span-2 row-span-3 bg-white  rounded-4 flex flex-col  shadow-md">-->
  <!--    &lt;!&ndash; 通知公告 &ndash;&gt;-->
  <!--    <notice-board/>-->
  <!--  </div>-->
  <!--  <div class="col-span-4 row-span-2 bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 例行保养排程 &ndash;&gt;-->
  <!--    <maintenance-status-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2 row-span-2 bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 例行模组保养 &ndash;&gt;-->
  <!--    <module-maintenance-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2 row-span-3 bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 项目进度 &ndash;&gt;-->
  <!--    <project-progress-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2 row-span-3 bg-white rounded-4 shadow-md py-2 caret-transparent flex flex-col">-->
  <!--    &lt;!&ndash; 行事历 &ndash;&gt;-->
  <!--    <calendar/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2 row-span-2  bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 其他事项 &ndash;&gt;-->
  <!--    <other-matter-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2  bg-white rounded-4 shadow-md grid grid-cols-4">-->
  <!--    &lt;!&ndash; 外链 &ndash;&gt;-->
  <!--    <external-link/>-->
  <!--  </div>-->
  <!--</div>-->

  <!--<div class="grid p-4 grid-cols-8 grid-rows-6 gap-4 ">-->
  <!--  <div class="col-span-2 row-span-2  rounded-4 flex flex-col  shadow-md">-->
  <!--    &lt;!&ndash; 通知公告 &ndash;&gt;-->
  <!--    <notice-board/>-->
  <!--  </div>-->
  <!--  <div class="col-span-6 row-span-2 bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 例行保养排程 &ndash;&gt;-->
  <!--    <maintenance-status-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2 row-span-3 bg-white rounded-4 shadow-md py-2 caret-transparent flex flex-col">-->
  <!--    &lt;!&ndash; 行事历 &ndash;&gt;-->
  <!--    <calendar/>-->
  <!--  </div>-->
  <!--  <div class="col-span-3 row-span-2 bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 例行模组保养 &ndash;&gt;-->
  <!--    <module-maintenance-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-3 row-span-4 bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 项目进度 &ndash;&gt;-->
  <!--    <project-progress-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-3 row-span-2  bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 其他事项 &ndash;&gt;-->
  <!--    <other-matter-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2  bg-white rounded-4 shadow-md grid grid-cols-4">-->
  <!--    &lt;!&ndash; 外链 &ndash;&gt;-->
  <!--    <external-link/>-->
  <!--  </div>-->
  <!--</div>-->

  <!--<div class="grid p-4 grid-cols-6 grid-rows-5 gap-4 ">-->
  <!--  <div class="col-span-2 row-span-3 bg-white  rounded-4 flex flex-col  shadow-md">-->
  <!--    &lt;!&ndash; 通知公告 &ndash;&gt;-->
  <!--    <notice-board/>-->
  <!--  </div>-->
  <!--  <div class="col-span-4 row-span-2 bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 换靶状态展示 &ndash;&gt;-->
  <!--    <change-target-status-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2 row-span-2  bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 其他事项 &ndash;&gt;-->
  <!--    <other-matter-display/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2 row-span-5  bg-white rounded-4 shadow-md">-->
  <!--    &lt;!&ndash; 机台信息 &ndash;&gt;-->
  <!--    <machine-information/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2 row-span-4 bg-white rounded-4 shadow-md py-2 caret-transparent flex flex-col">-->
  <!--    &lt;!&ndash; 行事历 &ndash;&gt;-->
  <!--    <calendar/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2 row-span-2  bg-white rounded-4 shadow-md overflow-hidden">-->
  <!--    &lt;!&ndash; 交接事项 &ndash;&gt;-->
  <!--    <HandoverMatters/>-->
  <!--  </div>-->
  <!--  <div class="col-span-2  bg-white rounded-4 shadow-md grid grid-cols-4">-->
  <!--    &lt;!&ndash; 外链 &ndash;&gt;-->
  <!--    <external-link/>-->
  <!--  </div>-->
  <!--</div>-->
</template>

<style scoped>

</style>

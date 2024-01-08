<script setup lang="ts">
import { ref, computed } from "vue";

defineOptions({name: 'BusinessTable'})

interface BusinessTableProps {

}

const props = withDefaults(defineProps<BusinessTableProps>(), {})

// 搜索栏是否显示
const isSearchShow = ref(false);

// 搜索栏高度
const dynamicHeight = computed(() => {
  return isSearchShow.value ? ["h-2/12", "h-9/12"] : ["h-0", "h-11/12"]
});


const tableData = []

for (let i = 0; i < 30; i++) {
  tableData.push({
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  })
}

// 搜索栏显示切换
const toggleSearch = () => {
  isSearchShow.value = !isSearchShow.value;
};
</script>

<template>
  <div class="flex flex-col p-2 h-full w-full">
    <div shrink transition-all :class="dynamicHeight[0]" class="border-x border-y border-gray-2">
      <slot name="search"></slot>
    </div>
    <div flex-initial transition-all :class="dynamicHeight[1]" class="flex flex-col">
      <div class="h-13 border-x border-gray-2 flex">
        <div class="flex-auto px-2 flex items-center">
          <el-button type="primary" @click.stop="toggleSearch">
            <div i-ep-refresh text-lg/>
          </el-button>
          <slot></slot>
        </div>
        <div class="flex-auto px-2 flex items-center justify-end">
          <el-button type="primary" @click.stop="toggleSearch">
            <div i-ep-search text-lg/>
          </el-button>
        </div>
      </div>
      <el-table :data="tableData" class="flex-1" border>
        <el-table-column prop="date" label="Date" width="180"/>
        <el-table-column prop="name" label="Name" width="180"/>
        <el-table-column prop="address" label="Address"/>
      </el-table>
    </div>
    <div bg-blue flex-none class="h-1/12">
      1
    </div>
  </div>
</template>

<style scoped>

</style>

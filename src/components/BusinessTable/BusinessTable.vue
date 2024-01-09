<script setup lang="ts">
import { ref, computed } from "vue";
import { Spin as VexSpin } from "vexip-ui";

defineOptions({name: 'BusinessTable'})

/**
 * 分页
 */
export interface Pagination {
  /**
   * 当前页
   */
  currentPage: number

  /**
   * 每页条数
   */
  pageSize: number

  /**
   * 总条数
   */
  total: number
}

interface BusinessTableProps {
  tableData?: any[]

  // pagination: Pagination

  /**
   * 默认每页条数
   */
  defaultPageSize?: number
}

const pagination = defineModel<Pagination>('pagination', {required: true})

const props = withDefaults(defineProps<BusinessTableProps>(), {
  defaultPageSize: 10
})

const emits = defineEmits(['pageChange'])

// 加载状态
const loading = ref(false);

/**
 * 分页数组
 * 根据默认每页条数生成
 */
const pageSizes = computed(() => {
  const arr: Array<number> = []
  const proportions = [1, 3, 5, 10];
  proportions.forEach((item) => {
    arr.push(props.defaultPageSize * item)
  })
  return arr
});

// 搜索栏是否显示
const isSearchShow = ref(false);

// 搜索栏高度
const dynamicHeight = computed(() => {
  return isSearchShow.value ? ["h-2/12 border-t", "h-9/12"] : ["h-0", "h-11/12"]
});


const tableData: any = []

for (let i = 0; i < 30; i++) {
  tableData.push({
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  })
}

// 当前页改变
function pageChange(val: number) {
  pagination.value.currentPage = val
  emits('pageChange')
}

// 每页条数改变
function sizeChange(val: number) {
  pagination.value.pageSize = val
  emits('pageChange')
}

// 搜索栏显示切换
function toggleSearch() {
  isSearchShow.value = !isSearchShow.value;
}

// 刷新数据
function refresh() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div class="flex flex-col p-2 h-full w-full border-collapse">
    <div shrink transition-all :class="dynamicHeight[0]" class="border-x border-gray-2">
      <slot name="search"></slot>
    </div>
    <div flex-initial transition-all :class="dynamicHeight[1]" class="flex flex-col">
      <div class="h-13 border-x border-t border-gray-2 flex">
        <div class="flex-auto px-2 flex items-center">
          <el-button type="primary" @click.stop="refresh">
            <div v-show="loading === true" i-svg-spinners-6-dots-scale-middle text-lg/>
            <div v-show="loading === false" i-ep-refresh text-lg/>
          </el-button>
          <slot></slot>
        </div>
        <div class="flex-auto px-2 flex items-center justify-end">
          <el-button type="primary" @click.stop="toggleSearch">
            <div i-ep-search text-lg/>
          </el-button>
        </div>
      </div>
      <vex-spin active bg-amber class="flex-1 flex">
        <el-table :data="tableData" border>
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180"/>
          <el-table-column prop="address" label="Address"/>
        </el-table>
      </vex-spin>
    </div>
    <div flex-none class="h-1/12 flex items-center justify-between">
      <el-pagination :page-sizes="pageSizes"
                     @size-change="sizeChange"
                     :default-page-size="props.defaultPageSize"
                     layout="sizes, total"
                     :total="pagination.total"/>
      <el-pagination background layout="prev, pager, next, jumper"
                     @update:current-page="pageChange"
                     :total="pagination.total"
                     :current-page="pagination.currentPage"/>
    </div>
  </div>
</template>

<style scoped>

</style>

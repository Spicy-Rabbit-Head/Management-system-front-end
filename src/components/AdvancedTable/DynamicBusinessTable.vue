<script setup lang="ts">
import { ref, computed, reactive, toRaw } from "vue";
import type { ElTable } from "element-plus";
import { Spin as VexSpin } from "vexip-ui";
import { Pagination, FieldDisplay, OperationEvent, BusinessTableProps, Operation } from "./types"

defineOptions({name: 'DynamicBusinessTable'})

const slots = defineSlots<{
  default(): any
  search(): any
  'head-right'(): any
  operation(): any
  forefront(): any
  last(): any
}>()

const props = withDefaults(defineProps<BusinessTableProps>(), {
  defaultPageSize: 15,
  total: 0,
  isSearch: true,
  isOperation: true,
  isDisabledOperation: false,
  isFuzzySearch: true,
  isRefresh: true,
  operations: () => ['Details', 'Edit', 'Delete'],
  isPagination: true,
  isMultipleSelection: true,
})

const emits = defineEmits<{
  (e: 'pageChange', payload: Pagination): void
  (e: 'rowDetails', payload: any): void
  (e: 'rowEdit', payload: any): void
  (e: 'rowDelete', payload: any): void
  (e: 'refresh'): void
}>()

defineExpose({
  clearSelection,
  getSelectionRows,
  refreshComplete,
  refresh
})

// 操作列表
const operationsList: Operation[] = [
  {
    label: '详情',
    event: 'Details',
    icon: 'i-ep-view',
    type: 'primary'
  },
  {
    label: '编辑',
    event: 'Edit',
    icon: 'i-ep-edit',
    type: 'warning'
  },
  {
    label: '删除',
    event: 'Delete',
    icon: 'i-ep-delete',
    type: 'danger'
  },
]

// 分页
const pagination = reactive<Pagination>({
  currentPage: 1,
  pageSize: props.defaultPageSize
})

// 加载状态
const loading = ref(false);

// 搜索栏是否显示
const isSearchShow = ref(false);

// 选择行数据
const selectionRows = reactive<any[]>([]);

// 表引用
const tableRef = ref<InstanceType<typeof ElTable> | null>(null)
// 分页数组 根据默认每页条数生成
const pageSizes = computed(() => {
  const arr: Array<number> = []
  const proportions = [1, 3, 5, 10];
  proportions.forEach((item) => {
    arr.push(props.defaultPageSize * item)
  })
  return arr
});

// 是否启用操作栏
const isOperation = computed(() => {
  return props.isOperation && props.operations && props.operations.length > 0
});

// 搜索栏高度
const dynamicHeight = computed(() => {
  return isSearchShow.value ? ["h-2/12 border-t", props.isPagination ? "h-9/12" : "h-10/12"]
      : ["h-0", props.isPagination ? "h-11/12" : "h-full"]
});

// 操作宽度
const operationWidth = computed(() => {
  return slots.operation ? (slots.operation().length + availableOperations.length) * 85 : availableOperations.length * 85
});

// 可用字段
const availableFields = reactive<FieldDisplay[]>(computeFields())

// 可用操作
const availableOperations = reactive<Operation[]>(computeOperations())

/**
 * 当前页改变
 * @param val 当前页
 */
function pageChange(val: number) {
  refresh()
  pagination.currentPage = val
  emits('pageChange', toRaw<Pagination>(pagination))
}

/**
 * 每页条数改变
 * @param val 每页条数
 */
function sizeChange(val: number) {
  refresh()
  pagination.pageSize = val
  emits('pageChange', toRaw<Pagination>(pagination))
}

/**
 * 搜索栏显示切换
 */
function toggleSearch() {
  if (!props.isSearch) return
  isSearchShow.value = !isSearchShow.value;
}

/**
 * 计算操作
 * 将表格操作和传入的操作做交集
 */
function computeOperations() {
  const arr: Operation[] = []
  if (props.isDisabledOperation) return []
  if (props.operations && props.operations.length > 0) {
    const operations = operationsList.map(item => item.event)
    // 取交集
    const intersection = props.operations.filter(v => operations.includes(v))
    intersection.forEach(item => {
      arr.push({
        event: item,
        label: operationsList[operations.indexOf(item)].label,
        icon: operationsList[operations.indexOf(item)].icon,
        type: operationsList[operations.indexOf(item)].type
      })
    })
  } else {
    return []
  }
  return arr
}

/**
 * 计算字段
 * 将表格字段和传入的字段做交集
 */
function computeFields() {
  const arr: FieldDisplay[] = []
  if (props.tableData.length > 0) {
    const tableDataFields = Object.keys(props.tableData[0])
    // 取出传入的字段
    const fields = props.fields.map(item => item.prop)
    // 取交集
    const intersection = tableDataFields.filter(v => fields.includes(v))
    // 根据交集生成新的字段
    intersection.forEach(item => {
      arr.push({
        prop: item,
        label: props.fields[fields.indexOf(item)].label,
        display: props.fields[fields.indexOf(item)].defaultDisplay ?? true,
        disabled: false,
      })
    })
  } else {
    return props.fields.map(item => {
      return {
        prop: item.prop,
        label: item.label,
        display: item.defaultDisplay ?? true,
        disabled: false
      }
    })
  }
  return arr
}

/**
 * 字段是否唯一
 */
function isUnique(_: any) {
  const count = availableFields.filter(item => item.display === true).length
  if (count === 1) {
    availableFields.forEach(item => {
      if (item.display === true) {
        item.disabled = true
      }
    })
  } else {
    availableFields.forEach(item => {
      item.disabled = false
    })
  }
}

/**
 * 刷新数据
 */
function refresh(trigger: boolean = false) {
  loading.value = true
  clearSelection()
  if (trigger) {
    emits('refresh')
  }
}

/**
 * 操作
 * @param event 操作事件
 * @param row 行数据
 */
function operation(event: OperationEvent, row: any) {
  switch (event) {
    case "Edit":
      emits('rowEdit', toRaw(row))
      break
    case "Delete":
      emits('rowDelete', toRaw(row))
      break
    case "Details":
      emits('rowDetails', toRaw(row))
      break
  }
}

/**
 * 选择行改变
 * @param val 选择行数据
 */
function selectionChange(val: any) {
  selectionRows.length = 0
  selectionRows.push(...val)
}

/**
 * 清除选择
 */
function clearSelection() {
  selectionRows.length = 0
  tableRef.value?.clearSelection()
}

/**
 * 刷新完成
 */
function refreshComplete() {
  setTimeout(() => {
    loading.value = false
  }, 500)
}

/**
 * 获取选择行数据
 */
function getSelectionRows() {
  return toRaw(selectionRows)
}
</script>

<template>
  <div class="flex flex-col p-2 h-full w-full border-collapse">
    <div shrink transition-all :class="dynamicHeight[0]" class="border-x border-gray-2">
      <slot name="search"></slot>
    </div>
    <div flex-initial transition-all :class="dynamicHeight[1]">
      <div class="h-12 border-x border-t border-gray-2 flex flex-none">
        <div class="flex-auto px-2 flex items-center">
          <el-tooltip content="刷新" v-if="isRefresh">
            <el-button type="primary" @click.stop="refresh(true)">
              <div v-show="loading" i-svg-spinners-6-dots-scale-middle text-lg/>
              <div v-show="!loading" i-ep-refresh text-lg/>
            </el-button>
          </el-tooltip>
          <slot></slot>
        </div>
        <div class="flex-auto px-2 gap-2 flex items-center justify-end">
          <slot name="head-right"></slot>
          <el-dropdown :hide-on-click="false">
            <el-button type="primary">
              <div i-ep-grid text-lg text-white/>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="(item,index) in availableFields" :key="index">
                  <el-checkbox :label="item.label"
                               @change="isUnique"
                               v-model="item.display"
                               :disabled="item.disabled"/>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-tooltip v-if="isSearch" content="展开多添加查询">
            <el-button type="primary" @click.stop="toggleSearch">
              <div i-ep-search text-lg/>
            </el-button>
          </el-tooltip>
        </div>
      </div>
      <vex-spin :active="loading" mask-color="LightGray"
                style="height: calc(100% - 3rem);"
                class="shrink flex flex-col">
        <template #icon>
          <div i-svg-spinners-blocks-wave text-25/>
        </template>
        <template #tip>
          <p class="text-15">加载中...</p>
        </template>
        <el-table ref="tableRef" :data="tableData" style="height: 100%" border size="large" table-layout="auto"
                  @selection-change="selectionChange">
          <el-table-column v-if="props.isMultipleSelection" fixed="left" type="selection" width="50" align="center"/>
          <slot name="forefront"/>
          <template v-for="item in availableFields"
                    :key="item.prop">
            <el-table-column v-if="item.display"
                             min-width="150px"
                             align="center"
                             :prop="item.prop"
                             :label="item.label"/>
          </template>
          <slot name="last"/>
          <el-table-column v-if="isOperation"
                           fixed="right"
                           label="操作"
                           :width="operationWidth"
                           align="center">
            <template #default="scope">
              <el-tooltip v-for="item in availableOperations" :content="item.label">
                <el-button :type="item.type" @click.stop="operation(item.event,scope.row)">
                  <div text-lg :class="item.icon"/>
                </el-button>
              </el-tooltip>
              <slot name="operation" :row="scope.row"/>
            </template>
          </el-table-column>
        </el-table>
      </vex-spin>
    </div>
    <div flex-none class="h-1/12 flex items-center justify-between" v-if="props.isPagination">
      <el-pagination :page-sizes="pageSizes"
                     @size-change="sizeChange"
                     :default-page-size="props.defaultPageSize"
                     layout="sizes, total"
                     :total="props.total"/>
      <el-pagination background layout="prev, pager, next, jumper"
                     :page-sizes="pageSizes"
                     :default-page-size="props.defaultPageSize"
                     @update:current-page="pageChange"
                     :total="props.total"
                     :current-page="pagination.currentPage"/>
    </div>
  </div>
</template>

<style scoped>

</style>

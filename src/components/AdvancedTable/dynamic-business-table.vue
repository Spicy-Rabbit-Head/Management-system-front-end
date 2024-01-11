<script setup lang="ts">
import { ref, computed, reactive, toRaw } from "vue";
import { Spin as VexSpin } from "vexip-ui";
import { Pagination, FieldDisplay, OperationEvent, BusinessTableProps, Operation } from "./types"

defineOptions({name: 'DynamicBusinessTable'})

const props = withDefaults(defineProps<BusinessTableProps>(), {
  defaultPageSize: 15,
  isSearch: true,
  isFuzzySearch: true,
  isOperation: true,
  operations: () => ['Edit', 'Delete', 'Details'],
})

const emits = defineEmits<{
  pageChange: [pagination: Pagination],
  rowDetail: [row: any],
  rowEdit: [row: any],
  rowDelete: [row: any],
}>()

// 操作列表
const operations: Operation = [
  {
    label: '编辑',
    event: 'Edit',
    icon: 'i-ep-edit',
  },
  {
    label: '删除',
    event: 'Delete',
    icon: 'i-ep-delete',
  },
  {
    label: '详情',
    event: 'Detail',
    icon: 'i-ep-details',
  }
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

// 分页数组 根据默认每页条数生成
const pageSizes = computed(() => {
  const arr: Array<number> = []
  const proportions = [1, 3, 5, 10];
  proportions.forEach((item) => {
    arr.push(props.defaultPageSize * item)
  })
  return arr
});

// 搜索栏高度
const dynamicHeight = computed(() => {
  return isSearchShow.value ? ["h-2/12 border-t", "h-9/12"] : ["h-0", "h-11/12"]
});

// 可用字段
const availableFields = reactive<FieldDisplay[]>(computeFields())

// 可用操作
const availableOperations = computed(() => {

})

// 当前页改变
function pageChange(val: number) {
  pagination.currentPage = val
  emits('pageChange', toRaw<Pagination>(pagination))
}

// 每页条数改变
function sizeChange(val: number) {
  pagination.pageSize = val
  emits('pageChange', toRaw<Pagination>(pagination))
}

// 搜索栏显示切换
function toggleSearch() {
  isSearchShow.value = !isSearchShow.value;
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
        display: true,
        disabled: false
      })
    })
  } else {
    return props.fields.map(item => {
      return {
        prop: item.prop,
        label: item.label,
        display: true,
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

// 刷新数据
function refresh() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

// 操作事件
function operation(event: OperationEvent, row: any) {
  switch (event) {
    case "Edit":
      emits('rowEdit', row)
      break
    case "Delete":
      emits('rowDelete', row)
      break
    case "Detail":
      emits('rowDetail', row)
      break
  }
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
          <el-button type="primary" @click.stop="refresh">
            <div v-show="loading === true" i-svg-spinners-6-dots-scale-middle text-lg/>
            <div v-show="loading === false" i-ep-refresh text-lg/>
          </el-button>
          <slot></slot>
        </div>
        <div class="flex-auto px-2 flex items-center justify-end">
          <el-button-group>
            <el-button type="primary">
              <el-dropdown :hide-on-click="false">
                <div i-ep-grid text-lg text-white/>
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
            </el-button>
            <el-button type="primary" @click.stop="toggleSearch">
              <div i-ep-search text-lg/>
            </el-button>
          </el-button-group>
        </div>
      </div>
      <vex-spin :active="loading" mask-color="LightGray" class="flex-initial h-14/15 flex flex-col">
        <template #icon>
          <div i-svg-spinners-blocks-wave text-25/>
        </template>
        <template #tip>
          <p class="text-15">加载中...</p>
        </template>
        <el-table :data="tableData" border>
          <el-table-column type="selection" width="50" align="center"/>
          <template v-for="item in availableFields"
                    :key="item.prop">
            <el-table-column v-if="item.display"
                             :prop="item.prop"
                             :label="item.label"/>
          </template>
          <el-table-column v-if="props.isOperation"
                           label="操作"
                           width="200"
                           align="center">
            <template #default="scope">
              <el-tooltip content="编辑">
                <el-button type="primary" @click.stop="operation('Edit',scope)">
                  <div i-ep-edit text-lg/>
                </el-button>
              </el-tooltip>
              <el-button type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </vex-spin>
    </div>
    <div flex-none class="h-1/12 flex items-center justify-between">
      <el-pagination :page-sizes="pageSizes"
                     @size-change="sizeChange"
                     :default-page-size="props.defaultPageSize"
                     layout="sizes, total"
                     :total="props.total"/>
      <el-pagination background layout="prev, pager, next, jumper"
                     @update:current-page="pageChange"
                     :total="props.total"
                     :current-page="pagination.currentPage"/>
    </div>
  </div>
</template>

<style scoped>

</style>

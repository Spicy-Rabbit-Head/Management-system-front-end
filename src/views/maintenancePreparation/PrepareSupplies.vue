<script setup lang="ts">
import { SparePartsInfo } from "@/types/SparePartsManagement.ts";

const sparePartsInfo: Array<SparePartsInfo> = ([])

for (let i = 0; i < 15; i++) {
  sparePartsInfo.push({
    maintenanceItem: `保养项目${i}`,
    sparePartsName: `备品名称${i}`,
    sparePartsNumber: `备品料号${i}`,
    estimatedUsage: 3,
    unitPrice: 100,
  })
}

</script>

<template>
  <div grid grid-cols-3 grid-rows-2 p-4 gap-4>
    <div rounded-2 col-span-2 bg-white shadow-md overflow-hidden>
      <div class="h-1/8 border-b border-[#E4E7ED] flex items-center pl-6 text-xl">
        <span>准备中机台</span>
      </div>
      <div class="h-7/8">
        <el-table :data="sparePartsInfo" border height="100%">
          <el-table-column prop="maintenanceItem" label="负责人及成员" align="center"></el-table-column>
          <el-table-column prop="sparePartsName" label="机台编号" align="center"></el-table-column>
          <el-table-column prop="sparePartsNumber" label="机台名称" align="center"></el-table-column>
          <el-table-column prop="estimatedUsage" label="保养周期" align="center"></el-table-column>
          <el-table-column prop="estimatedUsage" label="当前状态" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template #default="scope">
              <el-button type="success" slot="reference">
                查询
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div rounded-2 bg-white shadow-md>
      <div class="h-1/8 border-b border-[#E4E7ED] flex items-center pl-6 text-xl">
        <span>准备完毕机台</span>
      </div>
      <div class="h-7/8">
        <el-table :data="sparePartsInfo" border height="100%">
          <el-table-column prop="maintenanceItem" label="负责人及成员" align="center"></el-table-column>
          <el-table-column prop="sparePartsName" label="机台编号" align="center"></el-table-column>
          <el-table-column prop="sparePartsNumber" label="机台名称" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template #default="scope">
              <el-button text type="primary" slot="reference">
                查询详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-table :data="sparePartsInfo" rounded-2 shadow-md col-span-3 border height="100%" size="large">
      <el-table-column prop="maintenanceItem" label="保养项目" align="center"></el-table-column>
      <el-table-column prop="sparePartsName" label="备品名称" align="center"></el-table-column>
      <el-table-column prop="sparePartsNumber" label="备品料号" align="center"></el-table-column>
      <el-table-column prop="estimatedUsage" label="预计使用量(PCS)" align="center"></el-table-column>
      <el-table-column prop="unitPrice" label="单次价格(元)" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button type="success" slot="reference">
            領取
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>

</style>
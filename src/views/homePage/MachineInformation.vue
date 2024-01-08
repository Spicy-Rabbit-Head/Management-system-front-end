<script setup lang="ts">
interface MachineInformation {
  numberName: string,

  grossAmount: number,

  surplus: number,
}

const machine: Array<MachineInformation> = [
  {
    numberName: 'N2085',
    grossAmount: 4400,
    surplus: 150,
  },
  {
    numberName: 'N1201',
    grossAmount: 4100,
    surplus: 571,
  },
  {
    numberName: 'N2554',
    grossAmount: 3300,
    surplus: 870,
  },
  {
    numberName: 'N1403',
    grossAmount: 3500,
    surplus: 1524,
  },
  {
    numberName: 'N0701',
    grossAmount: 4200,
    surplus: 2541,
  },
  {
    numberName: 'N0620',
    grossAmount: 4100,
    surplus: 3040,
  },
  {
    numberName: 'N1667',
    grossAmount: 4400,
    surplus: 824,
  },
  {
    numberName: 'N1749',
    grossAmount: 4400,
    surplus: 824,
  },
  {
    numberName: 'N1098',
    grossAmount: 4400,
    surplus: 824,
  },
]


</script>

<template>
  <div class="border-b-2 text-xl border-gray-3 px-4 h-1/8 text-sm font-bold flex items-center">当前机台状态</div>
  <div class="w-full h-7/8 grid grid-cols-3 gap-4 overflow-y-auto">
    <div class="flex flex-col gap-2 items-center justify-center m-2 border-2 border-[#cadefc] rounded-4"
         v-for="(item,index) in machine" :key="index">
      <p>{{ item.numberName }}</p>
      <el-progress type="circle" :percentage="(item.surplus /item.grossAmount * 100).toFixed(2)"
                   :color="item.surplus < 200 ? 'red':''"/>
      <p>总量 : {{ item.grossAmount }}</p>
      <p>剩余量 : {{ item.surplus }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
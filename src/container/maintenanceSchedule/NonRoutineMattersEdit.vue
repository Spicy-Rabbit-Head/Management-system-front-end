<script setup lang="ts">
import { ExhibitDialog, FormStructure } from "@/components/ExhibitDialog";
import { onMounted, reactive, toRaw } from "vue"
import { GetFormStructure } from "@/api/formManagement.ts";
import { NonRoutineMattersScheduling } from "@/types/maintenanceManagement.ts";

const props = defineProps<{
  payload?: NonRoutineMattersScheduling
}>()

const visible = defineModel('visible', {type: Boolean})

const emits = defineEmits<{
  (e: 'submit', payload: NonRoutineMattersScheduling): void
}>()

/**
 * 表单结构
 */
const formStructure = reactive<Array<FormStructure>>([])

/**
 * 表单数据
 */
const form = reactive<NonRoutineMattersScheduling>({
  id: 0,
  mattersName: '',
  mattersDescription: '',
  member: [],
  mattersTime: '',
})

onMounted(() => {
  GetFormStructure('NonRoutineMattersEdit').then((res) => {
    formStructure.push(...JSON.parse(res.data))
  })
  if (!!props.payload && visible.value) {
    form.id = props.payload!.id
    form.mattersName = props.payload!.mattersName
    form.mattersDescription = props.payload!.mattersDescription
    if (typeof props.payload.member === 'string')
      form.member = props.payload.member.split(' ')
    form.mattersTime = props.payload!.mattersTime
  }
})

/**
 * 提交
 */
function submit() {
  if (typeof form.member !== 'string')
    form.member = [form.member].join(' ')
  emits('submit', toRaw(form))
  visible.value = false
}
</script>

<template>
  <ExhibitDialog
      title="非例行事项查看"
      type="edit"
      v-model:form="form"
      v-model:visible="visible"
      :form-structure="formStructure"
      @submit="submit"/>
</template>

<style scoped>

</style>

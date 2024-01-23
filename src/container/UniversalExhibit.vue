<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { ExhibitDialog } from "@/components/ExhibitDialog";

const props = defineProps<{
  formName: string,
  title: string,
  payload: any
}>()

const visible = defineModel('visible', {type: Boolean})

/**
 * 表单结构
 */
const formStructure = reactive<Array<any>>([])

onMounted(() => {
})
</script>

<template>
  <ExhibitDialog
      :title="props.title"
      type="exhibit"
      v-model:form="props.payload"
      v-model:visible="visible"
      :form-structure="formStructure"/>
</template>

<style scoped>

</style>

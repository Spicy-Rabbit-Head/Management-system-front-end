<script setup lang="ts">
import { ExhibitDialogProps } from "./types"
import { computed } from "vue";

defineOptions({name: 'ExhibitDialog'})

defineEmits(['submit'])

const props = withDefaults(defineProps<ExhibitDialogProps>(), {
  type: 'exhibit',
})

/**
 * 是否禁用
 */
const disabled = computed(() => props.type === 'exhibit')
/**
 * 是否显示
 */
const visible = defineModel('visible', {type: Boolean})
/**
 * 表单数据
 */
const form = defineModel('form', {type: Object})
</script>

<template>
  <el-dialog v-model="visible"
             :title="props.title"
             align-center
             width="30%"
             class="px-8"
             :close-on-click-modal="false"
             :close-on-press-escape="false">
    <el-form :model="form" label-width="120px" label-position="top" :disabled="disabled">
      <el-form-item v-for="item in props.formStructure" :label="item.label" :key="item.label">
        <component v-if="item.component !== 'select'" :is="`el-${item.component}`"
                   v-model="form[item.prop]" placeholder="请输入"></component>
        <el-select v-else v-model="form[item.prop]" :multiple="item.multiple">
          <el-option v-for="op in item.options"
                     :key="op.label"
                     :label="op.label"
                     :value="op.value"/>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="danger" @click.stop="visible = false">取消</el-button>
      <el-button type="primary" @click.stop="$emit('submit')" v-show="!disabled">确定</el-button>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>

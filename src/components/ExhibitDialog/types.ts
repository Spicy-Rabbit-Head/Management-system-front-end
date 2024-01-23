export interface ExhibitDialogProps {
  /**
   * 标题
   */
  title: string

  /**
   * 类型
   */
  type?: DialogType

  /**
   * 表单结构
   */
  formStructure: FormStructure[]
}

export type DialogType = 'exhibit' | 'edit' | 'add'

export type FormStructure = InputStructure | SelectStructure | SwitchStructure

/**
 * 输入框结构
 */
interface InputStructure {
  /**
   * 组件类型
   */
  component: 'input'

  /**
   * 标签
   */
  label: string

  /**
   * 绑定值
   */
  prop: string
}

/**
 * 选择器选项
 */
interface SelectOption {
  /**
   * 标签
   */
  label: string

  /**
   * 值
   */
  value: string | number | boolean
}

/**
 * 选择器结构
 */
interface SelectStructure {
  /**
   * 组件类型
   */
  component: 'select'

  /**
   * 标签
   */
  label: string

  /**
   * 绑定值
   */
  prop: string

  /**
   * 是否多选
   */
  multiple: boolean

  /**
   * 选项
   */
  options: Array<SelectOption>
}

/**
 * 开关结构
 */
interface SwitchStructure {
  /**
   * 组件类型
   */
  component: 'switch'

  /**
   * 标签
   */
  label: string

  /**
   * 绑定值
   */
  prop: string
}

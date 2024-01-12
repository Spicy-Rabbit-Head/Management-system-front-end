export interface BusinessTableProps {
  /**
   * 表格数据
   */
  tableData: any[]

  /**
   * 总条数
   */
  total: number

  /**
   * 字段
   */
  fields: Field[]

  /**
   * 默认每页条数
   */
  defaultPageSize?: number

  /**
   * 是否启用多条件搜索
   */
  isSearch?: boolean

  /**
   * 是否启用模糊搜索
   */
  isFuzzySearch?: boolean

  /**
   * 是否启用操作
   */
  isOperation?: boolean

  /**
   * 操作
   */
  operations?: OperationEvent[]
}

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
}

/**
 * 字段
 */
export interface Field {
  /**
   * 字段名
   */
  prop: string

  /**
   * 字段标题
   */
  label: string

  /**
   * 默认显示
   */
  defaultDisplay?: boolean
}

/**
 * 字段显示
 */
export interface FieldDisplay extends Field {
  /**
   * 是否显示
   */
  display: boolean,

  /**
   * 禁用
   */
  disabled: boolean
}

/**
 * 操作
 */
export interface Operation {
  /**
   * 操作事件
   */
  event: OperationEvent

  /**
   * 操作标题
   */
  label: string

  /**
   * 操作图标
   */
  icon: string

  /**
   * 操作类型
   */
  type: OperationType
}

/**
 * 操作类型
 */
export type OperationType = 'primary' | 'success' | 'warning' | 'danger'

/**
 * 操作事件
 */
export type OperationEvent = 'Edit' | 'Delete' | 'Details'

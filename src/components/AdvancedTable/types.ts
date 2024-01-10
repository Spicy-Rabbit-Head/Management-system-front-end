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

// 排程表格数据
import {
  ExecutionState,
  SpotInspectionState,
  PrepareState,
  ReviewState,
  TagType, ProductionConfirmation, ExtremeVacuumConfirmation, MembraneThicknessConfirmation, AdhesionConfirmation
} from "@/enum/maintenanceManagement.ts";

export interface ScheduleTableData {
  // 主键id
  id: number,

  // 设备编号
  equipmentNumber: string,

  // 设备型号
  equipmentModelNumber: string,

  // 设备名称
  equipmentName: string,

  // 保养周期
  maintenanceCycle: string,

  // 计划时间
  planTime: Date,

  // 排定时间
  schedulingTime: string,

  // 负责人
  personInCharge: string,

  // 成员
  member: string,

  // 作业时间
  operationTime: string,

  // 排程状态
  schedulingStatus: string,

  // 总数
  total?: number,
}

// 排程界面数据
export interface SchedulingInterfaceData {
  // 成员列表
  members: Array<string>,

  // 排程数据
  schedulingData: Array<ScheduleTableData>
}

/**
 * 排程选择数据
 */
export interface SchedulingSelect {
  /**
   * 机台选择
   */
  machineSelect: Array<number>

  /**
   * 负责人
   */
  personInCharge: string,

  /**
   * 成员选择
   */
  memberSelect: Array<string>,

  /**
   * 排定时间
   */
  schedulingTime: string

  /**
   * 排程状态
   */
  status?: boolean
}

/**
 * 标签枚举状态
 */
export interface TagEnumStatus<T> {
  content: T,

  status: TagType
}

// 保养状态表数据
export interface MaintenanceStatusTableData {
  /**
   * 主键id
   */
  id: number,

  /**
   * 设备编号
   */
  equipmentNumber: string,

  /**
   * 设备名称
   */
  equipmentName: string,

  /**
   * 保养周期
   */
  maintenanceCycle: string,

  /**
   * 成员
   */
  directorsAndMembers: string,

  /**
   * 保养准备
   */
  maintenanceReserve: TagEnumStatus<PrepareState>,

  /**
   * 保养执行
   */
  maintenanceExecution: TagEnumStatus<ExecutionState>,

  /**
   * 保养点检
   */
  maintenanceInspection: TagEnumStatus<SpotInspectionState>,

  /**
   * 保养检讨
   */
  maintenanceReview: TagEnumStatus<ReviewState>,
}

/**
 * 其他排程表格数据
 */
export interface OtherScheduleTableData {
  /**
   * 需求
   */
  requirement: string,

  /**
   * 需求人
   */
  demander: string,

  /**
   * 负责人
   */
  personInCharge: string,

  /**
   * 需求明细
   */
  demandDetail: string,

  /**
   * 期望时间
   */
  expectedTime: Date,
}

/**
 * 滤网排程表格数据
 */
export interface FilterScreenScheduleTableData {
  requirement: Date,

  demander: string,

  personInCharge: string,
}

/**
 * 换靶状态表数据
 */
export interface ChangeTargetStatusTableData {
  /**
   * 主键id
   */
  id: number,

  /**
   * 设备编号
   */
  equipmentNumber: string,

  /**
   * 负责人
   */
  personInCharge: string,

  /**
   * 准备
   */
  reserve: TagEnumStatus<PrepareState>,

  /**
   * 执行
   */
  execution: TagEnumStatus<ExecutionState>,

  /**
   * 生产确认
   */
  productionConfirmation: TagEnumStatus<ProductionConfirmation>,

  /**
   * 极限真空确认
   */
  limitVacuumConfirmation: TagEnumStatus<ExtremeVacuumConfirmation>,

  /**
   * 膜厚确认
   */
  filmThicknessConfirmation: TagEnumStatus<MembraneThicknessConfirmation>,

  /**
   * 附着力确认
   */
  adhesionConfirmation: TagEnumStatus<AdhesionConfirmation>,
}

/**
 * 模组排程数据
 */
export interface ModuleScheduling {
  /**
   * 模组名称
   */
  moduleName: string,

  /**
   * 模组编号
   */
  moduleNumber: string,

  /**
   * 保养数量
   */
  maintenanceQuantity: number,

  /**
   * 模组型号
   */
  modelNumber: string,

  /**
   * 保养人员
   */
  maintenancePersonnel: string,

  /**
   * 排定保养时间
   */
  schedulingTime: string,
}

/**
 * 非例行事项
 */
export interface NonRoutineMattersScheduling {
  /**
   * 主键id
   */
  id: number,

  /**
   * 事项名称
   */
  mattersName: string,

  /**
   * 事项描述
   */
  mattersDescription: string,

  /**
   * 成员
   */
  member: string[] | string,

  /**
   * 验收佐证
   */
  acceptanceEvidence?: string,

  /**
   * 事项时间
   */
  mattersTime: string
}

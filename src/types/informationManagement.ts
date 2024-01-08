/**
 * 设备数据
 */
export interface DeviceData {
  /**
   * 设备编号
   */
  deviceNumber: string;

  /**
   * 设备名称
   */
  deviceName: string;

  /**
   * 设备型号
   */
  deviceModel: string;

  /**
   * 制作厂商
   */
  manufacturer: string;

  /**
   * 车间
   */
  workshop: string;

  /**
   * 站别
   */
  station: string;

  /**
   * 位置
   */
  location: string;

  /**
   * 设备状态
   */
  deviceStatus: string;

  /**
   * 是否有效
   */
  isValid: boolean;

  /**
   * 保养规则名
   */
  ruleName: string;

  /**
   * 启用日期
   */
  enableDate: string;

  /**
   * 保养基准文号
   */
  benchmarkDocumentNumber: string;

  /**
   * OIS文号
   */
  oisDocumentNumber: string;

  /**
   * 每日设备巡检基准
   */
  deviceInspectionBenchmark: string;

  /**
   * 变更日期
   */
  changeDate: Date;

  /**
   * 总数
   */
  total: number;
}
/**
 * 备品信息
 */
export interface SparePartsInfo {
  /**
   * 保养项目
   */
  maintenanceItem: string;

  /**
   * 备品名称
   */
  sparePartsName: string;

  /**
   * 备品料号
   */
  sparePartsNumber: string;

  /**
   * 预计使用量
   */
  estimatedUsage: number;

  /**
   * 单次价格
   */
  unitPrice: number;
}
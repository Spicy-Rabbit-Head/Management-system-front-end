import { get } from "@/api/requestInstance.ts";
import { DeviceData } from "@/types/informationManagement.ts";

/**
 * 获取设备数据
 * @param offset 偏移量
 * @param pageSize 页大小
 */
export function GetDeviceData(offset: number, pageSize: number) {
  return get<Array<DeviceData>>("information/getDeviceData", {offset: offset, pageSize: pageSize});
}
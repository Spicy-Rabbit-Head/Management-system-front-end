import { get, post } from "@/api/requestInstance.ts";
import {
  ModuleScheduling, NonRoutineMattersScheduling,
  ScheduleTableData,
  SchedulingInterfaceData,
  SchedulingSelect
} from "@/types/maintenanceManagement.ts";

// 获取排程界面数据
export function SchedulingInterfaceData(offset: number, pageSize: number) {
  return get<SchedulingInterfaceData>("schedule/getScheduleInterface", {offset: offset, pageSize: pageSize});
}

// 获取排程数据
export function SchedulingData(workshop: string, offset: number, pageSize: number) {
  return get<Array<ScheduleTableData>>("schedule/getSchedule", {
    workshop: workshop,
    offset: offset,
    pageSize: pageSize
  });
}

/**
 * 修改排程数据
 * @param schedulingSelect 排程数据
 * @param status 排程状态
 */
export function ModifySchedulingData(schedulingSelect: SchedulingSelect, status: boolean = true) {
  schedulingSelect.status = status;
  return post<boolean>("schedule/updateSchedule", schedulingSelect);
}

// 获取模组排程
export function getModuleSchedule() {
  return get<Array<ModuleScheduling>>("schedule/getModuleSchedule");
}

// 获取非例行事项排程
export function getNonRoutineSchedule() {
  return get<Array<NonRoutineMattersScheduling>>("schedule/getNonRoutineSchedule");
}

// 添加非例行事项排程
export function addNonRoutineSchedule(nonRoutineMattersScheduling: NonRoutineMattersScheduling) {
  return post<String>("schedule/insetNonRoutineSchedule", nonRoutineMattersScheduling);
}

// 删除非例行事项排程
export function deleteNonRoutineSchedule(id: number) {
  return post<String>("schedule/deleteNonRoutineSchedule/" + id);
}

// 获取保养成员
export function getMaintenanceMembers() {
  return get<Array<string>>("schedule/getMaintenanceMembers");
}

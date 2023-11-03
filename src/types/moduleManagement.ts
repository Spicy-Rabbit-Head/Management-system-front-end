import { ScheduleTime } from "@/enum/maintenanceManagement.ts";

/**
 * 模组信息
 */
export interface ModuleInformation {
    /**
     * 模组名称
     */
    moduleName: string;

    /**
     * 模组编号
     */
    moduleNumber: string;

    /**
     * 保养数量
     */
    maintenanceQuantity: number;

    /**
     * 模组型号
     */
    moduleType: string;

    /**
     * 保养人员
     */
    maintenancePersonnel: string;

    /**
     * 排定保养时间
     */
    scheduleTime: ScheduleTime;
}
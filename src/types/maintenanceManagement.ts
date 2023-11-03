// 排程表格数据
import {
    MaintenanceExecutionContent,
    MaintenanceInspectionContent,
    MaintenanceReserveContent,
    MaintenanceReviewContent,
    TagType
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

// 成员数据
export interface Member {
    // 成员名字
    memberName: string,
}

// 排程界面数据
export interface SchedulingInterfaceData {
    // 成员列表
    members: Array<Member>,

    // 排程数据
    schedulingData: Array<ScheduleTableData>
}

// 排程选择
export interface SchedulingSelect {
    // 负责人
    personInCharge: string,

    // 成员选择
    memberSelect: Array<string>,

    // 排定时间
    schedulingTime: string

    // 机台选择
    machineSelect: Array<number>
}

// 保养状态表数据
export interface MaintenanceStatusTableData {
    // 主键id
    id: number,

    // 设备编号
    equipmentNumber: string,

    // 设备名称
    equipmentName: string,

    // 保养周期
    maintenanceCycle: string,

    // 成员
    directorsAndMembers: string,

    // 保养准备
    maintenanceReserve: {
        content: MaintenanceReserveContent,
        status: TagType
    },

    // 保养执行
    maintenanceExecution: {
        content: MaintenanceExecutionContent,
        status: TagType
    },

    // 保养点检
    maintenanceInspection: {
        content: MaintenanceInspectionContent,
        status: TagType
    },

    // 保养检讨
    maintenanceReview: {
        content: MaintenanceReviewContent,
        status: TagType
    },
}
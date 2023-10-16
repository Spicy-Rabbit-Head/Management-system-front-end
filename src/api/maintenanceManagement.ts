import { get, post } from "@/api/requestInstance.ts";
import { ScheduleTableData, SchedulingInterfaceData, SchedulingSelect } from "@/types/maintenanceManagement.ts";

// 获取排程界面数据
export async function SchedulingInterfaceData(offset: number, pageSize: number) {
    return new Promise<SchedulingInterfaceData>((resolve) => {
        get<SchedulingInterfaceData>("schedule/getScheduleInterface", {offset: offset, pageSize: pageSize})
            .then(response => {
                resolve(response.data);
            })
    })
}

// 获取排程数据
export async function SchedulingData(workshop: string, offset: number, pageSize: number) {
    return new Promise<Array<ScheduleTableData>>((resolve) => {
        get<Array<ScheduleTableData>>("schedule/getSchedule", {workshop: workshop, offset: offset, pageSize: pageSize})
            .then(response => {
                resolve(response.data);
            })
    })
}

// 修改排程数据
export async function ModifySchedulingData(data: SchedulingSelect) {
    return new Promise<boolean>((resolve) => {
        post<boolean>("schedule/updateSchedule", data).then(response => {
            resolve(response.data);
        })
    })
}

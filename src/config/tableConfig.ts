// 表格字段
export interface TableField {
    field: string,

    label: string
}

// 排程表格字段
export const scheduleTableField: Array<TableField> = [
    {
        field: "equipmentNumber",
        label: "设备编号",
    },
    {
        field: "equipmentModelNumber",
        label: "设备型号",
    },
    {
        field: "equipmentName",
        label: "设备名称",
    },
    {
        field: "maintenanceCycle",
        label: "保养周期",
    },
    {
        field: "planTime",
        label: "计划时间",
    },
    {
        field: "personInCharge",
        label: "负责人",
    },
    {
        field: "member",
        label: "成员",
    },
    {
        field: "schedulingTime",
        label: "排定时间",
    },
]
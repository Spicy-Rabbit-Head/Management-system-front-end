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

// 保养表格状态字段
export const maintenanceStatusFormField: Array<Array<TableField>> = [
    [
        {
            field: "equipmentNumber",
            label: "设备编号",
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
            field: "directorsAndMembers",
            label: "负责人及成员",
        },
    ],
    [
        {
            field: "maintenanceReserve",
            label: "保养准备",
        },
        {
            field: "maintenanceExecution",
            label: "保养执行",
        },
        {
            field: "maintenanceInspection",
            label: "保养点检",
        },
        {
            field: "maintenanceReview",
            label: "保养检讨",
        },
    ]
]
/**
 * 保养准备状态
 */
export enum MaintenanceReserveContent {
    /**
     * 准备中
     */
    preparing = "准备中",
    /**
     * 准备完成待确认
     */
    preparingCompleted = "准备完成待确认",
    /**
     * 准备完成
     */
    prepared = "准备完成",
}

/**
 * 保养执行状态
 */
export enum MaintenanceExecutionContent {
    /**
     * 待执行
     */
    pendingExecution = "待执行",
    /**
     * 执行中
     */
    executing = "已接单,执行中",
    /**
     * 执行完成待填费用
     */
    executionCompleted = "执行完成待填费用",
    /**
     * 执行完成
     */
    executed = "执行完成",
}

/**
 * 保养点检状态
 */
export enum MaintenanceInspectionContent {
    /**
     * 待点检
     */
    pendingInspection = "待点检",
    /**
     * 点检完成待确认
     */
    inspectionCompleted = "点检完成待确认",
    /**
     * 点检完成已确认
     */
    confirmed = "点检完成已确认",
}

/**
 * 保养检讨状态
 */
export enum MaintenanceReviewContent {
    /**
     * 待检讨
     */
    pendingDiscussion = "待检讨",
    /**
     * 检讨中
     */
    discussing = "检讨中",
    /**
     * 检讨完成
     */
    discussed = "检讨完成",
}

/**
 * 标签类型
 */
export enum TagType {
    /**
     * 成功
     */
    success = "success",
    /**
     * 警告
     */
    warning = "warning",
    /**
     * 危险
     */
    danger = "danger",
    /**
     * 信息
     */
    info = "info",
}

/**
 * 排定时间
 */
export enum ScheduleTime {
    /**
     * 上午
     */
    morning = "上午",

    /**
     * 下午
     */
    afternoon = "下午",

    /**
     * 全天
     */
    allDay = "全天",
}
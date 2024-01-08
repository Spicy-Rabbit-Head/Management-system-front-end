import { FunctionalComponent, SVGAttributes } from "vue";

/**
 * 拟态卡片样式
 */
export interface MimicryCardStyle {
    bottomCard?: MimicryBottomCardStyle,

    topCard?: MimicryTopCardStyle,
}

/**
 * 拟态底部卡片样式
 */
export interface MimicryBottomCardStyle {
    switchButton?: 'mimicry-prompt-box-l' | 'mimicry-prompt-box-r',

    switchButtonHidden1?: MimicryCardHiddenTransition,

    switchButtonHidden2?: MimicryCardHiddenTransition,

    circle?: MimicryCircleTransition | null,
}

/**
 * 拟态卡片隐藏过渡
 */
export type MimicryCardHiddenTransition = 'switch-hidden' | null


/**
 * 拟态圆过渡
 */
export interface MimicryCircleTransition {
    circle1?: string,

    circle2?: string,
}

/**
 * 拟态顶部卡片样式
 */
export interface MimicryTopCardStyle {
    switchLogin?: 'register-switch-r register-hidden' | 'register-switch-l',

    switchRegister?: 'register-switch-r' | 'register-switch-l register-hidden',
}

/**
 * 响应数据
 */
export interface ResponseData<T = any> {
    /**
     * 状态码
     */
    code: number,

    /**
     * 消息
     */
    message: string,

    /**
     * 服务状态
     */
    status: boolean,

    /**
     * 数据(泛型)
     */
    data: T
}

/**
 * 全局共享状态
 */
export interface GlobalStoreInterface {
    menuStatus?: boolean,

    tabsData?: TabsData[],
}

/**
 * 全局标签导航数据
 */
export interface TabsData {
    label: string

    path: string

    state: string
}

/**
 * 密码重置状态
 */
export interface PasswordResetInterface {
    current: number;

    resetState: boolean;

    tagState: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
}

/**
 * 标签导航
 */
export interface TabNavInterface {
    title: string;

    icon?: FunctionalComponent<SVGAttributes>,
}

/**
 * 节点类型
 */
export type NodeType = 'primary' | 'success' | 'warning' | 'error' | 'info';

/**
 * 内容类型
 */
export type ContentType = 'heading' | 'paragraph';

/**
 * 通知内容
 */
export interface NotificationContent {
    /**
     * 内容类型
     */
    type: ContentType,

    /**
     * 内容
     */
    content: string,
}

/**
 * RBG颜色
 */
export interface RGBColor {
    r: number;

    g: number;

    b: number;

    a?: number;
}

/**
 * 通知
 */
export interface Notification {
    /**
     * 时间戳
     */
    timestamp: Date,

    /**
     * 发布者
     */
    publisher?: string,

    /**
     * 标题
     */
    title?: string,

    /**
     * 节点类型
     */
    type?: NodeType,

    /**
     * 节点颜色
     */
    color?: RGBColor | string,

    /**
     * 是否空心点
     */
    hollow?: boolean,

    /**
     * 内容
     */
    content?: Array<NotificationContent>,
}

/**
 * 待办事项
 */
export interface TodoList {
    /**
     * 事项键
     */
    key: string;

    /**
     * 事项图标背景
     */
    backgroundColor: string;

    /**
     * 事项图标
     */
    icon: string;

    /**
     * 事项标题
     */
    title: string;

    /**
     * 事项时间
     */
    dates: Date;

    /**
     * 是否提醒
     */
    remind: boolean;
}

/**
 * 项目进度表数据
 */
export interface ProjectProgressData {
    /**
     * ID
     */
    id: number;

    /**
     * 项目阶段
     */
    phase: string;

    /**
     * 时间节点
     */
    timeNode: string;

    /**
     * 项目进度
     */
    schedule: number;

    /**
     * 子节点
     */
    children?: ProjectProgressData[];
}

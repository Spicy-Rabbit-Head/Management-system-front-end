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
}

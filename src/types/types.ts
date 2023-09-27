import {FunctionalComponent, SVGAttributes} from "vue";
import {Router} from "vue-router";

// 登录注册共享
export type LoginStoreInterface = {
    loginScreen: MimicryAction,
    automaticLogin: boolean,
    type: boolean,
    router: Router,
    isAuthenticated: boolean,
    currentRoute: string,
    loginLoading: boolean,
    loginException: null | number
}

// 拟态界面动作
export interface MimicryAction {
    switchButton?: string,

    switchButtonHidden1?: string,

    switchButtonHidden2?: string,

    circle1?: string,

    circle2?: string,

    switchRegister?: string,

    switchLogin?: string,
}

// 全局共享状态
export type GlobalStoreInterface = {
    menuStatus: boolean,
    tabsData?: TabsData[],
}

// 全局标签导航数据
export type TabsData = {
    label: string
    path: string
    state: string
}

// 登录注册数据
export type FormLogin = {
    username: null | string,
    password: null | string,
    repeatPassword?: null | string
}


// 密码重置状态
export type PasswordResetInterface = {
    current: number;
    resetState: boolean;
    tagState: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
}

// 标签导航
export type TabNavInterface = {
    title: string;
    icon?: FunctionalComponent<SVGAttributes>,
}

// 菜单子项
export type Children = {
    label: string;
    path?: string;
    icon?: string;
    name?: string;
    children?: Children[]
}

// 动态菜单
export type DynamicMenuInterface = {
    label: string;
    children?: Children[]
}
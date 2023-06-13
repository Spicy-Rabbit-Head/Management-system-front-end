import {FunctionalComponent, SVGAttributes} from "vue/dist/vue";
import {Router} from "vue-router";

// 登录注册共享
interface LoginStoreInterface {
    loginScreen: LoginScreen,
    formLogin: FormLogin,
    automaticLogin: boolean,
    type: boolean,
    router: Router,
    loading: boolean,
    isAuthenticated: boolean,
    currentRoute: string,
    loginLoading: boolean,
    loginException: null | number
}

// 登录界面
interface LoginScreen {
    switchButton: string,
    switchButtonHidden1: null | string,
    switchButtonHidden2: null | string,
    circle1: null | string,
    circle2: null | string,
    switchRegister: string,
    switchLogin: string,
}

// 全局共享状态
interface GlobalStoreInterface {
    menuStatus: boolean,
    tabsData?: TabsData[],
}

// 全局标签导航数据
interface TabsData {
    label: string
    state: string
}

// 登录注册数据
interface FormLogin {
    username: null | string,
    password: null | string,
    repeatPassword?: null | string
}


// 密码重置状态
interface PasswordResetInterface {
    current: number;
    resetState: boolean;
    tagState: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
}

// 标签导航
interface TabNavInterface {
    title: string;
    icon?: FunctionalComponent<SVGAttributes>,
}

// 动态菜单
interface DynamicMenuInterface {
    label: string;
    children?: {
        label: string;
        icon: string;
        name: string;
        children?: {
            label: string;
            icon: string;
            name: string;
        }[]
    }[]
}

export type
{
    LoginStoreInterface,
    GlobalStoreInterface,
    TabsData,
    PasswordResetInterface,
    TabNavInterface,
    DynamicMenuInterface
}
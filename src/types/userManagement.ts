// 菜单子项
export interface MenuItem {
    menuName: string;

    path: string;

    componentPath?: string;

    icon?: string;

    menuDesc?: string;

    children?: MenuItem[]
}

// 动态菜单
export interface DynamicMenuInterface {
    groupName: string;

    menus: MenuItem[]
}

// 用户表单
export interface UserForm {
    // 用户名
    username: string,

    // 密码
    password: string,

    // 重复密码
    repeatPassword?: string
}
import {FunctionalComponent, SVGAttributes} from "vue/dist/vue";

// 密码重置状态
interface PasswordResetInterface {
    Current: number;
    resetState: boolean;
    tagState: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error';
}

// 标签导航
interface TabNavInterface {
    title: string;
    icon?: FunctionalComponent<SVGAttributes>,
    tab?: {
        id: number,
        label: string,
    }[]
}

export type
{
    PasswordResetInterface,
    TabNavInterface,
}
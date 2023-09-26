import {defineStore} from 'pinia'
import {useRouter} from "vue-router";
import {GlobalStoreInterface, LoginStoreInterface} from "@/types/interface";

// 登录注册界面实体
export const LoginStore = defineStore('LoginStore', {
    state: (): LoginStoreInterface => {
        return {
            // 登录注册界面切换实体
            loginScreen: {
                switchButton: 'prompt-box-switch-l',
                switchButtonHidden1: null,
                switchButtonHidden2: 'switch-hidden',
                circle1: null,
                circle2: null,
                switchRegister: 'register-switch-r',
                switchLogin: 'register-switch-r switch-hidden',
            },
            // 自动登录状态
            automaticLogin: false,
            // 登录注册界面切换状态 true拟态 false简单
            type: true,
            // 路由
            router: useRouter(),
            // 是否登录
            isAuthenticated: false,
            // 当前路由
            currentRoute: '',
            // 登录加载状态
            loginLoading: false,
            // 登录异常
            loginException: null
        }
    },
    actions: {
        // 拟态登录注册过渡切换
        ToggleSwitch_Login(e: number): void {
            if (e === 0) {
                this.loginScreen = {
                    switchButton: 'prompt-box-switch-r',
                    switchButtonHidden2: null,
                    switchButtonHidden1: 'switch-hidden',
                    switchLogin: 'register-switch-l',
                    switchRegister: 'register-switch-l switch-hidden',
                    // 上圆过渡
                    circle1: '!tw-left-2/5',
                    // 下圆过渡
                    circle2: '!-tw-left-1/4',
                }
            } else {
                this.loginScreen = {
                    switchButton: 'prompt-box-switch-l',
                    switchButtonHidden1: null,
                    switchButtonHidden2: 'switch-hidden',
                    circle1: null,
                    circle2: null,
                    switchRegister: 'register-switch-r',
                    switchLogin: 'register-switch-r switch-hidden',
                }
            }
        },
        // 简单界面切换
        basicSwitch(str: string): void {
            this.router.replace({name: str}).then(() => {
            })
        },
    }
})

// 全局共享状态实体
export const GlobalStore = defineStore('GlobalStore', {
    state: (): GlobalStoreInterface => {
        return {
            // 菜单栏状态 (false展开 true收起)
            menuStatus: false,
        }
    },
})

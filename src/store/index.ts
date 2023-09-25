import {defineStore} from 'pinia'
import {post} from "@/api/requestInstance";
import {useRouter} from "vue-router";
import {showToast} from "@/utils/componentPlugins";
import {GlobalStoreInterface, LoginStoreInterface} from "@/types/interface";

// 登录注册界面实体
export const LoginStore = defineStore('LoginStore', {
    state: (): LoginStoreInterface => {
        return {
            // 登录注册实体
            formLogin: {
                username: null,
                password: null,
                repeatPassword: null
            },
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
            this.Clear()
        },
        // 清除缓冲
        Clear(): void {
            this.formLogin = {username: null, password: null, repeatPassword: null}
            this.automaticLogin = false
        },
        // 简单界面切换
        basicSwitch(str: string): void {
            this.router.replace({name: str}).then(() => {
                this.Clear()
            })
        },
        // 登录请求
        login(): void {
            window.setTimeout(() => {
                this.loginLoading = false
            }, 3000)
            post('loginRelated/login', this.formLogin, (data: any): void => {
                this.isAuthenticated = true
                this.router.replace({name: 'Sidebar'}).then(() => {
                    if (this.automaticLogin) {
                        window.sessionStorage.removeItem('token')
                        window.localStorage.setItem('token', data.data)
                    } else {
                        window.localStorage.removeItem('token')
                        window.sessionStorage.setItem('token', data.data)
                    }
                    this.Clear()
                })
            }, (data: any): void => {
                showToast(data.message, 'error')
            })
        },
        // 注册请求
        register(i: boolean): void {
            post('loginRelated/register', this.formLogin, (): void => {
                showToast("注册成功,请登录", 'success')
                if (i) {
                    this.ToggleSwitch_Login(0)
                } else {
                    this.router.replace({name: 'BasicLogin'}).then()
                }
            }, (data: any): void => {
                showToast(data.message, 'error')
            })
        }
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

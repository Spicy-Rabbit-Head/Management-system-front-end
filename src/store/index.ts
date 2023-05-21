import {defineStore} from 'pinia'
import {post} from "@/api/request";
import router from "@/router";
import {Toast} from "vexip-ui";

// 登录注册界面接口
interface LoginPiniaInterface {
    LoginScreen: {
        switchButton: string,
        switchButtonHidden1: null | string,
        switchButtonHidden2: null | string,
        circle1: null | string,
        circle2: null | string,
        switchRegister: string,
        switchLogin: string,
    },
    FormLogin: {
        username: null | string,
        password: null | string,
        repeatPassword?: null | string
    },
    automaticLogin: boolean,
    type: boolean,
}

// 登录注册界面实体
export const LoginPinia = defineStore('LoginPinia', {
    state: (): LoginPiniaInterface => {
        return {
            FormLogin: {
                username: null,
                password: null,
                repeatPassword: null
            },
            LoginScreen: {
                switchButton: 'prompt-box-switch-l',
                switchButtonHidden1: null,
                switchButtonHidden2: 'switch-hidden',
                circle1: null,
                circle2: null,
                switchRegister: 'register-switch-r',
                switchLogin: 'register-switch-r switch-hidden',
            },
            automaticLogin: false,
            type: true,
        }
    },
    actions: {
        // 拟态登录注册过渡切换
        ToggleSwitch_Login(e: number): void {
            if (e === 0) {
                this.LoginScreen = {
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
                this.LoginScreen = {
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
            this.FormLogin = {username: null, password: null, repeatPassword: null}
            this.automaticLogin = false
        },
        // 简单界面切换
        basicSwitch(str: string): void {
            router.push({name: str}).then(() => {
                this.Clear()
            })
        },
        // 登录请求
        login(): void {
            post('loginRelated/login', this.FormLogin, (data: any): void => {
                router.push({name: 'Home'}).then(() => {
                    if (this.automaticLogin) {
                        window.sessionStorage.removeItem('token')
                        window.localStorage.setItem('token', data.data)
                    } else {
                        window.localStorage.removeItem('token')
                        window.sessionStorage.setItem('token', data.data)
                    }
                    this.Clear()
                })
                Toast.success({
                    content: "登录成功",
                    showMask: true,
                })
            }, (data: any): void => {
                Toast.error({
                    content: data.message,
                    showMask: true,
                })
            })
        },
        // 注册请求
        register(i: boolean): void {
            post('loginRelated/register', this.FormLogin, (): void => {
                Toast.success({
                    content: "注册成功,请登录",
                    showMask: true,
                })
                if (i) {
                    this.ToggleSwitch_Login(0)
                } else {
                    router.push({name: 'BasicLogin'}).then()
                }
            }, (data: any): void => {
                Toast.error({
                    content: data.message,
                    showMask: true,
                })
            })
        }
    }
})

export const MotionPinia = defineStore('Motion', {
    state: () => {
        return {
            motion: {
                initial: {
                    opacity: 0,
                    y: 100,
                },
                enter: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                        mass: 1,
                        delay: 200,
                    },
                }
            }
        }
    }
})
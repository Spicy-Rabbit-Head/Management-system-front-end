import {defineStore} from 'pinia'
import {post} from "@/api/request";
import router from "@/router";
import {Toast} from "vexip-ui";

// 登录注册界面接口
interface LoginPiniaInterface {
    Switch_btn: string,
    Switch_btn_hidden1: null | string,
    Switch_btn_hidden2: null | string,
    Circle1: null | string,
    Circle2: null | string,
    FormRegister: {
        username: null | string,
        password: null | string,
        repeatPassword: null | string
    },
    FormLogin: {
        username: null | string,
        password: null | string
    },
    Switch_Register: string,
    Switch_Login: string,
    AutomaticLogin: boolean,
    type: boolean,
    showPasswordReset: boolean,
}

// 登录注册界面实体
export const LoginPinia = defineStore('LoginPinia', {
    state: (): LoginPiniaInterface => {
        return {
            Switch_btn: 'Prompt_box_switch_txl',
            Switch_btn_hidden1: null,
            Switch_btn_hidden2: 'SwitchHidden',
            Circle1: null,
            Circle2: null,
            FormRegister: {
                username: null,
                password: null,
                repeatPassword: null
            },
            FormLogin: {
                username: null,
                password: null
            },
            Switch_Register: 'Register-switch_txr',
            Switch_Login: 'Register-switch_txr SwitchHidden',
            AutomaticLogin: false,
            type: true,
            showPasswordReset: false,
        }
    },
    actions: {
        // 登录注册过渡切换
        ToggleSwitch_Login(e: number): void {
            if (e === 0) {
                this.Switch_btn = 'Prompt_box_switch_txr'
                this.Switch_btn_hidden2 = null
                this.Switch_btn_hidden1 = 'SwitchHidden'
                this.Switch_Login = 'Register-switch_txl'
                this.Switch_Register = 'Register-switch_txl SwitchHidden'
                // 上圆过渡
                this.Circle1 = '!tw-left-2/5'
                // 下圆过渡
                this.Circle2 = '!-tw-left-1/4'
            } else {
                this.Switch_btn = 'Prompt_box_switch_txl'
                this.Switch_btn_hidden1 = null
                this.Switch_btn_hidden2 = 'SwitchHidden'
                this.Switch_Register = 'Register-switch_txr'
                this.Switch_Login = 'Register-switch_txr SwitchHidden'
                this.Circle1 = null
                this.Circle2 = null
            }
            this.Clear()
        },
        // 清除缓冲
        Clear(): void {
            this.FormRegister = {
                username: null,
                password: null,
                repeatPassword: null
            }
            this.FormLogin = {username: null, password: null}
            this.AutomaticLogin = false
        },
        // 登录请求
        login(): void {
            post('loginRelated/login', this.FormLogin, (data: any): void => {
                router.push({name: 'Home'}).then(() => {
                    if (this.AutomaticLogin) {
                        window.localStorage.setItem('token', data.data)
                    } else {
                        window.sessionStorage.setItem('token', data.data)
                    }
                })
            })
        },
        // 注册请求
        register(): void {
            post('loginRelated/register', this.FormRegister, (): void => {
                Toast.success({
                    content: "注册成功,请登录",
                    closable: true,
                    showMask: true,
                })
                router.push({name: 'BasicLogin'}).then()
            }, (data: any): void => {
                Toast.error({
                    content: data.message,
                    closable: true,
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
                },
                leave: {
                    opacity: 0,
                    y: -100,
                },
            }
        }
    }
})
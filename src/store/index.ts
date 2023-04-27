import {defineStore} from 'pinia'
import {useRouter} from "vue-router";
import {post} from "@/api/request";

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
        passwordDuplication: null | string
    },
    FormLogin: {
        username: null | string,
        password: null | string
    },
    Switch_Register: string,
    Switch_Login: string,
    AutomaticLogin: boolean,
    type: boolean,
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
                passwordDuplication: null
            },
            FormLogin: {
                username: null,
                password: null
            },
            Switch_Register: 'Register-switch_txr',
            Switch_Login: 'Register-switch_txr SwitchHidden',
            AutomaticLogin: false,
            type: true,
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
                passwordDuplication: null
            }
            this.FormLogin = {username: null, password: null}
            this.AutomaticLogin = false
        },
        // 登录请求
        login(): void {
            post('loginRelated/login', this.FormLogin, (data: any) => {
                console.log(data)
            })
        }
    }
})

// 自定义错误提示接口
interface CustomizeErrorInterface {
    Interval: null | number,
    countdown_time: number
}

// 自定义错误提示实体
export const CustomizeError = defineStore('CustomizeError', {
    state: (): CustomizeErrorInterface => {
        return {
            countdown_time: 5,
            Interval: null,
        }
    },
    actions: {
        // 错误界面倒计时启动
        countdown_run() {
            this.Interval = window.setInterval(this.countdown, 1000)
        },
        // 错误界面倒计时跳转
        countdown() {
            if (this.countdown_time === 1) {
                useRouter().push({path: '/login'}).then(() => {
                    if (this.Interval === null) return
                    window.clearInterval(this.Interval)
                    this.countdown_time = 5
                    this.Interval = null
                })

            } else {
                this.countdown_time--
            }
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
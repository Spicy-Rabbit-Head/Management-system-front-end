import {defineStore} from 'pinia'
import router from "../router/index.js";

// 登录注册界面
export const LoginPinia = defineStore('LoginPinia', {
    state: () => {
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
        ToggleSwitch_Login(e) {
            if (e === 0) {
                this.Switch_btn = 'Prompt_box_switch_txr'
                this.Switch_btn_hidden2 = null
                this.Switch_btn_hidden1 = 'SwitchHidden'
                this.Switch_Login = 'Register-switch_txl'
                this.Switch_Register = 'Register-switch_txl SwitchHidden'
                // 上圆过渡
                this.Circle1 = '!left-2/5'
                // 下圆过渡
                this.Circle2 = '!-left-1/4'
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
        Clear() {
            this.FormRegister = {
                Username: null,
                Password: null,
                PasswordDuplication: null
            }
            this.FormLogin = {username: null, password: null}
            this.AutomaticLogin = false
        },
    }
})

// 自定义错误提示
export const CustomizeError = defineStore('CustomizeError', {
    state: () => {
        return {
            countdown_time: 5,
            Interval: null,
        }
    },
    actions: {
        // 错误界面倒计时启动
        countdown_run() {
            this.Interval = setInterval(this.countdown, 1000)
        },
        // 错误界面倒计时跳转
        countdown() {
            if (this.countdown_time === 1) {
                router.push({path: '/login'}).then(r => {
                    clearInterval(this.Interval)
                    this.countdown_time = 5
                    this.Interval = null
                })

            } else {
                this.countdown_time--
            }
        }
    }
})

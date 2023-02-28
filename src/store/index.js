import {defineStore} from 'pinia'
import router from "../router";

export const LoginPinia = defineStore('LoginPinia', {
    state: () => {
        return {
            Switch_btn: 'Prompt_box_switch_txl',
            Switch_btn_hidden1: '',
            Switch_btn_hidden2: 'SwitchHidden',
            Circle1: '',
            Circle2: '',
            FormRegister: {Username: '', Password: '', PasswordDuplication: ''},
            FormLogin: {Username: '', Password: ''},
            Switch_Register: 'Register-switch_txr',
            Switch_Login: 'Register-switch_txr SwitchHidden',
            AutomaticLogin: false,
        }
    },
    actions: {
        ToggleSwitch_Login(e) {
            if (e === 0) {
                this.Switch_btn = 'Prompt_box_switch_txr'
                this.Switch_btn_hidden2 = ''
                this.Switch_btn_hidden1 = 'SwitchHidden'
                this.Switch_Login = 'Register-switch_txl'
                this.Switch_Register = 'Register-switch_txl SwitchHidden'
                this.Circle1 = 'Circle1'
                this.Circle2 = 'Circle2'
            } else {
                this.Switch_btn = 'Prompt_box_switch_txl'
                this.Switch_btn_hidden1 = ''
                this.Switch_btn_hidden2 = 'SwitchHidden'
                this.Switch_Register = 'Register-switch_txr'
                this.Switch_Login = 'Register-switch_txr SwitchHidden'
                this.Circle1 = ''
                this.Circle2 = ''
            }
            this.FormRegister = {Username: '', Password: '', PasswordDuplication: ''}
            this.FormLogin = {Username: '', Password: ''}
            this.AutomaticLogin = false
        }
    }
})
export const CustomizeError = defineStore('CustomizeError', {
    state: () => {
        return {
            countdown_time: 5,
            Interval: null,
        }
    },
    actions: {
        countdown_run() {
            this.Interval = setInterval(this.countdown, 1000)
        },
        countdown() {
            if (this.countdown_time === 0) {
                router.replace('/login')
                clearInterval(this.Interval)
                this.countdown_time = 5
                this.Interval = null
            } else {
                this.countdown_time--
            }
        }
    }
})

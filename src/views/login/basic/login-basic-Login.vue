<template>
    <el-form
        class="tw-flex tw-items-center tw-justify-center tw-flex-col tw-w-screen tw-h-screen"
        :model="LoginPinia().FormLogin"
    >
        <h2 class="Title">登录账户</h2>
        <p class="SwitchDescription">输入账户密码进行进入系统</p>
        <div class="basic-login-form">
            <input type="text" required="" v-model="LoginPinia().FormLogin.username">
            <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in username">{{ item }}
                </span>
            </label>
        </div>
        <div class="basic-login-form">
            <input type="text" required="" v-model="LoginPinia().FormLogin.password">
            <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in password">{{ item }}
                </span>
            </label>
        </div>
        <el-row class="tw-w-3/5">
            <el-col :span="12" style="text-align: left">
                <el-checkbox v-model="LoginPinia().AutomaticLogin"
                             class="tw-my-1"
                             label="记住我"/>
            </el-col>
            <el-col :span="12" style="text-align: right">
                <n-button color="#ff2e63" class="tw-my-2.5 tw-btn-xs tw-bg-[#ff2e63]">重置密码
                </n-button>
            </el-col>
        </el-row>
        <n-button class="tw-w-3/5 tw-bg-[#36ad6a]" type="primary">
            {{ $t('Login.Title') }},
        </n-button>
        <n-divider style="color: gray ;padding: 0 10%">
            {{ $t('Login.RegistrationTips') }}
        </n-divider>
        <n-button class="tw-w-3/5 tw-bg-[#f0a020]" type="warning">
            去注册
        </n-button>
    </el-form>
</template>

<script setup lang="ts">
import {LoginPinia} from '../../../store'

let username: string [] = ['请', '输', '入', '用', '户', '名']
let password: string [] = ['请', '输', '入', '密', '码']
let time: string [] = ['0ms', '50ms', '100ms', '150ms', '200ms', '250ms']

</script>

<style scoped>
.basic-login-form {
    position: relative;
    margin: 12px;
    width: 60%;
}

.basic-login-form input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #f56c6c solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: black;
}

.basic-login-form input:focus,
.basic-login-form input:valid {
    outline: 0;
    border-bottom-color: #46dc5f;
}

.basic-login-form label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
}

.basic-login-form label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    color: #666666;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.basic-login-form input:focus + label span,
.basic-login-form input:valid + label span {
    color: rgb(38, 205, 127);
    transform: translateY(-30px);
}
</style>
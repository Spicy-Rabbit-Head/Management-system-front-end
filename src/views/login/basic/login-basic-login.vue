<template>
    <el-form
        class="basic-login-form"
        :model="LoginPinia().FormLogin"
    >
        <h2 class="login-public-title">{{ $t('Login.LoginTitle') }}</h2>
        <p class="login-public-description tw-mb-0">{{ $t('Login.Basic.LoginSubtitle') }}</p>
        <div class="basic-input">
            <input type="text" required="" v-model="LoginPinia().FormLogin.username">
            <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.UsernameInputText')">{{ item }}
                </span>
            </label>
        </div>
        <div class="basic-input">
            <input type="text" required="" v-model="LoginPinia().FormLogin.password">
            <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.PasswordInputText')">{{ item }}
                </span>
            </label>
        </div>
        <el-row class="tw-w-3/5">
            <el-col :span="12" class="tw-text-left">
                <el-checkbox v-model="LoginPinia().AutomaticLogin"
                             class="tw-my-1"
                             :label="$t('Login.Basic.RememberMe')"/>
            </el-col>
            <el-col :span="12" class="tw-text-right">
                <n-button color="#ff2e63" class="tw-my-2.5 tw-btn-xs tw-bg-[#ff2e63]">
                    {{ $t('Login.ResetPassword') }}
                </n-button>
            </el-col>
        </el-row>
        <n-button class="tw-w-3/5 tw-bg-[#36ad6a]" type="primary">
            {{ $t('Login.LoginImmediately') }}
        </n-button>
        <n-divider style="color: gray ;padding: 0 10%">
            {{ $t('Login.Basic.RegistrationTips') }}
        </n-divider>
        <n-button class="tw-w-3/5 tw-bg-[#f0a020]" type="warning">
            {{ $t('Login.RegisterAccount') }}
        </n-button>
    </el-form>
</template>

<script setup lang="ts">
import {LoginPinia} from '../../../store'

let time: string [] = ['0ms', '50ms', '100ms', '150ms', '200ms', '250ms']

</script>

<style scoped>
.basic-login-form {
    @apply
    tw-flex
    tw-items-center
    tw-justify-center
    tw-flex-col
    tw-w-screen
    tw-h-screen
}


.basic-input {
    position: relative;
    margin: 12px;
    width: 60%;
}

.basic-input input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #f56c6c solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: black;
}

.basic-input input:focus,
.basic-input input:valid {
    outline: 0;
    border-bottom-color: #46dc5f;
}

.basic-input label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
}

.basic-input label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    color: #666666;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.basic-input input:focus + label span,
.basic-input input:valid + label span {
    color: rgb(38, 205, 127);
    transform: translateY(-30px);
}
</style>
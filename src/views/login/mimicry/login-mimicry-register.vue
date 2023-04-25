<template>
    <div :class="LoginPinia().Switch_Register" class="response-container">
        <el-form
                :model="LoginPinia().FormRegister"
                class="response-form"
        >
            <h2 class="login-public-title">{{ $t('Login.CreateAnAccount') }}</h2>
            <input class="response-input" v-model="LoginPinia().FormRegister.username"
                   :placeholder="$t('Login.UsernameInputText')"/>
            <input class="response-input" v-model="LoginPinia().FormRegister.password"
                   :placeholder="$t('Login.PasswordInputText')"/>
            <input class="response-input"
                   v-model="LoginPinia().FormRegister.passwordDuplication"
                   :placeholder="$t('Login.ReenterThePassword')"/>
            <LoginPageButton class="login-public-switch-button">
                {{ $t('Login.RegisterAccount') }}
            </LoginPageButton>
            <LoginPageButton class="response-switch-button-left tw-btn-sm"
                             @click="LoginPinia().ToggleSwitch_Login(0)">
                <el-icon>
                    <!--<angle-left/>-->
                </el-icon>
                {{ $t('Login.Mimicry.GoToLogin') }}
            </LoginPageButton>
        </el-form>
    </div>
    <div :class="LoginPinia().Switch_Login"
         class="response-container">
        <el-form
                :model="LoginPinia().FormLogin"
                class="response-form"
        >
            <h2 class="login-public-title">{{ $t('Login.LoginTitle') }}</h2>
            <input class="response-input" v-model="LoginPinia().FormLogin.username"
                   :placeholder="$t('Login.UsernameInputText')"/>
            <input class="response-input" v-model="LoginPinia().FormLogin.password"
                   :placeholder="$t('Login.PasswordInputText')"/>
            <el-row class="tw-w-3/5">
                <el-col :span="12" class="tw-text-left">
                    <el-checkbox class="response-automatic-login"
                                 v-model="LoginPinia().AutomaticLogin"
                                 :label="$t('Login.Mimicry.AutomaticLogin')"/>
                </el-col>
                <el-col :span="12" style="text-align: right"
                        class="max-sm:tw-invisible max-sm:tw-opacity-0 max-sm:tw-absolute">
                    <n-button color="#ff2e63" class="tw-m-2.5 tw-btn-sm tw-bg-[#ff2e63]">
                        {{ $t('Login.ResetPassword') }}
                    </n-button>
                </el-col>
            </el-row>
            <LoginPageButton class="login-public-switch-button">
                {{ $t('Login.LoginImmediately') }}
            </LoginPageButton>
            <n-button color="#ff2e63"
                      class="response-switch-button-left tw-rounded-full  tw-btn-sm tw-bg-[#ff2e63]">
                {{ $t('Login.ResetPassword') }}
            </n-button>
            <LoginPageButton class="response-switch-button-right tw-btn-sm"
                             @click="LoginPinia().ToggleSwitch_Login(1)">
                {{ $t('Login.Mimicry.GoToRegister') }}
                <el-icon>
                    <!--<angle-right/>-->
                </el-icon>
            </LoginPageButton>
        </el-form>
    </div>
</template>
<script setup lang="ts">
import {LoginPinia} from '../../../store'
</script>
<style scoped>

/* 注册登录框容器 */
.response-container {
    @apply
    max-sm:tw-w-full
    tw-w-3/5
    tw-h-full
    tw-top-0
    tw-absolute
    tw-duration-700
    tw-ease-in-out
}

/* 注册登录表单 */
.response-form {
    @apply
    tw-flex
    tw-justify-center
    tw-items-center
    tw-flex-col
    tw-w-full
    tw-h-full
}

/* 自动登录框 */
.response-automatic-login {
    @apply
    tw-h-14
    tw-text-left
    tw-font-sans
    tw-tracking-wider
}


/*输入框*/
.response-input {
    @apply
    tw-shadow-login-in-shadow
    tw-caret-transparent
    tw-w-3/5
    tw-h-10
    sm:tw-h-12
    tw-m-2
    tw-pl-6
    tw-text-xl
    tw-tracking-wider
    tw-font-sans
    tw-outline-none
    tw-border-none
    tw-rounded-xl
    tw-duration-500
    tw-ease-in-out
    focus:tw-ring-4
    focus:tw-ring-blue-600
    focus:tw-w-8/12
}

/* 按钮在左 */
.response-switch-button-left {
    @apply
    tw-border-none
    tw-absolute
    tw-left-2
    tw-bottom-10
    sm:tw-invisible
    sm:tw-opacity-0
    sm:tw-absolute
}

/* 按钮在右 */
.response-switch-button-right {
    @apply
    tw-border-none
    tw-absolute
    tw-right-2
    tw-bottom-10
    sm:tw-invisible
    sm:tw-opacity-0
    sm:tw-absolute
}
</style>
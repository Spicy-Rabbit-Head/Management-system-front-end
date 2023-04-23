<template>
    <div :class="LoginPinia().Switch_Register" class="Container mimicry_login Register_Login">
        <el-form
            :model="LoginPinia().FormRegister"
            class="mimicry_login Form"
        >
            <h2 class="Title">创建账户</h2>
            <input class="InputIn" v-model="LoginPinia().FormRegister.username"
                   placeholder="输入用户名"/>
            <input class="InputIn" v-model="LoginPinia().FormRegister.password"
                   placeholder="输入密码"/>
            <input class="InputIn"
                   v-model="LoginPinia().FormRegister.passwordDuplication"
                   placeholder="再次输入密码"/>
            <LoginPageButton class="SwitchButton">
                注册
            </LoginPageButton>
            <LoginPageButton class="SwitchButton_l tw-btn-sm"
                             @click="LoginPinia().ToggleSwitch_Login(0)">
                <el-icon>
                    <!--<angle-left/>-->
                </el-icon>
                去登录
            </LoginPageButton>
        </el-form>
    </div>
    <div :class="LoginPinia().Switch_Login"
         class="Container mimicry_login Register_Login">
        <el-form
            :model="LoginPinia().FormLogin"
            class="mimicry_login Form"
        >
            <h2 class="Title">登录账户</h2>
            <input class="InputIn" v-model="LoginPinia().FormLogin.username"
                   placeholder="输入用户名"/>
            <input class="InputIn" v-model="LoginPinia().FormLogin.password"
                   placeholder="输入密码"/>
            <el-row class="tw-w-3/5">
                <el-col :span="12" style="text-align: left">
                    <el-checkbox class="AutomaticLogin"
                                 v-model="LoginPinia().AutomaticLogin"
                                 label="记住账户密码自动登录"/>
                </el-col>
                <el-col :span="12" style="text-align: right"
                        class="max-sm:tw-invisible max-sm:tw-opacity-0 max-sm:tw-absolute">
                    <n-button color="#ff2e63" class="tw-m-2.5 tw-btn-sm tw-bg-[#ff2e63]">重置密码
                    </n-button>
                </el-col>
            </el-row>
            <LoginPageButton class="SwitchButton">登录
            </LoginPageButton>
            <n-button color="#ff2e63"
                      class="SwitchButton_l tw-rounded-full  tw-btn-sm tw-bg-[#ff2e63]">重置密码
            </n-button>
            <LoginPageButton class="SwitchButton_r tw-btn-sm"
                             @click="LoginPinia().ToggleSwitch_Login(1)">去注册
                <el-icon>
                    <!--<angle-right/>-->
                </el-icon>
            </LoginPageButton>
        </el-form>
    </div>
</template>
<script setup lang="ts">
import {LoginPinia} from '../../../store'
// import {AngleLeft, AngleRight} from "@vicons/fa";
</script>
<style scoped>
/*布局框架*/
.mimicry_login {
    @apply
    tw-flex
    tw-justify-center
    tw-items-center
    tw-absolute
}

/* 注册登录框容器 */
.Container {
    @apply
    max-sm:tw-w-full
    tw-w-3/5
    tw-h-full
    tw-top-0
    tw-p-10
}

/* 注册登录表单 */
.Form {
    @apply
    tw-flex-col
    tw-w-full
    tw-h-full
}

/* 自动登录框 */
.AutomaticLogin {
    @apply
    tw-h-14
    tw-text-left
    tw-font-sans
    tw-tracking-wider
}

/*过渡属性*/
.Register_Login {
    @apply
    tw-duration-700
    tw-ease-in-out
}

/*输入框*/
.InputIn {
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
</style>
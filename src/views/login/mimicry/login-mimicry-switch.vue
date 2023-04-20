<template>
    <div class="Switch mimicry_login Transition_configuration"
         :class=" LoginPinia().Switch_btn">
        <div class="SwitchCircle Transition_configuration"
             :class="LoginPinia().Circle1"></div>
        <div class="SwitchCircle SwitchCircleT Transition_configuration"
             :class="LoginPinia().Circle2"></div>
        <div class="SwitchContainer Transition_configuration"
             :class="LoginPinia().Switch_btn_hidden1">
            <h2 class="Title">欢迎回来 !</h2>
            <p class="SwitchDescription">持续在线请使用个人信息登录</p>
            <LoginPageButton class="SwitchButton" @click="LoginPinia().ToggleSwitch_Login(0)">
                登录
            </LoginPageButton>
        </div>
        <div class="SwitchContainer Transition_configuration"
             :class="LoginPinia().Switch_btn_hidden2">
            <h2 class="Title">你好朋友 !</h2>
            <p class="SwitchDescription">输入你的信息进行注册</p>
            <LoginPageButton class="SwitchButton" @click="LoginPinia().ToggleSwitch_Login(1)">
                注册
            </LoginPageButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import {LoginPinia} from '../../../store'</script>

<style scoped>
/*布局框架*/
.mimicry_login {
    @apply
    tw-flex
    tw-justify-center
    tw-items-center
    tw-absolute
}

/* 文字提示框 */
.Switch {
    @apply
    tw-bg-login-bg
    tw-top-0
    tw-h-full
    tw-w-2/5
    tw-p-16
    tw-box-border
    tw-z-50
    tw-overflow-hidden
    tw-shadow-2xl
}

/* 文字提示框下圆 */
.SwitchCircle {
    box-shadow: inset 8px 8px 12px #d1d9e6,
    inset -8px -8px 12px #f9f9f9;
    @apply
    tw-caret-transparent
    tw-absolute
    tw-w-72
    tw-h-72
    tw-rounded-full
    -tw-bottom-1/4
    -tw-left-1/4
}

/* 文字提示框上圆 */
.SwitchCircleT {
    @apply
    -tw-top-1/4
    tw-left-2/3
    tw-w-60
    tw-h-60
}

/* 文字提示框内容器 */
.SwitchContainer {
    @apply
    tw-absolute
    tw-w-72
    tw-px-4
}

/*副标题*/
.SwitchDescription {
    @apply
    tw-text-base
    tw-tracking-wider
    tw-text-center
    tw-text-gray-400
    tw-mb-8
}

/*过渡属性*/
.Transition_configuration {
    @apply
    tw-duration-1250
    tw-ease-in-out
}
</style>
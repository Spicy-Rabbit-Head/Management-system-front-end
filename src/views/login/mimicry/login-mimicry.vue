<template>
    <div class="mimicry-background mimicry-layout" style="font-size: 12px">
        <div class="mimicry-frame mimicry-response">
            <login-mimicry-switch/>
            <login-mimicry-register/>
        </div>
    </div>
</template>

<script setup>
import LoginMimicrySwitch from "./login-mimicry-switch.vue";
import LoginMimicryRegister from "./login-mimicry-register.vue";
</script>

<style scoped>
/*注册登录界面布局框架*/
.mimicry-layout {
    @apply
    tw-flex
    tw-justify-center
    tw-items-center
    tw-absolute
}

/* 注册登录框容器 */
.mimicry-background {
    @apply
    tw-bg-gradient-to-r
    tw-from-rose-100
    tw-to-teal-100
    tw-w-full
    tw-h-screen
    tw-font-serif
}

/* 背景组件内拟态框 */
.mimicry-frame {
    @apply
    tw-bg-login-bg
    tw-w-300
    tw-min-w-300
    tw-h-520
    tw-min-h-520
    sm:tw-w-1000
    sm:tw-min-w-1000
    sm:tw-h-600
    sm:tw-min-h-600
    tw-shadow-2xl
    tw-mx-auto
    tw-my-auto
    tw-rounded-2xl
    tw-text-center
    tw-relative
    tw-p-6
}

/* 背景组件内拟态框响应式 */
.mimicry-response {
    @apply
    tw-duration-1000
    2xl:tw-scale-90
    xl:tw-scale-80
    lg:tw-scale-70
    md:tw-scale-60
    sm:tw-scale-50
}
</style>
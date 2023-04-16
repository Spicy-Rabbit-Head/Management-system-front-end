<template>
    <div class="BackgroundComponent login" style="font-size: 12px">
        <div class="BackgroundComponentFrame Response">
            <login-switch/>
            <login-register/>
        </div>
    </div>
</template>

<script setup>
import LoginSwitch from "../basic/login-switch.vue";
import LoginRegister from "../basic/login-register.vue";
</script>

<style scoped>
/* 背景组件 */
.BackgroundComponent {
    @apply
    bg-gradient-to-r
    from-rose-100
    to-teal-100
    w-full
    h-screen
    font-serif
}

/* 背景组件内拟态框 */
.BackgroundComponentFrame {
    @apply
    bg-login-bg
    w-300
    min-w-300
    h-520
    min-h-520
    sm:w-1000
    sm:min-w-1000
    sm:h-600
    sm:min-h-600
    shadow-2xl
    mx-auto
    my-auto
    rounded-2xl
    text-center
    relative
    p-6
}

/* 背景组件内拟态框响应式 */
.Response {
    @apply
    duration-1000
    2xl:scale-90
    xl:scale-80
    lg:scale-70
    md:scale-60
    sm:scale-50
}
</style>
<template>
  <div class="BackgroundComponent login" style="font-size: 12px">
    <div class="BackgroundComponentFrame Response">
      <login_switch/>
      <login_register/>
    </div>
  </div>
</template>

<script setup>
import Login_switch from "./login_switch.vue";
import Login_register from "./login_register.vue";
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
  w-1000
  min-w-1000
  h-600
  min-h-600
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
  2xl:scale-90
  xl:scale-80
  lg:scale-70
  md:scale-60
  scale-50
}
</style>
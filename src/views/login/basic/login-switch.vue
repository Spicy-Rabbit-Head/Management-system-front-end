<template>
  <div class="Switch login Transition_configuration"
       :class=" LoginPinia().Switch_btn">
    <div class="SwitchCircle Transition_configuration"
         :class="LoginPinia().Circle1"></div>
    <div class="SwitchCircle SwitchCircleT Transition_configuration"
         :class="LoginPinia().Circle2"></div>
    <div class="SwitchContainer Transition_configuration"
         :class="LoginPinia().Switch_btn_hidden1">
      <h2 class="Title">欢迎回来 !</h2>
      <p class="SwitchDescription">持续在线请使用个人信息登录</p>
      <el-button id="SwitchButton" @click="LoginPinia().ToggleSwitch_Login(0)"
                 round>登录
      </el-button>
    </div>
    <div class="SwitchContainer Transition_configuration"
         :class="LoginPinia().Switch_btn_hidden2">
      <h2 class="Title">你好朋友 !</h2>
      <p class="SwitchDescription">输入你的信息进行注册</p>
      <el-button id="SwitchButton" @click="LoginPinia().ToggleSwitch_Login(1)"
                 round>注册
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {LoginPinia} from '../../../store'</script>

<style scoped>
/* 文字提示框 */
.Switch {
  @apply
  bg-login-bg
  top-0
  h-full
  w-2/5
  p-16
  box-border
  z-50
  overflow-hidden
  shadow-2xl
}

/* 文字提示框下圆 */
.SwitchCircle {
  box-shadow: inset 8px 8px 12px #d1d9e6,
  inset -8px -8px 12px #f9f9f9;
  @apply
  caret-transparent
  absolute
  w-72
  h-72
  rounded-full
  -bottom-1/4
  -left-1/4
}

/* 文字提示框上圆 */
.SwitchCircleT {
  @apply
  -top-1/4
  left-2/3
  w-60
  h-60
}

/* 文字提示框内容器 */
.SwitchContainer {
  @apply
  absolute
  w-72
  px-4
}

/*副标题*/
.SwitchDescription {
  @apply
  text-base
  tracking-wider
  text-center
  text-gray-400
  mb-8
}
</style>
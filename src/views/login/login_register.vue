<template>
  <div :class="LoginPinia().Switch_Register"
       class="Container login Register_Login">
    <el-form
        :model="LoginPinia().FormRegister"
        class="login Form"

    >
      <h2 class="Title">创建账户</h2>
      <input class="InputIn" v-model="LoginPinia().FormRegister.Username"
             placeholder="输入用户名"/>
      <input class="InputIn" v-model="LoginPinia().FormRegister.Password"
             placeholder="输入密码"/>
      <input class="InputIn"
             v-model="LoginPinia().FormRegister.PasswordDuplication"
             placeholder="再次输入密码"/>
      <el-button id="SwitchButton" round>注册</el-button>
    </el-form>
  </div>
  <div :class="LoginPinia().Switch_Login"
       class="Container login Register_Login">
    <el-form
        :model="LoginPinia().FormLogin"
        class="login Form"
    >
      <h2 class="Title">登录账户</h2>
      <input class="InputIn" v-model="LoginPinia().FormLogin.Username"
             placeholder="输入用户名"/>
      <input class="InputIn" v-model="LoginPinia().FormLogin.Password"
             placeholder="输入密码"/>
      <el-checkbox class="AutomaticLogin" v-model="LoginPinia().AutomaticLogin"
                   label="勾选是否自动登录"/>
      <el-button id="SwitchButton" round>登录</el-button>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import {LoginPinia} from '../../store'
</script>

<style scoped>
.Switch_txr {
  @apply
  right-0
}

.Switch_txl {
  right: 40%;
}

.Container {
  @apply
  w-3/5
  h-full
  top-0
  p-10
}

.Form {
  @apply
  flex-col
  w-full
  h-full
}

.AutomaticLogin {
  @apply
  h-14
  font-sans
  tracking-wider
}

/*过渡属性*/
.Register_Login {
  @apply
  duration-700
  ease-in-out
}

</style>
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
      <el-button id="SwitchButton" @click="rout" round>注册</el-button>
      <el-button id="SwitchButton_l" :icon="CaretLeft"
                 @click="LoginPinia().ToggleSwitch_Login(0)">去登录
      </el-button>
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
      <el-button id="SwitchButton_r"
                 @click="LoginPinia().ToggleSwitch_Login(1)">去注册
        <el-icon>
          <CaretRight/>
        </el-icon>
      </el-button>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import {LoginPinia} from '../../store'
import router from '../../router/index.js'
import {CaretLeft, CaretRight} from '@element-plus/icons-vue'

const rout = () => {
  router.push({path: '/text-box'})
}

</script>
<style scoped>

/* 注册登录框容器 */
.Container {
  @apply
  max-sm:w-full
  w-3/5
  h-full
  top-0
  p-10
}

/* 注册登录表单 */
.Form {
  @apply
  flex-col
  w-full
  h-full
}

/* 自动登录框 */
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
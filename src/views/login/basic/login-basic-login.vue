<template>
  <form class="basic-login-form">
    <h2 class="login-public-title">{{ $t('Login.LoginTitle') }}</h2>
    <p class="login-public-description tw-mb-0">{{ $t('Login.Basic.LoginSubtitle') }}</p>
    <div class="basic-input">
      <input type="text" required="" v-model="loginPinia.FormLogin.username">
      <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.UsernameInputText')">{{ item }}
                </span>
      </label>
    </div>
    <div class="basic-input">
      <input type="text" required="" v-model="loginPinia.FormLogin.password">
      <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.PasswordInputText')">{{ item }}
                </span>
      </label>
    </div>
    <el-row class="tw-w-3/5 tw-my-2">
      <el-col :span="12" class="tw-text-left tw-mt-1.5">
        <n-checkbox class="tw-text-[0.875rem]" v-model:checked="loginPinia.automaticLogin">
          {{ $t('Login.Basic.RememberMe') }}
        </n-checkbox>
      </el-col>
      <el-col :span="12" class="tw-text-right">
        <n-button color="#ff2e63" class="tw-text-[0.875rem]"
                  @click="$router.push({name:'BasicReset'})">
          {{ $t('Login.ResetPassword') }}
        </n-button>
      </el-col>
    </el-row>
    <n-button class="tw-w-3/5 tw-text-[1rem]" type="primary" @click="verification">
      {{ $t('Login.LoginImmediately') }}
    </n-button>
    <n-divider style="color: gray ;padding: 0 10%" class="tw-text-[0.875rem]">
      {{ $t('Login.Basic.RegistrationTips') }}
    </n-divider>
    <n-button class="tw-w-3/5 tw-text-[1rem]" type="warning"
              @click="loginPinia.basicSwitch('BasicRegister')"
    >
      {{ $t('Login.RegisterAccount') }}
    </n-button>
  </form>
</template>

<script setup lang="ts">
import {LoginPinia} from '@/store'
import {verificationRegister} from "@/utils/verification";

const loginPinia = LoginPinia();
const verification = () => {
  let register = verificationRegister(1);
  if (register) {
    loginPinia.login()
  }
}


const time: string [] = ['0ms', '50ms', '100ms', '150ms', '200ms', '250ms']

</script>

<style scoped>
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
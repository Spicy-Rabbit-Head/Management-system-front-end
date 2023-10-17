<script setup lang="ts">
import { verificationUserForm } from "@/utils/verification";
import { useUser } from "@/hooks/useUser.ts";
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";

const {userForm, clearBuffer} = useUser();

const {replace} = useRouter()

// 输入框动画
let time: string [] = ['0ms', '50ms', '100ms', '150ms', '200ms', '250ms', '300ms', '350ms']

onBeforeMount(() => {
  clearBuffer()
})

</script>

<template>
  <!-- 简约注册页 -->
  <form class="flex items-center justify-center flex-col w-full h-full">
    <!-- 标题 -->
    <h2 class="text-slate-800 text-8 font-bold caret-black mb-8">{{ $t('Login.RegisterAccount') }}</h2>
    <p text="base center gray-400" class="tracking-wider mb-8">{{ $t('Login.Basic.RegisterSubtitle') }}</p>
    <!-- 用户输入 -->
    <div class="basic-input">
      <input type="text" required v-model="userForm.username">
      <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.UsernameInputText')">{{ item }}
                </span>
      </label>
    </div>
    <!-- 密码输入 -->
    <div class="basic-input">
      <input type="text" required v-model="userForm.password">
      <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.PasswordInputText')">{{ item }}
                </span>
      </label>
    </div>
    <!-- 重复密码输入 -->
    <div class="basic-input">
      <input type="text" required v-model="userForm.repeatPassword">
      <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.ReenterThePassword')">{{ item }}
                </span>
      </label>
    </div>
    <n-button class="w-3/5 text-4" type="primary" @click="verificationUserForm(true)">
      {{ $t('Login.RegisterAccount') }}
    </n-button>
    <n-divider style="color: rgb(128,128,128) ;padding: 0 10%" class="text-3.5">
      {{ $t('Login.Basic.LoginTips') }}
    </n-divider>
    <n-button class="w-3/5 text-4" type="warning"
              @click="replace({name:'BasicLogin'})">
      {{ $t('Login.LoginTitle') }}
    </n-button>
  </form>
</template>


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
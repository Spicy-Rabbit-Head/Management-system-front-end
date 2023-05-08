<template>
    <form class="basic-login-form">
        <h2 class="login-public-title">{{ $t('Login.RegisterAccount') }}</h2>
        <p class="login-public-description tw-mb-0">{{ $t('Login.Basic.RegisterSubtitle') }}</p>
        <div class="basic-input">
            <input type="text" required="" v-model="LoginPinia().FormRegister.username">
            <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.UsernameInputText')">{{ item }}
                </span>
            </label>
        </div>
        <div class="basic-input">
            <input type="text" required="" v-model="LoginPinia().FormRegister.password">
            <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.PasswordInputText')">{{ item }}
                </span>
            </label>
        </div>
        <div class="basic-input">
            <input type="text" required="" v-model="LoginPinia().FormRegister.passwordDuplication">
            <label>
                <span :style="{transitionDelay: time[index]}"
                      :key="index"
                      v-for="(item,index) in $t('Login.ReenterThePassword')">{{ item }}
                </span>
            </label>
        </div>
        <n-button class="!tw-w-3/5" type="primary" @click="verification">
            {{ $t('Login.RegisterAccount') }}
        </n-button>
        <n-divider style="color: gray ;padding: 0 10%">
            {{ $t('Login.Basic.LoginTips') }}
        </n-divider>
        <n-button class="!tw-w-3/5" type="warning"
                  @click="$router.push({name: 'BasicLogin'})"
        >
            {{ $t('Login.LoginTitle') }}
        </n-button>
    </form>
</template>

<script setup lang="ts">
import {LoginPinia} from "@/store";
import {Toast} from "vexip-ui";
import {verificationRegister} from "@/utils/verification";

const verification = () => {
    let register = verificationRegister(0);
    if (register) {
        Toast.success({
            content: "注册成功",
            closable: true,
            showMask: true,
        })
    }
}

let time: string [] = ['0ms', '50ms', '100ms', '150ms', '200ms', '250ms']
</script>

<style scoped>
.basic-login-form {
    @apply
    tw-flex
    tw-items-center
    tw-justify-center
    tw-flex-col
    tw-w-screen
    tw-h-screen
}


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
<template>
  <!-- 拟态注册 -->
  <div :class="loginStore.LoginScreen.switchRegister" class="response-container">
    <form class="response-form">
      <h2 class="login-public-title">{{ $t('Login.CreateAnAccount') }}</h2>
      <input class="response-input" v-model="loginStore.FormLogin.username"
             :placeholder="$t('Login.UsernameInputText')"/>
      <input class="response-input" v-model="loginStore.FormLogin.password"
             :placeholder="$t('Login.PasswordInputText')"/>
      <input class="response-input"
             v-model="loginStore.FormLogin.repeatPassword"
             :placeholder="$t('Login.ReenterThePassword')"/>
      <n-button type="info" class="login-public-switch-button"
                @click="verification(0)">
        {{ $t('Login.RegisterAccount') }}
      </n-button>
      <n-button type="info" class="response-switch-button-left"
                @click="loginStore.ToggleSwitch_Login(0)">
        <template #icon>
          <IconAntDesignSwapLeftOutlined/>
        </template>
        {{ $t('Login.Mimicry.GoToLogin') }}
      </n-button>
    </form>
  </div>
  <!-- 拟态登录 -->
  <div :class="loginStore.LoginScreen.switchLogin"
       class="response-container">
    <form class="response-form">
      <h2 class="login-public-title">{{ $t('Login.LoginTitle') }}</h2>
      <input class="response-input" v-model="loginStore.FormLogin.username"
             :placeholder="$t('Login.UsernameInputText')"/>
      <input class="response-input" v-model="loginStore.FormLogin.password"
             :placeholder="$t('Login.PasswordInputText')"/>
      <el-row class="tw-w-3/5">
        <el-col :span="12" class="tw-text-left">
          <el-checkbox class="response-automatic-login"
                       v-model="loginStore.automaticLogin"
                       :label="$t('Login.Mimicry.AutomaticLogin')"/>
        </el-col>
        <el-col :span="12" style="text-align: right"
                class="max-sm:tw-invisible max-sm:tw-opacity-0 max-sm:tw-absolute">
          <n-button color="#ff2e63" class="tw-m-2.5 tw-text-[0.875rem] tw-btn-sm tw-bg-[#ff2e63]"
                    @click="showModal = true">
            {{ $t('Login.ResetPassword') }}
          </n-button>
        </el-col>
      </el-row>
      <n-button type="info" size="large" :loading="loginStore.loginLoading" class="login-public-switch-button"
                @click="verification(1)">
        {{ $t('Login.LoginImmediately') }}
      </n-button>
      <n-button color="#ff2e63"
                class="response-switch-button-left"
                @click="showModal = true">
        {{ $t('Login.ResetPassword') }}
      </n-button>
      <n-button type="info" icon-placement="right" class="response-switch-button-right"
                @click="loginStore.ToggleSwitch_Login(1)">
        {{ $t('Login.Mimicry.GoToRegister') }}
        <template #icon>
          <IconAntDesignSwapRightOutlined/>
        </template>
      </n-button>
    </form>
  </div>
  <!-- 弹窗重置密码页 -->
  <el-dialog
      class="!tw-w-[96%] sm:!tw-w-2/3 lg:!tw-w-2/5 2xl:!tw-w-1/3"
      v-model="showModal"
      append-to-body
      align-center>
    <PasswordReset :exit-display="false"/>
  </el-dialog>
</template>
<script setup lang="ts">
import {LoginStore} from '@/store'
import {verificationRegister} from "@/utils/verification";
import PasswordReset from "@/views/login/PasswordReset.vue";
import {ref} from "vue";
import IconAntDesignSwapRightOutlined from '~icons/ant-design/swap-right-outlined'
import IconAntDesignSwapLeftOutlined from '~icons/ant-design/swap-left-outlined'

const loginStore = LoginStore();
// 弹窗重置密码页
const showModal = ref<boolean>(false);

// 注册登录验证
function verification(i: number) {
  let register = verificationRegister(i);
  if (register) {
    if (i == 0) {
      loginStore.register(true)
    } else {
      loginStore.loginLoading = true
      loginStore.login()
    }
  }
}
</script>
<style scoped>

/* 注册登录框容器 */
.response-container {
  @apply
  max-sm:tw-w-full
  tw-w-3/5
  tw-h-full
  tw-top-0
  tw-absolute
  tw-duration-700
  tw-ease-in-out
}

/* 注册登录表单 */
.response-form {
  @apply
  tw-text-center
  tw-flex
  tw-justify-center
  tw-items-center
  tw-flex-col
  tw-w-full
  tw-h-full
}

/* 自动登录框 */
.response-automatic-login {
  & :deep(.el-checkbox__label) {
    @apply
    tw-text-[0.875rem]
  }

  @apply
  tw-h-14
  tw-text-left
  tw-tracking-wider
}

/*tw-caret-transparent*/
/*输入框*/
.response-input {
  @apply
  tw-shadow-login-in-shadow
  tw-w-3/5
  tw-my-2
  tw-h-10
  sm:tw-h-12
  tw-pl-6
  tw-text-xl
  tw-tracking-wider
  tw-outline-none
  tw-border-none
  tw-rounded-xl
  tw-duration-500
  tw-ease-in-out
  focus:tw-ring-4
  focus:tw-ring-blue-600
  focus:tw-w-8/12
}

/* 按钮在左 */
.response-switch-button-left {
  @apply
  tw-border-none
  tw-absolute
  tw-left-2
  tw-bottom-10
  tw-text-[1rem]
  sm:tw-invisible
  sm:tw-opacity-0
  sm:tw-absolute
}

/* 按钮在右 */
.response-switch-button-right {
  @apply
  tw-border-none
  tw-absolute
  tw-right-2
  tw-bottom-10
  tw-text-[1rem]
  sm:tw-invisible
  sm:tw-opacity-0
  sm:tw-absolute
}
</style>
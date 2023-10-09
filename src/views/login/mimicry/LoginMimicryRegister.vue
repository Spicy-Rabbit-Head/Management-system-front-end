<script setup lang="ts">
import {verificationRegister} from "@/utils/verification";
import PasswordReset from "@/components/PasswordReset.vue";
import {ref} from "vue";
import IconAntDesignSwapRightOutlined from '~icons/ant-design/swap-right-outlined'
import IconAntDesignSwapLeftOutlined from '~icons/ant-design/swap-left-outlined'
import {useFullScreenLoading} from "@/hooks/useFullScreenLoading";
import {login, register} from "@/api/userRequest.ts"
import {useUser} from "@/hooks/useUser.ts";
import {MimicryTopCardStyle} from "@/types/types.ts";


withDefaults(defineProps<{
  topCard: MimicryTopCardStyle
}>(), {
  topCard: () => {
    return {
      switchLogin: 'register-switch-l',
      switchRegister: 'register-switch-l register-hidden',
    }
  }
})

const emit = defineEmits<{
  toggle: [id: boolean]
}>()

const {userForm, isAutomaticLogin} = useUser();
const {FullScreenLoadingRun} = useFullScreenLoading();
// 弹窗重置密码页
const showModal = ref<boolean>(false);

// 注册登录验证
function verification(i: number) {
  let bool = verificationRegister(i);
  if (bool) {
    if (i == 0) {
      register()
    } else {
      FullScreenLoadingRun()
      login()
    }
  }
}
</script>

<template>
  <!-- 拟态注册 -->
  <div :class="topCard.switchRegister" class="max-sm:w-full w-3/5 h-full top-0 absolute duration-700 ease-in-out">
    <form class="text-center flex justify-center items-center flex-col w-full h-full">
      <h2 text="slate-800 8" class="font-bold caret-black  mb-8">{{ $t('Login.CreateAnAccount') }}</h2>
      <input class="mimicry-response-input" v-model="userForm.username"
             :placeholder="$t('Login.UsernameInputText')"/>
      <input class="mimicry-response-input" v-model="userForm.password"
             :placeholder="$t('Login.PasswordInputText')"/>
      <input class="mimicry-response-input" v-model="userForm.repeatPassword"
             :placeholder="$t('Login.ReenterThePassword')"/>
      <n-button type="info" class="mimicry-switch-button"
                @click="verification(0)">
        {{ $t('Login.RegisterAccount') }}
      </n-button>
      <n-button type="info" class="border-none absolute left-2 bottom-10 text-4 sm:(invisible opacity-0 absolute)"
                @click.stop="emit('toggle', false)">
        <template #icon>
          <IconAntDesignSwapLeftOutlined/>
        </template>
        {{ $t('Login.Mimicry.GoToLogin') }}
      </n-button>
    </form>
  </div>
  <!-- 拟态登录 -->
  <div :class="topCard.switchLogin" class="max-sm:w-full w-3/5 h-full top-0 absolute duration-700 ease-in-out">
    <form class="text-center flex justify-center items-center flex-col w-full h-full">
      <h2 text="slate-800 8" class="font-bold caret-black  mb-8">{{ $t('Login.LoginTitle') }}</h2>
      <input class="mimicry-response-input" v-model="userForm.username"
             :placeholder="$t('Login.UsernameInputText')"/>
      <input class="mimicry-response-input" v-model="userForm.password"
             :placeholder="$t('Login.PasswordInputText')"/>
      <el-row class="w-3/5">
        <el-col :span="12" class="text-left">
          <el-checkbox class="!h-14 text-left tracking-wider !text-3.5"
                       v-model="isAutomaticLogin"
                       :label="$t('Login.Mimicry.AutomaticLogin')"/>
        </el-col>
        <el-col :span="12" style="text-align: right" class="max-sm:(invisible opacity-0 absolute)">
          <n-button color="#ff2e63" class="m-2.5 text-3.5 bg-[#ff2e63]"
                    @click="showModal = true">
            {{ $t('Login.ResetPassword') }}
          </n-button>
        </el-col>
      </el-row>
      <n-button type="info" size="large" class="mimicry-switch-button"
                @click="verification(1)">
        {{ $t('Login.LoginImmediately') }}
      </n-button>
      <n-button color="#ff2e63"
                class="border-none absolute left-2 bottom-10 text-4 sm:(invisible opacity-0 absolute)"
                @click="showModal = true">
        {{ $t('Login.ResetPassword') }}
      </n-button>
      <n-button type="info" icon-placement="right"
                class="border-none absolute right-2 bottom-10 text-4 sm:(invisible opacity-0 absolute)"
                @click="emit('toggle', true)">
        {{ $t('Login.Mimicry.GoToRegister') }}
        <template #icon>
          <IconAntDesignSwapRightOutlined/>
        </template>
      </n-button>
    </form>
  </div>
  <!-- 弹窗重置密码页 -->
  <el-dialog
      class="!w-[96%] sm:!w-2/3 lg:!w-2/5 2xl:!w-1/3"
      v-model="showModal"
      append-to-body
      align-center>
    <password-reset :exit-display="false"/>
  </el-dialog>
</template>

<style scoped lang="postcss">
/* 拟态输入框 */
.mimicry-response-input {
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  @apply
  w-3/5
  my-2
  h-10
  pl-6
  sm:h-12
  text-xl
  tracking-wider
  outline-none
  border-none
  rounded-xl
  duration-500
  ease-in-out
  focus:ring-4
  focus:ring-blue-600
  focus:w-8/12
  color-black
}

/* 拟态触发按钮 */
.mimicry-switch-button {
  @apply
  mt-4
  w-40
  h-12
  text-[#f9f9f9]
  tracking-wider
  font-bold
  rounded-full
  text-6
}

/* 注册登录框左过渡 */
.register-switch-l {
  @apply
  max-sm:right-0
  sm:right-2/5
}

/* 注册登录框右过渡 */
.register-switch-r {
  @apply
  max-sm:right-0
  sm:right-0
}

/* 切换隐藏 */
.register-hidden {
  @apply
  invisible
  opacity-0
  absolute
}

</style>
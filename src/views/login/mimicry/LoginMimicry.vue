<script setup lang="ts">
import LoginMimicrySwitch from "./LoginMimicrySwitch.vue";
import LoginMimicryRegister from "./LoginMimicryRegister.vue";
import {reactive} from "vue";
import {MimicryCardStyle} from "@/types/types.ts";

// 拟态卡片样式
const mimicryCardStyle = reactive<MimicryCardStyle>({
  bottomCard: undefined,
  topCard: undefined
})

function toggleCardStyle(bool: boolean) {
  if (bool) {
    mimicryCardStyle.bottomCard = {
      switchButton: "prompt-box-switch-l",
      switchButtonHidden1: null,
      switchButtonHidden2: "switch-hidden",
      circle: null,
    }
    mimicryCardStyle.topCard = {
      switchLogin: "register-switch-r switch-hidden",
      switchRegister: "register-switch-r",
    }
  } else {
    mimicryCardStyle.bottomCard = {
      switchButton: "prompt-box-switch-r",
      switchButtonHidden1: "switch-hidden",
      switchButtonHidden2: null,
      circle: {
        circle1: '!tw-left-2/5',
        circle2: '!-tw-left-1/4',
      }
    }
    mimicryCardStyle.topCard = {
      switchLogin: "register-switch-l",
      switchRegister: "register-switch-l switch-hidden",
    }
  }
}

</script>

<!-- 拟态页主体 -->
<template>
  <div class="mimicry-background mimicry-layout">
    <!-- 自动文字 -->
    <h2 :data-text="$t('Login.Typing.Animation4')" class="mimicry-typing">
      {{ $t("Login.Typing.Animation4") }}
    </h2>
    <h2 :data-text="$t('Login.Typing.Animation3')" class="mimicry-typing tw-mt-10">
      {{ $t("Login.Typing.Animation3") }}
    </h2>
    <!-- 拟态组件 -->
    <div class="mimicry-frame mimicry-response">
      <login-mimicry-switch @toggle="toggleCardStyle" :bottom-card="mimicryCardStyle.bottomCard"/>
      <login-mimicry-register @toggle="toggleCardStyle" :top-card="mimicryCardStyle.topCard"/>
    </div>
  </div>
</template>

<style scoped lang="postcss">
/*注册登录界面布局框架*/
.mimicry-layout {
  @apply
  tw-flex
  tw-justify-center
  tw-items-center
  tw-absolute
}

/* 注册登录框容器 */
.mimicry-background {
  @apply
  tw-bg-gradient-to-r
  tw-from-rose-100
  tw-to-teal-100
  tw-w-full
  tw-h-screen
}

/* 背景组件内拟态框 */
.mimicry-frame {
  @apply
  tw-bg-login-bg
  tw-w-300
  tw-min-w-300
  tw-h-520
  tw-min-h-520
  sm:tw-w-1000
  sm:tw-min-w-1000
  sm:tw-h-600
  sm:tw-min-h-600
  tw-shadow-2xl
  tw-mx-auto
  tw-my-auto
  tw-rounded-2xl
  tw-text-center
  tw-relative
  tw-p-6
}

/* 背景组件内拟态框响应式 */
.mimicry-response {
  @apply
  tw-duration-1000
  2xl:tw-scale-90
  xl:tw-scale-80
  lg:tw-scale-70
  md:tw-scale-60
  sm:tw-scale-50
}

/* 拟态页自动文字样式 */
.mimicry-typing {
  @apply
  tw-hidden
  md:tw-block
  tw-animate-bounce
  tw-duration-500
  tw-absolute
  tw-top-4
  tw-text-center
  tw-text-2xl
  tw-text-gray-500
  tw-font-semibold
  before:tw-content-[attr(data-text)]
  before:tw-w-full
  before:tw-absolute
  before:tw-bg-login-typing-bg
  before:tw-bg-clip-text
  before:tw-text-transparent
  before:tw-overflow-hidden
  before:tw-whitespace-nowrap
  before:tw-animate-text-animation-effects
}
</style>
<script setup lang="ts">
import LoginMimicrySwitch from "./LoginMimicrySwitch.vue";
import LoginMimicryRegister from "./LoginMimicryRegister.vue";
import { reactive } from "vue";
import { MimicryBottomCardStyle, MimicryCardStyle, MimicryTopCardStyle } from "@/types/shared.ts";
import { useUser } from "@/hooks/useUser.ts";

const {clearBuffer} = useUser();
// 拟态卡片样式
const mimicryCardStyle = reactive<MimicryCardStyle>({
  bottomCard: undefined,
  topCard: undefined
})

function toggleCardStyle(bool: boolean) {
  clearBuffer()
  if (bool) {
    mimicryCardStyle.bottomCard = {
      switchButton: "mimicry-prompt-box-l",
      switchButtonHidden1: null,
      switchButtonHidden2: "switch-hidden",
      circle: null,
    }
    mimicryCardStyle.topCard = {
      switchLogin: "register-switch-r register-hidden",
      switchRegister: "register-switch-r",
    }
  } else {
    mimicryCardStyle.bottomCard = {
      switchButton: "mimicry-prompt-box-r",
      switchButtonHidden1: "switch-hidden",
      switchButtonHidden2: null,
      circle: {
        circle1: '!left-2/5',
        circle2: '!-left-1/4',
      }
    }
    mimicryCardStyle.topCard = {
      switchLogin: "register-switch-l",
      switchRegister: "register-switch-l register-hidden",
    }
  }
}

</script>

<!-- 拟态页主体 -->
<template>
  <div class="bg-gradient-to-r from-rose-100 to-teal-100 w-full h-screen  flex  justify-center  items-center  absolute">
    <!-- 自动文字 -->
    <h2 :data-text="$t('Login.Typing.Animation4')" class="mimicry-typing">
      {{ $t("Login.Typing.Animation4") }}
    </h2>
    <h2 :data-text="$t('Login.Typing.Animation3')" class="mimicry-typing mt-10"
    >
      {{ $t("Login.Typing.Animation3") }}
    </h2>
    <!-- 拟态组件 -->
    <div
        class="mimicry-component">
      <login-mimicry-switch @toggle="toggleCardStyle"
                            :bottom-card="mimicryCardStyle.bottomCard as MimicryBottomCardStyle"/>
      <login-mimicry-register @toggle="toggleCardStyle" :top-card="mimicryCardStyle.topCard as MimicryTopCardStyle"/>
    </div>
  </div>
</template>

<style scoped lang="postcss">
/* 自动文字 */
.mimicry-typing {
  @apply
  hidden
  md:block
  animate-bounce
  duration-500
  absolute
  top-4
  text-center
  text-2xl
  text-gray-500
  font-semibold
  before:(
  content-[attr(data-text)]
  w-full
  absolute
  text-transparent
  overflow-hidden
  whitespace-nowrap
  bg-clip-text
  )
}

/* 自动文字动画 */
.mimicry-typing::before {
  background-image: linear-gradient(to right, #ec008c, #fc6767);;
  animation: textAnimation 6s linear infinite;
}

@keyframes textAnimation {
  0%, 10%, 100% {
    width: 0;
  }
  70%, 90% {
    width: 100%;
  }
}

/* 拟态组件 */
.mimicry-component {
  @apply
  bg-[#e6efeb]
  w-[300px]
  min-w-[300px]
  h-[520p]
  min-h-[520px]
  sm:(
  w-[1000px]
  min-w-[1000px]
  h-[600px]
  min-h-[600px]
  )
  shadow-2xl
  mx-auto
  my-auto
  rounded-2xl
  text-center
  relative
  p-6
  duration-1000
  2xl:scale-90
  xl:scale-80
  lg:scale-70
  md:scale-60
  sm:scale-50
}

</style>
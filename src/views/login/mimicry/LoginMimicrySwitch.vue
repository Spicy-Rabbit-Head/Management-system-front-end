<script setup lang="ts">
import {MimicryBottomCardStyle} from "@/types/types.ts";

withDefaults(defineProps<{
  bottomCard: MimicryBottomCardStyle
}>(), {
  bottomCard: () => {
    return {
      switchButton: "prompt-box-switch-r",
      switchButtonHidden1: "switch-hidden",
      switchButtonHidden2: null,
      circle: {
        circle1: "!tw-left-2/5",
        circle2: "!-tw-left-1/4",
      }
    }
  }
})

const emit = defineEmits<{
  toggle: [id: boolean]
}>()

</script>

<template>
  <!-- 拟态切换页 -->
  <div class="switch"
       :class="bottomCard.switchButton">
    <!-- 装饰-园 -->
    <div class="switch-circle"
         :class="bottomCard.circle?.circle1"></div>
    <div class="switch-circle switch-circle-top"
         :class="bottomCard.circle?.circle2"></div>
    <!-- 切换主体 -->
    <div class="switch-container"
         :class="bottomCard.switchButtonHidden1">
      <h2 class="login-public-title">{{ $t('Login.Mimicry.RegisterTitle') }}</h2>
      <p class="login-public-description">{{ $t('Login.Mimicry.RegisterSubtitle') }}</p>
      <n-button type="info" size="large" class="login-public-switch-button"
                @click.stop="emit('toggle', false)">
        {{ $t('Login.Mimicry.LoginButton') }}
      </n-button>
    </div>
    <div class="switch-container"
         :class="bottomCard.switchButtonHidden2">
      <h2 class="login-public-title">{{ $t('Login.Mimicry.LoginTitle') }}</h2>
      <p class="login-public-description">{{ $t('Login.Mimicry.LoginSubtitle') }}</p>
      <n-button type="info" size="large" class="login-public-switch-button"
                @click.stop="emit('toggle', true)">
        {{ $t('Login.Mimicry.RegisterButton') }}
      </n-button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
/* 文字提示框 */
.switch {
  @apply
  tw-bg-login-bg
  tw-top-0
  tw-h-full
  tw-w-2/5
  tw-p-16
  tw-box-border
  tw-z-50
  tw-overflow-hidden
  tw-shadow-2xl
  tw-flex
  tw-justify-center
  tw-items-center
  tw-absolute
  tw-ease-in-out
  tw-duration-1250
}

/* 文字提示框下圆 */
.switch-circle {
  box-shadow: inset 8px 8px 12px #d1d9e6,
  inset -8px -8px 12px #f9f9f9;
  @apply
  tw-duration-1250
  tw-caret-transparent
  tw-absolute
  tw-w-72
  tw-h-72
  tw-rounded-full
  -tw-bottom-1/4
  -tw-left-1/4
}

/* 文字提示框上圆 */
.switch-circle-top {
  @apply
  -tw-top-1/4
  tw-left-2/3
  tw-w-60
  tw-h-60
}

/* 文字提示框内容器 */
.switch-container {
  @apply
  tw-absolute
  tw-w-72
  tw-px-4
  tw-duration-1250
}
</style>
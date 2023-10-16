<script setup lang="ts">
import { MimicryBottomCardStyle } from "@/types/shared.ts";

withDefaults(defineProps<{
  bottomCard: MimicryBottomCardStyle
}>(), {
  bottomCard: () => {
    return {
      switchButton: "mimicry-prompt-box-r",
      switchButtonHidden1: "switch-hidden",
      switchButtonHidden2: null,
      circle: {
        circle1: "!left-2/5",
        circle2: "!-left-1/4",
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
  <div
      class="bg-[#e6efeb] top-0 h-full w-2/5 p-16 box-border z-50 overflow-hidden shadow-2xl flex justify-center items-center absolute ease-in-out duration-1250"
      :class="bottomCard.switchButton">
    <!-- 装饰-园 -->
    <div
        class="duration-1250 caret-transparent absolute w-72 h-72 rounded-full -bottom-1/4 -left-1/4"
        style="box-shadow: inset 8px 8px 12px #d1d9e6,inset -8px -8px 12px #f9f9f9"
        :class="bottomCard.circle?.circle1"></div>
    <div
        class="duration-1250 caret-transparent absolute w-60 h-60 rounded-full -top-1/4 left-2/3"
        style="box-shadow: inset 8px 8px 12px #d1d9e6,inset -8px -8px 12px #f9f9f9"
        :class="bottomCard.circle?.circle2"></div>
    <!-- 切换主体 -->
    <div class="absolute w-72 px-4 duration-1250"
         :class="bottomCard.switchButtonHidden1">
      <h2 class="text-slate-800 text-8 font-bold caret-black mb-8">{{ $t('Login.Mimicry.RegisterTitle') }}</h2>
      <p text="base center gray-400" class="tracking-wider mb-8">{{ $t('Login.Mimicry.RegisterSubtitle') }}</p>
      <n-button type="info" size="large" class="mt-4 w-40 h-12 tracking-wider font-bold rounded-full text-6"
                @click.stop="emit('toggle', false)">
        {{ $t('Login.Mimicry.LoginButton') }}
      </n-button>
    </div>
    <div class="absolute w-72 px-4 duration-1250"
         :class="bottomCard.switchButtonHidden2">
      <h2 class="text-slate-800 text-8 font-bold caret-black mb-8">{{ $t('Login.Mimicry.LoginTitle') }}</h2>
      <p text="base center gray-400" class="tracking-wider mb-8">{{ $t('Login.Mimicry.LoginSubtitle') }}</p>
      <n-button type="info" size="large" class="mt-4 w-40 h-12 tracking-wider font-bold rounded-full text-6"
                @click.stop="emit('toggle', true)">
        {{ $t('Login.Mimicry.RegisterButton') }}
      </n-button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
/* 右过渡 */
.mimicry-prompt-box-r {
  @apply
  left-3/5
  rounded-r-2xl
  max-sm:(
  invisible
  opacity-0
  absolute
  )
}

/* 左过渡 */
.mimicry-prompt-box-l {
  @apply
  left-0
  rounded-l-2xl
  max-sm:(
  invisible
  opacity-0
  absolute
  )
}

/* 切换隐藏 */
.switch-hidden {
  @apply
  invisible
  opacity-0
  absolute
}
</style>
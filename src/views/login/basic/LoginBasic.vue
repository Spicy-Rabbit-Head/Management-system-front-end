<!-- 简约注册登录页容器 -->
<template>
  <div class="w-full h-full bg-white flex">
    <div class="h-screen opacity-0 duration-300 md:opacity-100 md:flex-1">
      <!-- 自动文字 -->
      <div text="white xl" class="absolute bottom-8 left-4 antialiased lg:text-3xl xl:text-4xl">
        <v-typical
            :key="typingOn"
            class="after:content-['|'] blink"
            :steps="typing"
            :loop="Infinity"
        ></v-typical>
      </div>
      <!-- 背景图片 -->
      <img class="h-full w-full object-cover"
           src="@/assets/bg-img1.jpg"
           alt="">
    </div>
    <!-- 登录注册页 -->
    <div class="absolute w-full h-screen md:w-[380px] md:relative">
      <router-view v-slot="{ Component }">
        <transition enter-from-class="opacity-0 -translate-x-50px" leave-to-class="opacity-0 translate-x-50px">
          <component class="absolute w-full hidden transition-all-800 ease-[cubic-bezier(0.55,0,0.1,1)] "
                     :is="Component"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import {VTypical} from "vue-typical";
import {useI18n} from "vue-i18n";
import {ref, watch} from "vue";


const {t, locale} = useI18n()
// 自动文字状态
const typingOn = ref(0)
// 自动文字
const typing = ref([1000, t('Login.Typing.Animation1'), 2000, t('Login.Typing.Animation2'), 3000, t('Login.Typing.Animation3'), 2000])
// 监听语言变化
watch(locale, () => {
  typing.value = [1000, t('Login.Typing.Animation1'), 2000, t('Login.Typing.Animation2'), 3000, t('Login.Typing.Animation3'), 2000]
  typingOn.value++
})
</script>

<style scoped lang="postcss">

/* 自动文字闪烁 */
.blink::after {
  animation: blink 1s infinite step-start;
}

/* 自动文字闪烁动画 */
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
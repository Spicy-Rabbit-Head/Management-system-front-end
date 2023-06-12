<!-- 简约注册登录页容器 -->
<template>
  <div class="tw-w-full tw-h-full tw-bg-white tw-flex">
    <div class="basic-img-container">
      <!-- 自动文字 -->
      <div class="basic-typing">
        <v-typical
            :key="typingOn"
            class="blink"
            :steps="typing"
            :loop="Infinity"
        ></v-typical>
      </div>
      <!-- 背景图片 -->
      <img class="tw-h-full tw-w-full tw-object-cover"
           src="@/assets/bg-img1.jpg"
           alt="">
    </div>
    <!-- 登录注册页 -->
    <div class="basic-main">
      <router-view v-slot="{ Component }">
        <transition enter-from-class="slide-fade-enter-from" leave-to-class="slide-fade-leave-to">
          <component class="child-view" :is="Component"/>
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

<style scoped>
/* 背景图片容器 */
.basic-img-container {
  @apply
  tw-h-screen
  tw-opacity-0
  tw-duration-300
  md:tw-opacity-100
  md:tw-flex-1
}

/* 登录注册页容器 */
.basic-main {
  @apply
  tw-absolute
  tw-w-full
  tw-h-screen
  md:tw-w-[380px]
  md:tw-relative
}

/* 自动文字 */
.basic-typing {
  @apply
  tw-absolute
  tw-bottom-8
  tw-left-4
  tw-text-white
  tw-antialiased
  tw-text-xl
  lg:tw-text-3xl
  xl:tw-text-4xl
}

/* 自动文字闪烁 */
.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

/* 自动文字闪烁动画 */
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
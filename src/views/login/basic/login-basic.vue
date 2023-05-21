<template>
  <div class="tw-w-full tw-h-full tw-bg-white tw-flex">
    <div class="basic-img-container">
      <div class="basic-typing">
        <v-typical
            class="blink"
            :steps="[1000, $t('Login.Typing.Animation1'), 2000, $t('Login.Typing.Animation2'), 3000, $t('Login.Typing.Animation3'), 2000]"
            :loop="Infinity"
        ></v-typical>
      </div>
      <img class="tw-h-full tw-w-full tw-object-cover"
           src="@/assets/bg-img1.jpg"
           alt="">
    </div>
    <div class="basic-main">
      <router-view v-slot="{ Component }">
        <!--        <transition mode="out-in" v-motion="MotionPinia().motion">-->
        <transition mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import {VTypical} from "vue-typical";
// import {useI18n} from "vue-i18n";
// import {MotionPinia} from '@/store'
// const {t} = useI18n()
// const list = [1000, t('Login.Typing.Animation1'), 2000, t('Login.Typing.Animation2'), 3000, t('Login.Typing.Animation3'), 2000]


</script>

<style scoped>
.basic-img-container {
  @apply
  tw-h-screen
  tw-opacity-0
  tw-duration-300
  md:tw-opacity-100
  md:tw-flex-1
}


.basic-main {
  @apply
  tw-absolute
  tw-w-full
  tw-h-screen
  md:tw-w-[380px]
  md:tw-relative
}

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

.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
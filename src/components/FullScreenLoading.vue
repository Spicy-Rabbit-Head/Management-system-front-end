<template>
  <transition leave-to-class="loading-fade-leave-to">
    <div v-if="fullScreenLoadingState"
         class="loading">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {useFullScreenLoading} from "@/hooks/useFullScreenLoading";

const {fullScreenLoadingState} = useFullScreenLoading();
// const loginStore = LoginStore();

</script>

<style scoped>
.loading {
  @apply
  tw-w-screen
  tw-h-screen
  tw-absolute
  tw-z-50
  tw-caret-transparent
  tw-bg-gray-200
  tw-flex
  tw-justify-center
  tw-items-center
  tw-transition-opacity
  tw-duration-1250
}

.wrapper {
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
}

.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #6cda07;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 .5s alternate infinite ease;
}

@keyframes circle7124 {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0;
  }
}

.circle:nth-child(2) {
  left: 45%;
  animation-delay: .2s;
}

.circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}

.shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 .5s alternate infinite ease;
}

@keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: .7;
  }

  100% {
    transform: scaleX(.2);
    opacity: .4;
  }
}

.shadow:nth-child(4) {
  left: 45%;
  animation-delay: .2s
}

.shadow:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}
</style>
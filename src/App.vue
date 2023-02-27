<template>
  <router-view v-slot="{ Component }">
    <transition enter-active-class="animate__animated animate__slideInLeft"
                leave-active-class="animate__animated animate__slideOutRight">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script setup>
import 'animate.css'
</script>


<style scoped>

</style>

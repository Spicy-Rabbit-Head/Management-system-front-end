<template>
  <div style="height: 100%;width: 100%;">
    <router-view v-slot="{ Component,route }">
      <Transition mode="out-in"
                  enter-from-class="opacity-0"
                  leave-to-class="opacity-0"
                  leave-active-class="transition-opacity duration-500"
                  enter-active-class="transition-opacity duration-500"
      >
        <component :is="Component" :key="route.path"/>
      </Transition>
    </router-view>
  </div>
</template>

<script setup>
</script>


<style scoped>
</style>

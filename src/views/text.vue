<template>
  <div class="box">
    1
  </div>
</template>

<script setup lang="ts">
const w = '100px'
</script>

<style scoped>
.box {
  width: v-bind(w);
  height: 100px;
  background-color: red;
}
</style>
<template>
  <div class="wraps">
    <button @click="add">add</button>
    <button @click="pop">pop</button>
    <transition-group leave-active-class="animate__animated animate__hinge"
                      enter-active-class="animate__animated animate__fadeInDown">
      <div class="item" v-for="item in list">
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import 'animate.css'
import {reactive, ref} from "vue";

const list = reactive([1, 2, 3, 4, 5])

const add = () => {
  list.push(list.length + 1)
}
const pop = () => {
  list.pop()
}

</script>

<style scoped>
.wraps {
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  border: 1px solid #CCC;
}

.item {
  margin: 10px;
}
</style>
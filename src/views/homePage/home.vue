<template>
  <div class="tw-w-screen tw-h-screen tw-bg-amber-200">
    <n-button color="red" @click="exit">
      退出登录
    </n-button>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {get} from "@/api/request.js";

const router = useRouter()

function exit() {
  get('/loginRelated/logout', () => {
    window.localStorage.removeItem('token')
    window.sessionStorage.removeItem('token')
    router.push({name: window.localStorage.getItem('login') || 'LoginBasic'})
  }, () => {
    window.localStorage.removeItem('token')
    window.sessionStorage.removeItem('token')
    router.push({name: window.localStorage.getItem('login') || 'LoginBasic'})
  })
}
</script>

<style scoped>

</style>
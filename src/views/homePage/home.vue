<template>
    <h2>这是首页</h2>
    <n-button color="red" @click="x">
        退出登录
    </n-button>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {get} from "@/api/request.js";

const router = useRouter()

function x() {
    get('/loginRelated/logout', () => {
        window.localStorage.removeItem('token')
        router.push({name: 'Login'})
    })
}
</script>

<style scoped>

</style>
<template>
    <LoginPageSwitch class="absolute top-2 right-2 z-20"/>
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
</template>

<script setup lang="ts">
import {onMounted, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {LoginPinia} from "../../store";

const route = useRoute()
const router = useRouter()

function advance(): void {
    router.push({path: localStorage.getItem('login')})
}

onMounted(() => {
    if (localStorage.getItem('login')) {
        LoginPinia().type = true
        advance()
    } else {
        LoginPinia().type = false
        localStorage.setItem('login', '/login/login-basic')
        advance()
    }
});

watch(() => route.path, () => {
    if (route.name === 'login') {
        advance()
    }
})

</script>

<style scoped>

</style>
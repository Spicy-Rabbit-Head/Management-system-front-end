<template>
    <LoginPageSwitch class="tw-absolute tw-top-2 tw-right-2 tw-z-20"/>
    <PasswordReset/>
    <router-view v-slot="{ Component}">
        <transition mode="out-in"
                    enter-from-class="tw-opacity-0"
                    leave-to-class="tw-opacity-0"
                    leave-active-class="tw-transition-opacity tw-duration-500"
                    enter-active-class="tw-transition-opacity tw-duration-500"
        >
            <component :is="Component"/>
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import {onMounted, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {LoginPinia} from "@/store";
import PasswordReset from "./password-reset.vue";
import LoginPageSwitch from "@/components/LoginPageSwitch.vue";

const route = useRoute()
const router = useRouter()

function advance(): void {
    let url: string | null = window.localStorage.getItem('login');
    LoginPinia().type = url != 'BasicLogin';
    if (url == null) {
        router.push({name: 'RootPath'})
        return
    }
    router.push({name: url})
}

onMounted(() => {
    window.sessionStorage.removeItem('token')
    if (window.localStorage.getItem('login')) {
        advance()
    } else {
        window.localStorage.setItem('login', 'BasicLogin')
        advance()
    }
});

watch(() => route.path, () => {
    if (route.name === 'Login') {
        advance()
    }
})

</script>

<style scoped>

</style>
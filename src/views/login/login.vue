<template>
    <LoginPageSwitch class="tw-absolute tw-top-2 tw-right-2 tw-z-20"/>
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
import {LoginPinia} from "../../store";

const route = useRoute()
const router = useRouter()

function advance(): void {
    let url: string = localStorage.getItem('login');
    LoginPinia().type = url != '/login/login-basic/basic-login';
    router.push({path: url})
}

onMounted(() => {
    if (localStorage.getItem('login')) {
        advance()
    } else {
        localStorage.setItem('login', '/login/login-basic/basic-login')
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
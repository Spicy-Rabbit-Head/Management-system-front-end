<template>
  <full-screen-loading/>
  <div class="tw-w-screen tw-h-screen tw-bg-gray-200 !tw-font-mono tw-font-semibold tw-tracking-wide">
    <!-- naive ui 全局通知 -->
    <n-notification-provider :container-style="{ '--color': 'red' }">
      <!-- naive ui 全局配置 -->
      <n-config-provider :theme-overrides="themeOverrides">
        <router-view/>
      </n-config-provider>
    </n-notification-provider>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {GlobalThemeOverrides, NConfigProvider} from "naive-ui";
import {get} from "@/api/request";
import {LoginPinia} from "@/store";
import FullScreenLoading from "@/components/FullScreenLoading.vue";
import {onMounted} from "vue";
import {useI18n} from "vue-i18n";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    // fontSizeMedium: '0.875rem',
    fontSizeMedium: '0.875rem',
    fontSizeLarge: '1.25rem',
  },
}

const router = useRouter();
const loginPinia = LoginPinia();
const {locale} = useI18n();

// function loading() {
//   window.setTimeout(() => {
//     loginPinia.loading = false;
//   }, 3000);
// }

get('loginRelated/isLogin', () => {
  loginPinia.isAuthenticated = true;
  router.push({name: 'Home'})
}, () => {
  let url = window.localStorage.getItem('login') || 'LoginBasic';
  loginPinia.type = url != 'LoginBasic';
  router.push({name: url})
})

onMounted(() => {
  const language = window.localStorage.getItem('locale') || 'CN'
  if (language) {
    locale.value = language
  }
})


// onMounted(() => {
// let token = window.localStorage.getItem('token');
// if (token == null || token === '') {
//   token = window.sessionStorage.getItem('token');
// }
// if (token == null || token === '') {
//   useRouter().push({name: 'Login'})
// } else {
//
//   useRouter().push({name: 'Home'})
// }
// });

</script>


<style scoped>
b {
  border-radius: 50px;
}
</style>

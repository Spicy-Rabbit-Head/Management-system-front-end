<template>
  <div class="tw-w-screen tw-h-screen  !tw-font-sans tw-tracking-widest">
    <n-config-provider :theme-overrides="themeOverrides">
      <router-view/>
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import {GlobalThemeOverrides, NConfigProvider} from "naive-ui";
import {get} from "@/api/request";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    // fontSizeMedium: '0.875rem',
    fontSizeMedium: '2rem',
    fontSizeLarge: '1.25rem',
  },
}

const router = useRouter();

onMounted(() => {
  get('loginRelated/isLogin', () => {
    router.push({name: 'Home'})
  }, () => {
    router.push({name: 'Login'})
  })
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
});

</script>


<style scoped>
</style>

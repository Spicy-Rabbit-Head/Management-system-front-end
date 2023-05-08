<template>
    <div class="tw-w-screen tw-h-screen  tw-font-sans tracking-widest">
        <router-view/>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {onMounted} from "vue";

onMounted(() => {
    let token = window.localStorage.getItem('token');
    if (token === null || token === undefined || token === '') {
        useRouter().push({name: 'Login'})
    } else {
        useRouter().push({name: 'Home'})
    }
});

</script>


<style scoped>
</style>

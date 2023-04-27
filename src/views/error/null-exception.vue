<template>
    <div class="tw-h-screen tw-grid tw-place-items-center">
        <el-result
                icon="error"
                :title="$t('Exception.Title')"
                :sub-title="$t('Exception.SubTitle')"
                class="tw-scale-100 sm:tw-scale-225"
        >
            <template #extra>
                <div>{{ CustomizeError().countdown_time }} {{ $t('Exception.Text') }}</div>
            </template>
        </el-result>
    </div>
</template>

<script setup lang="ts">
import {CustomizeError} from "@/store"
import {onMounted} from "vue";

onMounted(() => {
    CustomizeError().countdown_run()
})

</script>

<style scoped>
</style>
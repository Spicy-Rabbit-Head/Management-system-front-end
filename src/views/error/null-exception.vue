<template>
    <div class="tw-h-screen tw-grid tw-place-items-center">
        <el-result
                icon="error"
                :title="$t('Exception.Title')"
                :sub-title="$t('Exception.SubTitle')"
                class="tw-scale-100 sm:tw-scale-225"
        >
            <template #extra>
                <div>{{ timing.countdown_time }} {{ $t('Exception.Text') }}</div>
            </template>
        </el-result>
    </div>
</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {Router, useRouter} from "vue-router";

const router: Router = useRouter();

// 自定义错误提示接口
interface timingInterface {
    countdown_time: number,
    Interval: null | number,
}

// 自定义错误提示实体
const timing: timingInterface = reactive({
    countdown_time: 5,
    Interval: null
})

// 错误界面倒计时启动
onMounted(() => {
    timing.Interval = window.setInterval(countdown, 1000)
})

// 错误界面倒计时跳转
function countdown() {
    if (timing.countdown_time === 0) {
        router.push({name: 'Login'}).then(() => {
            if (timing.Interval === null) return
            window.clearInterval(timing.Interval)
            timing.countdown_time = 5
            timing.Interval = null
        })
    } else {
        timing.countdown_time--
    }
}

</script>

<style scoped>
</style>
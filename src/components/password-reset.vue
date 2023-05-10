<template>
    <n-modal
        v-model:show="LoginPinia().showPasswordReset"
        class="custom-card !tw-w-4/6 sm:!tw-w-2/5 !tw-rounded-2xl tw-text-center"
        preset="card"
        :title="$t('Login.PasswordReset.Title')"
        size="huge"
        :mask-closable="false"
        :bordered="false"
    >
        <n-input v-model:value="resetData.username" type="text" class="tw-mb-2"
                 :placeholder="$t('Login.PasswordReset.InputTitle')"
                 :disabled="resetData.resetStatus != 0"/>
        <n-button class="!tw-block !tw-mx-auto !tw-w-full" type="primary" @click="resetGet"
                  :disabled="resetData.resetStatus != 0">
            {{ $t('Login.PasswordReset.ResetGet') }}
        </n-button>
        <div class="tw-my-2">
            <p v-if="resetData.resetStatus == 0">{{ $t('Login.PasswordReset.ResetState1') }}</p>
            <p v-if="resetData.resetStatus == 1">{{ $t('Login.PasswordReset.ResetState2') }}</p>
            <p v-if="resetData.resetStatus == 2">{{ $t('Login.PasswordReset.ResetState3') }}</p>
        </div>
        <n-button :loading="loading" @click="refreshClick"
                  :disabled="resetData.resetStatus != 1">
            {{ $t('Login.PasswordReset.StatusRefresh') }}
        </n-button>
        <n-input v-model:value="resetData.password" type="text" class="tw-my-2"
                 :disabled="resetData.resetStatus != 2"
                 :placeholder="$t('Login.PasswordReset.InputPassword')"/>
        <n-button @click="immediateReset" :disabled="resetData.resetStatus != 2">
            {{ $t('Login.PasswordReset.ImmediateReset') }}
        </n-button>
    </n-modal>
</template>
<script lang="ts" setup>
import {LoginPinia} from "@/store";
import {onMounted, reactive, ref} from "vue";
import type {PasswordResetInterface} from "@/type/interface";

// 重置密码数据初始化
const resetData = reactive<PasswordResetInterface>({
    username: "",
    password: "",
    resetStatus: 0,
});

const loading = ref<boolean>(false);

function resetGet() {
    resetData.resetStatus = 1;
    console.log(resetData);
    window.localStorage.setItem("resetData", JSON.stringify(resetData));
}

function refreshClick() {
    loading.value = true;
    window.setTimeout(() => {
        loading.value = false;
    }, 2000);
}

function immediateReset() {

}

onMounted(() => {
    let dataStr = window.localStorage.getItem("resetData");
    if (dataStr) {
        Object.assign(resetData, JSON.parse(dataStr));
    }
});


</script>
<style scoped>

</style>
<template>
    <div class="basic-login-form">
        <n-button type="error" class="tw-flex !tw-absolute tw-left-4 tw-top-4">退出重置</n-button>
        <n-tabs
                class="card-tabs"
                default-value="emailReset"
                size="large"
                justify-content="center"
                animated
        >
            <n-tab-pane name="emailReset" tab="邮箱重置">
                <el-steps :active="current" finish-status="success" process-status="process"
                          align-center>
                    <el-step :title="$t('Login.PasswordReset.Steps1')" icon=""/>
                    <el-step :title="$t('Login.PasswordReset.Steps2')" icon=""/>
                </el-steps>
                <div class="tw-w-10/12 tw-mx-auto">
                    <div v-if="current == 0">
                        <p class="tips tw-my-6">{{ $t('Login.PasswordReset.StepsTips1') }}</p>
                        <n-input placeholder="输入账户名"/>
                        <n-input-group class="tw-my-6">
                            <n-input placeholder="输入验证码"/>
                            <n-button type="primary" :loading="currentLoading"
                                      @click="sendVerificationCode">
                                <template #icon>
                                    <n-icon>

                                    </n-icon>
                                </template>
                                发送验证码
                            </n-button>
                        </n-input-group>
                        <n-button type="primary" block strong @click="current = 1">
                            下一步
                        </n-button>
                    </div>
                    <div v-else>
                        <p class="tips tw-my-6">{{ $t('Login.PasswordReset.StepsTips2') }}</p>
                        <n-input class="tw-mb-6" placeholder="输入新密码"/>
                        <n-button type="primary" block strong>
                            确认重置
                        </n-button>
                    </div>
                </div>
            </n-tab-pane>
            <n-tab-pane name="administratorAssistedReset" tab="管理员辅助重置">
                <n-form>
                    <n-form-item-row label="用户名">
                        <n-input/>
                    </n-form-item-row>
                    <n-form-item-row label="密码">
                        <n-input/>
                    </n-form-item-row>
                    <n-form-item-row label="重复密码">
                        <n-input/>
                    </n-form-item-row>
                </n-form>
                <n-button type="primary" block secondary strong>
                    注册
                </n-button>
            </n-tab-pane>
        </n-tabs>
    </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const current = ref<number>(0)
const currentStatus = ref<'wait' | 'process' | 'finish' | 'error'>('process')
const currentLoading = ref<boolean>(false)

function sendVerificationCode() {
    currentLoading.value = true
    setTimeout(() => {
        currentLoading.value = false
    }, 5000)
}
</script>
<style scoped>
.basic-login-form {
    @apply
    tw-flex
    tw-items-center
    tw-justify-center
    tw-flex-col
    tw-w-screen
    tw-h-screen
    tw-px-8
}

.tips {
    @apply
    tw-tracking-wider
    tw-text-center
    tw-text-gray-500
}
</style>
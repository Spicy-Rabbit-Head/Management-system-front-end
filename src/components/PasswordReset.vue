<script setup lang="ts">
import { onMounted, ref } from "vue";
import { PasswordResetInterface } from "@/types/shared.ts";

// 退出重置按钮显示状态 false为隐藏 默认显示
withDefaults(defineProps<{
  exitDisplay?: boolean
}>(), {
  exitDisplay: true
})

// 邮件重置步骤数
const emailCurrent = ref<number>(0)
// 邮箱重置加载状态
const emailCurrentLoading = ref<boolean>(false)
// 辅助重置加载状态
const auxiliaryCurrentLoading = ref<boolean>(false)
// 辅助重置当前状态
const auxiliaryCurrentState = ref<PasswordResetInterface>({
  // 辅助重置步骤数
  current: 0,
  // 辅助重置按钮审核状态 true为禁用
  resetState: true,
  // 辅助重置审核状态
  tagState: 'warning'
})

// 读取缓存状态
onMounted(() => {
  let item: string | null = localStorage.getItem('auxiliaryCurrentState');
  if (item) {
    auxiliaryCurrentState.value = JSON.parse(item)
  }
  // 状态非法清除缓存
  if (auxiliaryCurrentState.value.current > 2 || auxiliaryCurrentState.value.current < 0) {
    clearCache()
  }
})

// 发送邮件验证码
function sendVerificationCode() {
  emailCurrentLoading.value = true
  setTimeout(() => {
    emailCurrentLoading.value = false
  }, 5000)
}

// 刷新辅助重置状态
function refreshState() {
  auxiliaryCurrentLoading.value = true
  setTimeout(() => {
    auxiliaryCurrentLoading.value = false
    auxiliaryCurrentState.value.tagState = 'success'
    auxiliaryCurrentState.value.resetState = false
  }, 3000)
}

// 辅助重置步骤更新
function auxiliaryStateUpdate(i: number) {
  if (i == 0) {
    auxiliaryCurrentState.value.current = 1
  } else if (i == 1) {
    auxiliaryCurrentState.value.current = 2
  }
  localStorage.setItem('auxiliaryCurrentState', JSON.stringify(auxiliaryCurrentState.value))
}

// 清除缓存
function clearCache() {
  localStorage.removeItem('auxiliaryCurrentState')
  auxiliaryCurrentState.value = {
    current: 0,
    resetState: true,
    tagState: 'warning'
  }
}

</script>

<template>
  <div class="flex items-center justify-center flex-col w-full h-full px-8">
    <!-- 退出重置按钮 -->
    <n-button v-show="exitDisplay" type="error" class="flex absolute left-4 top-4 text-4"
              @click="$router.replace({name:'BasicLogin'})">
      {{ $t('Login.PasswordReset.ExitReset') }}
    </n-button>
    <!-- 重置方法标签页 -->
    <n-tabs
        class="card-tabs"
        default-value="emailReset"
        size="large"
        justify-content="center"
        animated
        :tabs-padding="0"
    >
      <!-- 邮箱验证页 -->
      <n-tab-pane name="emailReset" :tab="$t('Login.PasswordReset.Tab1')">
        <!-- 邮箱验证步骤条 -->
        <el-steps :active="emailCurrent" finish-status="success" process-status="process"
                  align-center>
          <el-step :title="$t('Login.PasswordReset.Steps1')" icon=""/>
          <el-step :title="$t('Login.PasswordReset.Steps2')" icon=""/>
        </el-steps>
        <!-- 邮箱验证步骤内容 -->
        <div class="w-11/12 mx-auto">
          <!-- 邮箱验证步骤-验证码 -->
          <div v-if="emailCurrent == 0">
            <p class="tips my-6">{{ $t('Login.PasswordReset.StepsTips1') }}</p>
            <n-input :placeholder="$t('Login.PasswordReset.EnterAccountName')" class="text-4"/>
            <n-input-group class="my-6">
              <n-input :placeholder="$t('Login.PasswordReset.InputValidationCode')" class="text-4"/>
              <n-button type="primary" class="text-3" :loading="emailCurrentLoading"
                        @click="sendVerificationCode">
                <template #icon>
                  <div i-ant-design-send-outlined/>
                </template>
                {{ $t('Login.PasswordReset.SendVerificationCode') }}
              </n-button>
            </n-input-group>
            <n-button type="primary" class="text-5" block strong @click="emailCurrent = 1">
              {{ $t('Login.PasswordReset.NextSteps') }}
            </n-button>
          </div>
          <!-- 邮箱验证步骤-重置密码 -->
          <div v-else-if="emailCurrent == 1">
            <p class="tips my-6">{{ $t('Login.PasswordReset.StepsTips2') }}</p>
            <n-input :placeholder="$t('Login.PasswordReset.EnterNewPassword')" class="text-4"/>
            <n-input class="my-6 text-4" :placeholder="$t('Login.PasswordReset.EnterTheNewPasswordAgain')"/>
            <n-button type="primary" class="text-5" block strong>
              {{ $t('Login.PasswordReset.ConfirmReset') }}
            </n-button>
          </div>
        </div>
      </n-tab-pane>
      <!-- 辅助验证页 -->
      <n-tab-pane name="administratorAssistedReset" :tab="$t('Login.PasswordReset.Tab2')">
        <!-- 辅助验证步骤条 -->
        <el-steps :active="auxiliaryCurrentState.current" finish-status="success"
                  process-status="process"
                  align-center>
          <el-step :title="$t('Login.PasswordReset.AuxiliarySteps1')" icon=""/>
          <el-step :title="$t('Login.PasswordReset.AuxiliarySteps2')" icon=""/>
          <el-step :title="$t('Login.PasswordReset.AuxiliarySteps3')" icon=""/>
        </el-steps>
        <!-- 辅助验证步骤内容 -->
        <div class="w-11/12 mx-auto">
          <!-- 辅助验证步骤-账号 -->
          <div v-if="auxiliaryCurrentState.current == 0">
            <p class="tips my-6">{{ $t('Login.PasswordReset.StepsTips3') }}</p>
            <n-input class="mb-6 text-4" :placeholder="$t('Login.PasswordReset.EnterAccountName')"/>
            <n-button type="primary" class="text-5" block strong
                      @click="auxiliaryStateUpdate(0)">
              {{ $t('Login.PasswordReset.ResetRequestOccurred') }}
            </n-button>
          </div>
          <!-- 辅助验证步骤-管理员确认 -->
          <div v-else-if="auxiliaryCurrentState.current == 1">
            <p class="tips my-6">{{ $t('Login.PasswordReset.StepsTips2') }}</p>
            <div>
              <n-tag size="large"
                     class="w-full text-3.5 mb-6 xs:!w-auto justify-center"
                     :type="auxiliaryCurrentState.tagState">
                <p v-if="auxiliaryCurrentState.tagState == 'warning'">
                  {{ $t('Login.PasswordReset.AuditStatus1') }}</p>
                <p v-if="auxiliaryCurrentState.tagState == 'error'">
                  {{ $t('Login.PasswordReset.AuditStatus2') }}</p>
                <p v-if="auxiliaryCurrentState.tagState == 'success'">
                  {{ $t('Login.PasswordReset.AuditStatus3') }}</p>
              </n-tag>
              <n-button
                  class="w-full !mb-6 xs:!w-auto xs:(mb-0 float-right text-3.5)"
                  type="primary"
                  :loading="auxiliaryCurrentLoading"
                  @click="refreshState">
                <template #icon>
                  <div i-ant-design-sync-outlined/>
                </template>
                {{ $t('Login.PasswordReset.RefreshStatus') }}
              </n-button>
            </div>
            <n-button type="primary" block strong class="text-5"
                      @click="auxiliaryStateUpdate(1)"
                      :disabled="auxiliaryCurrentState.resetState">
              {{ $t('Login.PasswordReset.NextSteps') }}
            </n-button>
          </div>
          <!-- 辅助验证步骤-重置密码 -->
          <div v-else-if="auxiliaryCurrentState.current == 2">
            <p class="tips my-6">{{ $t('Login.PasswordReset.StepsTips2') }}</p>
            <n-input :placeholder="$t('Login.PasswordReset.EnterNewPassword')" class="text-4"/>
            <n-input class="my-6 text-4" :placeholder="$t('Login.PasswordReset.EnterTheNewPasswordAgain')"/>
            <n-button type="primary" class="text-5" block strong>
              {{ $t('Login.PasswordReset.ConfirmReset') }}
            </n-button>
          </div>
          <!-- 辅助验证步骤-清除缓存 -->
          <n-button class="!mt-6 text-5" type="error" block
                    @click="clearCache">
            {{ $t('Login.PasswordReset.ClearCache') }}
          </n-button>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style scoped lang="postcss">
/* 提示样式 */
.tips {
  @apply
  text-3.5
  tracking-wider
  text-center
  text-gray-500
}
</style>

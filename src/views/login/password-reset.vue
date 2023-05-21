<template>
  <div class="basic-login-form tw-px-8">
    <n-button v-show="exitDisplay" type="error" class="tw-flex tw-absolute tw-left-4 tw-top-4 tw-text-[1rem]"
              @click="$router.push({name:'BasicLogin'})">退出重置
    </n-button>
    <n-tabs
        class="card-tabs"
        default-value="emailReset"
        size="large"
        justify-content="center"
        animated
    >
      <n-tab-pane name="emailReset" tab="邮箱重置">
        <el-steps :active="emailCurrent" finish-status="success" process-status="process"
                  align-center>
          <el-step :title="$t('Login.PasswordReset.Steps1')" icon=""/>
          <el-step :title="$t('Login.PasswordReset.Steps2')" icon=""/>
        </el-steps>
        <div class="tw-w-11/12 tw-mx-auto">
          <div v-if="emailCurrent == 0">
            <p class="tips tw-my-6">{{ $t('Login.PasswordReset.StepsTips1') }}</p>
            <n-input placeholder="输入账户名" class="tw-text-[1rem]"/>
            <n-input-group class="tw-my-6">
              <n-input placeholder="输入验证码" class="tw-text-[1rem]"/>
              <n-button type="primary" class="tw-text-[1rem]" :loading="emailCurrentLoading"
                        @click="sendVerificationCode">
                <template #icon>
                  <n-icon>

                  </n-icon>
                </template>
                发送验证码
              </n-button>
            </n-input-group>
            <n-button type="primary" class="tw-text-[1.25rem]" block strong @click="emailCurrent = 1">
              下一步
            </n-button>
          </div>
          <div v-else-if="emailCurrent == 1">
            <p class="tips tw-my-6">{{ $t('Login.PasswordReset.StepsTips2') }}</p>
            <n-input placeholder="输入新密码" class="tw-text-[1rem]"/>
            <n-input class="tw-my-6 tw-text-[1rem]" placeholder="再次输入新密码"/>
            <n-button type="primary" class="tw-text-[1.25rem]" block strong>
              确认重置
            </n-button>
          </div>
        </div>
      </n-tab-pane>
      <n-tab-pane name="administratorAssistedReset" tab="管理员辅助重置">
        <el-steps :active="auxiliaryCurrentState.Current" finish-status="success"
                  process-status="process"
                  align-center>
          <el-step :title="$t('Login.PasswordReset.AuxiliarySteps1')" icon=""/>
          <el-step :title="$t('Login.PasswordReset.AuxiliarySteps2')" icon=""/>
          <el-step :title="$t('Login.PasswordReset.AuxiliarySteps3')" icon=""/>
        </el-steps>
        <div class="tw-w-11/12 tw-mx-auto">
          <div v-if="auxiliaryCurrentState.Current == 0">
            <p class="tips tw-my-6">{{ $t('Login.PasswordReset.AuxiliaryTips1') }}</p>
            <n-input class="tw-mb-6 tw-text-[1rem]" placeholder="输入账户名"/>
            <n-button type="primary" class="tw-text-[1.25rem]" block strong
                      @click="auxiliaryStateUpdate(0)">
              发生重置请求
            </n-button>
          </div>
          <div v-else-if="auxiliaryCurrentState.Current == 1">
            <p class="tips tw-my-6">{{ $t('Login.PasswordReset.StepsTips2') }}</p>
            <div>
              <n-tag size="large"
                     class="tw-w-full tw-text-[0.875rem] tw-mb-6 xs:!tw-w-auto tw-justify-center"
                     :type="auxiliaryCurrentState.tagState">
                <p v-if="auxiliaryCurrentState.tagState == 'warning'">
                  管理员审核中</p>
                <p v-if="auxiliaryCurrentState.tagState == 'error'">
                  审核不通过</p>
                <p v-if="auxiliaryCurrentState.tagState == 'success'">
                  审核通过</p>
              </n-tag>
              <n-button
                  class="tw-w-full !tw-mb-6 xs:!tw-w-auto xs:!tw-mb-0 xs:tw-float-right tw-text-[0.875rem]"
                  type="primary"
                  :loading="auxiliaryCurrentLoading"
                  @click="refreshState">
                <template #icon>
                  <n-icon>

                  </n-icon>
                </template>
                刷新状态
              </n-button>
            </div>
            <n-button type="primary" block strong class="tw-text-[1.25rem]"
                      @click="auxiliaryStateUpdate(1)"
                      :disabled="auxiliaryCurrentState.resetState">
              下一步
            </n-button>
          </div>
          <div v-else-if="auxiliaryCurrentState.Current == 2">
            <p class="tips tw-my-6">{{ $t('Login.PasswordReset.StepsTips2') }}</p>
            <n-input placeholder="输入新密码" class="tw-text-[1rem]"/>
            <n-input class="tw-my-6 tw-text-[1rem]" placeholder="再次输入新密码"/>
            <n-button type="primary" class="tw-text-[1.25rem]" block strong>
              确认重置
            </n-button>
          </div>
          <n-button class="!tw-mt-6 tw-text-[1.25rem]" type="error" block
                    @click="clearCache">
            清除缓存,重新开始
          </n-button>
        </div>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {PasswordResetInterface} from "@/type/interface";
// 退出重置按钮显示状态 false为隐藏 默认显示
defineProps({exitDisplay: {type: Boolean, default: true}})
// 邮件重置步骤数
const emailCurrent = ref<number>(0)
// 邮箱重置加载状态
const emailCurrentLoading = ref<boolean>(false)
// 辅助重置加载状态
const auxiliaryCurrentLoading = ref<boolean>(false)
const auxiliaryCurrentState = ref<PasswordResetInterface>({
  // 辅助重置步骤数
  Current: 0,
  // 辅助重置按钮审核状态 true为禁用
  resetState: true,
  // 辅助重置审核状态
  tagState: 'warning'
})

// 读取缓存状态
onMounted(() => {
  let item: string | null = window.localStorage.getItem('auxiliaryCurrentState');
  if (item) {
    auxiliaryCurrentState.value = JSON.parse(item)
  }
  // 状态非法清除缓存
  if (auxiliaryCurrentState.value.Current > 2 || auxiliaryCurrentState.value.Current < 0) {
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
    auxiliaryCurrentState.value.Current = 1
  } else if (i == 1) {
    auxiliaryCurrentState.value.Current = 2
  }
  window.localStorage.setItem('auxiliaryCurrentState', JSON.stringify(auxiliaryCurrentState.value))
}

// 清除缓存
function clearCache() {
  window.localStorage.removeItem('auxiliaryCurrentState')
  auxiliaryCurrentState.value = {
    Current: 0,
    resetState: true,
    tagState: 'warning'
  }
}

</script>
<style scoped>
.tips {
  @apply
  tw-text-[0.875rem]
  tw-tracking-wider
  tw-text-center
  tw-text-gray-500
}
</style>
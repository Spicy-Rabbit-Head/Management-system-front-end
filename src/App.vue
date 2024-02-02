<script setup lang="ts">
import { useRoute } from "vue-router";
import FullScreenLoading from "@/components/FullScreenLoading.vue";
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useMenu } from "@/hooks/useMenu.ts";
import { useUser } from "@/hooks/useUser.ts";
import { FormStructure } from "@/components/ExhibitDialog";

const route = useRoute();
const {
  menuStatus,
} = useMenu();
const {
  getLoginStatus
} = useUser()
const {locale, t} = useI18n();


// 读取本地存储的全局配置
onMounted(() => {
  getLoginStatus()
  // 读取语言
  locale.value = localStorage.getItem('locale') || 'zhCN'
  // 读取菜单样式
  let menu = localStorage.getItem('menu') || 'false'
  if (menu == 'false') {
    localStorage.setItem('menu', 'false')
    menuStatus.value = false
  } else {
    localStorage.setItem('menu', 'true')
    menuStatus.value = true
  }
})
// 监听路由变化，修改标题
watch(() => route.meta, (meta) => {
  if (meta.title) window.document.title = t(meta.title as string) || "设备保养管理系统";
  else window.document.title = "设备保养管理系统";
})

const form: Array<FormStructure> = [
  {
    component: 'input',
    label: '事项名称',
    prop: 'mattersName',
    readonly: false,
  },
  {
    component: 'input',
    label: '事项描述',
    prop: 'mattersDescription',
  },
  {
    component: 'select',
    label: '成员',
    prop: 'member',
    multiple: true,
    options: [
      {
        label: '伍英贤',
        value: '伍英贤'
      },
      {
        label: '刘佳辉',
        value: '刘佳辉'
      },
      {
        label: '孙楠',
        value: '孙楠'
      },
      {
        label: '李浩勇',
        value: '李浩勇'
      },
      {
        label: '王斌',
        value: '王斌'
      },
      {
        label: '王璇',
        value: '王璇'
      },
      {
        label: '王立虎',
        value: '王立虎'
      },
      {
        label: '赵子奎',
        value: '赵子奎'
      },
      {
        label: '邹忠',
        value: '邹忠'
      },
      {
        label: '郁华',
        value: '郁华'
      }
    ]
  },
  {
    component: 'select',
    label: '事项时间',
    prop: 'mattersTime',
    multiple: false,
    options: [
      {
        label: '上午',
        value: '上午'
      },
      {
        label: '下午',
        value: '下午'
      },
      {
        label: '全天',
        value: '全天'
      }
    ]
  }
]

console.log(JSON.stringify(form))

</script>

<template>
  <!-- 全局加载 -->
  <full-screen-loading/>
  <div class="w-screen h-screen bg-gray-200 z-40 tracking-wide"
       font="!mono semibold">
    <router-view/>
  </div>
</template>


<style scoped>
</style>

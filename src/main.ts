import { createApp } from 'vue';
import './style/style.css';
import 'virtual:uno.css'
import App from './App.vue';
import { createPinia } from "pinia";
import router from "@/router";
import messages from "@intlify/unplugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";
import ElementPlus from 'element-plus'
import 'element-plus/es/components/notification/style/css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as icons from '@vicons/carbon';
import "vexip-ui/es/css/layout"
import "vexip-ui/es/css/spin"
import 'element-plus/es/components/switch/style/css'
import { DynamicBusinessTable } from "@/components/AdvancedTable"

const pinia = createPinia()
const app = createApp(App)
// 使用pinia
app.use(pinia)
// 使用路由
app.use(router)
// 使用国际化
app.use(createI18n({
  legacy: false,
  locale: 'zhCN',
  fallbackLocale: 'zhCN',
  messages
}))

app.use(ElementPlus, {
  locale: zhCn,
})
// Naive UI 样式挂载
// const meta = document.createElement('meta')
// meta.name = 'naive-ui-style'
// document.head.appendChild(meta)
// 挂载到主页面
// 挂载全局图标
for (const [key, component] of Object.entries(icons)) {
  app.component('Z' + key, component)
}
app.component('DynamicBusinessTable', DynamicBusinessTable)
app.mount('#app')

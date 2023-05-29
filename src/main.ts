import {createApp} from 'vue'
import 'vexip-ui/css/index.css'
// import 'element-plus/dist/index.css'
import './style/style.css'
import './style/index.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import {createI18n} from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import router from "@/router";
import {Toast} from "vexip-ui";

const pinia = createPinia()

const app = createApp(App)
// 使用pinia
app.use(pinia)
// 使用路由
app.use(router)
// 使用国际化
app.use(createI18n({
    legacy: false,
    locale: 'CN',
    fallbackLocale: 'EN',
    messages
}))

app.use(Toast)
// Naive UI 样式挂载
// const meta = document.createElement('meta')
// meta.name = 'naive-ui-style'
// document.head.appendChild(meta)
// 挂载到主页面
app.mount('#app')

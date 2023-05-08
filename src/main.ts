import {createApp} from 'vue'
import './style/style.css'
import 'vexip-ui/css/index.css'
// import 'element-plus/dist/index.css'
import './style/index.css'
import App from './App.vue'
import router from "./router/index.js"
import {createPinia} from 'pinia'
import {MotionPlugin} from "@vueuse/motion";
import {createI18n} from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import {Toast} from "vexip-ui";

const pinia = createPinia()

const app = createApp(App)

// 使用路由
app.use(router)
// 使用pinia
app.use(pinia)
// 使用运动动画
app.use(MotionPlugin)
// 使用国际化
app.use(createI18n({
    locale: 'zh-CN',
    fallbackLocale: 'en-US',
    messages
}))
app.use(Toast)
// Naive UI 样式挂载
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)
// 挂载到主页面
app.mount('#app')

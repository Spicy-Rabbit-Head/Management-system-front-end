import {createApp} from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import router from "./router/index.js"
import {createPinia} from 'pinia'


const pinia = createPinia()

const app = createApp(App)

// 将路由安装为Vue插件
app.use(router)
app.use(pinia)
// 挂载到主页面
app.mount('router')
app.mount('#app')


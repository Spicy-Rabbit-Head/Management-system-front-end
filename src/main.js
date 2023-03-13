import {createApp} from 'vue'
import './style/index.css'
import App from './App.vue'
import router from "./router/index.js"
import {createPinia} from 'pinia'
import {MotionPlugin} from "@vueuse/motion";


const pinia = createPinia()

const app = createApp(App)

// 使用路由
app.use(router)
// 使用pinia
app.use(pinia)
// 使用动画
app.use(MotionPlugin)

// 挂载到主页面
app.mount('#app')


// 引入js
import {createRouter, createWebHashHistory} from 'vue-router'
// 引入组件
// import login from "../views/login/login-mimicry.vue";
// import null_exception from "../views/error/null-exception.vue"

// 定义路由
const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue'),
        children: [
            {
                path: 'login-mimicry',
                component: () => import('../views/login/mimicry/login-mimicry.vue')
            },
            {
                path: 'login-basic',
                component: () => import('../views/login/basic/login-basic.vue'),
                children: [
                    {
                        path: 'basic-login',
                        component: () => import('../views/login/basic/login-basic-Login.vue')
                    },
                ]
            }
        ]
    },
    {
        path: '/null-exception',
        component: () => import('../views/error/null-exception.vue')
    },
    {
        path: '/text-box',
        component: () => import('../views/text.vue')
    },
]

// 创建路由实例并定义路由配置
const router = createRouter({
    history: createWebHashHistory("/"),
    routes,
})
// 导出
export default router
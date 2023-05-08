// 引入js
import {createRouter, createWebHashHistory, Router, RouteRecordRaw} from 'vue-router'

// 定义路由
const routes = [
    // 根目录重定向
    {
        path: '/',
        name: 'RootPath',
        redirect: '/login',
    },
    // 动态匹配404重定向
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: '/null-exception',

    },
    // 404 页面
    {
        path: '/null-exception',
        name: 'NullException',
        component: () => import('@/views/error/null-exception.vue')
    },
    // 登录页面根目录
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login.vue'),
        children: [
            // 拟态登录页面
            {
                path: 'login-mimicry',
                name: 'LoginMimicry',
                component: () => import('@/views/login/mimicry/login-mimicry.vue')
            },
            // 基础登录页面
            {
                path: 'login-basic',
                name: 'LoginBasic',
                component: () => import('@/views/login/basic/login-basic.vue'),
                children: [
                    {
                        path: 'basic-login',
                        name: 'BasicLogin',
                        component: () => import('@/views/login/basic/login-basic-Login.vue')
                    },
                    {
                        path: 'basic-register',
                        name: 'BasicRegister',
                        component: () => import('@/views/login/basic/login-basic-register.vue')
                    }
                ]
            }
        ]
    },
    // 首页
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/homePage/home.vue'),
    }
]

// 创建路由实例并定义路由配置
const router: Router = createRouter({
    history: createWebHashHistory("/"),
    routes: <RouteRecordRaw[]>routes
})
// 导出
export default router
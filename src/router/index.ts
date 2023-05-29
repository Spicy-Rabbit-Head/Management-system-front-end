// 引入js
import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import {LoginPinia} from "@/store";

// import NullException from "@/views/error/null-exception.vue";
// import Login from "@/views/login/login.vue";
// import LoginMimicry from "@/views/login/mimicry/login-mimicry.vue";
// import LoginBasic from "@/views/login/basic/login-basic.vue";

function FullScreenLoadingRun() {
    LoginPinia().loading = true
}

// 定义路由
const routes = [
    // 根目录重定向
    {
        path: '/',
        name: 'RootPath',
        redirect: '/login',
    },
    // 404 页面
    {
        path: '/null-exception',
        name: 'NullException',
        component: () => import("@/views/error/null-exception.vue")
        // component: NullException
    },
    // 登录页面根目录
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/login.vue'),
        // component: Login,
        beforeEnter: FullScreenLoadingRun,
        children: [
            // 拟态登录页面
            {
                path: 'login-mimicry',
                name: 'LoginMimicry',
                component: () => import('@/views/login/mimicry/login-mimicry.vue')
                // component: LoginMimicry
            },
            // 基础登录页面
            {
                path: 'login-basic',
                name: 'LoginBasic',
                component: () => import('@/views/login/basic/login-basic.vue'),
                // component: LoginBasic,
                redirect: {name: 'BasicLogin'},
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
                    },
                    {
                        path: 'basic-reset',
                        name: 'BasicReset',
                        component: () => import('@/views/login/password-reset.vue')
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
        beforeEnter: FullScreenLoadingRun,
    },
    // 匹配所有路径,如果没有匹配到,则重定向到404页面
    {
        path: '/:pathMatch(.*)*',
        redirect: '/null-exception'
    }
]

// 创建路由实例并定义路由配置
const router: Router = createRouter({
    history: createWebHistory("/"),
    routes: <RouteRecordRaw[]>routes,
})

// 前置全局守卫
router.beforeEach((_to, from, next) => {
        console.log("路由跳转开始")
        console.log(from.path)
        next()
    }
)

router.afterEach((to) => {
    if (LoginPinia().loading) {
        LoginPinia().loading = false
    }
    console.log(to.path)
    console.log("路由跳转结束")
})

router.onError((error) => {
    console.log("路由跳转错误:")
    console.log(error)
    router.push({name: 'NullException'}).then()
})


// 导出
export default router
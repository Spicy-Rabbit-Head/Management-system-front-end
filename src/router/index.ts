// 引入js
import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import {useFullScreenLoading} from "@/hooks/useFullScreenLoading";

const {
    FullScreenLoadingRun,
    fullScreenLoadingState,
    FullScreenLoadingStop
} = useFullScreenLoading();


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
        meta: {title: 'Title.NullException'},
        component: () => import("@/views/error/NullException.vue")
    },
    // 登录页面根目录
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue'),
        beforeEnter: FullScreenLoadingRun,
        children: [
            // 拟态登录页面
            {
                path: 'login-mimicry',
                name: 'LoginMimicry',
                meta: {title: 'Title.LoginMimicry'},
                component: () => import('@/views/login/mimicry/LoginMimicry.vue')
            },
            // 基础登录页面
            {
                path: 'login-basic',
                name: 'LoginBasic',
                component: () => import('@/views/login/basic/LoginBasic.vue'),
                redirect: {name: 'BasicLogin'},
                children: [
                    {
                        path: 'basic-login',
                        name: 'BasicLogin',
                        meta: {title: 'Title.BasicLogin'},
                        component: () => import('@/views/login/basic/LoginBasicLogin.vue')
                    },
                    {
                        path: 'basic-register',
                        name: 'BasicRegister',
                        meta: {title: 'Title.BasicRegister'},
                        component: () => import('@/views/login/basic/LoginBasicRegister.vue')
                    },
                    {
                        path: 'basic-reset',
                        name: 'BasicReset',
                        meta: {title: 'Title.BasicReset'},
                        component: () => import('@/components/PasswordReset.vue')
                    }
                ]
            }
        ]
    },
    // 首页
    {
        path: '/sidebar',
        name: 'Sidebar',
        meta: {title: 'Title.Home'},
        component: () => import('@/views/homePage/Home.vue'),
        beforeEnter: FullScreenLoadingRun,
    },
    // 临时
    // {
    //     path: '/sidebar',
    //     name: 'Sidebar',
    //     component: () => import('@/layout/SidebarLayout.vue'),
    //     beforeEnter: FullScreenLoadingRun,
    //     redirect: {name: 'Schedule'},
    //     children: [
    //         {
    //             path: 'schedule',
    //             name: 'Schedule',
    //             component: () => import('@/views/schedule/ScheduleLayout.vue'),
    //         }
    //     ]
    // },
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
router.beforeEach((to, from, next) => {
    console.log("路由跳转开始")
    console.log(from.path)
    console.log(to.matched)
    // if (to.path.includes('/login') || to.path.includes('/home')) {
    //     return;
    // }
    next()
})
// 后置全局守卫
router.afterEach((to) => {
    if (fullScreenLoadingState) {
        FullScreenLoadingStop()
    }
    console.log(to.path)
    console.log("路由跳转结束")
})
// 路由跳转错误
router.onError((error) => {
    console.log("路由跳转错误:")
    console.log(error)
    router.replace({name: 'NullException'}).then()
})


// 导出
export default router
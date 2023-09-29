import {defineStore} from 'pinia'
import {GlobalStoreInterface, LoginStoreInterface} from "@/types/types.ts";

// 登录注册界面实体
export const LoginStore = defineStore('LoginStore', {
    state: (): LoginStoreInterface => {
        return {
            // 登录注册界面切换状态 true拟态 false简单
            type: true,
            // 登录加载状态
            loginLoading: false,
            // 登录异常
            loginException: null
        }
    },
    actions: {}
})

// 全局共享状态实体
export const GlobalStore = defineStore('GlobalStore', {
    state: (): GlobalStoreInterface => {
        return {
            // 菜单栏状态 (false展开 true收起)
            menuStatus: false,
        }
    },
})

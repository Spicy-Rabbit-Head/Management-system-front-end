import {defineStore} from 'pinia'
import {GlobalStoreInterface} from "@/types/types.ts";

// 全局共享状态实体
export const GlobalStore = defineStore('GlobalStore', {
    state: (): GlobalStoreInterface => {
        return {
            // 菜单栏状态 (false展开 true收起)
            menuStatus: false,
        }
    },
})

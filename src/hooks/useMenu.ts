import {reactive, ref} from "vue";
import {DynamicMenuInterface} from "@/types/types.ts";
import router from "@/router/index.ts"

// 菜单栏状态 (false展开 true收起)
const menuStatus = ref<boolean>(false);
// 菜单
const menuOptions = reactive<Array<DynamicMenuInterface>>([
    {
        groupName: '主页',
        menus: [
            {
                menuName: 'Home',
                path: '/home',
                menuDesc: '首页'
            }
        ]
    }
]);


export function useMenu() {
    // 添加菜单
    function addMenu(menu: Array<DynamicMenuInterface>) {
        menuOptions.push(...menu)
        addRoute(menu)
    }

    function select(item: string) {
        router.replace({name: item}).then()
    }

    // 添加路由
    function addRoute(menu: Array<DynamicMenuInterface>) {
        menu.forEach((item) => {
            item.menus.forEach((menu) => {
                if (menu.children) {
                    console.log(menu.children)
                }
            })
        })
    }

    return {
        menuStatus,
        menuOptions,
        addMenu,
        select,
    }
}
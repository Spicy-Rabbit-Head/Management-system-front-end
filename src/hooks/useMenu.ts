import { reactive, ref } from "vue";
import { DynamicMenuInterface } from "@/types/userManagement.ts";
import router from "@/router/index.ts"
import { RouteRecordRaw } from "vue-router";
import { useFullScreenLoading } from "@/hooks/useFullScreenLoading.ts";

const {
    FullScreenLoadingRun,
} = useFullScreenLoading();

// 菜单栏状态 (false展开 true收起)
const menuStatus = ref<boolean>(false);
// 菜单
const menuOptions = reactive<Array<DynamicMenuInterface>>([]);
// 组件列表
const componentList = import.meta.glob('../views/**/*.vue')


export function useMenu() {
    // 添加菜单
    function addMenu(menu: Array<DynamicMenuInterface>) {
        menuOptions.push(...menu)
        return new Promise<void>((resolve) => {
            addRoute(menu)
            resolve()
        })
    }

    function select(item: string) {
        router.replace({name: item}).then()
    }

    // 添加路由
    function addRoute(menu: Array<DynamicMenuInterface>) {
        const layoutMenu: RouteRecordRaw = {
            path: '/sidebar',
            name: 'Sidebar',
            meta: {title: 'Title.Home'},
            component: () => import('@/layout/SidebarLayout.vue'),
            beforeEnter: FullScreenLoadingRun,
            children: []
        }
        menu.forEach((group) => {
            group.menus.forEach((topMenu) => {
                if (topMenu.children) {
                    const menus: RouteRecordRaw = {
                        path: topMenu.path,
                        name: topMenu.menuName,
                        children: [],
                    }
                    topMenu.children.forEach((menu) => {
                        menus.children.push({
                            path: menu.path,
                            name: menu.menuName,
                            component: componentList[`../views/${menu.componentPath}.vue`]
                        })
                    })
                    layoutMenu.children.push(menus)
                } else {
                    layoutMenu.children.push({
                        path: topMenu.path,
                        name: topMenu.menuName,
                        component: componentList[`../views/${topMenu.componentPath}.vue`]
                    })
                }
            })
        })
        router.addRoute(layoutMenu)
        console.log(router.getRoutes())
    }

    return {
        menuStatus,
        menuOptions,
        addMenu,
        select,
    }
}
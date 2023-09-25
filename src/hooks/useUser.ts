import {ref} from "vue";
import router from "@/router";

// 登录注册界面切换状态 true拟态 false简单
const type = ref<boolean>(false)
// 是否登录
const isAuthenticated = ref<boolean>(false)

// 切换登录状态
function switchingLoginStatus(i: boolean) {
    let url = window.localStorage.getItem('login') || 'LoginBasic';
    type.value = url != 'LoginBasic';
    if (i) {
        isAuthenticated.value = true;
        router.replace({name: 'Sidebar'}).then()
    } else {
        isAuthenticated.value = false;
        router.replace({name: url}).then()
    }
}


export function useUser() {
    return {
        switchingLoginStatus,
        isAuthenticated,
    }
}
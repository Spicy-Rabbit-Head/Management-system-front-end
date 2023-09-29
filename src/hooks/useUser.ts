import {reactive, ref} from "vue";
import router from "@/router";
import {UserForm} from "@/api/types.ts";

// 登录注册界面切换状态 true拟态 false简单
const type = ref<boolean>(false)
// 当前登录状态
const currentLoginStatus = ref<boolean>(false)
// 是否自动登录
const isAutomaticLogin = ref<boolean>(false)
// 用户表单
const userForm = reactive<UserForm>({
    username: '',
    password: '',
    repeatPassword: ''
})

export function useUser() {
    // 切换登录状态
    function switchingLoginStatus(bool: boolean) {
        let url = localStorage.getItem('login') || 'LoginBasic';
        type.value = url != 'LoginBasic';
        if (bool) {
            currentLoginStatus.value = true;
            router.replace({name: 'Sidebar'}).then()
        } else {
            currentLoginStatus.value = false;
            router.replace({name: url}).then()
        }
    }

    // 清除缓冲
    function clearBuffer() {
        userForm.username = ''
        userForm.password = ''
        userForm.repeatPassword = ''
    }

    // 添加Token
    function addToken(token: string) {
        router.replace({name: 'Sidebar'}).then(() => {
            if (isAutomaticLogin) {
                sessionStorage.removeItem('token')
                localStorage.setItem('token', token)
            } else {
                localStorage.removeItem('token')
                sessionStorage.setItem('token', token)
            }
            clearBuffer()
        })
    }

    // 清除Token
    function clearToken() {
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
    }

    // 是否登录
    function isAuthenticated() {
        return currentLoginStatus.value
    }

    // 设定登录状态
    function setLoginStatus(bool: boolean) {
        currentLoginStatus.value = bool
    }

    return {
        type,
        currentLoginStatus,
        switchingLoginStatus,
        clearBuffer,
        addToken,
        clearToken,
        isAuthenticated,
        setLoginStatus,
        userForm,
        isAutomaticLogin
    }
}
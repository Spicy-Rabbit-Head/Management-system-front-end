import { reactive, ref } from "vue";
import router from "@/router";
import { UserForm } from "@/types/userManagement.ts";

// 是否自动登录
const isAutomaticLogin = ref<boolean>(false)

// 用户表单
const userForm = reactive<UserForm>({
    username: '',
    password: '',
    repeatPassword: ''
})

export function useUser() {
    // 登录完成
    function loginComplete() {
        router.replace({name: localStorage.getItem('router') ?? 'Home'}).then()
    }

    // 回到登录界面
    function backToLogin() {
        router.replace({name: localStorage.getItem('login') || 'LoginBasic'}).then(() => {
                clearToken()
            }
        )
    }

    // 清除缓冲
    function clearBuffer() {
        userForm.username = ''
        userForm.password = ''
        userForm.repeatPassword = ''
        isAutomaticLogin.value = false
    }

    // 添加Token
    function addToken(token: string) {
        if (isAutomaticLogin) {
            sessionStorage.removeItem('token')
            localStorage.setItem('token', token)
        } else {
            localStorage.removeItem('token')
            sessionStorage.setItem('token', token)
        }
        clearBuffer()
    }

    // 清除Token
    function clearToken() {
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
    }

    return {
        isAutomaticLogin,
        userForm,
        loginComplete,
        backToLogin,
        clearBuffer,
        addToken,
        clearToken
    }
}

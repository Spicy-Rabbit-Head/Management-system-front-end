// 是否登录
import {get, post} from "@/api/requestInstance.ts";
import {useUser} from "@/hooks/useUser.ts";

const {
    addToken,
    userForm,
    loginComplete,
    backToLogin,
} = useUser();


// 登录
export function login(): void {
    post<string>('loginRelated/login', userForm)
        .then(response => {
            loginComplete()
            addToken(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

// 查询是否登录
export function isLogin() {
    get('loginRelated/isLogin')
        .then(() => {
            loginComplete()
        })
        .catch(() => {
            backToLogin()
        })
}

// 退出登录
export function logout(): void {
    get('/loginRelated/logout')
        .catch(() => {
            console.log("退出登录失败")
        })
        .finally(() => {
            backToLogin();
        })
}

// 注册
export function register(): void {
    post('loginRelated/register', userForm)
        .then(() => {
            console.log("注册成功,请登录")
            backToLogin()
        })
        .catch((error) => {
            console.log(error)
        })
}
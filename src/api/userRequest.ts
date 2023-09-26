// 是否登录
import {get, post} from "@/api/requestInstance.ts";
import {useUser} from "@/hooks/useUser.ts";

const {
    switchingLoginStatus,
    addToken,
    userForm,
    clearToken,
    setLoginStatus,
} = useUser();


// 登录
export function login(): void {
    console.log(userForm)
    post<string>('loginRelated/login', userForm)
        .then(response => {
            switchingLoginStatus(true)
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
            switchingLoginStatus(true)
        })
        .catch(() => {
            switchingLoginStatus(false)
        })
}

// 退出登录
export function logout(): void {
    get('/loginRelated/logout')
        .catch(() => {
            console.log("退出登录失败")
        })
        .finally(() => {
            clearToken();
            setLoginStatus(false);
            switchingLoginStatus(false);
        })
}

// 注册
export function register(): void {
    post('loginRelated/register', userForm)
        .then(() => {
            console.log("注册成功,请登录")
            switchingLoginStatus(false)
        })
        .catch((error) => {
            console.log(error)
        })
}
import { get, post } from "@/api/requestInstance.ts";
import { useUser } from "@/hooks/useUser.ts";
import { useMenu } from "@/hooks/useMenu.ts";
import { DynamicMenuInterface } from "@/types/userManagement.ts";

const {
    addToken,
    userForm,
    loginComplete,
    backToLogin,
} = useUser();

const {
    addMenu,
} = useMenu();


// 登录
export function login(): void {
    post<string>('loginRelated/login', userForm)
        .then(response => {
            addToken(response.data)
            getMenu()
        })
        .catch((error) => {
            console.log(error)
        })
}

// 查询是否登录
export function isLogin() {
    get('loginRelated/isLogin')
        .then(() => {
            getMenu()
        })
        .catch(() => {
            backToLogin()
        })
}

// 退出登录
export function logout(): void {
    get('loginRelated/logout')
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

// 菜单权限获取
function getMenu() {
    get<Array<DynamicMenuInterface>>('permissions/getMenuList')
        .then((response) => {
            addMenu(response.data).then(() => {
                loginComplete()
            })
        })
        .catch((error) => {
            console.log(error)
        })
}
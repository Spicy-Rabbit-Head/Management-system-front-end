// 是否登录
import {get} from "@/api/requestInstance.ts";
import {useUser} from "@/hooks/useUser.ts";

const {
    switchingLoginStatus,
} = useUser();

// 查询是否登录
export function isLogin() {
    get('loginRelated/isLogin', () => {
        switchingLoginStatus(true)
    }, () => {
        switchingLoginStatus(false)
    }, () => {
        switchingLoginStatus(false)
    })
}
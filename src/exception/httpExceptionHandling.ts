import {useUser} from "@/hooks/useUser.ts";

const {
    clearToken,
} = useUser();

export function httpCodeException(code: number) {
    console.log(code)
    switch (code) {
        /**
         * Token 验证流程异常
         */
        // Token 已失效
        case 100001:
            clearToken()
            break;

    }
}

export function httpException(error: string) {
    console.log("服务器异常")
    console.log("错误信息：" + error)
}
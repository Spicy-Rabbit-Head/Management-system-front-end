import {Toast, ToastType} from "vexip-ui";
import IconAntDesignAlertOutlined from "~icons/ant-design/alert-outlined"
import {useNotification} from "naive-ui";

// 显示吐司提示
export function showToast(message: string, type: ToastType = 'warning') {
    Toast.open({
        type: type,
        icon: IconAntDesignAlertOutlined,
        content: message,
        showMask: true,
    })
}

// 显示登录信息通知
export function showLoginNotification(message: string) {
    useNotification().success({
        title: '登录信息',
        content: message,
        duration: 5000,
    })
}

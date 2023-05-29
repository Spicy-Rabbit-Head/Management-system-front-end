import {Toast, ToastType} from "vexip-ui";
import IconAntDesignAlertOutlined from "~icons/ant-design/alert-outlined"


export function showToast(message: string, type: ToastType = 'warning') {
    Toast.open({
        type: type,
        icon: IconAntDesignAlertOutlined,
        content: message,
        showMask: true,
    })
}
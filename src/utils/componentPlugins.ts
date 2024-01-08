import { useNotification } from "naive-ui";
import { h } from 'vue'
import { ElNotification } from 'element-plus'

type NotificationType = 'success' | 'warning' | 'info' | 'error'

// 显示通知
export function showNotification(title: string, message: string, type: NotificationType = 'error') {
  ElNotification({
    title: title,
    message: h('p', null, message),
    type: type,
    duration: 3000,
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

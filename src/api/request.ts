// 封装 axios
import axios from 'axios'
import {ElMessage} from "element-plus";

// 创建一个 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_URL, // 基础 URL
    timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        console.log("开始请求")
        config.headers.Authorization = '123456'
        // 在发送请求之前做些什么
        return config
    },
    error => {
        console.log("请求错误")
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)
// 响应拦截器
service.interceptors.response.use(
    response => {
        console.log("请求成功")
        // 对响应数据做点什么
        return response
    },
    error => {
        console.log("请求失败")
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
// 封装消息提示
const defaultError = () => ElMessage.error("服务器异常")
const defaultFailure = () => ElMessage.warning("请求失败")

// 封装 post 请求
function post(url: string, data: any, success: any, failure = defaultFailure, error = defaultError) {
    service.post(url, data).then(({data}) => {
        if (data.success) {
            success(data)
        } else {
            failure()
        }
    }).catch(error)
}

// 封装 get 请求
function get(url: string, success: any, failure = defaultFailure, error = defaultError) {
    service.get(url).then(({data}) => {
        if (data.success) {
            success(data)
        } else {
            failure()
        }
    }).catch(error)
}

export {post, get}
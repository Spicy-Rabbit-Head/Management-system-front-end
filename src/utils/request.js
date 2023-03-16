// 封装 axios
import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_URL, // 基础 URL
    timeout: 5000 // 请求超时时间
})

service.interceptors.request.use(
    config => {
        console.log("开始请求")
        config.headers.Authorization = {token: "123456"}
        // 在发送请求之前做些什么
        return config
    },
    error => {
        console.log("请求错误")
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

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

export default service


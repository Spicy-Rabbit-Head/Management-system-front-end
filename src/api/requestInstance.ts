// 封装 axios
import axios from 'axios'
import globalConfig from '@/config/global'

// 创建一个 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_URL, // 基础 URL
    timeout: 1000 * 8, // 请求超时时间
    responseEncoding: "UTF-8", // 响应编码
})


// 请求拦截器
service.interceptors.request.use(
    config => {
        let whiteList = globalConfig.whiteListApi
        console.log("开始请求")
        let token: string | null = localStorage.getItem("token") || sessionStorage.getItem("token")
        if (whiteList.indexOf(config.url || "") === -1 && token) {
            config.headers.token = token;
        }
        // 在发送请求之前做些什么
        return config
    },
    error => {
        console.log("请求错误")
        // 对请求错误做些什么
        return Promise.reject(new Error(error))
    }
)

// 响应拦截器
service.interceptors.response.use(response => {
        console.log("请求成功")
        return Promise.resolve(response)
    },
    error => {
        console.log("请求失败")
        // 对响应错误做点什么
        return Promise.reject(new Error(error))
    }
)


// 封装 post 请求
function post(url: string, params: any) {
    return new Promise((resolve, reject) => {
        service.post(url, params).then(data => {
            console.log(data)
            if (data.status) {
                resolve(data.data)
            } else {
                reject(data)
            }
        }).catch((error) => {
                reject(new Error(error))
            }
        )
    })
}

// 封装 get 请求
function get<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        service.get(url).then(({data}) => {
            console.log(data)
            if (data.status) {
                resolve(data)
            } else {
                reject(data)
            }
        }).catch((error) => {
            reject(error)
        })
    })
}

export {post, get}
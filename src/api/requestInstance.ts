// 封装 axios
import axios from 'axios'
import { whiteListApi } from '@/config/globalConfig.ts'
import { ResponseData } from "@/types/shared.ts";
import { httpCodeException, httpException } from "@/exception/httpExceptionHandling.ts";

// 创建一个 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_URL, // 基础 URL
  timeout: 1000 * 8, // 请求超时时间
  responseEncoding: "UTF-8", // 响应编码
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    console.log("开始请求")
    let token: string | null = localStorage.getItem("token") || sessionStorage.getItem("token")
    if (whiteListApi.indexOf(config.url || "") === -1 && token) {
      config.headers.token = token;
    }
    // 在发送请求之前做些什么
    return config
  },
  error => {
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
    // 对响应错误做点什么
    httpException(error.message as string)
    return Promise.reject(new Error(error))
  }
)


// 封装 post 请求
function post<T = any, D = any>(url: string, body?: D) {
  return new Promise<ResponseData<T>>((resolve, reject) => {
    service.post<ResponseData<T>>(url, body).then(({data}) => {
      if (data.status) {
        resolve(data)
      } else {
        httpCodeException(data.code)
        reject(data)
      }
    }).catch((error) => {
        reject(new Error(error))
      }
    )
  })
}

// 封装 get 请求
function get<T = any>(url: string, params?: any) {
  return new Promise<ResponseData<T>>((resolve, reject) => {
    service.get<ResponseData<T>>(url, {params: params}).then(({data}) => {
      if (data.status) {
        resolve(data)
      } else {
        httpCodeException(data.code)
        reject(data)
      }
    }).catch((error) => {
      reject(error)
    })
  })
}

export { post, get }
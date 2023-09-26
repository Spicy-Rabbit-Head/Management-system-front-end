// 响应数据
export interface ResponseData<T = any> {
    // 状态码
    code: number,

    // 消息
    message: string,

    // 服务状态
    status: boolean,

    // 数据
    data: T
}

// 用户表单
export interface UserForm {
    // 用户名
    username: string,

    // 密码
    password: string,

    // 重复密码
    repeatPassword?: string
}

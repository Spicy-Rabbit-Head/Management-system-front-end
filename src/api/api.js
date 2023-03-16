import request from "../utils/request.js";
// 注册
export const login = (data) => {
    return request.post("/login", data);
}

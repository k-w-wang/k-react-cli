import axios from './service'

export interface ILogin {
    username: string,
    password: string,
}
// 登录
export const login = (params: ILogin) => {
    return axios.request({
        method: "post",
        url: "",
        data: params
    })
}
// 登出
export const logout = () => {
    return axios.request({
        method: "post",
        url: "",
    })
}
// 注册
export const register = () => {
    return axios.request({
        method: "post",
        url: "",
    })
}
// 修改密码
export const changePassword = () => {
    return axios.request({
        method: "post",
        url: "",
    })
}
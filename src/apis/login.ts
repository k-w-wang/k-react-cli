import axios from './service'

export interface ILogin {
    username: string,
    password: string,
}
// 登录
export const login = (params: ILogin) => {
    return axios.request({
        method: "post",
        url: "/c3/api/v1/login",
        data: params
    })
}
// 登出
export const logout = () => {
    return axios.request({
        method: "post",
        url: "/c3/api/v1/logout",
    })
}
// 注册
export const register = () => {
    return axios.request({
        method: "post",
        url: "/c3/api/v1/register",
    })
}
// 修改密码
export const changePassword = () => {
    return axios.request({
        method: "post",
        url: "/c3/api/v1/change_password",
    })
}
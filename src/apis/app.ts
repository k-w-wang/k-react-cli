import axios from './service'
//  app
interface IApp {
    appName: string,
    appType: string,
}
// 查询apps
interface ISapps {
    enabled: boolean
}
// 创建app
export const createApp = (params: IApp) => {
    return axios.request({
        method: "post",
        url: "/c3/api/v1/apps",
        data: params
    })
}

// 获取app列表
export const getApps = (params: ISapps) => {
    return axios.request({
        method: "get",
        url: "/c3/api/v1/apps",
        params
    })
}
// 获取app详情
export const getApp = (app_id: string) => {
    return axios.request({
        method: "get",
        url: `/c3/api/v1/apps/${app_id}`,
    })
}
import axiosV2 from './service'
export const getEdgeList = () => {
    return axiosV2.request({
        url: "/api/edges",
        method: "get",
    })
}
export const searchEdgeList = (params: any) => {
    return axiosV2.request({
        url: "/api/edges/search",
        method: "post",
        data: params,
    })
}

export const getString :(params: boolean) => Promise<any> = (params: boolean) => {
    return new Promise<any>((resolve, reject) => {
        if (params) {
            resolve(5)
        } else {
            reject("失败了")
        }
    })
}


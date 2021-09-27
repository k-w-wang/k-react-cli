/* eslint-disable @typescript-eslint/no-unused-vars */
// 用类封装axios
import axios from "axios";
import { message } from "antd";
// import { baseURL } from '@/config';
class HttpRequest {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    // this.baseUrl = baseUrl
  }
  // 全局的配置
  getInsideConfig() {
    const config = {
      timeout: 5000,
      // baseUrl:this.baseUrl,
      // 头信息
      headers: {
        //
      },
    };
    return config;
  }
  // 定义拦截器
  interceptors(instance: any, url: string) {
    // 请求拦截器
    instance.interceptors.request.use(
      (config: any) => {
        if (url.indexOf("login") === -1 && localStorage.getItem("token")) {
          config.headers.token = localStorage.getItem("token");
        }
        const token = window.localStorage.getItem("token");
        token && (config.headers.Authorization = token);
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    instance.interceptors.response.use(
      (response: any) => {
        const { data, status } = response;
        if (
          data.error_code === 401 ||
          data.error_code === 452 ||
          data.error_code === 50000
        ) {
          // eslint-disable-next-line no-restricted-globals
          window.location.href = location.origin + location.pathname + "#/";
        }

        // 返回的内容做一个处理
        return { data, status };
        // return res
      },
      (error: any) => {
        message.destroy();
        if (!error.response) {
          window.location.href = window.location.origin + window.location.pathname + "#/overview";
          localStorage.setItem("tokenHead", "");
          localStorage.setItem("token", "");
          return
        }
        switch (error.response.status) {
          // 401: 未登录
          // 未登录则跳转登录页面，并携带当前页面的路径
          // 在登录成功后返回当前页面，这一步需要在登录页操作。
          case 401:
            window.location.href = window.location.origin + window.location.pathname + "#/";
            if (window.location.href.split("#")[1] !== "/"){
              message.error(
                error.response.data.message || "身份验证失败，请关闭重新进入。"
              );
            }
            break;

          // 403 token过期
          // 登录过期对用户进行提示
          // 跳转登录页面
          case 403:
            message.error(
              error.response.data.message || "登录过期，请关闭重新进入。"
            );
            // 清除token
            break;
          // 404请求不存在
          case 404:
            message.error(
              error.response.data.message || "您访问的网页不存在。"
            );
            break;
          case 500:
            message.error(error.response.data.message || "服务器发生了错误。");
            break;
          // 其他错误，直接抛出错误提示
          default:
            message.error(error.response.data.message);
        }
        return Promise.reject(error.response);
      }
    );
  }
  // 封装请求方法
  request(options: any) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    // 给拦截器传入axios实例
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;

// 引入axios
import axios from "axios"
import store from "../store"
import { GetToken } from "./auth";
const service = axios.create({
    // 基准地址
    baseURL: process.env.VUE_APP_BASE_API,
    // 请求超时
    timeout: 5000

})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 获取vuex中的token
    const token = GetToken()
    if (token) {
        config.headers.token = token
    }


    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    if (response.status < 400) {
        return response
    } else {
        return response
    }

    // 对响应数据做点什么
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 统一传参方式
const request = (options) => {
    options.method = options.method || 'GET'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    return service(options)

}

export default request
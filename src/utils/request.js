import axios from 'axios';
import { message } from 'ant-design-vue';

// 环境变量
// console.log(process.env.VUE_APP_FLAG);

// 新建一个 axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_FLAG,
    timeout: 5000,

});



// 添加请求拦截器
service.interceptors.request.use(function (config) {

    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // console.log(response);
    // 对响应数据做点什么
    const data = response.data;

    if (data.resCode !== 0) {
        // 失败
        message.info(data.message)
        return Promise.reject(data)
    } else {
        return Promise.resolve(data)
    }

    // return response;
}, function (error) {

    // console.log(error.request);
    // 对响应错误做点什么

    const err = JSON.parse(error.request.response)
    message.info(err.message)


    return Promise.reject(error);
});

export default service;
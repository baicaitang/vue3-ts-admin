import service from '@/utils/request.js';

/**
 * 
 * 验证码
 */
export function GetCode(data) {
    // console.log(params);
    return service.request({
        url: '/error/',
        method: 'post',
        data
    })
}

/**
 * 账户体系-登录
 */
export function AccountLogin(data) {
    return service.request({
        url: process.env.VUE_APP_ACCOUNT_APIURL + '/login/',
        method: 'post',
        data
    })
}


/**
 * 用户体系
 */
export function User(data) {
    return service.request({
        url: process.env.VUE_APP_USER_APIURL + '/user/',
        method: 'post',
        data
    })
}

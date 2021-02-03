/**
 * 手机号验证
 * @param {*} value 手机号
 */
export function checkPhone(value) {
    let regPhone = /^1[3456789]\d{9}$/;// \d代表数字  $结尾   ^开头 []或 eg:12、13、14...   {9}9位
    return regPhone.test(value)
}

/**
 *密码验证
 *6-20数字、英文
 */
export function checkPassword(value) {
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;

    return regPassword.test(value)
}

/**
 * 验证码
 * 6位数字或英文
 */
export function checkCode(value) {
    let regCode = /[a-zA-Z0-9]{6}/;
    return regCode.test(value)
}
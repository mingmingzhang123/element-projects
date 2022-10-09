import Cookies from 'js-cookie'
// 封装本地存储

const TO_KEN = "token"
// 存储token
export const SetToken = (token) => {
    Cookies.set(TO_KEN, token)
}
// 获取token
export const GetToken = () => {
    return Cookies.get(TO_KEN)
}
// 删除touken
export const removeToken = () => {
    return Cookies.remove(TO_KEN)
}
// 清除本地token
export const clearStorage = () => {
    sessionStorage.clear()
}
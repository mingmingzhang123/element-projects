

// 封装本地存储

const TO_KEN = "token"
// 存储token
export const SetToken = (token) => {
    localStorage.setItem(TO_KEN, token)
}
// 获取token
export const GetToken = () => {
    return localStorage.getItem(TO_KEN)
}
// 引入axios实例对象
import service from "../utils/request";
// 引入qs、
import qs from "qs"
// 登录接口
export const handleGoTo = (data) => {
    return service({
        // 接口地址
        url: 'user/login',
        // 请求方式
        method: 'POST',
        data: qs.stringify(data)
    })
}
// 获取验证图片
export const getImage = () => {
    return service({
        url: 'sysUser/image',
        method: 'POST',
        responseType: 'arraybuffer',

    })
}
// 获取路由、按钮、菜单数据
export const getPermissionList = () => {
    return service({
        url: 'sysUser/getPermissionList',
        method: 'GET'
    })
}
// 退出登录接口
export const Logout = () => {
    return service({
        url: 'sysUser/loginOut',
        method: "POST"
    })
}
// 引入axios实例对象
import service from "@/utils/request";
// 登录接口
export const handleGoTo = (data) => {
    return service({
        // 接口地址
        url: '/api/user/login',
        // 请求方式
        method: 'POST',
        data
    })
}
// 获取验证图片
export const getImage=()=>{
    return service({
        url:'/api/sysUser/image',
        method:'POST',
        responseType: 'blob',
        
    })
}
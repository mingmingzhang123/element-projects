// 引入axios实例对象
import service from "@/utils/request";
// 登录接口
const handleGoTo = (data) => {
    return service({
        // 接口地址
        url: '/api/user/login',
        // 请求方式
        method: 'POST',
        data
    })
}
export default {
    handleGoTo
}
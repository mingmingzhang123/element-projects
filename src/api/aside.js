import service from "@/utils/request";
// 获取侧边栏接口
export const getaside = () => {
    return service({
        url: 'sysUser/getPermissionList',
        method: "GET"
    })
}
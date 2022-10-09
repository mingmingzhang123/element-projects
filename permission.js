import router from "@/router";
import {
    GetToken,
    removeToken
} from "./src/utils/auth"
import store from "./src/store"

// 白名单
const whiteList = ['/404', '/401', '/login']
router.beforeEach(async (to, from, next) => {
    // 获取token
    const token = GetToken()
    // 判断当前有没有token有的话就放行
    if (token) {
        // 判断有token时要去的页面是不是login页面如果是login就跳转到之前的页面
        if (to.path == '/login') {
            next({
                path: from.path
            })
        } else {
            // 判断有没有权限\
            const a = store.getters.menuList
            if (a && a.length > 0) {
                // 有权限就放行
                next()
            } else {
                try {
                    // 没有权限就获取权限
                    const response = await store.dispatch('Menu/getMenuList', router)
                    if (response) {
                        // 如果有权限就跳转到想去的页面
                        next({
                            path: to.path
                        })
                    } else {
                        // 没有的话就清除token并跳转到登录页面
                        removeToken()
                        next('/login')
                    }
                } catch (e) {
                    console.log(e.message);
                    removeToken()
                    next('/login')
                }
            }
        }

        next()

    } else {
        // 判断要去的页面是不是白名单如果是就放行
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            // 没有token就跳转到login页面
            next('/login')
        }



    }
})
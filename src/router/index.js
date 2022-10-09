import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'

// 解决重复点击路由出现的错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import("../layout"),
    children: [{
        path: '/home',
        name: 'home',
        component: () => import("../views/home")
      },
      // {
      //   path: 'departmentList',
      //   name: 'departmentList',
      //   component: () => import("../views/DepartmentList"),
      //   meta: {
      //     title: '机构管理',
      //     path: '/departmentList'
      //   }
      // },
      // {
      //   path: 'userList',
      //   name: 'userList',
      //   component: () => import("../views/UserList"),
      //   meta: {
      //     title: '用户管理',
      //     path: '/userList'
      //   }
      // },
      // {
      //   path: 'roleList',
      //   name: 'roleList',
      //   component: () => import("../views/RoleList"),
      //   meta: {
      //     title: '角色管理',
      //     path: '/roleList',

      //   }
      // },
      // {
      //   path: 'menuList',
      //   name: 'menuList',
      //   component: () => import("../views/MenuList"),
      //   meta: {
      //     title: '权限管理',
      //     path: '/menuList',



      //   }
      // },
      // {
      //   path: 'goodCategory',
      //   name: 'goodCategory',
      //   component: () => import("../views/goodCategory"),
      //   meta: {
      //     title: '分类管理',
      //     path: '/goodCategory',

      //   }
      // },
      // {
      //   path: 'goodsBrand',
      //   name: 'goodsBrand',
      //   component: () => import("../views/goodsBrand"),
      //   meta: {
      //     title: '品牌管理',
      //     path: '/goodsBrand',

      //   }
      // },
      // {
      //   path: 'systemCode',
      //   name: 'systemCode',
      //   component: () => import("../views/systemCode"),
      //   meta: {
      //     title: '代码生成',
      //     path: '/systemCode',

      //   }
      // },
      // {
      //   path: 'document',
      //   name: 'document',
      //   component: () => import("../views/document"),
      //   meta: {
      //     title: '接口文档',
      //     path: '/document',


      //   }
      // }


    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404')
  }


]

const router = new VueRouter({
  routes
})

export default router
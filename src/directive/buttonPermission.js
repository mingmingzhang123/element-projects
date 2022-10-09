import Vue from "vue"
import store from "@/store"
Vue.directive('btn-permission', {
    inserted(el, binding) {
        console.log(binding, 'binding5555');
        // 获取绑定的元素
        const btnValue = binding.value
        // 获取vuex中的按钮权限
        const authList = store.getters.authList
        // 判断按钮权限有没有当前所绑定的元素
        const a = authList.includes(btnValue)
        if (!a) {
            // 通过css样式隐藏
            el.style.display = "none"
            // 根据获取父节点然后删除子元素
            el.parentElement.removeChild(el)

        }
        console.log(a, 'aaaa');
    }
})
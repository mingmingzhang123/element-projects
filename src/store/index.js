import Vue from 'vue'
import Vuex from 'vuex'
import Menu from "./modules/menu"
import getters from "./getters"
import Tags from "./modules/tags"
Vue.use(Vuex)
// 引入本地存储
import {
  SetToken,
  GetToken
} from "../utils/auth";
// 引入api
import {
  handleGoTo
} from "../api/login"
export default new Vuex.Store({

  state: {
    token: GetToken() || ''
  },
  getters,
  // getters: {
  //   token(state) {
  //     return state.token

  //   },


  // },
  mutations: {
    // 把token存在vuex中
    SET_TOKEN(state, token) {
      state.token = token
      SetToken(token)
    }
  },
  actions: {
    // 登录
    async login({
      commit
    }, LoginForm) {
      try {
        const response = await handleGoTo(LoginForm)
        console.log('response', response);
        commit("SET_TOKEN", response.data.token)
        return response.data.token
      } catch (e) {
        console.log(e.message);
      }

    }
  },
  modules: {
    // 注册模块
    Menu,
    Tags
  }
})
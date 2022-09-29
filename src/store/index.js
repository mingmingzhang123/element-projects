import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 引入本地存储
import {SetToken} from "../utils/auth";
// 引入api
import {handleGoTo} from "../api/login"
export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {

  },
  mutations: {
    // 把token存在vuex中
    SET_TOKEN(state, token) {
      state.token = token
      SetToken(token)
    }
  },
  actions: {
    async login({commit}, LoginForm) {
      try {
        const response = await handleGoTo(LoginForm)
        commit("SET_TOKEN", response.token)
        return response.token
      } catch (e) {
        console.log(e.message);
      }

    }
  },
  modules: {}
})
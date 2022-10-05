import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

Vue.use(ElementUI);
import "./style/reset.css"

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
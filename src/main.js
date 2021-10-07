import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from './store';
import axios from "axios";

import router from './route'
Vue.prototype.axios = axios;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
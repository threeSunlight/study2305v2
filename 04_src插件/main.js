import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from '@/plugins/plugins'
Vue.config.productionTip = false
Vue.use(plugins)
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log(vm);

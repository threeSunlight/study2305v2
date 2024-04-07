//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
// 引入vuex
import store from '@/store/index'

// 引入router路由表
import router from '@/router/router'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	store,
	router,
	render: h => h(App)
})
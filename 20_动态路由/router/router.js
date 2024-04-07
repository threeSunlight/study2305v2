// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
// 引入路由
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
//  同步路由
import Count from '../components/Count.vue'
import Person from '../components/Person.vue'
import HellowWOrld from '../components/HelloWorld.vue'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 配置组件名称
const routes = [
  // 只动态传递一个参数
  { path: '/count/:username', component: Count },
  { path: '/person', component: Person },
  // 命名路由
  // 动态传递多个参数
  {
    path: '/word/:username/postId/:postID',
    name: 'word',
    component: HellowWOrld
  },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


export default router


// 4. 将路由注册到vue实例上
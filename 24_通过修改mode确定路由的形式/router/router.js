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
import Yule from '../components/Yule.vue'
import News from '../components/News.vue'
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 配置组件名称
const routes = [
  // 只动态传递一个参数
  { 
    path: '/count', 
    name: 'count',
    alias: '/b',
    component: Count,
    // 第一种 路径写法
    // redirect: '/word'
    // 第二种: 命名路由写法
    // redirect: {
    //   name: 'word'
    // }
    // 第三种 回调函数编程思维
    // redirect: to => {
     
    //   return {
    //     name: 'word',
    //     params: to.params
    //   }
    // }
  },
  { 
    path: '/person', 
    component: Person 
  },
  // 命名路由
  // 动态传递多个参数
  {
    path: '/word',
    name: 'word',
    component: HellowWOrld,
    children: [
      {
        path: 'news',
        name: 'news',
        // 别名
        
        component: News
      },
      {
        path: 'yule',
        name: 'yule',
        component:Yule
      }
    ]
  },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  // 指定路由模式,是hash还是history
  mode:"history",
  // 访问路由的根目录
  base: process.env.BASE_URL,
  routes // (缩写) 相当于 routes: routes
})


export default router


// 4. 将路由注册到vue实例上
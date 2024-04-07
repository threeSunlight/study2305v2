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
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      console.log( from, '独享守卫');
      // 需求: 只有从角色页面来的路由才能进入word页面
      if(from.path === '/person') {
        next()
      }
      // next(false)
    },
    children: [
      {
        path: 'news',
        name: 'news',
        // 别名
        component: import(/* webpackChunkName: "group-foo" */ '../components/News.vue')
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


// 全局前置路由守卫钩子
/**
 * to: 要去哪里的路径
 * from: 从哪里来
 * 如果本地没有token,重新跳转到登录页面
 */
router.beforeEach((to, from, next)=>{
  console.log("/*/*/*/*/*/*/*/*/*")
  console.log(to);
  console.log(from);
  console.log("/*/*/*/*/*/*/*/*/*")
  next()
})

/**
 * 全局后置路由守卫钩子
 */
router.afterEach((to, from) => {
  // ...
})

export default router


// 4. 将路由注册到vue实例上



// 路由的加载有两种方式,一种是同步加载,一种是异步加载
// 引入vue
import Vue from 'vue'
// 引入路由
import Router from 'vue-router'

// 注册路由(使用路由)
Vue.use(Router)

// 导出路由实例对象
export default new Router({
  routes: [
    {
      path: '/login',  // 路径
      name: 'login', // 名字
      component: () => import('./views/Login/Login.vue')  // 引入登录组件
    }
  ]
})

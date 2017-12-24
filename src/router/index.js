import Vue from 'vue'
import VueRouter from 'vue-router'
// "@"相当于".."
import Detail from '../pages/goodsDetail'
import Msg from '../components/message'

// 使用路由
Vue.use(VueRouter)

// 下面不要顺手格式化,eslint会缩进报错
export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      // 进行路由配置
      path: '/',
      // 这样写可以按需加载
      component: resolve => require(['../pages/home.vue'], resolve)
    },
    {
      path: '/msg',
      component: Msg
    },
    {
      path: '/detail',
      component: Detail,
      children: [
        {
          path: 'msg',
          component: Msg
        }
      ]
    }
  ]
})

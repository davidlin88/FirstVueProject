import Vue from 'vue'
import VueRouter from 'vue-router'
// "@"相当于".."
import Detail from '../pages/goodsDetail'
import Msg from '../components/message.vue'

// 使用路由
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      // 进行路由配置,规定'/'引入到home组件
      path: '/',
      component: resolve => require(['../pages/home.vue'], resolve),
      meta: {
        title: 'home'
      }
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

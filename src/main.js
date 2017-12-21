import Vue from 'vue'
import router from './router/index'
import VueResource from 'vue-resource'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  // 定义作用范围
  el: '#app',
  // 引入路由
  router,
  data () {
    return {
    }
  }
})

Vue.filter('dCurrency', function (value) {
  return '￥' + value
})
Vue.filter('dTofixed', function (value) {
  var isNum = parseFloat(value)
  if (!isNum) {
    alert('请输入数字')
    return '请输入数字'
  } else {
    // 取整
    value = Math.round(isNum * 100) / 100
    var item = value.toString().split('.')
    if (item.length === 1) {
      value = value.toString() + '.00'
      return value
    }
    if (item.length > 1) {
      if (item[1].length < 2) {
        value = value.toString() + '0'
      }
      return value
    }
  }
})

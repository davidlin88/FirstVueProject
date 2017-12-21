<template lang="html">
  <div class="container">
    <home-header></home-header> <!-- 展示引入的header组件 -->
    <div class="content">
      <ul class="cont-ul">
        <!-- list组件展示区,并用v-for将数据遍历,:xx="xxx" 是用来给子组件传递数据的 -->
        <list v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></list>
      </ul>
    </div>
    <common-footer></common-footer> <!-- 展示引入的footer组件 -->
  </div>
</template>

<script>
import HomeHeader from '../components/homeHeader'
import CommonFooter from '../components/commonFooter'
import List from '../components/list'
export default {
  data () {
    return {
      // 定义一个空数组数据 items
      items: []
    }
  },
  components: {
    HomeHeader,
    CommonFooter,
    List
  },
  created () {
    // 这是vue的钩子函数,当new Vue()实例创建完毕后执行的函数
    this.$http.get('/api/goods').then((data) => {
      // 调用vue的ajax来请求数据,promise语法,并用es6的箭头函数
      this.items = data.body.data
    })
  }
}
</script>

<style lang="css">
.container {
  width: 100%;
  margin: 0 auto;
}
.content {
  margin-bottom: 1.8rem;
}
.cont-ul {
  padding-top: .5rem;
  background-color: #ccc;
}
.cont-ul::after {
  content: '';
  display: block;
  clear: both;
  height: 0;
  width: 0;
}
</style>
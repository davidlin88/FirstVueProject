<template lang="html">
  <li class="goods-list">
    <router-link to="/detail" class="goods-list-link">
      <div class="goods-list-pic">
        <img :src="img" :alt="title">
      </div>
      <div class="goods-list-desc">
        <p class="goods-list-name">{{title}}</p>
        <p class="goods-list-price">{{price|dTofixed|dCurrency}}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
export default{
  // 子组件获取父组件数据
  props: ['price', 'title', 'img']
}
</script>

<style lang="css" scoped>
.goods-list {
  width: 50%;
  float: left;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
}
.goods-list:nth-of-type(odd) {
  border-right: 0.15rem solid #ccc;
}
.goods-list:nth-of-type(even) {
  border-left: 0.15rem solid #ccc;
}
.goods-list-pic {
  padding: 0.5rem;
}
.goods-list-pic > img {
  width: auto;
  height: 4rem;
}
.goods-list-desc {
  padding: 0 0.5rem;
}
.goods-list-desc {
  padding: 0 0.5rem;
}
.goods-list-desc:after {
  display: block;
  content: '';
  clear: both;
}
.goods-list-name,.goods-list-price {
  width: 50%;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.8rem;
  color: #333;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-list-price {
  color: #ff8000;
  float: right;
}

</style>
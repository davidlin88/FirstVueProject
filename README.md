# firstVueProject
### vue.js安装篇
网上关于环境安装配置的文章已不少,此处仅留一些指令以供使用:
* `npm install -g cnpm --registry=https://registry.npm.taobao.org`:安装npm淘宝镜像
* `npm install -g express`:安装express（选择安装）
* `npm install -g webpack`:安装webpack
* `npm install vue`:安装vue
* `npm install -g vue-cli`:安装 vue-cli
* `vue init webpack vue-projectname`:初始化一个项目
* `cnmp install`:安装依赖(目录更名后要重新安装依赖)
* `npm run dev`:运行项目
* `cd c:/code`:路径跳转
### 小tips
* svg矢量图转化为字符的使用方法: [IcoMoon官网](https://icomoon.io/)   [IcoMoon的灵活使用](http://www.zhangxinxu.com/wordpress/2012/06/free-icon-font-usage-icomoon/)
* [normalize.css](http://necolas.github.io/normalize.css/),是一种CSS reset的替代方案,[了解更多](http://jerryzou.com/posts/aboutNormalizeCss/)
* `.`表示当前目录,就像`..`表示父目录
* npm报错`no-tabs`的解决方法:1.在eslint的配置文件中`eslintrc`rules项中添加一行：`"no-tabs":"off"`;2.sublime右下角点击转化为空格缩进,再勾选使用空格缩进

### 接口测试
* 2017.12.20,迈进了历史性的一步,困扰了3天的由于vue版本+vue-cli版本差异导致的测试接口数据终于成功了!..在此对[datura_lj](https://www.jianshu.com/u/b6daf42c2cdd)表示感谢!

### 踩的坑们
1. 字符串输入/开头时,会被自动删除,原因出在AutoFileName插件上,在setting-user里添加一项`"afn_use_project_root": true`即可
2. node.js的ealint检查提示"缩进应该是2而不是4"之类的错误时,可能是注释缩进有问题导致出现大量缩进错误
3. 报错提示`component lists rendered with v-for should have explicit keys`,原因是vue2.0建议在使用`v-for`时给每个项提供一个唯一的key值


### stylus的环境配置
1. `cnpm stylus `+`cnpm stylus-loader`安装依赖
2. 在css的标记处写明(经测试似乎没有`rel="stylesheet/stylus"`不影响):
```
<style lang="stylus" rel="stylesheet/stylus">
...
</style>
```
3. 在style标记内写stylus代码

### 玩玩组件
组件一般放被在工程目录`/src`下的`components`文件夹中,以`.vue`文件存在.<br/>
组件分为3个部分,`template`用来写html,即组件模板;
`script`内写js;`style内写css`
步骤:
1. 写一个子组件`*.vue`,如firstComponent.vue
2. 引入,在父组件App.vue中`<script></script>`标签内第一行写
```
import firstcomponent from './components/firstComponent.vue'
```
3. 注册,在`<script></script>`标签内的 data 代码块后面加上 components: { firstcomponent },如下:
```
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { firstComponent }
}
```
4. 使用,在`<template></template>`内加上`<firstComponent></firstComponent>`
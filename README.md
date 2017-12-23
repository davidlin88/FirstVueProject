# firstVueProject
### 工具介绍篇
1. node.js
> 一种javascript的运行环境，能够使得javascript脱离浏览器运行。

2. npm(node package manager)
> npm是Node.js的包管理工具。

为啥我们需要一个包管理工具呢？因为我们在Node.js上开发时，会用到很多别人写的JavaScript代码。如果我们要使用别人写的某个包，每次都根据名称搜索一下官方网站，下载代码，解压，再使用，非常繁琐。于是一个集中管理的工具应运而生：大家都把自己开发的模块打包后放到npm官网上，如果要使用，直接通过npm安装就可以直接用，不用管代码存在哪，应该从哪下载。

更重要的是，如果我们要使用模块A，而模块A又依赖于模块B，模块B又依赖于模块X和模块Y，npm可以根据依赖关系，把所有依赖的包都下载下来并管理起来。

3. webpack
> WebPack可以看做是模块打包机，它做的事情是:分析你的项目结构找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

3. vue-router
> vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。**vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来。**传统的页面应用，是用一些超链接来实现页面切换和跳转的。在vue-router单页面应用中，则是路径之间的切换，也就是组件的切换。

4. vue-resource
> vue-resource是Vue.js的一款插件，它可以通过XMLHttpRequest或JSONP发起请求并处理响应。类似jquery的$.ajax,但是api更为简洁

简而言之,可以用来做获取服务端数据等请求(待确认)

5. express
> Express是目前最流行的基于Node.js的Web开发框架，可以快速地搭建一个完整功能的网站。

### 环境安装篇
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
* npm报错`no-tabs`的解决方法:1.在eslint的配置文件中`eslintrc`rules项中添加一行：`"no-tabs":"off"`;2.sublime右下角点击转化为空格缩进,再勾选使用空格缩进

### 小语法知识
* `.`表示当前目录,就像`..`或`@`表示父目录
*  `created() {}`是vue实例的的一个生命周期钩子函数，会在vue实例被生成后调用这个函数。每一个阶段都会有一个钩子函数，方便开发者在不同阶段处理不同逻辑。一般可以在created函数中调用ajax获取页面初始化所需的数据。


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

### 组件 + 路由四部曲
1. **定义组件**:创建`.vue`文件,`template`内写组件的html代码;script内写`export default {}`来导出模块(es6),在其内写组件的js代码(data/methods/components等等);style内写css代码
> 模块内的data要写作如下返回形式
```
data () {
	return {
		...
	}
}
<<<<<<< HEAD
<<<<<<< HEAD
```
> 父组件加载子组件的话,要在script内`export default {}`前写`import example from '../components/example'`,再再`components`中引入,最后在`template`中以标记名的形式使用
> 路由跳转使用`<router-link to="/detail"></router-link>`的形式
2. 创建路由实例并定义路由策略
	1. 在router文件夹中的index.js里引入路由插件并使用:
=======
`
=======
```
>>>>>>> parent of ef600d4... Update README.md
> 父组件加载子组件的话,要在script内`export default {}`前写`import example from '../components/example'`,再在`components`中引入,最后在`template`中以标记名的形式使用
> 路由跳转使用`<router-link to="/detail"></router-link>`的形式
2. 创建路由实例并定义路由策略

2.1 在router文件夹中的index.js里**引入路由**插件并使用:
>>>>>>> ef600d46345abb6aece84308332af86edb4af902
```
import VueRouter from 'vue-router'
Vue.use(VueRouter)
```
  2. **创建路由实例**
```
  export default new VueRouter({
		routes: [...]
	})
```
	3. **定义路由策略**
```
//在路由实例的routes属性内定义
routes: [
	{
		path: '/',
		component: Home // Home需在文件开头import引入
	},
	{
		path: '/detail',
		component: Detail,
		children: [ 		// 在children属性下引入子路径及组件
		{
			path: 'msg',
			component: Msg	// Msg需在文件开头import引入
		}
		]
	}
]
```
3. **挂载路由**:
在组件总入口main.js文件中,引入vue依赖并创建一个Vue实例,在实例中引入路由:
```
import Vue from 'vue'
import router from './router/index'

new Vue({
  el: '#app',
  // 引入路由
  router,
  data () {
    return {
    }
  }
})
```

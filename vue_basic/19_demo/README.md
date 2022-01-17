# 笔记

## 脚手架文件结构
```
  |—— node_modules  依赖包
  |—— public
  |   |—— favicon.ico： 页签图标
  |   |—— index.html：主页面
  |—— src
  |   |—— assert：存放静态资源
  |   |    |—— logo.png
  |   |—— components：存放组件
  |   |    |—— HelloWorld.vue
  |   |—— App.vue：汇总所有组件
  |   |—— main.js：入口文件
  |—— src .gitignore: git版本管制忽略文件的配置
  |—— babel.config.js: babel的配置文件
  |—— package.json: 应用包配置文件
  |—— README.md: 应用描述文件
  |—— package-lock.json: 包版本控制文件
```

## 关于不同版本的Vue：
1. vue.js 与 vue.runtime.xxx.js 的区别：
       vue,js 是完整版的 Vue , 包含：核心功能+模板解析器
       vue.runtime.xxx.js是运行版的 Vue ，只包含：核心功能，没有模板解析器

  2.因为 Vue.runtime.xxx.js 没有模板解析器，所以不能使用template配置项，需要使用render函数
    接收到的 createElement 函数区指定具体内容

## vue.config.js 配置文件：
  使用 vue inspect > output.js 可以查看到 Vue 脚手架的默认配置
  使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## ref属性
  1.被用来给元素或子组件注册引用信息（id的替代者）
  2.应用在 html 标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
  3.使用方式
    打标识： `<School ref="sch"/> 或 <h1 v-text='msg' ref="title"></h1>`
    获取： this.$refs.xxx

## 配置项props

功能：让组件接收外部传过来的数据

- 传递数据

  ```
  <Demo name="xxx"/>
  ```

- 接收数据

  - 第一种方式（只接收）：

    ```
    props：['name']
    ```

  - 第二种方式（限制类型）：

    ```
    props: {name: String}
    ```

  - 第三种方式（限制类型，限制必要性，指定默认值）

    ```
    props: {
    name: {
    	type:String,
    	required:true,
    	default: "老王"
    }
    }
    ```

备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求需要修改，那么需要复制props的内容到data中一份，然后去修改data中的数据。



## mixin(混入)

功能：可以把多个组件共用的配置提取成一个混入对象

使用方式：

- 第一步定义混合，例如：

  ```
  export const hunhe = {
  	data(){...},
  	methods：{...}
  	...
  }
  ```

- 第二步使用混入，例如：

  ```
  全局混入：Vue.mixin(xxx)
  局部混入：mixins: ['xxx']
  ```




## 插件

功能：用于增强Vue

本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据

定义插件：

```
对象.install = function(Vue,options ) {
	// 添加全局过滤器
	Vue.filter(...)
	
	// 添加全局指令
	Vue.directive(...)
	
	// 配置全局混入（合）
	Vue.mixin(....)
	
	// 添加实例方法
	Vue.prototype.$myMethod = function () {...}
	Vue.prototype.$MyProperty = xxxx
}
```

使用插件： Vue.use



## 总结TodoList案例

组件化编码流程：

- 拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
- 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用
  - 一个组件在用，放在组件自身即可
  - 一些组件在用，放在他们共同的父组件上（状态提升）
- 实现交互，从绑定事件开始

props适用于：

- 父组件 ===> 子组件 通信
- 子组件 ===> 父组件 通信（要求父先给子一个函数）

使用v-model时要切记，v-model绑定的值不能是props传过来的值，因为props是不可以修改的

props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做



## webStorage

存储内容大小一般支持5MB左右（不同浏览器可能还不一样）

浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性实现本地存储机制

相关API

- `xxxxxStorage.setItem('key', 'value');` 该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
- `xxxxxStorage.getItem('person');` 该方法接受一个键名作为参数，返回键名对应的值
- `xxxxStorage.removeItem('key');` 该方法接受一个键名作为参数，并把该键名从存储中删除
- `xxxxxStorage.clear();` 该方法会清空存储中的所有数据

备注：

- SessionStorage 存储的内容会随着浏览器窗口关闭而消失
- LocalStorage 存储的内容，需要手动清除才会消失
- `xxxStorage.getItem(xxx)` 如果xxx对应的value获取不到，那么getItem的返回值是null
- `JSON.parse(null)` 的结果依然是null



## 组件的自定义事件

一种组件间通信的方式，适用于：子组件 ===> 父组件

使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）

绑定自定义事件：

- 第一种方式，在父组件中：`<Demo @doris="test" />` 或 `<Demo v-on:doris="test" />`

- 第二种方式，在父组件中：

  ```
  <Demo ref="doris" />
  .....
  
  mounted() {
  	this.$refs.xxx.$on("doris",this.test)
  }
  ```

- 若想让自定义事件之触发一次，可以使用once修饰符或者$once方法

触发自定义事件： `this.$emit("doris", data)`

解绑自定义事件：`this.$off('doris')`

组件上也可以绑定原生DOM事件。需要使用 `native` 修饰符

注意：通过 `this.$refs.xxx.$on('doris',callback)` 绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this会指向调用自定义事件的子组件



## 全局事件总线（GlobalEventBus）

一种组件间通信的方式，适用于任意组件间通信

安装全局事件总线

```
new Vue({
	...
	beforeCreate() {
		Vue.prototype.$bus = this  // 安装全局事件总线，$bus 就是当前应用的vm
	},
	...
})
```

使用事件总线

- 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，时间的回调留在A组件自身

  ```
  methods(){
  	demo(data){....}
  }
  .....
  mounted(){
  	this.$bus.$on("xxx", this.demo)
  }
  ```

- 提供数据：`this.$bus.$emit("xxx",数据)`

最好在beforeDestory钩子中，用$off去解绑当前组件所用到的事件



## 消息订阅与发布（pubsub）

一种组件间通信的方式，适用于任意组件间通信

使用步骤：

- 安装pubsub： `npm i pubsub-js`

- 引入： `import pubsub from 'pubsub-js'`

- 接收数据： A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身

  ```
  methods(){
  	demo(data){....}
  }
  ....
  mounted() {
  	this.pid = pubsub.subscribe('xxx',this.demo)  // 订阅消息
  }
  ```

- 提供数据： `poubsub.publish('xxx',数据)`

- 最好在beforeDestory钩子中，用PubSub.unsubscribe(pid) 去取消订阅

## nextTick

语法：`this.$nextTick(回调函数)`

作用：在下一次DOM更新结束后执行其指定的回调

什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

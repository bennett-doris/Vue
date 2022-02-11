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



## Vue 封装的过度与动画

作用：在插入，更新或移除DOM元素时，在合适的时候给元素添加样式类名

- v-enter / v-leave：进入/离开时的起点
- v-enter-to / v-leave-to： 进入/离开时的终点
- v-enter-active / v-leave-active：进入/离开的过程中

写法：

- 准备好样式

  - 元素进入的样式
  - 元素离开的样式

- 使用 `transition` 包裹要过度的元素，并配置name属性

  ```
  <transition name="hello" appear>
        <h1 v-show="isShow">你好啊</h1>
  </transition>
  ```

- 若多个元素需要过度，则需要使用 `<transition-group>`，且每个元素都要指定 `key`值



## vue脚手架配置代理

### 方法一

在vue.config.js 中添加如下配置：

```js
devServer: {
	proxy: "http://localhost:5000"
}
```

说明： 

- 优点：配置简单，请求资源时直接发给前端（8080）即可
- 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
- 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）

### 方法二

编写vue.config.js配置具体代理规则：

```js
devServer: {
	proxy: {
		// 匹配所有以/api开头的请求路径
		"/api": {
			target: "http://localhost:5000",	// 代理目标的基础路径
            // changeOrigin设置为true时，服务器的host为：localhost:5000, 为false时，host为：localhost:8080,默认值为true
			changeOrigin: true,
			ws: true,
			pathRewrite: {"^/api": ""}
		},
		// 匹配所有以/api2开头的请求路径
		"/api2": {
			target: "http://localhost:5001",
			changeOrigin: true,
			ws: true,
			pathRewrite: {"^/api2": ""}
		}
	}
}
```

说明：

- 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
- 缺点：配置略微繁琐，请求资源时必须加前缀



## Vuex

### 概念

在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信

### 何时使用？

多个组件需要共享数据时

### 搭建vuex环境

创建文件：`src/store/index.js`

```js
// 该文件用于创建Vuex中最为核心的store


import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {}
// 准备mutations--用于操作数据（state）
const mutations = {}
// 准备state--用于存储数据
const state = {}

// 创建store 并 导出store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
```

在 `main.js` 中创建vm时传入 `store` 配置项

```js
import store from './store'

new Vue({
  el: "#app",
  render: h => h(App),
  store,
  beforeCreate(){
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
})
```

### 基本使用

初始化数据，配置 `actions` 、配置 `mutations` ，操作文件 `store.js` 

```js
// 该文件用于创建Vuex中最为核心的store


import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
// 实现业务逻辑
const actions = {
  add(context,value){
    context.commit("ADD",value)
  },
  reduce(context,value){
    context.commit("REDUCE",value)
  },
}
// 准备mutations--用于操作数据（state）
// 只用于执行操作
const mutations = {
  ADD(state,value){
    state.num += value
  },
  REDUCE(state,value){
    state.num -= value
  },
}
// 准备state--用于存储数据
const state = {
  num: 0, // 当前的和
}

// 创建store 并 导出store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
```

组件中读取vuex中的数据： `$store.state.num`

组件中修改vuex中的数据， `$store.dispatch('action中的方法名'，数据)` 或 `$store.commit('muataions中的方法名', 数据)`

> 备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写 `dispatch` ,直接写 `commit`

### getters的使用

概念：当state中的数据需要经过加工后再使用时，可以使用getters加工

在 `store.js` 中追加 `getters` 配置

```js
// 准备getters--用于将state中的数据进行加工
const getters = {
  bigSum(state){
    console.log(state)
    return state.num*10
  }
}
export default new Vuex.Store({
  ...
  getters
})
```

组件中读取数据： `$store.getters.bigSum`

### 四个map方法的使用

mapState 方法：用于帮助我们映射state中的数据为计算属性

```js
computed: {
      // 借助 mapstate生成计算属性，从state中读取数据,对象写法
      // ...mapState({sum:"num",school: "school",subject: "subject"}),

      // 借助 mapstate生成计算属性，从state中读取数据，数组写法
      ...mapState(["num","subject","school"]),
    }
```

mapGetters 方法：用于帮我们映射getters中的数据为计算属性

```js
computed: {
      ...mapGetters(["bigSum"]),
      ...mapGetters({bigSum: "bigSum"}),
    }
```

mapActions 方法：用于帮我们生成与 `actions` 对话的方法，即： 包含 `$store.dispatch(xxx)` 的函数

```js
methods: {
      // 借助mapMuattions生成对应的方法，方法中会调用commit去联系mutations（对象写法）
      ...mapMutations({add:"ADD",reduce:"REDUCE"}),
    },
```

mapMuataions 方法： 用于帮我们生成与 `muataions` 对话的方法，即：包含 `$store.commit(xxx)` 的函数

```js
methods: {
      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
      // ...mapActions({oddAdd: "oddAdd", waitAdd: "waitAdd"}),

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
      ...mapActions(["oddAdd", "waitAdd"])
    },
```

> 备注：mapActions与mapMuataions使用时，若需要传递参数，需要在模板中绑定事件时传递好参数，否则参数是事件对象

### 模块化+命名空间

目的：让代码更好维护，让多种数据分类更加明确

修改 `store.js`

```js
const countAbout = {
	namespaced=True, // 开启命名空间
	state:{...},
	actions: {...},
	muataions: {...},
	getters: {...}
}

const personAbout = {
	namespaced=True, // 开启命名空间
	state:{...},
	actions: {...},
	muataions: {...},
	getters: {...}
}

// 创建store 并 导出store
export default new Vuex.Store({
  modules: {
    countAbout
    personAbout
  }
})
```

开启命名空间后，组件中读取state数据：

```js
// 方式一：自己直接读取
this.$store.state.personAbout.list
// 方式二：借助mapState读取
...mapState("countAbout",["sum","subject","school"])
```

开启命名空间后，组件中读取getters数据

```js
// 方式一 自己直接读取
this.$store.getters["personAbout/firstPersonName"]
// 方式二 借助mapGetters读取
...mapGetters("countAbout",["bigSum"])
```

开启命名空间后，组件中调用dispatch

```js
// 方式一，自己直接dispatch
this.$store.dispatch("personAbout/addPersonServer")
// 方式二，借助mapActions
...mapActions("countAbout",["oddAdd", "waitAdd"])
```

开启命名空间后，组件中调用commit

```js
// 方式一，自己直接dispatch
this.$store.c("personAbout/addPerson",personObj)
// 方式二，借助mapActions
...mapMutations("countAbout",{add:"ADD",reduce:"REDUCE"}),
```



## 路由

理解：一个路由（route）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理

前端路由：key是路径，value是组件

### 基本使用

安装vue-router

应用插件：Vue.use(VueRouter)

编写router配置项

```js
// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

// 引入组件
import About from "../components/About"
import Home from "../components/Home"

// 创建一个路由器
export default new VueRouter({
  routes: [
    {
      path: "/about",
      component:About
    },
    {
      path: "/home",
      component: Home
    }
  ]
})
```

实现切换（active-class可配置高亮样式）

```vue
<router-link class="list-group-item" to="/about" active-class="active">About</router-link>
```

指定显示位置

```vue
<router-view></router-view>
```

### 几个注意点：

- 路由组件通常存放在 `pages` 文件夹，一般组件通常存放在 `components` 文件夹。
- 通过切换，隐藏了的路由组件，默认是被销毁掉的，需要的时候再去挂载
- 每个组件都有自己的 `$route` 属性，里面存储着自己的路由信息
- 整个应用只有一个router，可以通过组件的 `$router` 属性获取到

### 多级路由（嵌套路由）

配置路由规则，使用children配置项

```js
routes: [
    {
      path: "/about",
      component:About
    },
    {
      path: "/home",
      component: Home,
      children:[
        {
          path: "news",
          component:News
        },
        {
          path: "message",
          component:Message
        },
      ]
    }
  ]
```

跳转（晚些完整路径）

```vue
<router-link to="/home/news" class="list-group-item" active-class="active">News</router-link>
```

### 路由的query参数

传递参数

```js
<!-- 跳转路由并携带query参数，to的字符串写法-->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
      
        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link :to="{
          path: '/home/message/detail',
          query: {
            id: m.id,
            title: m.title
          }
        }">{{m.title}}</router-link>
```

接收参数

```js
<li>消息编号：{{$route.query.id}}</li>
    <li>消息标题：{{$route.query.title}}</li>
```

### 命名路由

作用：可以简化路由的跳转

如何使用：

- 给路由命名

```js
routes: [
    {
      name: "guanyu",
      path: "/about",
      component:About
    },
    {
      path: "/home",
      component: Home,
      children:[
        {
          path: "message",
          component:Message,
          children:[
            {
              name: "xiangqing",
              path: 'detail',
              component: Deatil
            }
          ]
        },
      ]
    }
  ]
```

- 简化跳转

```js
<!--简化前 完整路径-->
 <router-link to="/home/message/detail">About</router-link>
<!--简化后 直接通过名字跳转-->
 <router-link :to="{name: 'guanyu'}">About</router-link>
```

### 路由的params 参数

配置路由，声明接收params参数

```js
{
          path: "message",
          component:Message,
          children:[
            {
              name: "xiangqing",
              path: 'detail/:id/:title',
              component: Deatil
            }
          ]
        },
```

传递参数

```js
<!-- 跳转路由并携带 param 参数，to的字符串写法-->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
      
        <!-- 跳转路由并携带 param 参数，to的对象写法 -->
        <!-- 携带params 参数时，不允许使用path参数 只能用name参数 -->
        <router-link :to="{
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title
          }
        }">{{m.title}}</router-link>
```

接收参数

```js
<li>消息编号：{{$route.params.id}}</li>
    <li>消息标题：{{$route.params.title}}</li>
```

### 路由的props配置

作用：让路由组件更方便的收到参数

```js
children:[
            {
              name: "xiangqing",
              // path: 'detail/:id/:title',
              path: 'detail',
              component: Deatil,
              // props的第一种写法，值为对象,该对象的所有key-value都以props属性传给detail属性
              // props: {a: 1, b: "hello"}

              // props的第二种写法，值为布尔值,若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给detail组件
              // props:true

              // props的第三种写法，值为函数
              props($route) {
                return {id: $route.query.id, title: $route.query.title}
              }
              // 解构赋值简写
              // props({query: {id, title}}) {
              //   return {id,title}
              // }
            }
          ]
```

### `router-link`的replace属性

可以覆盖浏览器的历史纪录

```
<router-link replace class="list-group-item" to="/home" active-class="active">Home</router-link>
```

### 编程式路由导航

作用：不借助 `router-link` 实现路由跳转，让路由跳转更加灵活

具体编码

```js
methods: {
      pushShow(m) {
        this.$router.push({
          name: 'xiangqing',
          query: {
            id: m.id,
            title: m.title
          }
        })
      },
      replaceShow(m) {
        this.$router.replace({
          name: 'xiangqing',
          query: {
            id: m.id,
            title: m.title
          }
        })
      }
    },
        
methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    test(){
      this.$router.go(-2)
    }
  },
```

### 缓存路由组件

作用：让不展示的路由组件保持挂载，不被销毁

具体编码

```js
<!-- 组件名 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
```

### 两个新的生命周期钩子

作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态

具体名字：

- `activated` 路由组件被激活时触发
- `deactivated` 路由组件失活时触发

### 路由守卫

作用：对路由进行权限控制

分类：全局守卫、独享守卫、组件内守卫

全局守卫：

```js
// 全局前置路由守卫 -- 初始化的时候被调用，每次路由切换之前被调用
router.beforeEach((to,from,next)=>{
  console.log("前置路由守卫",to,from)
  // 用路径
  // if(to.path === "/home/news" || to.path === '/home/message')
  // 用名字
  // if(to.name === "xinwen" || to.name === 'xiaoxi')
  if(to.meta.isAuth){ // 判断是否需要鉴权
    if(localStorage.getItem('school')==="bennett"){
      next()
    }else{
      alert("学校名不对，无权限查看")
    }
  }else{
    next()
  }
})

// 全局后置路由守卫 -- 初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
  console.log("后置路由守卫",to,from)
  document.title = to.meta.title || "系统"
})
```

独享守卫

```js
beforeEnter: (to, from ,next) => {
            console.log("独享路由守卫",to,from)
            // 用路径
            // if(to.path === "/home/news" || to.path === '/home/message')
            // 用名字
            // if(to.name === "xinwen" || to.name === 'xiaoxi')
            if(to.meta.isAuth){ // 判断是否需要鉴权
              if(localStorage.getItem('school')==="bennett"){
                next()
              }else{
                alert("学校名不对，无权限查看")
              }
            }else{
              next()
            }
          }
```

组件内守卫

```js
// 通过路由规则进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log("APP enter")
      console.log("组件路由守卫",to,from)
        // 用路径
        // if(to.path === "/home/news" || to.path === '/home/message')
        // 用名字
        // if(to.name === "xinwen" || to.name === 'xiaoxi')
        if(to.meta.isAuth){ // 判断是否需要鉴权
          if(localStorage.getItem('school')==="bennett"){
            next()
          }else{
            alert("学校名不对，无权限查看")
          }
        }else{
          next()
        }
    },
    // 通过路由规则离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log("APP leave")
      next()
    }
```

### 路由器的两种工作模式

对于一个url来说，什么时hash值？ -- #及其后面的内容就是hash值

hash值不会包含在HTTP请求中，即：hash值不会带给服务器

hash模式：

- 地址中永远带着 # 号，不美观
- 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法
- 兼容性较好

history 模式：

- 地址干净，美观
- 兼容性和hash模式相比略差
- 应用部署上线时，需要后端人员支持，解决刷新页面服务端404的问题

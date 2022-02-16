# Vue3

## 常用 Composition API

### 拉开序幕的setup

理解：Vue3.0中一个新的配置项，值位一个函数

setup是所有Composition API（组合API）“表演的舞台”

组件中所用到的：数据、方法等等，均要配置在setup中

setup函数的两种返回值：

- 若返回一个对象，则对象中的属性、方法在模板中均可以直接使用
- 若返回一个渲染函数：则可以自定义渲染内容

注意点：

- 尽量不要与Vue2.x配置混用
  - Vue2.x配置（data、methods、computed...）中可以访问到setup中的属性、方法
  - 但在setup中不能访问到Vue2.x配置（data、methods、computed）
  - 如果有重名，setup优先
- setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性。（后期也可以返回一个promise对象，但需要异步组件和 `Suspense` 的配合）

### ref 函数

作用：定义一个响应式的数据

语法：const xxx = ref(initValue)

- 创建一个包含响应式数据的引用对象（reference 对象）
- JS 中操作数据： xxx.value
- 模板中读取数据：不需要value，直接： `<div>{{xxx}}</div>`

备注：

- 接收的数据可以是基本类型，也可以是对象类型
- 基本类型的数据，响应式依然是靠 `Object.defineProperty()` 的 get 和 set 完成的
- 对象类型的数据：内部 求助 了Vue3.0的一个新韩淑 -- reactive 函数

### reactive 函数

作用：定义一个对象类型的响应式数据（基本类型不用它，用ref）

语法：`const 代理对象 = reactive（源对象）` 接收一个对象（或数组），返回一个代理对象（proxy 对象）

reactive 定义的响应式数据是深层次的

内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作

### Vue3.0 的响应式

实现原理：

- 通过 Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等
- 通过Reflect（反射）：对被代理对象的属性进行操作

```js
// 模拟Vue3中实现响应式
    const p = new Proxy(person,{
      // 有人读取p的属性时调用
      get(target, propName){
        console.log("有人读取 ",propName)
        return Reflect.get(target,propName)
      },
      // 有人修改p的某个属性，或给p追加某个属性时
      set(target, propName,value){
        console.log("有人修改", propName,value)
        Reflect.set(target,propName,value)
      },
      // 有人删除p的某个属性时
      deleteProperty(target,propName) {
        console.log("有人删除 ",propName)
        return Reflect.deleteProperty(target,propName)
      }
    })
```

### reactive 对比 ref

从定义数据角度对比：

- ref用来定义：==基本类型数据==
- reactive 用来定义： ==对象（或数组）类型数据==
- 备注：ref也可以用来定义==对象或数组类型数据==，它内部会自动通过 `reactive` 转为==代理对象==

从原理角度对比：

- ref 通过 `Object.defineProperty()` 的 `get` 与 `set` 来实现响应式（数据劫持）
- reactive 通过使用 ==Proxy==来实现响应式（数据劫持），并通过==Reflect==操作==源对象==内部的数据

从使用角度对比：

- ref 定义的数据，操作数据需要 `.value`，读取数据时模板中直接读取==不需要== `.value`
- reactive 定义的数据：操作数据与读取数据，==均不需要== `.value`

### setup的两个注意点

setup执行的时机

- 在beforeCreate之前执行一次，this是 `undefined`

setup 的参数：

- props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
- context：上下文对象
  - attrs：值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于 `this.$attrs`
  - slots：收到的插槽内容，相当于 `this.$slots`
  - emit：分发自定义事件的函数，相当于 `this.$emit`

### 计算属性与监视

#### computed 函数

- 与 Vue2.x 中computed配置功能一直
- 写法

```js
// 计算属性--简写形式（没有考虑计算属性被修改的情况）
    // person.fullName = computed(()=>{
    //   return person.firstName + "-" + person.lastName
    // })

    // 计算属性--完整形式（考虑计算属性被修改的情况）
    person.fullName = computed({
      get(){
        return person.firstName + "-" + person.lastName
      },
      set(value){
        const nameArr = value.split("-")
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
```

#### watch 函数

- 与Vue2.x中watch配置功能一致

- 两个小坑

  - 监视reactive定义的响应式数据时，oldValue无法正确获取，强制开启了深度监视（deep配置失效）
  - 监视reactive定义的响应式数据中某个属性时：deep配置有效

  ```js
  let sum = ref(0)
      let msg = ref("你好啊")
      let person = reactive({
        name: "张三",
        age: 18,
        job: {
          j1: {
            salary: 20
          }
        }
      })
      // 情况一，监视ref所定义的一个响应式数据
      // watch(sum,(newValue,oldValue)=>{
      //   console.log("sum 变了",newValue,oldValue)
      // })
  
      // 情况二, 监视ref所定义的多个响应式数据
      // watch([sum,msg],(newValue,oldValue)=>{
      //   console.log("sum或msg 变了",newValue,oldValue)
      // },{immediate:true})
  
      // 情况三，监视reactive 所定义的一个响应式数据,
      // 注意 此处无法正确的获取oldValue
      // 强制开启了深度监视 （deep 配置无效）
      // watch(person, (newValue, oldValue)=>{
      //   console.log("person 变化了",newValue, oldValue)
      // })
  
      // 情况四，监视reactive所定义的一个响应式数据中的某个属性
      // watch(()=>person.age, (newValue, oldValue)=>{
      //   console.log("person的age 变化了",newValue, oldValue)
      // })
  
      // 情况五，监视reactive所定义的一个响应式数据中的某些属性
      // watch([()=>person.age, ()=>person.name], (newValue, oldValue)=>{
      //   console.log("person的age 变化了",newValue, oldValue)
      // })
  
      // 特殊情况,
      watch(()=>person.job, (newValue, oldValue)=>{
        console.log("person的age 变化了",newValue, oldValue)
      },{deep:true})
  ```


#### watchEffect 函数

watch的套路是：既要指明监视的属性，也要指明监视的回调

watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，就监视哪个属性

watchEffect 有点像computed：

- 但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值
- 而watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值

```js
watchEffect(()=>{
      const x1 = sum.value
      const s1 = person.value.job.j1.salary
      console.log("watchEffect")
    })
```

### 生命周期

```js
import {ref, onBeforeMount, onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
export default {
  name: 'Demo',
  setup(){
    // 数据
    let sum = ref(0)
    let msg = ref("你好啊")
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // 通过组合式API的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log("onBeforeMount===")
    })

    onMounted(() => {
      console.log("onMounted===")
    })

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate===")
    })

    onUpdated(()=>{
      console.log("onUpdated===")
    })

    onBeforeUnmount(()=>{
      console.log("onBeforeUnmount===")
    })

    onUnmounted(() => {
      console.log("onUnmounted===")
    })
```

### 自定义hook函数

本质是一个函数，把setup函数中使用的Composition API进行了封装

类似于Vue2.x中的mixin

自定义hook的优势：复用代码，让setup中的逻辑更清楚易懂

### toRef

作用：创建一个ref对象，其value值指向另一个对象中的某个属性

语法：`const name = toRef(person, 'name')`

应用：要将响应式对象中的某个属性单独提供给外部使用时

扩展：`toRefs` 与 `toRef` 功能一致，但可以批量创建多个ref对象，语法： `toRefs(person)`

```js
 return { 
      // name: toRef(person,"name"),
      // age: toRef(person,"age"),
      // salary: toRef(person.job.j1,"salary"),
      ...toRefs(person)
    }
```

## 其他 Composition API

### shallowReactive 与 shallowRef

shallowReactive：只处理对象最外层属性的响应式（浅响应式）

shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理

什么时候使用：

- 如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ==> shallowReactive
- 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef

### readonly 与 shallowReadonly

readonly： 让一个响应式数据变为只读的（深只读）

shallowReadonly： 让一个响应式数据变为只读的（浅只读）

应用场景：不希望数据被修改时

### toRaw 与 markRaw

toRaw：

- 作用：将一个由 `reactive` 生成的响应式对象转为普通对象
- 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新

markRaw：

- 作用：标记一个对象，使其永远不会再成为响应式对象
- 应用场景：
  - 有些值不应被设置成响应式的，例如复杂的第三方库
  - 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

### customRef

作用：创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显示控制

实现防抖效果

```js
// 自定义ref
    function myRef(value,delay) {
      let timer
      return customRef((track, trigger)=>{
        return {
          get(){
            track()  // 通知Vue追踪value的变化(提前和get商量一下,让他认为这个value是有用的)
            return value
          },
          set(a){
            console.log("new",a);
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = a;
              trigger() // 通知vue去重新解析模板
            },delay)
            
          }
        }
      })

    }

    // let keyWord = ref('hello')  // 使用vue提供的ref
    // 使用程序员自定义的ref
    let keyWord = myRef('hello',500)
```

### provide 与 inject

作用：实现祖与后代组件间通信

套路：父组件有一个 `provide` 选项来提供数据，子组件有一个 `inject` 选项来开始使用这些数据

具体写法：

- 传递数据

  ```js
  setup() {
      let car = reactive({name: "奔驰",price: "40w"})
      provide('car',car)  // 给自己的后代组件传递数据
      return {...toRefs(car)}
    }
  ```

- 接收数据

```js
setup() {
    let car = inject('car')
    return {...toRefs(car)}
  }
```

### 响应式数据的判断

isRef：检查一个值是否为一个ref对象

isReactive：检查一个对象是否由 `reactive` 创建的响应式代理

isReadonly：检查一个对象是否由 `readonly` 创建的只读代理

isProxy： 检查一个对象是否由 `reactive` 或者 `readonly` 方法创建的代理

## Composition API 的优势

### Options API 存在的问题

使用传统OptionsAPI 中，新增或者修改一个需求，就需要分别在data，methods，computed里修改

### Composition API 的优势

我们可以更加优雅的组织代码，函数，让相关功能的代码更加有序的组织在一起

## 新的组件

### Fragment

在Vue2中：组件必须有一个根标签

在Vue3中：组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中

好处：减少标签层级，减小内存占用

### Teleport

`Teleport` 是一种能够将组件html结构移动到指定位置的技术

```html
<teleport to="body">
      <div class="mask" v-if="isShow">
        <div class='dialog' >
          <h3>我是一个弹窗</h3>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow=false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
```

### Suspense

等待异步组件时渲染一些额外内容，让应用有更好的用户体验

使用步骤：

- 异步引入组件

  ```js
  import {defineAsyncComponent} from 'vue' 
  const Child = defineAsyncComponent(()=>import('./components/Child'))  // 动态/异步引入
  ```

- 使用 `Suspense` 包裹组件，并配置好 `default` 与 `fallback`

```html
<Suspense>
      <template v-slot:default>
        <Child/>  
      </template>
      <template v-slot:fallback>
        <h3>加载中.....</h3> 
      </template>
    </Suspense>
```

## 其他

### 全局API的转移

Vue3.0对全局API做出了调整：

- 将全局的API，即：Vue.xxx 调整到应用实例（app）上

​	Vue.config.xxx		app.config.xxx

​	Vue.config.productionTip	移除

​	Vue.component		app.component

​	Vue.directive			app.directive

​	Vue.mixin				app.mixin

​	Vue.use					app.use

​	Vue.prototype			app.config.globalProperties

### 其他改变

- data选项应始终被声明为一个函数

- 过度类名的更改

  ```
  .v-enter-from,
  .v-leave-to
  
  .v-leave-from
  .v-enter-to
  ```

- 移除keyCode作为v-on的修饰符，同时也不再支持 `config.keyCodes`

- 移除 `v-on.native` 修饰符

  - 父组件中绑定事件

```html
<my-component
	v-on:close="handleComponentEvent"
	v-on:click="handleNativeClickEvent"
/>
```

​		子组件中声明自定义事件

```js
<script>
	export default {
		emits: ['close']
	}
</script>
```

- 移除过滤器（filter）、

  过滤器虽然看起来很方便，但它需要一个自定义语法，打破了打括号内表达式只是JS的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器

- .......

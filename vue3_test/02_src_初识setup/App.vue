<template>
  <h1>信息</h1>
  <h1>{{name}}</h1>
  <h1>{{age}}</h1>
  <h1>{{sex}}</h1>
  <button @click="hello">say-- vue3</button>
  <button @click="welcome">say-- vue2</button>
  <br>
  <button @click="test">test-- vue2中调用vue3的数据</button>
  <br>
  <button @click="test2">test-- vue3中调用vue2的数据</button>
</template>

<script>
// import {h} from 'vue';
export default {
  name: 'App',
  // 此处只用来测试一下setup
  data(){
    return {
      sex: "男"
    }
  },
  methods: {
    welcome(){
      alert("欢迎来到深圳")
    },
    test(){
      console.log(this.sex)
      console.log(this.name)
      console.log(this.age)
      console.log(this.hello)
    }
  },
  setup(){
    // 数据
    let name = "张三"
    let age = 18

    // 方法
    function hello(){
      alert(`我叫${name}, 我${age}岁了，你好`)
    }
    function test2(){
      console.log(this.sex)
      console.log(name)
      console.log(age)
      console.log(hello)
    }

// 返回一个对象（常用）
    return {
      name,
      age,
      hello,
      test2
    }

// 返回一个函数（渲染函数）
    // return () => h('h1','上海')
  }
}
</script>

<style>

</style>

<template>
  <h2>当前求和为： {{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为： {{msg}}</h2>
  <button @click="msg+= '!'">修改信息</button>
  <hr>
  <h2>姓名： {{person.name}}</h2>
  <h2>年龄： {{person.age}}</h2>
  <h2>薪水： {{person.job.j1.salary}}</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age ++">修改年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
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

// 返回一个对象（常用）
    return { 
      sum,
      msg,
      person,
    }

  },
  // 通过配置项的形式配置声明周期钩子
  // beforeCreate(){
  //   console.log("beforeCreate ===")
  // },
  // created() {
  //   console.log("created ===")
  // },
  // mounted() {
  //   console.log("mounted ===")
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate ===")
  // },
  // updated() {
  //   console.log("updated ===")
  // },
  // beforeUnmount() {
  //   console.log("beforeUnmount ===")
  // },
  // unmounted() {
  //   console.log("unmounted ===")
  // },
}
</script>

<style>

</style>

<template>
  <h1>信息</h1>
  <h1>{{person.name}}</h1>
  <h1>{{person.age}}</h1>
  <button @click="test">测试触发Hello事件</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'Demo',
  props: ['msg','school'],
  emits: ["hello"],
  setup(props,context){
    // 数据
    console.log(props,"\n")
    console.log(context.slots)
    let person = reactive({
      name: "张三",
      age: 18,
    })
    function test() {
      context.emit("hello",666)
    }

// 返回一个对象（常用）
    return {
      person,
      test
    }

  }
}
</script>

<style>

</style>

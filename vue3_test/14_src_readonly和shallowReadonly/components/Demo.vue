<template>
  <h2>x的值为： {{sum}}</h2>
  <button @click="sum++">累加</button>

  <h2>姓名： {{name}}</h2>
  <h2>年龄： {{age}}</h2>
  <h2>薪水： {{job.j1.salary}}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age ++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import {ref, reactive,toRefs, readonly, shallowReadonly} from 'vue'
export default {
  name: 'Demo',
  setup(){
    // 数据
    // let person = shallowReactive({   // 只考虑第一层数据的响应式
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    let sum = ref(0)

    // person = readonly(person)

    // person = shallowReadonly(person)

    sum = readonly(sum)

// 返回一个对象（常用）
    return { 
      sum,
      ...toRefs(person)
    }

  }
}
</script>

<style>

</style>

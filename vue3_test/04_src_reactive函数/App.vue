<template>
  <h1>信息</h1>
  <h1>{{person.name}}</h1>
  <h1>{{person.age}}</h1>
  <h1>{{person.job.type}}</h1>
  <h1>{{person.job.salary}}</h1>
  <h1>{{person.job.a.b.c}}</h1>
  <h1>爱好: {{person.hobby}}</h1>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 777
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

  function changeInfo() {
    person.name = "李四",
    person.age = "22",
    person.job.type = "后端工程师",
    person.job.salary = "45k",
    person.job.a.b.c = 666,
    person.hobby[0] = 1
  }

// 返回一个对象（常用）
    return {
      person,
      changeInfo
    }

  }
}
</script>

<style>

</style>

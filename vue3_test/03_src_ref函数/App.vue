<template>
  <h1>信息</h1>
  <h1>{{name}}</h1>
  <h1>{{age}}</h1>
  <h1>{{job.type}}</h1>
  <h1>{{job.salary}}</h1>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    // 数据
    let name = ref("张三")
    let age = ref(18)
    let job = ref({
      type: "前端工程师",
      salary: "30k"
    })

  function changeInfo() {
    name.value = "李四",
    age.value = "22",
    job.value.type = "后端工程师",
    job.value.salary = "45k"
    console.log(job.value.type)
  }

// 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo
    }

  }
}
</script>

<style>

</style>

<template>
  <h2>姓名： {{name}}</h2>
  <h2>年龄： {{age}}</h2>
  <h2>薪水： {{job.j1.salary}}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age ++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import {reactive,toRef,toRefs} from 'vue'
export default {
  name: 'Demo',
  setup(){
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // const name1 = person.name
    // console.log("%%%",name1);

    // const name2 = toRef(person, "name")
    // console.log("===",name2);

    const x = toRefs(person)
    console.log(x)

// 返回一个对象（常用）
    return { 
      // name: toRef(person,"name"),
      // age: toRef(person,"age"),
      // salary: toRef(person.job.j1,"salary"),
      ...toRefs(person)
    }

  }
}
</script>

<style>

</style>

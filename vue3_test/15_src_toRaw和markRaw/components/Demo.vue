<template>
  <h2>x的值为： {{sum}}</h2>
  <button @click="sum++">累加</button>

  <h2>姓名： {{name}}</h2>
  <h2>年龄： {{age}}</h2>
  <h2>薪水： {{job.j1.salary}}</h2>
  <h2 v-show="person.car">汽车： {{person.car}}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age ++">修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
</template>

<script>
import {ref, reactive,toRefs,toRaw,markRaw} from 'vue'
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

    let sum = ref(0)

    function showRawPerson() {
      console.log(toRaw(person));
    }

    function addCar() {
      let car = {name: "奔驰", price: "40w"}
      person.car = markRaw(car)
    }
// 返回一个对象（常用）
    return { 
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    }

  }
}
</script>

<style>

</style>

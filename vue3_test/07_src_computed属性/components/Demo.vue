<template>
  <h1>信息</h1>
  姓： <input type="text" v-model="person.firstName">
  <br>
  名： <input type="text" v-model="person.lastName">
  <br>
  全名： <input type="text" v-model="person.fullName">
</template>

<script>
import {reactive, computed} from 'vue'
export default {
  name: 'Demo',
  // vue 2
  // computed: {
  //   fullName() {
  //     return this.person.firstName + "-" + this.person.lastName
  //   }
  // },
  setup(){
    // 数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
    })
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
// 返回一个对象（常用）
    return {
      person,
    }

  }
}
</script>

<style>

</style>

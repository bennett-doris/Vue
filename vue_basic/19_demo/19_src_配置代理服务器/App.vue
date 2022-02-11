<template>
<div>
  <button @click="getStu">获取学生信息</button>
  <button @click="getCar">获取汽车信息</button>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "App",
    methods: {
      getStu(){
        axios.get("http://localhost:8080/students/students").then(
          response => {
            console.log("请求成功了",response.data)
          },
          error => {
            console.log("请求失败了",error.message);
          }
        )
      },
      getCar() {
        axios.get("http://localhost:8080/cars/cars").then(
          response => {
            console.log("请求成功",response.data);
          },
          error => {
            console.log("请求失败",error.message);
          }
        )
      }
    }
  }
</script>

<style>
</style>
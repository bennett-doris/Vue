<template>
  <div class='school'>
    <h1>{{msg}}</h1>
    <h2>姓名： {{name}}</h2>
    <h2>性别： {{gender}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Student",
    data() {
      return {
        msg: "我是一个业务",
        gender: "男",
        name: "张三嘻嘻嘻"
      }
    },
}
</script>

<style scoped>
  .school{
    background-color: blueviolet;
  }
</style>
<template>
  <div class='school'>
    <h1>{{msg}}</h1>
    <h2>姓名： {{name | timeSplice(3)}}</h2>
    <h2>性别： {{gender}}</h2>
    <input type="text" v-fbind2:value="name">
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

<style>
  .school{
    background-color: antiquewhite;
  }
</style>
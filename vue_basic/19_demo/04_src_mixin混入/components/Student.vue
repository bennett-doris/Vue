<template>
  <div class='school'>
    <h1>{{msg}}</h1>
    <h2 @click="showName">姓名： {{name}}</h2>
    <h2>性别： {{gender}}</h2>

  </div>
</template>

<script>
  // 引入一个混合
  import {mixin,mixData} from '../mixin'
  export default {
    name: "Student",
    data() {
      return {
        msg: "我是一个业务",
        gender: "男",
        name: "张三"
      }
    },
    mixins:[mixin,mixData]
}
</script>

<style>
  .school{
    background-color: antiquewhite;
  }
</style>
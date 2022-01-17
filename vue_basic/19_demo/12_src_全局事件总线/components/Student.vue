<template>
  <div class='school'>
    <h1>{{msg}}</h1>
    <h2>姓名： {{name}}</h2>
    <h2>性别： {{gender}}</h2>
    <button @click="sendHello">发送消息到School</button>
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
    methods: {
      sendHello(){
        this.$bus.$emit("hello",this.name)
      }
    },
    // mounted() {
    //   this.x.$emit("hello",6666)
    // },
}
</script>

<style>
  .school{
    background-color: antiquewhite;
  }
</style>
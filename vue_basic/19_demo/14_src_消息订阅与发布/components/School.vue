<template>
  <div class='school'>
    <h2>学校： {{name}}</h2>
    <h2>地址： {{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name: "Student",
    data() {
      return {
        address: "深圳",
        name: "武当"
      }
    },
    methods: {
      helloSub(name,data){
        console.log(this)
        console.log("有人发布了hello消息，hello消息的回调执行成功",name,data)
      }
    },
    mounted() {
      // 第一种写法，要写成箭头函数，this指向才是vc
      // this.pubId = pubsub.subscribe("hello",(name,data)=>{
      //   console.log(this)
      //   console.log("有人发布了hello消息，hello消息的回调执行成功",name,data)
      // })

      // 第二种写法,这样this只想不会出错
      this.pubId = pubsub.subscribe("hello",this.helloSub)
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.pubId)
    },
  }
</script>

<style>
  .school{
    background-color: antiquewhite;
  }
</style>
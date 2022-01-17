<template>
  <div class='school'>
    <h2>学校： {{name}}</h2>
    <h2>地址： {{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Student",
    data() {
      return {
        address: "深圳",
        name: "武当"
      }
    },
    mounted() {
      console.log(this.x)
      this.$bus.$on('hello',(data)=>{
        console.log("我是school组件，收到了数据",data)
      })
    },
    beforeDestroy() {
      // 组件销毁时，解绑事件
      this.$bus.$off("hello")
    },
  }
</script>

<style>
  .school{
    background-color: antiquewhite;
  }
</style>
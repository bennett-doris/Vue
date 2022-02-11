<template>
  <ul>
    <li :style="{opacity}">欢迎学习vue</li>
    <li>news001 <input type="text"></li>
    <li>news001 <input type="text"></li>
    <li>news001 <input type="text"></li>
  </ul>
</template>

<script>
  export default {
    name:"News",
    data() {
      return {
        opacity: 1
      }
    },
    beforeDestroy() {
      console.log("News 组件即将被销毁")
    },
    // 查看News组件时调用
    activated() {
      console.log("激活")
      this.Timer = setInterval(()=>{
        console.log('@')
        this.opacity -= 0.01
        if(this.opacity <=0 ) this.opacity = 1
      },20)
    },
    // News组件失活时被调用
    deactivated() {
      console.log("失活")
      clearInterval(this.Timer)
    },
  }
</script>

<style>

</style>
<template>
  <ul>
    <li>news001 <input type="text"></li>
    <li>news001 <input type="text"></li>
    <li>news001 <input type="text"></li>
  </ul>
</template>

<script>
  export default {
    name:"News",
    beforeDestroy() {
      console.log("News 组件即将被销毁")
    },
  }
</script>

<style>

</style>
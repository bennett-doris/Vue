<template>
  <div class='school'>
    <h2>学校： {{name}}</h2>
    <h2>地址： {{address}}</h2>
    <button @click="test">点我测试一下Hello 方法</button>
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
    methods: {
      test(){
        this.hello()
      }
    },
  }
</script>

<style>
  .school{
    background-color: antiquewhite;
  }
</style>
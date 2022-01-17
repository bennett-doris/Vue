<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校： {{name}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="showName">提示学校名</button>
  </div>
</template>

<script>
  // 组件交互相关的代码（数据、方法等）
  export default {
    data(){
      return {
        name: "百越",
        address: "广东深圳"
      }
    },
    name: "School",
    methods: {
      showName(){
        alert(this.name)
      }
    }}
</script>

<style>
  /* 组件的样式 */
  .demo{
    background-color: orange;
  }
</style>
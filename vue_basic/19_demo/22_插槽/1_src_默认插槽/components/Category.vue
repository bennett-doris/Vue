<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽 -->
    <slot>默认值，当没有传递结构时会显示</slot>
  </div>
</template>

<script>
  export default {
    name: "Category",
    props: ['title']
  }
</script>

<style scoped>
  .category {
    background-color: lightblue;
    width: 200px;
    height: 300px;
  }

  h3 {
    text-align: center;
    background-color: orange;
  }
</style>
<template>
  <div class='school'>
    <h2>学校： {{name}}</h2>
    <h2>地址： {{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: "School",
    data() {
      return {
        address: "深圳",
        name: "武当"
      }
    }
  }
</script>

<style scoped>
  .school{
    background-color: antiquewhite;
  }
</style>
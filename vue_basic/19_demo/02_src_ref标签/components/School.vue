<template>
  <div class='school'>
    <h2>学校名称： {{name}}</h2>
    <h2>地址： {{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "百越",
      address: "广东深圳"
    }
  },
}
</script>

<style>
  .school{
    background-color: antiquewhite;
  }
</style>
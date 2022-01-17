<template>
  <div class='school'>
    <h2 @click="showName">学校： {{name}}</h2>
    <h2>地址： {{address}}</h2>
    <h2>{{x}} {{y}}</h2>

  </div>
</template>

<script>
  import {mixin,mixData} from '../mixin'
  export default {
    name: "Student",
    data() {
      return {
        address: "深圳",
        name: "武当"
      }
    },
    mixins: [mixin,mixData]
  }
</script>

<style>
  .school{
    background-color: antiquewhite;
  }
</style>
<template>
  <div class="son">
    <h3>我是son组件(孙), 收到 {{price}} 的 {{name}}</h3>
  </div>
</template>

<script>
import {inject,toRefs} from 'vue'
export default {
  name: 'Son',
  setup() {
    let car = inject('car')
    return {...toRefs(car)}
  }
}
</script>

<style>
.son {
  background-color: greenyellow;
  padding: 10px;
}
</style>

<template>
  <div class="child">
    <h3>我是child组件(子), 收到 {{price}} 的 {{name}}</h3>
    <Son/>
  </div>
</template>

<script>
import {inject, toRefs} from 'vue'
import Son from './Son'
export default {
  name: 'Child',
  components: {Son},
  setup() {
    let car = inject('car')
    return {...toRefs(car)}
  }
}
</script>

<style>
.child {
  background-color: blanchedalmond;
  padding: 10px;
}
</style>

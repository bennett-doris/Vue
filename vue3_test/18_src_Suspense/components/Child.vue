<template>
  <div class="child">
    <h3>我是child组件</h3>
  </div>
</template>

<script>
import {inject, ref, toRefs} from 'vue'
export default {
  name: 'Child',
  setup(){
    let sum = ref(0)
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({sum})
      },1000)
    })

  }
}
</script>

<style>
.child {
  background-color: blanchedalmond;
  padding: 10px;
}
</style>

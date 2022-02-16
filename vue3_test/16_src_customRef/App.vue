<template>
  <input type="text" v-model="keyWord">
  {{keyWord}}
</template>

<script>
import {ref, customRef} from 'vue'
export default {
  name: 'App',
  setup() {
    // 自定义ref
    function myRef(value,delay) {
      let timer
      return customRef((track, trigger)=>{
        return {
          get(){
            track()  // 通知Vue追踪value的变化(提前和get商量一下,让他认为这个value是有用的)
            return value
          },
          set(a){
            console.log("new",a);
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = a;
              trigger() // 通知vue去重新解析模板
            },delay)
            
          }
        }
      })

    }

    // let keyWord = ref('hello')  // 使用vue提供的ref
    // 使用程序员自定义的ref
    let keyWord = myRef('hello',500)
    return {
      keyWord
    }
  }
}
</script>

<style>

</style>

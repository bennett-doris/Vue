<template>
  <Demo @hello="showHello" msg="你好啊" school="尚硅谷">
    <template v-slot:qwe>
      <span>上海</span>
    </template>
    
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components: {Demo},
  setup() {
    function showHello(value) {
      alert(`你好啊，触发了hello事件，收到的参数为： ${value}`)
    }
    return {
      showHello
    }
  }
}
</script>

<style>

</style>

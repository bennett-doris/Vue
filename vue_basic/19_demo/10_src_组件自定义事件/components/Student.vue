<template>
  <div class='school'>
    <h2>姓名： {{name}}</h2>
    <h2>性别： {{gender}}</h2>
    <h2>当前求和为： {{number}}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给APP</button>
    <button @click="unbind">解绑doris事件</button>
    <button @click="death">销毁当前的自定义事件</button>
  </div>
</template>

<script>
  export default {
    name: "Student",
    data() {
      return {
        gender: "男",
        name: "张三嘻嘻嘻",
        number: 0
      }
    },
    methods: {
      sendStudentName() {
        // 触发student组件实例上的doris事件
        this.$emit('doris',this.name,666,888)
        this.$emit("click")
        // this.$emit('demo',this.name,666,888)

      },
      unbind(){
        this.$off('doris')  // 解绑一个自定义事件
        // this.$off(['doris','demo'])  // 仅限于解绑多个自定义事件
        // this.$off() // 解绑所有的自定义事件
      },
      death(){
        this.$destroy() // 销毁了当前的student组件实例,销毁后所有的Student实例的自定义事件全都失效
      },
      add(){
        this.number++
        console.log("add被调用")
      }
    },
}
</script>

<style scoped>
  .school{
    background-color: gray;
    padding: 5px;
  }
</style>
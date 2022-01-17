<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addTodo">
  </div>
</template>

<script>
  import {nanoid} from 'nanoid';
  export default {
    name:"Top",
    data() {
      return {
        title: ""
      }
    },
    methods: {
      // 第一种实现方法
      // addTodo(e) {
      //   const todoObj = {id: nanoid(), title: e.target.value, done:false}
      //   this.receive(todoObj)
      //   e.target.value = ""
      // }

      // 第二种实现方法
      addTodo() {
        // 校验数据
        if (this.title.trim()) {
          // 将用户的输入包装成一个todo对象
          const todoObj = {id: nanoid(), title: this.title, done:false}
          // 通知App组件去添加一个todo对象 
          this.$emit("receive",todoObj)
          // 将输入框清空
          this.title = ""
        }else{return alert("输入不能为空")}
      }
    },
  }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 20px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: isnet 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)
  }
</style>
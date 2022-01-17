<template>
  <div class="todo-footer" v-show="allTodos">
    <label>
      <!-- 实现勾选交互的第一种方法 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->

      <!-- 实现勾选交互的第二种方法 -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{completed}}</span> / 全部{{allTodos}}
    </span>
    <button class="btn btn-danger" @click="clearTodos">清楚已完成任务</button>
  </div>
</template>

<script>
  export default {
    name:"ListFooter",
    props: ["todos"],
    computed: {
      // 第一种实现方法
      // completed: {
      //   get(){
      //   let count = 0
      //   this.todos.forEach((todo) => {
      //     if(todo.done) count++
      //   });
      //   return count
      //   }
      // }

      // 第二种实现方法
      // completed(){
      //   return this.todos.reduce((pre,current)=>{
      //     return pre + (current.done ? 1 : 0)
      //   },0)
      // }

      // 第二种方式的简写
      completed(){
        return this.todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0),0)
        },
      allTodos(){
        return this.todos.length
      },
      // 实现勾选交互的第一种方法
      // isAll(){
      //   return this.allTodos === this.completed && this.allTodos > 0
      // }

      // 实现勾选交互的第二种方法
      isAll: {
        get(){
          return this.allTodos === this.completed && this.allTodos > 0
        },
        set(e){
          // console.log(e)
          this.$emit("checkAllTodos",e)
        }
      }
    },
    methods: {
      checkAll(e){
        this.$emit("checkAllTodos",e.target.checked)
      },
      clearTodos(){
        if(this.completed > 0 && confirm("确定清楚已完成任务吗？"))
        this.$emit("clearAllTodo")
      }
    },
  }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
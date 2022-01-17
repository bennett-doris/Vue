<template>
<div class="todo-container">
  <div class="todo-wrap">
    <Top @receive="receive" />
    <List :todos="todos"/>
    <ListFooter :todos="todos" @checkAllTodos="checkAllTodos" @clearAllTodo="clearAllTodo"/>
  </div>
</div>
</template>

<script>
  import pubsub from 'pubsub-js'
  import Top from './components/Top.vue';
  import List from './components/List.vue';
  import ListFooter from './components/ListFooter.vue';
  export default {
    name: "App",
    components: {Top,List,ListFooter},
    data() {
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods: {
      // 添加一个todo
      receive(x) {
        this.todos.unshift(x)
      },
      // 全选or取消全选
      checkAllTodos(done){
        this.todos.forEach((todo)=>todo.done=done)
      },
      // 清楚所有已完成的todo
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>!todo.done)
      },
      // 下划线用来占位，代替不需要使用的传参
      delTodo(_,data){
        this.todos.map((todo,index)=>{
          if(todo.id === data) this.todos.splice(index,1)
        })
      },
      checkTodo(_,data){
        this.todos.forEach((todo)=>{
          if(todo.id===data) todo.done=!todo.done
        })
      }
    },
    watch: {
      todos: {
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    },
    mounted() {
      // this.$bus.$on("delTodo",(id)=>{
      //   this.todos.map((todo,index)=>{
      //     if(todo.id === id) this.todos.splice(index,1)
      //   })
      // })
      // this.$bus.$on("checkTodo",(id)=>{
      //   this.todos.forEach((todo)=>{
      //     if(todo.id===id) todo.done=!todo.done
      //   })
      // })

      this.delTodoPid = pubsub.subscribe('delTodo',this.delTodo);
      this.checkTodoId = pubsub.subscribe('checkTodo',this.checkTodo)
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.delTodoPid)
      pubsub.unsubscribe(this.checkTodoId)
    },
  }
</script>

<style>
  body{
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline:none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
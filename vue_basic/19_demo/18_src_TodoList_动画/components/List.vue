<template>
  <ul class="todo-main">
    <!-- 第二种方案 在 list组件加 -->
    <transition-group name="todo" appear>
      <Item 
        v-for="todo in todos" 
        :key="todo.id" 
        :title="todo" 
      />`
    </transition-group>
    
  </ul>
</template>

<script>
  import Item from './Item.vue';
  export default {
    name:"List",
    components:{Item},
    props: ["todos","checkTodo","delTodo"]
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

    .todo-enter-active {
    animation: todoActive 0.5s linear;
  }

  .todo-leave-active {
    animation: todoActive 0.5s linear reverse;
  }

  @keyframes todoActive {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>
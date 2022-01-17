<template>
  <!-- 第一种方案 可以在Item组件加 -->
  <!-- <transition name="todo" appear> -->
  <li>
    <label>
      <input type="checkbox" :checked="title.done" @change="handleCheck(title.id)"/>
      <!-- 如下代码也能实现功能，但不推荐，违反原则，只是vue没有监测到 -->
      <!-- <input type="checkbox" v-model="title.done"/> -->
      <span v-show="!title.isEdit">{{title.title}}</span>
      <input type="text" :value="title.title" v-show="title.isEdit" @blur="handlerBlur(title, $event)" ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handlerDel(title.id)" >删除</button>
    <button class="btn btn-edit" @click="handlerEdit(title)" v-show="!title.isEdit">编辑</button>    
  </li>
  <!-- </transition> -->
  
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name:"Item",
    data() {
      return {
      }
    },
    methods: {
      // 是否勾选
      handleCheck(id){
        // 通知app组件将对应的todo对象的done值取反
        pubsub.publish('checkTodo',id)
      },
      // 删除按钮事件
      handlerDel(id){
        if(confirm("确定删除吗？ ")){
          pubsub.publish('delTodo',id)
        }
      },
      // 编辑
      handlerEdit(todo) {
        if(todo.hasOwnProperty.call('isEdit')){
          todo.isEdit = true
          }
        else{
          this.$set(todo,"isEdit",true
          )}
        // vue会等该回调函数所有操作执行完再去重新渲染模板，所以这种方法不可行
        // this.$refs.inputTitle.focus()

        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
      },
      // 失去焦点回调，修改值
      handlerBlur(todo,e) {
        todo.isEdit = false
        if(e.target.value.trim()){
          this.$bus.$emit('editTodo',todo.id, e.target.value)
        }else{
          alert("输入不能为空！")
        }
      }
    },
    props:['title']
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li:hover{
    background-color: #ddd;
  }

  li:hover button{
    display: block;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  /* .todo-enter-active {
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
  } */


</style>
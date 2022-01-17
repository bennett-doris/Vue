<template>
  <li>
    <label>
      <input type="checkbox" :checked="title.done" @change="handleCheck(title.id)"/>
      <!-- 如下代码也能实现功能，但不推荐，违反原则，只是vue没有监测到 -->
      <!-- <input type="checkbox" v-model="title.done"/> -->
      <span>{{title.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handlerDel(title.id)">删除</button>
  </li>
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


</style>
<template>
<div>
  <div>
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</div>
</template>

<script>
  import Test from './components/Test'
  import Test2 from './components/Test2'
  import Test3 from './components/Test3'
  export default {
    name: "App",
    components: {Test,Test2,Test3},
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

  .btn-edit {
    color: #fff;
    background-color:darkcyan;
    border: 1px solid rgb(156, 156, 224);
    margin-right: 5px;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn-edit:hover {
    color: #fff;
    background-color:rgb(12, 114, 114);
    border: 1px solid rgb(156, 156, 224);
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
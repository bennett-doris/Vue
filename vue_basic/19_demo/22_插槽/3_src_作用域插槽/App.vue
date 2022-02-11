<template>
  <div class="container">
    <Category title="游戏">
      <template slot-scope="doris">
        <ul>
          <li v-for="(item,index) in doris.games" :key="index">{{item}}</li>
        </ul>
      </template>
      
    </Category>
    <Category title="游戏">
      <!-- ES6 语法，解构赋值 -->
      <template slot-scope="{games}">
        <ol>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ol>
      </template>
      
    </Category>
    <Category title="游戏">
      <template slot-scope="doris">
        <ol>
          <h4 v-for="(item,index) in doris.games" :key="index">{{item}}</h4>
        </ol>
      </template>
    </Category>
  </div>
</template>

<script>
  import axios from 'axios';
  import Category from './components/Category';
  export default {
    name: "App",
    components: {Category},
  }
</script>

<style>
  .container,.foot, h4 {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
</style>
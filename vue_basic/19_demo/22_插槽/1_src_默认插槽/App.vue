<template>
  <div class="container">
    <Category title="美食">
      <img src="https://seopic.699pic.com/photo/50099/7143.jpg_wh1200.jpg">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <img src="https://seopic.699pic.com/photo/50099/7143.jpg_wh1200.jpg">
    </Category>
  </div>
</template>

<script>
  import axios from 'axios';
  import Category from './components/Category';
  export default {
    name: "App",
    components: {Category},
    data() {
      return {
        foods: ['火锅','烧烤','小龙虾','牛排'],
        games: ['红色警戒','穿越火线','劲舞团', '超级玛丽'],
        films: ['《教父》','《拆弹专家》', '《你好，李焕英》', '《毒液》']
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
</style>
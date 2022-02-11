<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://seopic.699pic.com/photo/50099/7143.jpg_wh1200.jpg">
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com">更多美食</a>
      </div>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <img slot="center" src="https://seopic.699pic.com/photo/50099/7143.jpg_wh1200.jpg">
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4 slot="footer">欢迎观看</h4>
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
  .container,.foot, h4 {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
</style>
<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中使用a标签实现页面的跳转 -->
          <!-- <a href="./about.html" class="list-group-item active">About</a>
          <a href="./home.html" class="list-group-item">home</a> -->

          <!-- Vue中借助router-link 标签实现路由的切换 -->
          <router-link class="list-group-item" to="/about" active-class="active">About</router-link>
          <router-link class="list-group-item" to="/home" active-class="active">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
            此处到底展示什么组件，得看用户的点击
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Banner from  "./components/Banner"
  export default {
    name: "App",
    components: {Banner}
  }
</script>

<style>
</style>
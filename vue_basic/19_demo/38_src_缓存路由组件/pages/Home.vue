<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news" class="list-group-item" active-class="active">News</router-link>
        </li>
        <li>
          <router-link to="/home/message" class="list-group-item" active-class="active">Message</router-link>
        </li>
      </ul>
      <!-- 组件名 -->
      <!-- <keep-alive include="News"> -->
      <!-- 多个非全部 -->
      <keep-alive :include="['News','Message']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
  }
</script>
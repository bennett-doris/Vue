<template>
  <div>
    <ul>
      <li v-for="m in messageArr" :key="m.id">
        <!-- 跳转路由并携带query参数，to的字符串写法-->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
      
        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link :to="{
          name: 'xiangqing',
          query: {
            id: m.id,
            title: m.title
          }
        }">{{m.title}}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>  
</template>

<script>
  export default {
    name:"Message",
    data() {
      return {
        messageArr: [
          {id: "001",title: "消息001"},
          {id: "002",title: "消息002"},
          {id: "003",title: "消息003"},
        ]
      }
    },
  }
</script>

<style>

</style>
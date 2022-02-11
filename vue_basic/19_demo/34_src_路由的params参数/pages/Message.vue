<template>
  <div>
    <ul>
      <li v-for="m in messageArr" :key="m.id">
        <!-- 跳转路由并携带 param 参数，to的字符串写法-->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
      
        <!-- 跳转路由并携带 param 参数，to的对象写法 -->
        <!-- 携带params 参数时，不允许使用path参数 只能用name参数 -->
        <router-link :to="{
          name: 'xiangqing',
          params: {
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
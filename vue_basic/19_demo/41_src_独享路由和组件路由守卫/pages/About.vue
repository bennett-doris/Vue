<template>
  <h2>我是About的内容</h2>
</template>

<script>
  export default {
    name:"About",

    // 通过路由规则进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log("APP enter")
      console.log("组件路由守卫",to,from)
        // 用路径
        // if(to.path === "/home/news" || to.path === '/home/message')
        // 用名字
        // if(to.name === "xinwen" || to.name === 'xiaoxi')
        if(to.meta.isAuth){ // 判断是否需要鉴权
          if(localStorage.getItem('school')==="bennett"){
            next()
          }else{
            alert("学校名不对，无权限查看")
          }
        }else{
          next()
        }
    },
    // 通过路由规则离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log("APP leave")
      next()
    }
  }
</script>
// 该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

// 引入组件
import About from "../pages/About"
import Home from "../pages/Home"
import News from '../pages/News';
import Message from '../pages/Message';
import Deatil from '../pages/Detail'

// 创建一个路由器
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "guanyu",
      path: "/about",
      component:About,
      meta: {isAuth: true, title: "关于"}
    },
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      meta: {title: "主页"},
      children:[
        {
          name: "xinwen",
          path: "news",
          component:News,
          meta: {isAuth: true, title: "新闻"},
          // beforeEnter: (to, from ,next) => {
          //   console.log("独享路由守卫",to,from)
          //   // 用路径
          //   // if(to.path === "/home/news" || to.path === '/home/message')
          //   // 用名字
          //   // if(to.name === "xinwen" || to.name === 'xiaoxi')
          //   if(to.meta.isAuth){ // 判断是否需要鉴权
          //     if(localStorage.getItem('school')==="bennett"){
          //       next()
          //     }else{
          //       alert("学校名不对，无权限查看")
          //     }
          //   }else{
          //     next()
          //   }
          // }
        },
        {
          name: "xiaoxi",
          path: "message",
          component:Message,
          meta: {isAuth: true, title: "消息"},
          children:[
            {
              name: "xiangqing",
              path: 'detail',
              component: Deatil,
              meta: {isAuth: true, title: "详情"},
              props($route) {
                return {id: $route.query.id, title: $route.query.title}
              }
            }
          ]
        },
      ]
    }
  ]
})


// 全局前置路由守卫 -- 初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//   console.log("前置路由守卫",to,from)
//   // 用路径
//   // if(to.path === "/home/news" || to.path === '/home/message')
//   // 用名字
//   // if(to.name === "xinwen" || to.name === 'xiaoxi')
//   if(to.meta.isAuth){ // 判断是否需要鉴权
//     if(localStorage.getItem('school')==="bennett"){
//       next()
//     }else{
//       alert("学校名不对，无权限查看")
//     }
//   }else{
//     next()
//   }
// })

// 全局后置路由守卫 -- 初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
  console.log("后置路由守卫",to,from)
  document.title = to.meta.title || "系统"
})


export default router
<template>
<div class="app">
  <h1>{{msg}} 学生姓名是 {{studentName}}</h1>
  <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据  第一种写法-->
  <!-- <Student @doris.once="getStudentName"/> -->
  <!-- <Student @doris="getStudentName" @demo="demo"/> -->
  <School :getSchoolName="getSchoolName"/>

  <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据 第二种写法-->
  <Student ref="student" @click.native="show"/>
</div>
</template>

<script>
  import Student from './components/Student.vue'
  import School from './components/School.vue';
  export default {
    name: "App",
    components: {Student,School},
    data(){
      return {
        msg: "你好",
        studentName: ""
      }
    },
    methods: {
      getSchoolName(name){
        console.log("收到了学校名： ",name)
      },
      // 收取不定数量参数
      getStudentName(name, ...params){
        console.log("收到了学生名",name,params)
        this.studentName = name
      },
      demo(){
        console.log("demo 事件被调用")
      },
      show(){
        console.log("show被调用")
      }
    },
    mounted() {
      // 第一种实现
      this.$refs.student.$on("doris",this.getStudentName)

      // 第二种实现
      // this.$refs.student.$on("doris", (name, ...params)=>{
      //   console.log("收到了学生名",name,params,this)
      //   this.studentName = name
      // })
      // setTimeout(()=>{
      //   // this.$refs.student.$on("doris", this.getStudentName)  // 绑定自定义事件
      //   // this.$refs.student.$once("doris", this.getStudentName)   // 绑定自定义事件 一次性
      // },3000)
    }
  }
</script>

<style>
  .app {
    color: blueviolet;
    padding: 5px;
  }
</style>
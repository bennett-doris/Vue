<template>
  <div class='school'>
    <h1>{{msg}}</h1>
    <h2>姓名： {{name}}</h2>
    <h2>性别： {{gender}}</h2>
    <h2>年龄： {{MyAge+1}}</h2>
    <button @click="change">尝试修改props</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个业务",
      MyAge: this.age
    }
  },
  methods: {
    change(){
      this.MyAge ++
    }
  },
  props: ['name','gender','age'] // 简单声明接收
  
  // 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age:Number,
  //   gender:String
  // }

  // 接收的同时对数据：进行类型限制+默认值的指令+必要性的限制
  // props: {
  //   name: {
  //     type: String, // name的类型是字符串
  //     required:true // name是必要的
  //   },
  //   age: {
  //     type:Number,
  //     default:99  // 默认值
  //   },
  //   gender: {
  //     type: String,
  //     required: true
  //   }
  // }
}
</script>

<style>
  .school{
    background-color: antiquewhite;
  }
</style>
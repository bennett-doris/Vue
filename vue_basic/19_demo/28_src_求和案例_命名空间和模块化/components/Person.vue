<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count 组件求和为： {{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addFromServer">去服务器添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        name: ""
      }
    },
    computed: {
      personList() {
        return this.$store.state.personAbout.personList
      },
      sum(){
        return this.$store.state.countAbout.num
      },
      firstPersonName(){
        console.log("正常")
        return this.$store.getters["personAbout/firstPersonName"]
      }
    },
    methods: {
      add() {
        const personObj = {id: nanoid(),name:this.name}
        this.$store.dispatch("personAbout/addPerson",personObj)
        this.name = ""
      },
      addFromServer() {
        this.$store.dispatch("personAbout/addPersonServer")
      }
    },
  }
</script>

<style>

</style>
<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="username"/>&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Search",
    data() {
      return {
        username: ""
      }
    },
    methods: {
      searchUsers() {
        // 请求前更新list的数据
        this.$bus.$emit('updateList',{state:false,isLoading:true,errMsg:'',users:[]})
        axios.get(`https://api.github.com/search/users?q=${this.username}`).then(
          response => {
            console.log("请求成功",response.data.items);
            this.$bus.$emit('updateList',{isLoading:false,errMsg:'',users:response.data.items})
          },
          error => {
            console.log("请求失败", error.message);
            this.$bus.$emit("updateList",{isLoading:false,errMsg:error.message,users:[]})
          }
        )
      }
    }
  }
</script>

<style>

</style>
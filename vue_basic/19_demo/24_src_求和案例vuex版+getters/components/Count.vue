<template>
  <div>
    <h1>当前求和为： {{$store.state.num}}</h1>
    <h3>当前求和放大10倍为：{{$store.getters.bigSum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="oddAdd">和为奇数加</button>
    <button @click="waitAdd">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: "Category",
    data() {
      return {
        n: 1
      }
    },
    methods: {
      add(){
        this.$store.commit("ADD",this.n)
        // this.num = this.num + this.n
      },
      reduce(){
        // this.num = this.num - this.n
        this.$store.commit("REDUCE",this.n)
      },
      oddAdd(){
        // 业务逻辑应该写在actions里面
        // this.num % 2 ? this.num += this.n : this.num
        this.$store.state.num % 2 ? this.$store.dispatch("add",this.n) : this.$store.state.num
      },
      waitAdd() {
        setTimeout(()=>{
          // this.num = this.num + this.n
          this.$store.dispatch("add",this.n)
        },500)
      }
    },
    mounted() {
      console.log(this.$store)
    },
  }
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>
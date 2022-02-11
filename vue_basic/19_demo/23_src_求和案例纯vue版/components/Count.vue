<template>
  <div>
    <h1>当前求和为： {{num}}</h1>
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
        num: 0,
        n: 1
      }
    },
    methods: {
      add(){
        this.num = this.num + this.n
      },
      reduce(){
        this.num = this.num - this.n
      },
      oddAdd(){
        this.num % 2 ? this.num += this.n : this.num
      },
      waitAdd() {
        setTimeout(()=>{
          this.num = this.num + this.n
        },500)
      }
    },
  }
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>
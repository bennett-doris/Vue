<template>
  <div>
    <h1>当前求和为： {{num}}</h1>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
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
import {mapState,mapGetters} from 'vuex'
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
      // const x = mapState({sum:"num",school: "school",subject: "subject"})
      // console.log(x)
    },
    computed: {
      // 亲自去写计算属性
      // sum(){
      //   return this.$store.state.num
      // },
      // school(){
      //   return this.$store.state.school
      // },
      // subject(){
      //   return this.$store.state.subject
      // },

      // 借助 mapstate生成计算属性，从state中读取数据,对象写法
      // ...mapState({sum:"num",school: "school",subject: "subject"}),

      // 借助 mapstate生成计算属性，从state中读取数据，数组写法
      ...mapState(["num","subject","school"]),
      ...mapGetters(["bigSum"]),
      // bigSum(){
      //   return this.$store.getters.bigSum
      // }

    }
  }
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>
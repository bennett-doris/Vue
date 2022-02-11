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
    <button @click="add(n)">+</button>
    <button @click="reduce(n)">-</button>
    <button @click="oddAdd(n)">和为奇数加</button>
    <button @click="waitAdd(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    name: "Category",
    data() {
      return {
        n: 1
      }
    },
    methods: {
      //  亲自写方法
      // add(){
      //   this.$store.commit("ADD",this.n)
      //   // this.num = this.num + this.n
      // },
      // reduce(){
      //   // this.num = this.num - this.n
      //   this.$store.commit("REDUCE",this.n)
      // },

      // 借助mapMuattions生成对应的方法，方法中会调用commit去联系mutations（对象写法）
      ...mapMutations({add:"ADD",reduce:"REDUCE"}),

      // 亲自写methods
      // oddAdd(){
      //   // 业务逻辑应该写在actions里面
      //   // this.num % 2 ? this.num += this.n : this.num
      //   this.$store.dispatch("oddAdd",this.n)
      // },
      // waitAdd() {
      //     // this.num = this.num + this.n
      //     this.$store.dispatch("waitAdd",this.n)
      // }

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
      // ...mapActions({oddAdd: "oddAdd", waitAdd: "waitAdd"}),

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
      ...mapActions(["oddAdd", "waitAdd"])
    },
    mounted() {
      // const x = mapState({sum:"num",school: "school",subject: "subject"})
      // console.log(x)
    },
    computed: {
      // 借助 mapstate生成计算属性，从state中读取数据,对象写法
      // ...mapState({sum:"num",school: "school",subject: "subject"}),

      // 借助 mapstate生成计算属性，从state中读取数据，数组写法
      ...mapState(["num","subject","school"]),
      ...mapGetters(["bigSum"]),
    }
  }
</script>

<style scoped>
  button {
    margin-left: 5px;
  }
</style>
export default{
  // 求和功能相关的配置
  namespaced:true,
  actions: {
    oddAdd(context,value){
      context.state.num % 2 ? context.commit("ADD",value) : context.state.num
    },
    waitAdd(context,value){
      setTimeout(()=>{
        context.commit("ADD",value)
      },500)
    }
  },
  mutations: {
    ADD(state,value){
      state.num += value
    },
    REDUCE(state,value){
      state.num -= value
    },
  },
  state: {
    num: 0, // 当前的和
    school: "哈工大",
    subject: "计算机",
  },
  getters: {
    bigSum(state){
      // console.log(state)
      return state.num*10
    }
  }
}
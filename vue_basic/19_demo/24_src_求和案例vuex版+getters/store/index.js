// 该文件用于创建Vuex中最为核心的store


import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作
const actions = {
  add(context,value){
    context.commit("ADD",value)
  },
  reduce(context,value){
    context.commit("REDUCE",value)
  },
}
// 准备mutations--用于操作数据（state）
const mutations = {
  ADD(state,value){
    state.num += value
  },
  REDUCE(state,value){
    state.num -= value
  },
}
// 准备state--用于存储数据
const state = {
  num: 0, // 当前的和
}

// 准备getters--用于将state中的数据进行加工
const getters = {
  bigSum(state){
    console.log(state)
    return state.num*10
  }
}

// 创建store 并 导出store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
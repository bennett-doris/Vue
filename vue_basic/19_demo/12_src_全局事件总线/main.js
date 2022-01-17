import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip=false

// 往vc上放一个傀儡
// const Demo = Vue.extend({})

// const d = new Demo()

// Vue.prototype.x = d

new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate(){
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
})


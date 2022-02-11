import Vue from 'vue'
import App from './App.vue'

// 引入插件
import vueResource from 'vue-resource'

Vue.config.productionTip=false
// 使用插件
Vue.use(vueResource)

new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate(){
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
})


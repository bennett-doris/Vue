import Vue from 'vue'
import App from './App.vue'
// 引入插件
import plugins from './plugins'

// 全局导入混合
// import {mixin,mixData} from './mixin';
Vue.config.productionTip=false

// 全局使用混合
// Vue.mixin(mixin)
// Vue.mixin(mixData)

// 应用插件
Vue.use(plugins)

new Vue({
  el: "#app",
  render: h => h(App)
})


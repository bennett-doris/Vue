import Vue from 'vue'
import App from './App.vue'

// 完整引入
// 引入ElementUI组件库
// import ElementUI from "element-ui";
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';


// 按需引入
import {Button, Row, DatePicker} from 'element-ui'


Vue.config.productionTip=false

// 应用ElementUI
// Vue.use(ElementUI)

Vue.component('but-button', Button)
Vue.component('el-row', Row)
Vue.component('el-date-picker', DatePicker)


new Vue({
  el: "#app",
  render: h => h(App),
})


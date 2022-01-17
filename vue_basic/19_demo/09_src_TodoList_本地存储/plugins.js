export default{
  install(Vue,x,y,z){
    console.log(x,y,z)
    // 全局过滤器
    Vue.filter('timeSplice', function(value,data){
      return value.slice(0,data)
    })

    // 定义全局指令
    Vue.directive('fbind2',{
      bind(element, binding){
        console.log("bind")
        element.value = binding.value
      },
      // 指令所在元素被插入页面时
      inserted(element, binding){
        console.log("inserted",binding)
        element.focus()
      },
      // 指令所在的模板被重新解析时
      update(element, binding){
        console.log("update")
        element.value = binding.value
      },
    })

    // 定义混入
    Vue.mixin({
      data(){
        return {
          x:100
        }
      }
    })

    // 给Vue原型上添加一个方法（vm和vc都可以使用）
    Vue.prototype.hello = ()=>{alert("你好啊")}
  }
}
<<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生： {{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="showName">提示学生姓名</button>
  </div>
</template>

<script>
  // 组件交互相关的代码（数据、方法等）
  export default {
    data(){
      return {
        name: "doris",
        age: 18
      }
    },
    name: "Student",
    methods: {
      showName(){
        alert(this.name)
      }
    }}
</script>

<style>
  /* 组件的样式 */
  .demo{
    background-color: orange;
  }
</style>
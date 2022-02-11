<template>
  <div>
    <button>原生按钮</button>
    <input type="text">

    <el-row>
      <but-button>默认按钮</but-button>
      <but-button type="primary">主要按钮</but-button>
      <but-button type="success">成功按钮</but-button>
      <but-button type="info">信息按钮</but-button>
      <but-button type="warning">警告按钮</but-button>
      <but-button type="danger">危险按钮</but-button>
    </el-row>

    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style>
</style>
<template>
  <div class="container">
    <Count/>
  </div>
</template>

<script>
  import axios from 'axios';
  import Count from './components/Count';
  export default {
    name: "App",
    components: {Count},
  }
</script>

<style>
</style>
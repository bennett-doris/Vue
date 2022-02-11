<template>
  <div class="container">
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
  import axios from 'axios';
  import Count from './components/Count';
  import Person from "./components/Person"

  export default {
    name: "App",
    components: {Count,Person},
  }
</script>

<style>
</style>
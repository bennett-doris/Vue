<template>
  <div class="container">
    <search-bar/>
    <List/>
  </div>
</template>

<script>
  import axios from 'axios';
  import SearchBar from './components/SearchBar';
  import List from './components/List';
  export default {
    name: "App",
    components: {SearchBar, List}
  }
</script>

<style>
</style>
<template>
<div>
  <Student />
  <School/>
</div>
</template>

<script>
  import Student from './components/Student.vue'
  import School from './components/School.vue';
  export default {
    name: "App",
    components: {Student,School},
    mounted() {
      this.$bus.$emit("hello", 1234)
    },
  }
</script>

<style>

</style>
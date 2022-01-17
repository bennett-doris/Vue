<template>
<div>
  <Student name='李四' :age='18' gender='男'/>
</div>
</template>

<script>
  import Student from './components/Student.vue'
  export default {
    name: "App",
    components: {Student},
  }
</script>

<style>

</style>
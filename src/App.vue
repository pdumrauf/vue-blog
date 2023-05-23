<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view> <!--tag to make routers work-->
  </div>
</template>

<script>
import Header from './components/Header.vue'

  export default {
    components: {
      'AppHeader': Header
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }
</style>

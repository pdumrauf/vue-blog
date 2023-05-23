<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Blog</router-link></li> <!--we dont have to reload the page like an <a> tag-->
      <li><router-link to="/add" exact>Add Blog</router-link></li> <!--attribute exact to avoid the active class to all the "/".. path-->
      </ul>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  ul{
      list-style-type: none;
      text-align: center;
      margin: 0;
  }
  li{
      display: inline-block;
      margin: 0 10px;
  }
  a{
      color: #fff;
      text-decoration: none;
      padding: 6px 8px;
      border-radius: 10px;
  }
  nav{
      background: #b646a5;
      padding: 14px 0;
      margin-bottom: 40px;
  }
  .router-link-active{
      background: #eee;
      color: #444;
  }
</style>
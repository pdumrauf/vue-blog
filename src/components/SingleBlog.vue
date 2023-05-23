<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>
      {{ blog.content }}
    </article>
    <p>{{ blog.author }}</p>
    <ul>
      <li v-for="category in blog.categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        id: this.$route.params.id, // /blog/1 (/:id)
        blog: {} //store all info from the db in this object
      }
    },
    async created() {
      const response = await axios.get(`https://vuejs-blog-4c465-default-rtdb.firebaseio.com/posts/${this.id}.json`)
      this.blog = response.data
    }
  }
</script>

<style scoped>
  #single-blog {

    max-width: 960px;
    margin: 0 auto;
  }
</style>
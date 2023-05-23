<template>
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlog" class="single-blog">
      <router-link :to="`/blog/${blog.id}`">
        <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import searchMixin from '../mixins/searchMixin'

  export default {
    data() {
      return {
        blogs: [],
        search: ''
      }
    },
    methods: {

    },
    computed: {

    },
    async created() { //life cycle hook, get info when component's created
      const response = await axios.get('https://vuejs-blog-4c465-default-rtdb.firebaseio.com/posts.json')
      const data = response.data
      let blogsArray = []

      for(let key in data) {
        data[key].id = key
        blogsArray.push(data[key])
      }

      this.blogs = blogsArray

    },
    //local filters
    filters: {
      toUppercase(value) {
        return value.toUpperCase()
      },
      snippet(value) {
        return value.slice(0, 100) + "..."
      }
    },
    directives: {
      'rainbow': {
        bind(el, binding ,vnode) {
          el.style.color = "#" + Math.random().toString().slice(2, 8)
        }
      },
      'theme': {
        bind(el, binding, vnode) {
          if(binding.value == 'wide') {
            el.style.maxWidth = '1200px'
          } else if(binding.value == 'narrow') {
            el.style.maxWidth = '560px'
          }

          if(binding.arg == 'column') {
            //.arg: argument we can pass to a directive v-theme:column
            el.style.backgroundColor = '#ddd'
            el.style.padding = '20px'
          }
        }
      }
    },
    mixins: [searchMixin]
  }
</script>

<style scoped>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: antiquewhite;
  }
</style>
<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form action="" v-if="!submitted">
      <label>Blog title</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label for="">Blog content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label >Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories"/>
        <label >Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories"/>
        <label >Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories"/>
        <label >Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories"/>
        <label for="">Author:</label>
        <select v-model="blog.author">
          <option v-for="author in authors"> {{ author }}</option>
        </select>
      </div>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview blog post</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blog: {
          title: "",
          content: "",
          categories: [],
          author: ""
        },
        authors: ['Poli Ninja', 'React Avenger', 'Vue samurai'],
        submitted: false,
      }
    },
    methods: {
      //HTTP request to send data to the DB
      async post() {
        //POST method, pass the database url and the object me want to save
        const response = await this.axios.post('https://vuejs-blog-4c465-default-rtdb.firebaseio.com/posts.json', this.blog)
        this.submitted = true
      }
    }
  } 
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  #add-blog {
    margin: 20px auto;
    max-width: 500px;
  }
  label {
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3 {
    margin-top: 10px;
  }
  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }
  #checkboxes label {
    display: inline-block;
  }
</style>
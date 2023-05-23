import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'


export default [
  {
    path: '/',
    component: ShowBlog
  },
  {
    path: '/add',
    component: AddBlog
  },
  {
    path: '/blog/:id',
    component: SingleBlog
  }
]

/*

/#/add => this doesn't make an additional server request, 
          it's looking for a targeting ID (#id.. like a button that goes down the bottom of a page)

          HASHES ROUTING
          Vuejs uses /#/ hashes to prevent the browser from making request to the server
          
          HISTORY ROUTING
          We have to tell vueJS we want to render only the index.html no matter what path you write (div: el: #app)
          change mode to history in the Route instance (main.js)
*/
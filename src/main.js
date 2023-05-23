import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes, //[{}, {}]
  mode: "history" //to use history routing, default is hash #
})

new Vue({
  render: (h) => h(App),
  router: router
}).$mount('#app')

//GLOBAL DIRECTIVES AND FILTERS

//Custom Directives
/*Vue.directive('rainbow', {
  bind(el, binding ,vnode) {
    //el: element tag we want to style
    //biding: the value from the attibute same (the new directive)
    //vnode: virtual node
    el.style.color = "#" + Math.random().toString().slice(2, 8)
  }
})

Vue.directive('theme', {
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
})

//Filters ( | ) to change the display of data in the browser  
//parameters: the name and the data we want to change (saved in the component)
Vue.filter('to-uppercase', (value) => {
  return value.toUpperCase() //value is a string
})

Vue.filter('snippet', (value) => {
  return value.slice(0, 100) + "..."
})*/


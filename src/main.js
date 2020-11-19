import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'
import store from './store/store'
import dashboard from './Dashboard'
import hakkimda from './Hakkimda'
import kurallar from './Kurallar'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


const router = new VueRouter({
  mode:'history',
  routes :[
    {path:'/',component:dashboard},
    {path:'/hakkimda',component:hakkimda},
    {path:'/kurallar',component:kurallar}
  ]
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

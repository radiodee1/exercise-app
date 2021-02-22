
import Vue from 'vue'
import VueRouter from 'vue-router'
//import appx from '../App.vue'
//import bannercomponent from "../views/Banner.vue";
import home from "../views/Home.vue";
import login from "../views/Login.vue";
import register from "../views/Register.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home', //'appx'
    component: home,
  },
  {
    path: '/login',
    name: "login",
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

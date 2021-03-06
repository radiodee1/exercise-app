
//import visibility from "../js/exercise.js";

import Vue from 'vue'
import VueRouter from 'vue-router'


import home from "../views/Home.vue";
import login from "../views/Login.vue";
import register from "../views/Register.vue"
//import feedcontainer from "../views/FeedContainer.vue";
import feedview from "../views/Feed.vue";
import exercise from "../views/Exercise.vue";
import message from "../views/Message.vue";
import workout from "../views/Workout.vue";
import friends from "../views/Friends.vue";
import dev from "../views/Dev.vue";
import {Session} from "../models/Session.js";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home', 
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
  },
  {
    path: '/feed',
    name: 'feed',
    component: feedview
  },
  {
    path: '/exercise',
    name: "exercise",
    component: exercise
  },
  {
    path: '/message',
    name: 'message',
    component: message
  },
  {
    path: '/workout',
    name: 'workout',
    component: workout
  },
  {
    path: '/friends',
    name: 'friends',
    component: friends
  },
  {
    path: '/dev',
    name: 'dev',
    component: dev
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {

  if ((to.path !== '/login' && to.path !== '/register' && to.path !== "/"  && !Session.user) || 
    (to.path === '/dev' && ( Session.user.isDevUser != true))) {
    //visibility.focusReset();
    Session.nextRoute = to;
    next('/');

  //} else if ((from.path === "/message" || from.path === "/exercise" || from.path === "/workout") && Session.user) {
  //  next("/feed");

  } else {
    next();
  }
})


export default router

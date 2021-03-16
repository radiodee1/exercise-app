
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
import Session from "../models/Session.js";

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  //console.log({ from, to })
  if (to.path !== '/login' && to.path !== '/register' && to.path !== "/" && !Session.user) {
    //visibility.focusReset();
    next('/');
  } else {
    next();
  }
})

export default router

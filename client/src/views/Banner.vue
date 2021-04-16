<template>
  <div id="bannercomponent">
    <nav
      class="navbar gray"
      role="navigation"
      aria-label="main navigation"
      id="banner"
    >
      <div class="navbar-brand">
        <a class="navbar-item" @click.prevent="logout"> 
          <img src="../assets/app.png" width="56" height="56" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="clickBurger()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div class="navbar-menu" id="navMenu"></div>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': isActive }"
        v-if="newsfeed"
      >
        <div class="navbar-menu" :class="{ 'is-active': isActive }">
          <div class="navbar-start">
            <a class="navbar-item" @click="formExercise()"> Exercise </a>

            <a class="navbar-item" @click="formWorkout()"> Workout </a>

            <a class="navbar-item" @click="formMessage()"> Message </a>

            <a class="navbar-item" @click="formFriends()"> Friends </a>

            <router-link class="navbar-item" to="/dev" v-show="isDevUser()"> Dev </router-link>
          </div>
          <div class="navbar-end"></div>
        </div>
      </div>
    </nav>

    <section class="section" v-if="banner">
      <br />
      <div class="container">
        <h1 class="title">Exercise App</h1>
        <p class="subtitle">
          Keep track of your workouts with <strong>Exercise App</strong>!
        </p>
      </div>
    </section>
  </div>
</template>

<script>

import {Logout, Session} from "../models/Session";
export default {
  name: "bannercomponent",
  data() {
    return {
      isActive: false,
    };
  },

  props: [
    "banner",
    "newsfeed",
    "focusFormMessage",
    "focusFormExercise",
    "focusFormWorkout",
    "focusFormFriends",
    "login",
    "home",
    "register",
    "items",
    "focusNews",
    "form_message",
    "form_exercise",
    "form_workout",
    "form_friends",
  ],
  methods: {
    isDevUser: function () {
      //return this.$root.user.username === process.env.VUE_APP_DEV_USERNAME;
      console.log(this.$root.user);
      return Session.user != null && (Session.user.isDevUser != null && Session.user.isDevUser == true);
    },
    logout: function () {
      Logout();
      //Session.user.isDevUser = false;
      this.$router.app.$root.show_development = false;
      this.$router.push("/");
    },
    formExercise: function () {
      this.isActive = false;
      this.focusFormExercise();
    },
    formWorkout: function () {
      this.isActive = false;
      this.focusFormWorkout();
    },
    formMessage: function () {
      this.isActive = false;
      this.focusFormMessage();
    },
    formFriends: function () {
      this.isActive = false;
      this.focusFormFriends();
    },
    clickBurger: function () {
      this.isActive = ! this.isActive;
      if (this.form_message || this.form_exercise || this.form_workout || this.form_friends ) {
        this.isActive = false;
        this.focusNews();
      }
      if (this.isActive == false && this.isDevUser()) {
        this.isActive = false;
      }
    }
  }
};
</script>

<style scoped>
#banner {
  position: fixed;
  width: 100%;
}
</style>
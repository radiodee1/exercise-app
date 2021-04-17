<template>
  <div id="bannercomponent" class="" style="width: 100%">
    <div class="gray">
      <nav
        class="navbar gray"
        role="navigation"
        aria-label="main navigation"
        id="banner"
      >
        <div class="navbar-brand gray">
          <a class="navbar-item gray" @click.prevent="logout">
            <img src="../assets/app.png" width="56" height="56" />
          </a>

          <a
            role="button"
            class="navbar-burger gray"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            @click.prevent="clickBurger()"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <div class="navbar-menu gray" id="navMenu"></div>
        </div>
        <div class="gray gbanner" style="width: 100%">
          <div
            id="navbarBasicExample"
            class="navbar-menu gray"
            :class="{ 'is-active': isActive }"
            v-if="newsfeed && Session.user"
            style="height: 100%"
          >
            <div class="navbar-menu gray" :class="{ 'is-active': isActive }">
              <div class="navbar-start gray">
                <a class="navbar-item" @click="formExercise()"> Exercise </a>

                <a class="navbar-item" @click="formWorkout()"> Workout </a>

                <a class="navbar-item" @click="formMessage()"> Message </a>

                <a class="navbar-item" @click="formFriends()"> Friends </a>

                <router-link class="navbar-item" to="/dev" v-show="isDevUser()">
                  Dev
                </router-link>
              </div>
            </div>
            <div class="navbar-end gray"></div>
          </div>
        </div>
      </nav>
    </div>
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
import { Logout, Session } from "../models/Session";
export default {
  name: "bannercomponent",
  data() {
    return {
      isActive: false,
      Session,
    };
  },
  mounted() {
    //this.isUser = true;
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
      return (
        Session.user != null &&
        Session.user.isDevUser != null &&
        Session.user.isDevUser == true
      );
    },
    logout: function () {
      Logout();
      //this.isUser = false;

      this.$router.app.$root.newsfeed = false;
      this.$router.push("/"); //.catch();
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
      this.isActive = !this.isActive;
      if (
        this.form_message ||
        this.form_exercise ||
        this.form_workout ||
        this.form_friends
      ) {
        this.isActive = false;
        this.focusNews();
      }
      if (this.isActive == false && this.isDevUser()) {
        this.isActive = false;
      }
    },
  },
};
</script>

<style scoped>
#banner {
  position: fixed;
  width: 100%;
}

#gbanner {
  width: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
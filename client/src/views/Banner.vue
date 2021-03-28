<template>
  <div id="bannercomponent">
    <nav
      class="navbar gray"
      role="navigation"
      aria-label="main navigation"
      id="banner"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/app.png" width="56" height="56" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="isActive = !isActive"
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
            <a class="navbar-item" @click="focusFormExercise()"> Exercise </a>

            <a class="navbar-item" @click="focusFormWorkout()"> Workout </a>

            <a class="navbar-item" @click="focusFormMessage()"> Message </a>

            <a class="navbar-item" @click="focusFormFriends()"> Friends </a>

            <router-link class="navbar-item" to="/dev" v-show="isDevUser"> Dev </router-link>
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
    "form_message",
    "form_exercise",
    "form_workout",
    "form_friends",
  ],
  computed: {
    isDevUser: function () {
      return this.$root.user.username === process.env.VUE_APP_DEV_USERNAME;
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
<template>
  <div id="appx">
    <bannercomponent
      :newsfeed="newsfeed"
      :banner="banner"
      :login="login"
      :register="register"
      :home="home"
      :form_message="form_message"
      :form_exercise="form_exercise"
      :form_workout="form_workout"
      :focusRegister="focusRegister"
      :focusNews="focusNews"
      :focusReset="focusReset"
      :focusLogin="focusLogin"
      :focusFormMessage="focusFormMessage"
      :useFormSubmitMessage="useFormSubmitMessage"
      :_preview_image_msg="_preview_image_msg"
      :makeId="makeId"
      :items="items"
      :feed_divs="feed_divs"
      :tree="tree"
      :focusFormExercise="focusFormExercise"
      :_preview_image_ex="_preview_image_ex"
      :useFormSubmitExercise="useFormSubmitExercise"
      :focusFormWorkout="focusFormWorkout"
      :_preview_image_wrk="_preview_image_wrk"
      :useFormSubmitWorkout="useFormSubmitWorkout"
      :focusFormFriends="focusFormFriends"
      :form_friends="form_friends"
    ></bannercomponent>

    <router-view
      :newsfeed="newsfeed"
      :banner="banner"
      :login="login"
      :register="register"
      :home="home"
      :form_message="form_message"
      :form_exercise="form_exercise"
      :form_workout="form_workout"
      :focusRegister="focusRegister"
      :focusNews="focusNews"
      :focusReset="focusReset"
      :focusLogin="focusLogin"
      :focusFormMessage="focusFormMessage"
      :useFormSubmitMessage="useFormSubmitMessage"
      :_preview_image_msg="_preview_image_msg"
      :makeId="makeId"
      :items="items"
      :feed_divs="feed_divs"
      :tree="tree"
      :focusFormExercise="focusFormExercise"
      :_preview_image_ex="_preview_image_ex"
      :useFormSubmitExercise="useFormSubmitExercise"
      :focusFormWorkout="focusFormWorkout"
      :_preview_image_wrk="_preview_image_wrk"
      :useFormSubmitWorkout="useFormSubmitWorkout"
      :focusFormFriends="focusFormFriends"
      :form_friends="form_friends"
    ></router-view>
  </div>
</template>

<script>
/* eslint-disable */

import "bulma/css/bulma.css";
import "./assets/bulma.css";

import bannercomponent from "./views/Banner.vue";

import { makeInvocation } from "./js/exercise.js";


export default {
  name: "appx",
  data() {
    return {
      login: this.$router.app.$root.login,
      register: this.$router.app.$root.register,
      home: this.$router.app.$root.home,
      form_message: this.$router.app.$root.form_message,
      form_exercise: this.$router.app.$root.form_exercise,
      form_workout: this.$router.app.$root.form_workout,
      form_friends: this.$router.app.$root.form_friends,
      newsfeed: this.$router.app.$root.newsfeed,
      banner: this.$router.app.$root.banner,

      items: this.$router.app.$root.items,
      user: this.$router.app.$root.user,
      feed_divs: makeInvocation(),
    };
  },
  components: {
    bannercomponent: bannercomponent,
    /*
    feedcontainer: feedcontainer,
    register: register,
    home: home,
    login: login,
    message: message,
    exercise: exercise,
    workout: workout,
    friends: friends,
    */
  },
  props: [],
  mounted() {
    
    this.login = this.$router.app.$root.login;
    this.register = this.$router.app.$root.register;
    this.home = this.$router.app.$root.home;
    this.form_message = this.$router.app.$root.form_message;
    this.form_exercise = this.$router.app.$root.form_exercise;
    this.form_workout = this.$router.app.$root.form_workout;
    this.form_friends = this.$router.app.$root.form_friends;
    this.newsfeed = this.$router.app.$root.newsfeed;
    this.banner = this.$router.app.$root.banner;

    this.items = this.$router.app.$root.items;
    this.user = this.$router.app.$root.user;

  },
  computed: {
    tree: function () {
      return this.$router.app.$root.tree;
    },
  },

  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    copyVals: function () {
      this.login = this.$root.login;
      this.register = this.$router.app.$root.register;
      this.home = this.$router.app.$root.home;
      this.form_message = this.$router.app.$root.form_message;
      this.form_exercise = this.$router.app.$root.form_exercise;
      this.form_workout = this.$router.app.$root.form_workout;
      this.form_friends = this.$router.app.$root.form_friends;
      this.newsfeed = this.$router.app.$root.newsfeed;
      this.banner = this.$router.app.$root.banner;
    },
    focusRegister: function () {
      this.$router.app.$root.focusRegister();
      this.$router.push('/register');
      this.copyVals();
    },
    focusNews: function () {
      this.$router.app.$root.focusNews();
      this.copyVals();
    },
    focusReset: function () {
      this.$router.app.$root.focusReset();
      this.copyVals();
    },
    focusLogin: function () {
      this.$router.app.$root.focusLogin();
      this.$router.push('/login');
      this.copyVals();
    },
    focusFormMessage: function () {
      this.$router.app.$root.focusFormMessage();
      this.copyVals();
    },
    focusFormExercise: function () {
      this.$router.app.$root.focusFormExercise();
      this.copyVals();
    },
    focusFormWorkout: function () {
      this.$router.app.$root.focusFormWorkout();
      this.copyVals();
    },
    focusFormFriends: function () {
      this.$router.app.$root.focusFormFriends();
      this.copyVals();
    },
    useFormSubmitMessage: function () {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      this.$router.app.$root.useFormSubmitMessage(feed_divs, tree);
      this.copyVals();
      this.focusNews();
    },
    useFormSubmitExercise: function () {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      this.$router.app.$root.useFormSubmitExercise(feed_divs, tree);
      this.copyVals();
      this.focusNews();
    },
    useFormSubmitWorkout: function (msg) {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      this.$router.app.$root.useFormSubmitWorkout(msg, feed_divs, tree);
      this.copyVals();
      this.focusNews();
    },
    _preview_image_msg: function (e) {
      //console.log("at message");
      //console.log(e);
      this.$router.app.$root.preview_image_msg(e);
      this.copyVals();
    },
    _preview_image_ex: function (e) {
      //console.log("at message");
      //console.log(e);
      this.$router.app.$root.preview_image_ex(e);
      this.copyVals();
    },
    _preview_image_wrk: function (e) {
      //console.log("at message");
      //console.log(e);
      this.$router.app.$root.preview_image_wrk(e);
      this.copyVals();
    },
    makeId: function (num, prefix = "feed-num-") {
      return prefix + num;
    },
  },
};
</script>

<style>
</style>
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
      :fillPictures="fillPictures"
      :backend_port="backend_port"
      :focusDev="focusDev"
      :show_development="show_development"
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
      :fillPictures="fillPictures"
      :backend_port="backend_port"
      :focusDev="focusDev"
      :show_development="show_development"
    ></router-view>
  </div>
</template>

<script>
/* eslint-disable */

import "bulma/css/bulma.css";
import "./assets/bulma.css";

import bannercomponent from "./views/Banner.vue";

//import { makeInvocation } from "./js/exercise.js";
import { feed_full_length } from './js/exercise.js';

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

      backend_port: this.$router.app.$root.backend_port,
      show_development: false,

      items: this.$router.app.$root.items,
      user: this.$router.app.$root.user,
      feed_divs: []// makeInvocation(),
    };
  },
  components: {
    bannercomponent: bannercomponent,
    
  },
  props: [],
  mounted() {
    
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
      this.copyVals();

      this.$router.push("/register").catch(err => {});
    },
    focusNews: function () {
      this.$router.app.$root.focusNews();
      this.copyVals();

      this.$router.push("/feed").catch(err => {});
    },
    focusReset: function () {
      this.$router.app.$root.focusReset();
      this.copyVals();

      this.$router.go(-1);
    },
    focusLogin: function () {
      this.$router.app.$root.focusLogin();
      this.copyVals();

      this.$router.push("/login").catch(err => {});
    },
    focusDev: function () {
      this.show_development = true;
      console.log("dev here.")
      this.$router.push("/login").catch(err => {});

    },
    focusFormMessage: function () {
      this.$router.app.$root.focusFormMessage();
      this.copyVals();

      this.$router.push("/message").catch(err => {});
    },
    focusFormExercise: function () {
      this.$router.app.$root.focusFormExercise();
      this.copyVals();

      this.$router.push("/exercise").catch(err => {});

    },
    focusFormWorkout: function () {
      this.$router.app.$root.focusFormWorkout();
      this.copyVals();

      this.$router.push("/workout").catch(err => {});
    },
    focusFormFriends: function () {
      this.$router.app.$root.focusFormFriends();
      this.copyVals();

      this.$router.push("/friends").catch(err => {});
    },
    useFormSubmitMessage: function () {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      const b = this.$router.app.$root.useFormSubmitMessage(feed_divs, tree);
      //this.$emit('submitpost', b);
      this.copyVals();
      this.$router.push("/feed").catch(err => {});
      this.focusNews();

    },
    useFormSubmitExercise: function () {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      const b = this.$router.app.$root.useFormSubmitExercise(feed_divs, tree);
      this.copyVals();
      this.$router.push("/feed").catch(err => {});
      this.focusNews();
    },
    useFormSubmitWorkout: function (msg) {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      const b = this.$router.app.$root.useFormSubmitWorkout(msg, feed_divs, tree);
      this.copyVals();
      this.$router.push("/feed").catch(err => {});
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
    fillPictures: function () {
      if (feed_full_length == 0) {
        return true;
      }
      for (let i = 0; i <= feed_full_length; i ++) {
        document.getElementById(this.makeId(i, "pic")).src = this.tree.feed[ + i].picture_large;
        //console.log("pic" + i);
      }
      return true;
    }
  },
};
</script>

<style>
</style>
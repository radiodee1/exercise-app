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
    <feedcontainer
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

    ></feedcontainer>
    <register
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

    ></register>
    <login
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

    ></login>
    <home
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

    ></home>
    <message
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

    ></message>
    <exercise
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

    ></exercise>
    <workout
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

    ></workout>
    <friends
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

    ></friends>

  </div>
</template>

<script>
import "./../node_modules/bulma/css/bulma.css";
import "@/assets/bulma.css";

import bannercomponent from "./views/Banner.vue";
import feedcontainer from "./views/FeedContainer.vue";
import register from "./views/Register.vue";
import home from "./views/Home.vue";
import login from "./views/Login.vue";
import message from "./views/Message.vue";
import exercise from "./views/Exercise.vue";
import workout from "./views/Workout.vue";
import friends from "./views/Friends.vue";

import {  makeInvocation } from "./js/exercise.js";

export default {
  name: "appx",
  data() {
    return {

      login: this.$root.login,
      register: this.$root.register,
      home: this.$root.home,
      form_message: this.$root.form_message,
      form_exercise: this.$root.form_exercise,
      form_workout: this.$root.form_workout,
      form_friends: this.$root.form_friends,
      newsfeed: this.$root.newsfeed,
      banner: this.$root.banner,

      items: this.$root.items,
      user: this.$root.user,
      feed_divs: makeInvocation()
    };
  },
  components: {
    bannercomponent: bannercomponent,
    feedcontainer: feedcontainer,
    register: register,
    home: home,
    login: login,
    message: message,
    exercise: exercise,
    workout: workout,
    friends: friends
  },

  mounted() {
    console.log("appx");
    
  },
  computed: {
    
    tree: function () {
      return this.$root.tree;
    }
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    copyVals: function() {
      this.login = this.$root.login;
      this.register = this.$root.register;
      this.home = this.$root.home;
      this.form_message = this.$root.form_message;
      this.form_exercise = this.$root.form_exercise;
      this.form_workout = this.$root.form_workout;
      this.form_friends = this.$root.form_friends;
      this.newsfeed = this.$root.newsfeed;
      this.banner = this.$root.banner;
    },
    focusRegister : function () {
      this.$root.focusRegister();
      this.copyVals();
    },
    focusNews: function () {
      this.$root.focusNews();
      this.copyVals()
    },
    focusReset: function () {
      this.$root.focusReset();
      this.copyVals();
    },
    focusLogin: function () {
      this.$root.focusLogin();
      this.copyVals();
    },
    focusFormMessage: function () {
      this.$root.focusFormMessage();
      this.copyVals();
    },
    focusFormExercise: function () {
      this.$root.focusFormExercise();
      this.copyVals();
    },
    focusFormWorkout: function () {
      this.$root.focusFormWorkout();
      this.copyVals();
    },
    focusFormFriends: function () {
      this.$root.focusFormFriends();
      this.copyVals();
    },
    useFormSubmitMessage: function () {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      this.$root.useFormSubmitMessage(feed_divs, tree);
      this.copyVals();
      this.focusNews();
    },
    useFormSubmitExercise: function () {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      this.$root.useFormSubmitExercise(feed_divs, tree);
      this.copyVals();
      this.focusNews();
    },
    useFormSubmitWorkout: function (msg) {
      var tree = this.tree;
      var feed_divs = this.feed_divs;
      this.$root.useFormSubmitWorkout(msg, feed_divs, tree);
      this.copyVals();
      this.focusNews();
    },
    _preview_image_msg: function (e) {
      //console.log("at message");
      //console.log(e);
      this.$root.preview_image_msg(e);
      this.copyVals();
    },
    _preview_image_ex: function (e) {
      //console.log("at message");
      //console.log(e);
      this.$root.preview_image_ex(e);
      this.copyVals();
    },
    _preview_image_wrk: function (e) {
      //console.log("at message");
      //console.log(e);
      this.$root.preview_image_wrk(e);
      this.copyVals();
    },
    makeId: function (num, prefix="feed-num-") {
      return prefix + num;
    },
    shared_feed: function(feed) {
      //this.$root.$on('shared_feed', (feed) => {
      console.log('shared feed');
      console.log(feed);
    //});
    }
  },
}; 

//console.log(visibility);
//console.log("here... App.vue");
</script>

<style>
</style>
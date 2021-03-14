import Vue from "vue";
//import Vue from 'vue'
//import App from '../App.vue'
import router from '../router'

import appx from "../App.vue";
//import {PostFeed} from "../models/feed"

import {subtreeStr, tree, feed_limit, formSubmitMessage, formSubmitExercise, formSubmitWorkout, makeUser} from "./FeedMethods.js"



export let feed_full_length = 0;



/* --------------- vue functions ------------------- */

export let visibility = null;

var feed_array = [];
for (var x = 0; x < feed_limit; x++) {
  feed_array.push(x);
}

export function doLoad() {

  visibility = new Vue({
    el: '#app',
    router,
    render: h => h(appx),
    data() {
      return {
        login: false,
        register: false,
        newsfeed: false,
        home: true,
        banner: true,
        form_message: false,
        form_exercise: false,
        form_workout: false,
        form_friends: false,

        backend_port: ( +process.env.VUE_APP_BACKEND_PORT) || 3010,
        backend_url: process.env.VUE_APP_BACKEND_URL || "http://localhost:",

        items: feed_array,
        tree: tree,
        user: this.makeUser()
      };
    },
    mounted() {
      //console.log("mounted");
      //console.log(this);
      //makeInvocation();
    },
    computed: {
      //user: this.makeUser()
    },

    methods: {
      classOption: function (i) {
        //console.log(i);
        const x = Boolean(i);
        if (x === true) return 'visi';
        else return 'invis';
      },


      focusRegister: function () {
        this.register = true;
        this.login = false;
        this.newsfeed = false;
        this.home = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
      },

      focusLogin: function () {
        this.login = true;
        this.register = false;
        this.newsfeed = false;
        this.home = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
      },

      focusNews: function () {

        this.login = false;
        this.register = false;
        this.newsfeed = true;
        this.home = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
        this.form_friends = false;

      },

      focusReset: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = true;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
      },

      focusFormExercise: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = true;
        this.banner = true;
        this.form_exercise = true;
        this.form_message = false;
        this.form_workout = false;
      },

      focusFormMessage: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = true;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = true;
        this.form_workout = false;
      },

      focusFormWorkout: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = true;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = true;
      },

      focusFormFriends: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = true;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
        this.form_friends = true;
      },

      useFormSubmitMessage: function (msg, feed_divs, tree, pic=null) {
        const obj = JSON.parse(subtreeStr);
        obj.from_user_id = this.user.id;
        obj.picture_large = pic;
        obj.message_obj_from = this.user.firstname + " " + this.user.lastname;
        return formSubmitMessage(msg, feed_divs, tree, obj);

      },
      useFormSubmitExercise: function (msg, feed_divs, tree, pic = null) {
        const obj = JSON.parse(subtreeStr);
        obj.from_user_id = this.user.id;
        obj.picture_large = pic;
        obj.message_obj_from = this.user.firstname + " " + this.user.lastname;

        return formSubmitExercise(msg, feed_divs, tree, obj);

      },
      useFormSubmitWorkout: function (msg, feed_divs, tree, pic = null) {
        const obj = JSON.parse(subtreeStr);
        //console.log(this.user);
        obj.from_user_id = this.user.id;
        obj.picture_large = pic;
        obj.message_obj_from = this.user.firstname + " " + this.user.lastname;

        return formSubmitWorkout(msg, feed_divs, tree, obj);

      },
      preview_image_msg: function () {
        //preview_image_msg(e);
      },
      preview_image_ex: function () {
        //preview_image_ex(e);
      },
      preview_image_wrk: function () {
        //preview_image_wrk(e);
      },
      makeUser: function () {
        return makeUser();
      }

    }
  });

  //makeFeedComponent();
  //makeInvocation();


}


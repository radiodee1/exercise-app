<template>
  <!-- start home -->
  <section class="section gray" v-if="home">
    <div class="buttons">
      <a class="button is-primary" @click="focusRegister();">
        <strong>Sign up</strong>
      </a>
      <a class="button is-light" @click="focusLogin()"> Log in </a>
      <!-- a class="button is-light" @click="skipLogin()"> Skip Log In </a -->
     
    </div>
    Login or register! <br><br>
    <about></about>
  </section>
  <!-- end home -->
</template>

<script>

import about from "../components/About.vue";
import {Session} from '../models/Session';

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    about: about
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
    "items" ,
    "form_message",
    "form_exercise",
    "form_workout",
    "form_friends",
    'focusNews',
    'focusReset',
    'focusLogin',
    'focusRegister',
    'focusDev'
  ],
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    skipLogin: function () {
      Session.user = this.$root.user;
      this.focusNews();
    }
  },
  mounted () {
    //console.log(this.home + " home");
  }
};
</script>
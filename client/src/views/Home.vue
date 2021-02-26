<template>
  <!-- start home -->
  <section class="section gray" v-if="home">
    <div class="buttons">
      <a class="button is-primary" @click="focusRegister();">
        <strong>Sign up</strong>
      </a>
      <a class="button is-light" @click="focusLogin()"> Log in </a>
    </div>
    Login or register! <br><br>
    <about></about>
  </section>
  <!-- end home -->
</template>

<script>


//import { doLoad, visibility, classOption } from "../js/v.js";
import about from "../components/About.vue";

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
    'focusRegister'
  ],
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
  },
  mounted () {
    //console.log(this.home + " home");
  }
};
</script>
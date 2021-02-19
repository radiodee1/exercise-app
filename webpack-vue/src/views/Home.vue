<template>
  <!-- start home -->
  <section class="section gray" v-if="home">
    <div class="buttons">
      <a class="button is-primary" @click="focusRegister();">
        <strong>Sign up</strong>
      </a>
      <a class="button is-light" @click="focusLogin()"> Log in </a>
    </div>
    Login or register!
  </section>
  <!-- end home -->
</template>

<script>
//require("../js/v.js");
//require("../js/populate.js");
//require("../js/controls.js");

//import { doLoad, visibility, classOption } from "../js/v.js";

export default {
  name: "home",
  data() {
    return {};
  },
  props: {
    home: Boolean,
    focusRegister: Function,
    focusLogin: Function
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
  },
};
</script>
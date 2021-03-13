<template>
  <!-- start login-->
  <div>
    <section class="section gray" v-if="login" id="login">
      <div class="columns">
        <!-- username -->
        <div class="field column">
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-medium"
              type="text"
              placeholder="Username"
              id="username"
              v-model="username"
            />
            <span class="icon is-medium is-left">
              <i class="fas"></i>
            </span>
            <span class="icon is-medium is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <!-- password -->
        <div class="field column">
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-medium"
              type="password"
              placeholder="Password"
              id="password"
              v-model="password"
            />
            <span class="icon is-medium is-left">
              <i class="fas"></i>
            </span>
            <span class="icon is-medium is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" @click="submit()"> Submit </a>
          </p>
          <p class="control">
            <a class="button is-light" @click="focusReset()"> Cancel </a>
          </p>
        </div>
      </div>

      <label class="checkbox">
        <input type="checkbox" />
        Remember me
      </label>
    </section>
    <div v-show="show_development" class="box">
      <development :backend_port="backend_port" :backend_url="backend_url" ></development>
    </div>
  </div>
  <!-- end login -->
</template>

<script>
import development from "../components/Development.vue";
import Session from "../models/Session.js";
import { GetUserLogin } from '../models/users';
//let axios = require("axios").default;

export default {
  name: "login",
  data() {
    return {
      //show_development: false,
      username: "",
      password: "",
      user: Session.user
    };
  },
  props: {
    newsfeed: Boolean,
    login: Boolean,
    focusNews: Function,
    focusReset: Function,
    //classOption: Function
    backend_port: Number,
    backend_url : String,
    show_development: Boolean,
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    submit: async function () {
      const username = this.username;
      const password = this.password; 

      let user_reply = await GetUserLogin(username, password)
      if (typeof user_reply.id === "number") {
        for (let i in user_reply) {
          this.$root.user[i] = user_reply[i];
          //Session.user[i] = user_reply[i];
        }
        //this.$root.user = user_reply;
        Session.user = user_reply;
        console.log(Session.user);
        this.focusNews();
      }
      else {
        console.log("bad login");
      }
    },
    //login_dev_check: function () {
    //make hardcoded develpment enabled
    //this.show_development = true;
    //},
  },
  components: {
    development: development,
  },
};
</script>
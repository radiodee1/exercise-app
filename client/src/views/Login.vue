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
    <div v-show="message_1" class="box">
      <span class="red" >Your login attempt failed!</span>
    </div >
  </div>
  <!-- end login -->
</template>

<script>
//import development from "../components/Development.vue";
import Session from "../models/Session.js";
import { PostUserLogin } from '../models/users';
//let axios = require("axios").default;

export default {
  name: "login",
  data() {
    return {
      show_dev: this.$router.app.$root.show_development,
      username: "",
      password: "",
      user: Session.user,

      message_1: false
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
      this.message_1 = false;
      if (this.loginDevCheck()) {
        console.log("dev");
        return;
      }

      let username = this.username;
      let password = this.password; 

      var user_reply = await PostUserLogin(username, password)
      //user_reply = JSON.parse(user_reply);
      console.log(user_reply);
      console.log("*****");
      const user_obj = user_reply;
      if (typeof user_obj.id === "number") {
        for (let i in user_obj) {
          this.$root.user[i] = user_obj[i];
          //Session.user[i] = user_reply[i];
        }
        //this.$root.user = user_reply;
        Session.user = user_obj;
        console.log(Session.user);
        this.focusNews();
      }
      else {
        console.log("bad login");
        this.message_1 = true;
        this.password = '';
      }
    },
    loginDevCheck: function () {
    //make hardcoded develpment enabled
      if (this.username == process.env.VUE_APP_DEV_USERNAME && this.password == process.env.VUE_APP_DEV_PASSWORD) {
        //this.$router.app.$root.login = false;
        //this.show_dev = true;
        const user_info = {
          username: this.username,
          password: this.password
        }
        Session.user = user_info;
        this.$router.push("/dev");//.catch(err => {});
        return true
      }
    //this.show_development = true;
    return false;
    },
  },
  components: {
    //development: development,
  },
  mounted: function () {
    console.log(process.env);
  }
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
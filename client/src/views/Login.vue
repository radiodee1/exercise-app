<template>
  <!-- start login-->
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

    <div v-show="show_development">
      <development></development>
    </div>
  </section>

  <!-- end login -->
</template>

<script>
import development from "../components/Development.vue";
let axios = require("axios").default;

export default {
  name: "login",
  data() {
    return {
      show_development: false,
    };
  },
  props: {
    newsfeed: Boolean,
    login: Boolean,
    focusNews: Function,
    focusReset: Function,
    //classOption: Function
    backend_port: Number,
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    submit: function () {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      //const password2 = document.getElementById("password2").value;

      this.login_dev_check();
      if (this.show_development) {
        return;
      }
      const port = this.backend_port;
      const vm = this;
      let success = false;
      axios
        .get("http://localhost:" + port + "/users")
        .then(function (response_raw) {
          // handle success
          //console.log(response);
          let response = JSON.parse(response_raw.data);
          for (let i = 0; i < response.length; i++) {
            let username_saved = response[i].username;
            let password_saved = response[i].password;
            if (username_saved === null || username_saved === undefined) {
              username_saved = "";
            }
            if (password_saved === null || password_saved === undefined) {
              password_saved = "";
            }
            //console.log(username_saved + " " + username);
            if (
              username_saved.trim() === username.trim() &&
              password_saved.trim() === password.trim()
            ) {
              success = true;
              vm.$root.user.firstname = response[i].firstname;
              vm.$root.user.lastname = response[i].lastname;
              vm.$root.user.address = response[i].address;
              vm.$root.user.city = response[i].city;
              vm.$root.user.state = response[i].state;
              vm.$root.user.zip = response[i].zip;

              vm.$root.user.height_inches = response[i].height_inches;
              vm.$root.user.weight_lbs = response[i].weight_lbs;

              vm.$root.user.email = response[i].email;
              vm.$root.user.username = username;
              vm.$root.user.password = password;
              vm.$root.user.id = response[i].id;
            }
          }
          //console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          //focusNewsx();
          if(success) {
            console.log(vm.$root.user.id);
            vm.focusNews();
          }
        });
      //this.focusNews();
    },
    login_dev_check: function () {
      //make hardcoded develpment enabled
      this.show_development = false;
    },
  },
  components: {
    development: development,
  },
};
</script>
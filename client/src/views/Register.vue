<template>
  <!-- start register -->
  <section class="section gray" v-if="register" id="register">
    <div class="columns">
      <!-- firstname -->

      <div class="field column">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-medium"
            type="text"
            placeholder="Firstnname:"
            id="firstname"
            v-model="firstname"
          />
          <span class="icon is-medium is-left">
            <i class="fas"></i>
          </span>
          <span class="icon is-medium is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <!-- lastname -->
      <div class="field column">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-medium"
            type="text"
            placeholder="Lastname"
            id="lastname"
            v-model="lastname"
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

    <div class="columns">
      <!-- address -->
      <div class="field column">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-medium"
            type="text"
            placeholder="Address"
            id="address"
            v-model="address"
          />
          <span class="icon is-medium is-left">
            <i class="fas"></i>
          </span>
          <span class="icon is-medium is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      <!-- city -->
      <div class="field column">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-medium"
            type="text"
            placeholder="City"
            id="city"
            v-model="city"
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
    <div class="columns">
      <!-- state -->
      <div class="field column">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-medium"
            type="text"
            placeholder="State"
            id="state"
            v-model="state"
          />
          <span class="icon is-medium is-left">
            <i class="fas"></i>
          </span>
          <span class="icon is-medium is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      <!-- zip -->
      <div class="field column">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-medium"
            type="text"
            placeholder="Zip Code"
            id="zip"
            v-model="zip"
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

    <div class="columns">
      <!-- height -->
      <div class="field column">
        <div class="columns">
          <div class="column">
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-medium"
                type="text"
                placeholder="Height Feet"
                id="feet"
                v-model="feet"
              />
              <span class="icon is-medium is-left">
                <i class="fas"></i>
              </span>
              <span class="icon is-medium is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-medium"
                type="text"
                placeholder="Height Inches"
                id="inches"
                v-model="inches"
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
      </div>
      <!-- weight -->
      <div class="field column">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-medium"
            type="text"
            placeholder="Weight in LBS"
            id="lbs"
            v-model="lbs"
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

    <!-- email -->
    <div class="columns">
      <div class="column">
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-medium"
              type="email"
              placeholder="email"
              id="email"
              v-model="email"
            />
            <span class="icon is-medium is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-medium is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

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

    <div class="columns">
      <div class="field column is-half">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-medium"
            type="password"
            placeholder="Password again"
            id="password2"
            v-model="password2"
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
      <input type="checkbox" id="remember-register" />
      Remember me
    </label>
    <div class="red" v-if="message_password_1">
      Passwords must match and not be empty.
    </div>
    <div class="red" v-if="message_username_1">That user name is taken.</div>
  </section>
  <!-- end register -->
</template>

<script>
//import { focusNews } from '../js/exercise';
//let axios = require("axios").default;
import {Session} from "../models/Session.js";
import {GetUserRegister, PostUserRegister} from "../models/users.js";

export default {
  name: "register",
  data() {
    return {
      message_password_1: false,
      message_username_1: false,
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      feet: "",
      inches: "",
      lbs: "",
      email: "",
      username: "",
      password: "",
      password2: ""

    };
  },
  props: {
    banner: Boolean,
    newsfeed: Boolean,
    register: Boolean,
    focusNews: Function,
    focusReset: Function,
    //classOption: Function
    backend_port: Number,
    backend_url: String
  },

  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    //focusNewsx: function () { this.focusNews();},
    submit: async function () {
      //const vm = this;
      //let success = false;

      this.message_password_1 = false;
      this.message_username_1 = false;
      const firstname = this.firstname; 
      //console.log(firstname);
      const lastname = this.lastname; 
      const address = this.address; 
      const city = this.city; 
      const state = this.state; 
      const zip = this.zip;
      const email = this.email;

      const feet = this.feet;
      const inches = this.inches;
      const lbs = this.lbs;

      const username = this.username;
      const password = this.password;
      const password2 = this.password2;

      //const port = this.backend_port;
      //const url =  this.backend_url;
      if (
        password != password2 ||
        password2.length == 0 ||
        password.length == 0
      ) {
        //show an error message about the password.
        this.message_password_1 = true;
        return;
      }
      const id = 0;

      if (username_taken) {
        this.message_username_1 = true;
        return;
      }
      this.$root.user.firstname = firstname;
      this.$root.user.lastname = lastname;
      this.$root.user.address = address;
      this.$root.user.city = city;
      this.$root.user.state = state;
      this.$root.user.zip = zip;

      let num = +feet * 12 + +inches;

      if (typeof num !== "number") {
        num = 0;
      }
      this.$root.user.height_inches = num;
      this.$root.user.weight_lbs = lbs;

      this.$root.user.email = email;
      this.$root.user.username = username;
      this.$root.user.password = password; // <---
      this.$root.user.id = id;

      //var focusNewsx = this.focusNews
      //check if this (username) already exists!!
      let username_taken = false;

      let username_ok = await GetUserRegister(this.$root.user);

      if (username_ok) {
            console.log("post ");
            let record = {};
            record.firstname = firstname;
            record.lastname = lastname;
            record.address = address;
            record.city = city;
            record.state = state;
            record.zip = zip;

            let num = +feet * 12 + +inches;

            if (typeof num !== "number") {
              num = 0;
            }
            record.height_inches = num;
            record.weight_lbs = lbs;

            record.email = email;
            record.username = username;
            record.password = password;

            Session.user = record;
            
            const record_out = await PostUserRegister(record);
            //console.log(record_out);
            //console.log("rrr");

            Session.user.id = record_out.id;
            this.$root.user.id = record_out.id;
            //console.log(Session.user);

            //Session.user = record;
      }
      else {
        username_taken = true;
        this.message_username_1 = true;
      }
      
      
      if(! username_taken) {
        this.focusNews();
      }
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
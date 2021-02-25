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
          <input class="input is-medium" type="text" placeholder="Lastname" id="lastname"/>
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
          <input class="input is-medium" type="text" placeholder="Address" id="address"/>
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
          <input class="input is-medium" type="text" placeholder="City" id="city" />
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
          <input class="input is-medium" type="text" placeholder="State" id="state" />
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
          <input class="input is-medium" type="text" placeholder="Zip Code" id="zip" />
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
            <input class="input is-medium" type="email" placeholder="email" id="email"/>
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
          <input class="input is-medium" type="text" placeholder="Username" id="username"/>
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

    <div class="columns">
      <div class="field column is-half">
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-medium"
            type="password"
            placeholder="Password again"
            id="password2"
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
      <input type="checkbox" id="remember-register"/>
      Remember me
    </label>
    <div class="red" v-if="message_password_1">
      Passwords must match and not be empty.
    </div>
    <div class="red" v-if="message_username_1">
      That user name is not good.
    </div>

  </section>
  <!-- end register -->
</template>

<script>


export default {

  name: "register",
  data() {
    return {
    message_password_1: false,
    message_username_1: false
    };
  },
  props: {
    banner: Boolean,
    newsfeed: Boolean,
    register: Boolean,
    focusNews: Function,
    focusReset: Function,
    //classOption: Function
  },

  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    submit: function () {
      this.message_password_1 = false;
      this.message_username_1 = false;
      const firstname = document.getElementById("firstname").value;
      //console.log(firstname);
      const lastname = document.getElementById("lastname").value;
      const address = document.getElementById("address").value;
      const city = document.getElementById("city").value;
      const state = document.getElementById("state").value;
      const zip = document.getElementById("zip").value;
      const email = document.getElementById("email").value;

      const feet = document.getElementById("feet").value;
      const inches = document.getElementById("inches").value;
      const lbs = document.getElementById("lbs").value;

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const password2 = document.getElementById("password2").value;

      if (password != password2 || password2.length == 0 || password.length == 0) {
        //show an error message about the password.
        this.message_password_1 = true;
        return;
      }
      //check if this (username) already exists!!
      const id = 0;

      const username_taken = false;
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

      let num =  (+feet * 12) + (+inches);
      
      if(typeof num !== "number") {
        num = 0;
      }
      this.$root.user.height_inches = num;
      this.$root.user.weight_lbs = lbs;

      this.$root.user.email = email;
      this.$root.user.username = username;
      this.$root.user.password = password;
      this.$root.user.id = id;
      //save to db!!

      this.focusNews();
    }
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
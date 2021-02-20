<template>
  <!-- start login-->
  <section class="section gray" v-if="login" id="login">
    <div class="columns">
      <!-- username -->
      <div class="field column">
        <div class="control has-icons-left has-icons-right">
          <input class="input is-medium" type="text" placeholder="Username" />
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
          <a class="button is-primary" @click="focusNews()"> Submit </a>
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

  <!-- end login -->
</template>

<script>

export default {
  name: "login",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    login: Boolean,
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
  },
};
</script>
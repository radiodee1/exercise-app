<template>
  <div>
    <div v-show="true" class="box">
      <development
        :backend_port="backend_port"
        :backend_url="backend_url"
      ></development>
      <a class="button is-primary" @click="exit()"> Exit </a>
    </div>
  </div>
</template>

<script>
import development from "../components/Development.vue";

export default {
  name: "dev",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    backend_port: Number,
    backend_url: String,
    //classOption: Function
    copyVals: Function
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    exit: function () {
      this.$router.app.$root.newsfeed = false;
      this.$router.app.$root.focusLogin();
      this.copyVals();
      this.$router.push("/"); //.catch(err => {});
    },
  },
  components: {
    //devprofiles: devprofiles,
    development: development,
  },
  
};
</script>

<style>
</style>
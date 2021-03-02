<template>
  <div class="gray devpage">
    <!-- hr -->
    <strong>Devel Options:</strong>
    <p>Here we need html and sql that shows an explorer for looking at user data.</p>
    <div class="explorer box">
      <devprofiles :backend_port="backend_port"></devprofiles>
    </div>
    <p>Also we want to do some calculations on site usage.</p>
    <div class="explorer box">
      <devdata :backend_port="backend_port"></devdata>
    </div>
  </div>
</template>

<script>

import devprofiles from "./DevProfiles.vue";
import devdata from "./DevData.vue";

export default {
  name: "development",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    backend_port: Number
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
  components: {
    devprofiles: devprofiles,
    devdata: devdata
  }
};
</script>

<style scoped>
.explorer {
  height: 750px;
  width: 750px;
  border: 1px solid black;
  
}
.devpage {
  padding: 30px;
}
</style>
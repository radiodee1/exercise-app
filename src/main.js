import Vue from "vue";
import App from "./vue/Hello";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
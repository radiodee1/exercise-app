<template>
  <div id="visibility" >
    {{ message }}
    <bannercomponent></bannercomponent>
    <feedcontainer></feedcontainer>
  </div>
</template>

<script>
import bannercomponent from "./Banner.vue";
import feedcontainer from "./FeedContainer.vue";

export default {
  data() {
    return {
      message: 'Hello World!',
      l: [0,1,2,3]
    };
  },
  components: {
    bannercomponent,
    feedcontainer
  }
};
</script>

<style>
#app {
  font-size: 58px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>
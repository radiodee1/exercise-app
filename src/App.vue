<template>
  <div id="visibility" >
    
    <bannercomponent></bannercomponent>
  </div>
</template>

<script>
import bannercomponent from "./Banner.vue";


export default {
  data() {
    return {
      message: 'Hello World!',
      l: [0,1,2,3]
    };
  },
  components: {
    bannercomponent
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
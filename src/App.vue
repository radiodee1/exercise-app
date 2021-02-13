<template>
  <div id="app" class="box">
    <div v-for="i in l" :key="i" :id="'key-'+ i">
    {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World!',
      l: [0,1,2,3]
    };
  },
  components: {

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
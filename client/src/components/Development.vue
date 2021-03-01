<template>
  <div>
    <hr>
    <span>Devel Options:</span>
    <p>Here we need sql that shows an explorer for looking at user data.</p>
    <p>Also we want to do some calculations on site usage.</p>
  </div>
</template>

<script>

export default {
  name: "development",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
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
<template>
  <div>
    <hr>
    <span>Devel Options</span>
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
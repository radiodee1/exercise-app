<template>
  <div v-show="true" class="box">
      <development :backend_port="backend_port" :backend_url="backend_url" ></development>
    </div>
</template>

<script>
export default {
name: "dev",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    backend_port: Number,
    backend_url: String
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
}
</script>

<style>

</style>
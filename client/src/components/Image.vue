<template>
  <b-field class="file is-dark is-small " :class="{ 'has-name': !!file }">
    <b-upload v-model="file" class="file-label">
      <span class="file-cta">
        <b-icon class="file-icon" icon="upload"></b-icon>
        <span class="file-label">Click to upload</span>
      </span>
      <span class="file-name" v-if="file">
        <!-- {{ file.name }} -->
      </span>
    </b-upload>
  </b-field>
</template>

<script>
export default {
  name: "imageview",
  data() {
    return {
      file: null,
    };
  },
  mounted() {
    //console.log(this.file);
  },
  watch: {
    file: function (o, n) {
      var reader = new FileReader();
      reader.onload = (e) => this.$emit("load", e.target.result);
      reader.readAsDataURL(o); // This line throws the error.
      console.log(n);
      //alert();
    },
  },
};
</script>
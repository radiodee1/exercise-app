<template>
  <div class="field is-horizontal">
    <div class="images">
      <img
        v-for="image in images"
        :key="image.id"
        :src="image.src"
        @click="img_click(image)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "imageviewFB",
  data() {
    return {
      file: null,
      images: [],
    };
  },
  mounted() {
    /*global FB*/
    FB.api("me/photos?fields=images", (response) => {
      console.log({ response });
      this.images = response.data.map((x) => ({
        id: x.id,
        src: x.images[0].source,
      }));
    });
  },
  watch: {
    /*
    file: function (o, n) {
      var reader = new FileReader();
      reader.onload = (e) => this.$emit("load", e.target.result);
      reader.readAsDataURL(o); // This line throws the error.
      console.log(n);
      //alert();
    },
    */
  },
  methods: {
        img_click(image){
            //this.newPost.src = image.src;
            //console.log(this.newPost)
            this.file = image.src;
            this.$emit("load", this.file);
        }
    }
};
</script>

<style>
    .images {
        display: block;
    }
    .images img {
        box-sizing: border-box;
        width: 75px;
        float: left;
        padding: 3px;
        border: 1px solid black;
        margin: 5px;
        border-radius: 3px;
        cursor: pointer;
    }
</style>
<template>
  <div class="field is-horizontal">
    <div class="window">
      <div class="images" :style="{ width: width + 'px' }">
        <img
          v-for="image in images"
          :key="image.id"
          :src="image.src"
          @click="img_click(image)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {Session} from "../models/Session.js";

export default {
  name: "imageviewFB",
  data() {
    return {
      file: null,
      images: [],
      width: 0,
    };
  },
  mounted() {
    if (Session.isFBLogin) {
      /*global FB*/
      FB.api("me/photos?fields=images", (response) => {
        console.log({ response });
        this.images = response.data.map((x) => ({
          id: x.id,
          src: x.images[0].source,
        }));
        this.width = 90 * this.images.length;
        console.log(this.width);
      });
    }
  },
  watch: {},
  methods: {
    img_click(image) {
      //this.newPost.src = image.src;
      //console.log(this.newPost)
      this.file = image.src;
      this.$emit("load", this.file);
    },
  },
};
</script>

<style scoped>
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

.window {
  overflow-x: scroll;
}
</style>
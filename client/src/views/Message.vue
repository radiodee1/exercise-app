<template>
  <!-- start inputform for message -->
  <div class="visi">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half">
        <article class="message box" v-if="form_message">
          <div class="message-header">
            <p>Public Message</p>
            <button
              class="delete"
              aria-label="delete"
              @click="cancel()"
            ></button>
          </div>
          <div class="message-body gray">
            <textarea
              id="message_txt"
              class="textarea"
              placeholder="What's on your mind?!"
              rows="10"
              v-model="msg"
            ></textarea>
            <div class="control">
              <nav class="level">
                <div class="level-left">
                  <button
                    class="button is-dark"
                    @click="submit()"
                  >
                    Submit
                  </button>

                  <!-- div class="file">
                    <label class="file-label">
                      <input
                        class="file-input is-primary"
                        type="file"
                        name="resume"
                        id="pic-button"
                        ref="picButton"
                        @change="showPicture"
                      />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label"> Choose a picture </span>
                      </span>
                    </label>
                  </div -->

            <imageview @load="loading" />

                </div>
              </nav>
            </div>

            <figure class="image " v-show="show_picture">
              <img id="myImg1" :src="file"  />

            </figure>
          </div>
           <button class="button" @click.prevent="cancel()">Cancel</button>

        </article>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
//import Image from '../components/Image.vue';
import imageview from '../components/Image.vue';
export default {
  components: {  
    imageview : imageview
  },
  name: "message",
  data: () => ({
    show_picture: false,
    file : null,
    msg: ""
  }),
  props: {
    newsfeed: Boolean,
    focusFormMessage: Function,
    form_message: Boolean,
    useFormSubmitMessage: Function,
    focusNews: Function,
    //_preview_image_msg: Function,
    feed_divs: Array,
    tree: Object,
  },
  mounted() {
    //console.log("message");
    //console.log(this.feed_divs);
    //document.getElementById('myImg1').src = null;
  },

  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    showPicture: function () {
      this.show_picture = true;
      //console.log(e.inputType + " type");
      //this._preview_image_msg(e);
    },
    submit: function () {
      this.show_picture = false;
      this.useFormSubmitMessage(this.msg, this.file);
    },
    cancel: function () {
      this.show_picture = false;
      this.$router.go(-1);

      this.focusNews();
    },
    loading: function(f) {
      this.file = f;
      this.showPicture();
      //console.log('file ' + f);
    }
    
  },
};
</script>
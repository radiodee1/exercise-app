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
            ></textarea>
            <div class="control">
              <nav class="level">
                <div class="level-left">
                  <button
                    class="button is-primary"
                    @click="submit()"
                  >
                    Submit
                  </button>

                  <div class="file">
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
                  </div>
                </div>
              </nav>
            </div>
            <figure class="image is-4by3" v-if="show_picture">
              <img id="myImg1" src="../assets/app.png" class="invis" />
              <!-- img src="./pic/app.png" alt="Placeholder image" -->
            </figure>
          </div>
        </article>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  data: () => ({
    show_picture: false,
  }),
  props: {
    newsfeed: Boolean,
    focusFormMessage: Function,
    form_message: Boolean,
    useFormSubmitMessage: Function,
    focusNews: Function,
    _preview_image_msg: Function,
    feed_divs: Array,
    tree: Object,
  },
  mounted() {
    //console.log("message");
    //console.log(this.feed_divs);
  },

  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    showPicture: function (e) {
      this.show_picture = true;
      this._preview_image_msg(e);
    },
    submit: function () {
      this.show_picture = false;
      this.useFormSubmitMessage();
    },
    cancel: function () {
      this.show_picture = false;
      this.focusNews();
    },
  },
};
</script>
<template>
  <!-- start inputform for message -->
  <div class="visi">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half" v-if="form_workout">
        <div class="select">
          <select>
            <option @click="searchDay(0)">Select Today</option>
            <option @click="searchDay(-1)">Select Yesterday</option>
            <option @click="searchDay(-2)">Select Two Days Ago</option>
            <option @click="searchDay(-99)">All Time</option>
          </select>
        </div>
        <div class="control box">
          <label class="radio">
            <input type="radio" name="foobar" @click="checkType('share')" />
            Share
          </label>
          <label class="radio">
            <input
              type="radio"
              name="foobar"
              checked
              @click="checkType('review')"
            />
            Review
          </label>
        </div>
        <button class="button" @click="search()">Search</button>
        <!-- -->
        <div id="share-div" v-if="share_div">
          <article class="message box">
            <div class="message-header">
              <p>Share Workout</p>
              <button
                class="delete"
                aria-label="delete"
                @click="cancel()"
              ></button>
            </div>
            <div class="message-body gray">
              <ul>
                <li v-for="i in search_list" :key="i">
                  <pre>{{ i }}</pre>
                  <br />
                </li>
              </ul>
              <!-- textarea
                id="message_txt"
                class="textarea"
                placeholder="What's on your mind?!"
                rows="10"
              ></textarea -->
              <div class="control">
                <nav class="level">
                  <div class="level-left">
                    <button class="button is-primary" @click="submit()">
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
              <figure class="image is-4by3" v-show="show_picture">
                <img id="myImg3" src="//:0" class="invis" />
                <!-- img src="./pic/app.png" alt="Placeholder image" -->
              </figure>
            </div>
          </article>

          <!-- -->
        </div>
        <div id="review-div" v-if="review_div">
          <ul>
            <li v-for="i in search_list" :key="i">
              <pre>{{ i }}</pre>
              <br />
            </li>
          </ul>
        </div>
        <button class="button" @click="cancel()">Done</button>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "workout",
  data: () => ({
    search_day: 0,
    share_div: false,
    review_div: true,
    show_picture: false,
    search_list: [],
  }),
  props: {
    newsfeed: Boolean,
    focusFormMessage: Function,
    form_workout: Boolean,
    useFormSubmitWorkout: Function,
    focusNews: Function,
    _preview_image_wrk: Function,
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
    searchDay: function (day) {
      this.search_day = day;
    },
    search: function () {
      this.search_list = this.makeList();
    },
    checkType: function (check) {
      this.search_list = [];
      if (check == "share") {
        this.share_div = true;
        this.review_div = false;
      } else if (check == "review") {
        this.share_div = false;
        this.review_div = true;
      }
    },
    makeList: function () {
      return ["part 1", "part 2", "part 3"];
    },
    submit: function () {
      // submit
      let l = "";
      for (let x = 0; x < this.search_list.length; x++) {
        l = l + this.search_list[x];
        if (x < this.search_list.length - 1) {
          l = l + "\t";
        }
      }
      //console.log(l);
      this.checkType("review");
      this.useFormSubmitWorkout(l);
      this.show_picture = false;
      this.focusNews();
    },
    showPicture: function (e) {
      this.show_picture = true;
      this._preview_image_wrk(e);
    },
    cancel: function () {
      this.checkType("review");
      this.show_picture = false;
      this.focusNews();
    },
  },
};
</script>
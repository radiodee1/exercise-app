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
              <table>
                <tr v-for="(i, id) in items" :key="i.id">
                  <td>
                    <button
                      class="button is-primary is-small"
                      v-if="chosen_list[id].chosen === false"
                      @click="use(id)"
                    >
                      Use
                    </button>
                    <button class="button is-primary is-small" v-else>
                      Selected
                    </button>
                  </td>
                  <td>
                    <pre>{{ i.message }}</pre>
                    <br />
                  </td>
                </tr>
              </table>

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
              <figure class="image" v-show="show_picture">
                <img id="myImg3" src="//:0" class="invis" />
                <!-- img src="./pic/app.png" alt="Placeholder image" -->
              </figure>
            </div>
          </article>

          <!-- -->
        </div>
        <div id="review-div" v-if="review_div">
          <table>
            <tr v-for="(i, id) in items" :key="i.id">
              <td>
                <button
                  class="button is-primary is-small"
                  v-if="chosen_list[id].chosen === false"
                  @click="use(id)"
                >
                  Use
                </button>
                <button class="button is-primary is-small" v-else>
                  Selected
                </button>
              </td>
              <td>
                <pre>{{ i.message }}</pre>
                <br />
              </td>
            </tr>
          </table>
        </div>
        <button class="button" @click="cancel()">Done</button>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
let axios = require("axios").default;

export default {
  name: "workout",
  data: () => ({
    search_day: 0,
    share_div: false,
    review_div: true,
    show_picture: false,
    //search_list: [],
    items: [],
    submit_list: [],
    chosen_list: [],
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
    backend_port: Number,
    backend_url: String,
  },
  mounted() {
    //console.log("message");
    //console.log(this.form_workout+" here w ");
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
      this.getItems();
      //this.search_list = this.makeList();
    },
    checkType: function (check) {
      this.items = [];
      if (check == "share") {
        this.share_div = true;
        this.review_div = false;
      } else if (check == "review") {
        this.share_div = false;
        this.review_div = true;
      }
    },
    use: function (id) {
      //this.submit_list.push({
      //  message: this.items[id].message,
      //  date: null,
      //});
      this.chosen_list[id].chosen = true;
    },
    getItems: function () {
      const port = this.backend_port;
      const url = this.backend_url;
      const id = this.$root.user.id;
      const vm = this;
      //let items = [];
      if (this.items.length > 0) {
        return;
      }
      const f_obj = {
        params: {
          id: id,
        },
      };

      axios
        .get(url + port + "/workout", f_obj)
        .then(function (response) {
          // handle success

          console.log(response.data);
          response = JSON.parse(response.data);

          vm.items = [...response];
          vm.submit_list = [];
          vm.chosen_list = [];
          for (let i = 0; i < vm.items.length; i++) {
            vm.chosen_list.push({
              chosen: false,
            });
          }
          //vm.items = [...response];
          //vm.submit_list = [];
          //vm.tree.feed = [... response];
          //items = [... response];
          console.log(vm.items.length + " len");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
      //return items;
    },

    submit: function () {
      // submit
      let l = "";
      for (let x = 0; x < this.chosen_list.length; x++) {
        if (this.chosen_list[x].chosen === true) {
          l = l + this.items[x].message + "\t";
        }
        //if (x < this.submit_list.length - 1) {
        //  l = l + "\t";
        //}
      }
      console.log(l.length + " len");
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

<style scoped>
button.green {
  height: 100%;
}
</style>
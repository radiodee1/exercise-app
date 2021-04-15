<template>
  <!-- start inputform for message -->
  <div class="visi">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-half" v-if="form_workout">
        <div
          class="dropdown"
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
        >
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>{{ searchDays }}</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item" @click="searchDay(-1)">
                Today
              </a>
              <a class="dropdown-item" @click="searchDay(-2)"> Yesterday </a>
              <a href="#" class="dropdown-item" @click="searchDay(-3)">
                Two Days Ago
              </a>

              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item" @click="searchDay(-90)">
                Three Months
              </a>
            </div>
          </div>
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
                    <button class="button is-small" v-else @click="not(id)">
                      Not
                    </button>
                  </td>
                  <td>
                    <pre>{{ i.message }}</pre>
                    
                    <p class="small">{{ i.date_now }}</p>
                    <br/>
                  </td>
                </tr>
              </table>

              <div class="control">
                <nav class="level">
                  <div class="level-left">
                    <button class="button is-dark" @click="submit()">
                      Submit
                    </button>

                    <imageview @load="loading" />
                  </div>
                </nav>
              </div>

              <figure class="image" v-show="show_picture">
                <img id="myImg3" :src="file" />
              </figure>
            </div>
          </article>

          <!-- -->
        </div>
        <div id="review-div" v-if="review_div">
          <table>
            <tr v-for="(i, id) in items" :key="id">
              <td></td>
              <td>
                <pre>{{ i.message }}</pre>
                <p class="small">{{ i.date_now }}</p>
                <br />
              </td>
            </tr>
          </table>
        </div>
        <button class="button" @click="cancel()">Cancel</button>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import imageview from "../components/Image.vue";
import {GetWorkoutList} from "../models/workout.js";
//let axios = require("axios").default;

export default {
  name: "workout",
  components: {
    imageview: imageview,
  },
  data: () => ({
    isActive: false,
    searchDays: "Search Days",

    search_day: -1,
    share_div: false,
    review_div: true,
    show_picture: false,
    //search_list: [],
    items: [],
    submit_list: [],
    chosen_list: [],

    file: null,
  }),
  props: {
    newsfeed: Boolean,
    focusFormMessage: Function,
    form_workout: Boolean,
    useFormSubmitWorkout: Function,
    focusNews: Function,
    //_preview_image_wrk: Function,
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
      if (+day !== this.search_day) {
        this.items = [];
        this.chosen_list = [];
      }
      //this.isActive = false;
      this.search_day = +day;
      console.log(this.search_day + " search day");
      this.searchDays = "Search " + this.search_day * -1 + " Days";
    },
    search: function () {
      this.getItems();
      //this.search_list = this.makeList();
    },
    checkType: function (check) {
      this.items = [];
      this.chosen_list = [];
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
    not: function (id) {
      this.chosen_list[id].chosen = false;
    },
    getItems: async function () {
      //const port = this.backend_port;
      //const url = this.backend_url;
      const id = this.$root.user.id;
      //const vm = this;
      //let items = [];
      if (this.items.length > 0) {
        return;
      }
      this.items = await GetWorkoutList(id, this.search_day);
      this.submit_list = [];
      this.chosen_list = [];
      for (let i = 0; i < this.items.length; i++) {
        this.chosen_list.push({
          chosen: false,
        });
      }
      
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
      //console.log(l.length + " len");
      this.checkType("review");
      this.useFormSubmitWorkout(l, this.file);
      this.show_picture = false;
      this.focusNews();
    },
    showPicture: function () {
      this.show_picture = true;
      //this._preview_image_wrk(e);
    },
    cancel: function () {
      this.checkType("review");
      this.show_picture = false;
      this.focusNews();
    },
    loading: function (f) {
      this.file = f;
      this.showPicture();
      //console.log('file ' + f);
    },
  },
};
</script>

<style scoped>
button.green {
  height: 100%;
}

.small {
  font-size: small;
}
</style>
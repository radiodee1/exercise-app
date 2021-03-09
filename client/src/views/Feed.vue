<template>
  <div id="feedcontainer">
    <!-- start news feed -->
    <section class="section" v-bind:class="classOption(newsfeed)">
      <div class="columns">
        <div class="column">
          <!-- blank column-->
          <!-- end blank column -->
        </div>

        <div class="column is-half">
          <!-- div @submitpost="addNewPost"></div -->
          <!-- vue start -->

          <!-- div id="components">

        </div -->
          <div id="listing">
            <ul>
              <!-- template here ? -->
              <li v-for="(item, i) in items" :key="i">
                <inner
                  :i="i"
                  :makeId="makeId"
                  :feed_divs="feed_divs"
                  :item="item"
                  @delete="deletePost(i)"
                >
                </inner>
              </li>
            </ul>
          </div>
          <!-- vue end -->
        </div>
        <div class="column"></div>
      </div>
    </section>
    <!-- end news feed -->
  </div>
</template>

<script>
import inner from "../components/FeedInner.vue";
import { feed_full_length } from "../js/exercise";
import Session from '../models/Session';
//import Session from '../models/Session';
let axios = require("axios").default;

export default {
  name: "feedview",

  data() {
    return {
      items: [],
    };
  },
  props: {
    newsfeed: Boolean,
    makeId: Function,
    //tree: Array,
    feed_divs: Array,
    tree: Object,
    fillPictures: Function,
    //feed_full_length: Number,
    backend_port: Number,
    backend_url: String,
    //classOption: Function
  },
  components: {
    inner: inner,
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    deletePost(i) {
      //console.log(this.items[i]);
      if (this.items[i].from_user_id !== Session.user.id ) {
        return;
      }
      this.items.splice(i,1);
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
        .get(url + port + "/feed", f_obj)
        .then(function (response) {
          // handle success

          //console.log(response.data);
          response = JSON.parse(response.data);

          vm.items = [...response];
          //vm.tree.feed = [... response];

          console.log(vm.items.length + " len");
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          vm.items = vm.tree.feed;
        })
        .then(function () {
          // always executed
          
        });
      //return items;
    },
    //addNewPost: function(val) {
    //console.log("pre submitpost");
    //this.items.unshift(val);
    //}
  },
  mounted: function () {
    //this.fillPictures();
    console.log(feed_full_length);
    this.getItems();
  },
  created: function () {
    //this.addNewPost();
    //this.$on('submitpost', function (val) {
    //  this.items.unshift(val);
    //});
    this.getItems();
  },
  computed: {
    //itemsx: function () {
    //  return this.getItems(); //  this.tree.feed;
      //return this.feed_divs;
    //},

    //tree.feed,
  },
};
</script>
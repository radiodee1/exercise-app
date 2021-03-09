<template>
  <div id="feedcontainer">
    <!-- start news feed -->
    <section class="section" v-bind:class="classOption(newsfeed)">
      <div class="columns">
        <div class="column">
          <!-- blank column-->
          <feedselector
            @feed="doFeed()"
            @posts="doPosts()"
            @friends="doFriends()"
          ></feedselector>

          <!-- end blank column -->
        </div>

        <div class="column is-half">
          <!-- div @submitpost="addNewPost"></div -->
          <!-- vue start -->

          <!-- div id="components">

        </div -->
          <div class="" v-show="sortFeed">
            <div id="listing" class="">
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
import feedselector from "../components/FeedSelector.vue";

import { feed_full_length } from "../js/exercise";
import Session from "../models/Session";
//import Session from '../models/Session';
let axios = require("axios").default;

export default {
  name: "feedview",

  data() {
    return {
      items: [],

      feedItems: [],
      postItems: [],
      friendItems: [],

      sortFeed: true,
      sortPosts: false,
      sortFriends: false,
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
    feedselector: feedselector,
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    doFeed() {
      this.sortFeed = true;
      this.sortPosts = false;
      this.sortFriends = false;
      this.getFeedItems();
      this.items = this.feedItems;
      console.log('feed');
    },
    doPosts() {
      this.sortFeed = false;
      this.sortPosts = true;
      this.sortFriends = false;
      this.getPostItems();
      this.items = this.postItems;
      console.log('posts');
    },
    doFriends() {
      this.sortFeed = false;
      this.sortPosts = false;
      this.sortFriends = true;
      this.getFriendItems();
      this.items = this.friendItems;
      console.log('friends')
    },

    deletePost(i) {
      //console.log(this.items[i]);
      if (this.items[i].from_user_id !== Session.user.id) {
        return;
      }
      this.items.splice(i, 1);
    },
    getFeedItems: function () {
      // return items that are 
      // grouped by your friend connections
      const port = this.backend_port;
      const url = this.backend_url;
      const id = this.$root.user.id;
      const vm = this;
      
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

          vm.feedItems = [...response];
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
    getPostItems: function () {
      // return items that you have authored

      const port = this.backend_port;
      const url = this.backend_url;
      const id = this.$root.user.id;
      const vm = this;
      
      if (this.items.length > 0) {
        return;
      }
      const f_obj = {
        params: {
          id: id,
        },
      };

      axios
        .get(url + port + "/feedme", f_obj)
        .then(function (response) {
          // handle success

          //console.log(response.data);
          response = JSON.parse(response.data);

          vm.postItems = [...response];
          //vm.tree.feed = [... response];

          console.log(vm.postItems.length + " len");
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
    getFriendItems: function () {
      // return items from others that are 
      // your friend and confirmed as friend

      const port = this.backend_port;
      const url = this.backend_url;
      const id = this.$root.user.id;
      const vm = this;
      
      if (this.items.length > 0) {
        return;
      }
      const f_obj = {
        params: {
          id: id,
        },
      };

      axios
        .get(url + port + "/feedfriend", f_obj)
        .then(function (response) {
          // handle success

          //console.log(response.data);
          response = JSON.parse(response.data);

          vm.friendItems = [...response];
          //vm.tree.feed = [... response];

          console.log(vm.friendItems.length + " len");
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
    }
  },
  mounted: function () {
    //this.fillPictures();
    console.log(feed_full_length);
    this.getFeedItems();

    
  },
  created: function () {
    //this.addNewPost();
    //this.$on('submitpost', function (val) {
    //  this.items.unshift(val);
    //});
    this.getFeedItems();
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

<style scoped>
.scrollable {
  overflow-y: scroll;
  height: 1250px;
}
</style>
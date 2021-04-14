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
            @selected="setSelected"
          ></feedselector>

          <!-- end blank column -->
        </div>

        <div class="column is-half">
          <!-- vue start -->
           <p v-if="messageEmpty"> You have no friends so there is no Feed. Possibly try "My Posts"</p>
          <div class="">
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

//import { feed_full_length } from "../js/ExerciseApp.js";
//import Session from "../models/Session";
import {DeletePost, GetFriendsFeed, GetMyFeed, GetSingleFriendsFeed, SetItems} from "../models/feed.js"
//import Session from '../models/Session';
//let axios = require("axios").default;

export default {
  name: "feedview",

  data() {
    return {
      items: [],

      sortFeed: true,
      sortPosts: false,
      sortFriends: false,

      messageEmpty: false
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
  watch: {
    items: function(newItems, oldItems) {
      
      if (newItems == null || oldItems == null) {
        return;
      }
      //console.log('items watch ' + newItems.length + " " + oldItems.length);
      //this.$forceUpdate();
    }
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
      //this.items = this.feedItems;
      //console.log('feed');
    },
    doPosts() {
      this.sortFeed = false;
      this.sortPosts = true;
      this.sortFriends = false;
      //this.items = [];
      this.getPostItems();
      //this.items = this.postItems;
      this.messageEmpty = false;
      //console.log('posts');
    },
    doFriends() {
      this.sortFeed = false;
      this.sortPosts = false;
      this.sortFriends = true;
      //this.getFriendItems(0);
      //this.items = this.friendItems;
      this.messageEmpty = false;
      //console.log('friends')
    },

    deletePost: async function (i) {
      
      SetItems(this.items);
      this.items = await DeletePost(i, this.$root.user.id);

      
    },
    getFeedItems: async function () {
      // return items that are 
      // grouped by your friend connections
      
      const id = this.$root.user.id;
      if(typeof id !== "number") {
        return;
      }
      this.items = await GetFriendsFeed(id);
      //this.items =  GetItems();
      if(this.items.length == 0) {
        //console.log("show message");
        this.messageEmpty = true;
      }
      
    },
    getPostItems: async function () {
      // return items that you have authored

      const id = this.$root.user.id;
      if(typeof id !== "number") {
        //console.log(this.$root.user);
        return;
      }
      this.items = await GetMyFeed(id);

      
    },
    getFriendItems: async function (id) {
      // return items from others that are 
      // your friend and confirmed as friend
      if (typeof id !== "number") {
        return;
      }
      
      this.items = await GetSingleFriendsFeed(id);

      
    },
    setSelected: function (id) {
      this.getFriendItems(id);
    }
  },
  mounted: function () {
    //this.fillPictures();
    //console.log(feed_full_length);
    //this.items = [];
    this.doFeed();

    
  },
  created: function () {
    
    //this.items = [];
    this.doFeed();
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

</style>
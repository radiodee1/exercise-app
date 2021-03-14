<template>
  <div class="container box">
    <br>
    <div class="control">
      <label class="radio">
        <input type="radio" name="rsvp" @click="selectFeed()" :checked="myFeed"/>
        My Feed </label
      >
      <br />
      <label class="radio">
        <input type="radio" name="rsvp" @click="selectPosts()" :checked="myPosts" />
        My Posts </label
      >
      <br />
      <label class="radio" >
        <input type="radio" name="rsvp" @click="selectFriends()" :checked="myFriends" />
        Friends' Posts
      </label>
    </div>
    <!-- friend search box here -->
    <br>
    <friendexplorer v-if="myFriends" @selected="selected" ></friendexplorer>
  </div>
</template>

<script>

import friendexplorer from "./FriendExplorer.vue";

export default {
  name: "feedselector",
  data: function () {
    return {
      myFeed: true,
      myPosts: false,
      myFriends: false,

      
    }
  },
  components: {
    friendexplorer: friendexplorer
  },
  methods: {
    selectFeed: function () {
      this.myFeed = true;
      this.myPosts = false;
      this.myFriends = false;
      
      this.$emit('feed');
    },
    selectPosts: function () {
      this.myFeed = false;
      this.myPosts = true;
      this.myFriends = false;
      
      this.$emit('posts');
    },
    selectFriends: function () {
      this.myFeed = false;
      this.myPosts = false;
      this.myFriends = true;
      
      this.$emit('friends');
    },
    selected: function (val) {
      console.log("selected "+ val);
      this.$emit('selected', val);
    }
  },
  
};
</script>

<style>
</style>
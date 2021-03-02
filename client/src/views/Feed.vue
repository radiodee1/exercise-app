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
          <ul >
            <!-- template here ? -->
            <li v-for="(item, i) in items" :key="i">
              
            <inner :i="i" :makeId="makeId" :feed_divs="feed_divs" :item="item"> </inner>
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
import { feed_full_length } from '../js/exercise';


export default {
  name: "feedview",
  
  data() {
    return {
      //items: tree,
    };
  },
  props: {
    newsfeed: Boolean,
    makeId: Function,
    //tree: Array,
    feed_divs: Array,
    tree: Object,
    fillPictures: Function,
    feed_full_length: Number
    //classOption: Function
  },
  components: {
    inner: inner
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return 'visi';
      else return 'invis';
    },
    //addNewPost: function(val) {
      //console.log("pre submitpost");
      //this.items.unshift(val);
    //}
  },
  mounted: function () {
       this.fillPictures();
       console.log(feed_full_length);
  },
  created: function () {
    //this.addNewPost();
    //this.$on('submitpost', function (val) {
    //  this.items.unshift(val);
    //});
  },
  computed: {
    items: function() {
      return this.tree.feed;
      //return this.feed_divs;
    }
    
    //tree.feed,
  }
  
  
};

</script>
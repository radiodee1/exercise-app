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
      

        <!-- vue start -->

        <!-- div id="components">

        </div -->
        <div id="listing">
          <ul >
            <!-- template here ? -->
            <li v-for="i in items" :key="i">
              
            <item :i="i" :makeId="makeId" :feed_divs="feed_divs" > </item>
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


import item from "../components/FeedItem.vue";


export default {
  name: "feedcontainer",
  
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    makeId: Function,
    items: Array,
    feed_divs: Array
    //classOption: Function
  },
  components: {
    item: item
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return 'visi';
      else return 'invis';
    },
    shareFeed: function() {
      //this.$root.$emit('shared_feed', this.feed_divs);
    }
  }
  
};

</script>
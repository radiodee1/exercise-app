<template> 

  <div :id="makeId(i)" class="card"  v-show="visible" :ref="makeId(i)" > 
    
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="../assets/app.png" alt="Placeholder image" :id="makeId(i, 'pic')">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4"> {{ message_obj_from }} </p>
          <!-- p class="subtitle is-6">@johnsmith</p -->
        </div>
      </div>
      <!-- three contents -->
      <!--  {{ visible }} -->
      <div class="content"  v-bind:class=" classExercise(show_exercise)">
        <pre>{{exercise_obj_message}}</pre>
        
        <br>
        <time datetime="">{{ date_now }}</time>
      </div>

      <div class="content"  v-bind:class=" classMessage(show_message)">
        message - {{ message_obj_message }} <!-- a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a -->
        <br>
        <time datetime="">{{ date_now }}</time>
      </div>

      <div class="content"  v-bind:class=" classWorkout(show_workout)">
        
        <ul>
          <li v-for="ob in workout_obj_exercise_list" :key="ob">
            <pre>{{ob}}</pre><br>
          </li>
        </ul>

        
        <br>
        <time datetime="">{{ date_now }}</time>
      </div>
      <!-- end three contents -->
    </div>
  </div>
</template>

<script>
import { feed_divs } from '../js/exercise';

export default {
  name: "item",
  data() {
    return {
      
    };
  },
  mounted() {
    console.log("here");
    console.log(this.$el.id);
    console.log(this.feed_divs[ + this.i]);
    //this.shareFeed();
  },
  computed: {
      show_workout : function () {return this.feed_divs[ + this.i].instance.show_workout; },
      show_exercise: function () {return  this.feed_divs[ + this.i].instance.show_exercise;},
      show_message: function()  {return this.feed_divs[ + this.i].instance.show_message; },
      date_now: function() {return this.feed_divs[ + this.i].instance.date_now;},
      message_obj_from: function () {return this.feed_divs[ + this.i].instance.message_obj_from;},
      message_obj_message: function () {return this.feed_divs[ + this.i].instance.message_obj_message;},
      exercise_obj_message: function () {return this.feed_divs[ + this.i].instance.exercise_obj_message;},
      
      workout_obj_exercise_list: function () {
        let msg = this.feed_divs[+ this.i].instance.workout_obj_exercise_list;
        console.log(msg + " list");
        if (typeof msg === "undefined" || msg == null) {
          msg = "no data";
        }
        let msg_lst = msg.split("\t");

        return msg_lst;
      },

      visible: function () {return this.feed_divs[ + this.i].instance.visible;}
  },
  props: {
    newsfeed: Boolean,
    makeId: Function,
    i: Number,
    feed_divs: Array
    //classOption: Function
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
    classMessage: function (x) {
      return this.classOption(x);
    },
    classExercise: function (x) {
      return this.classOption(x);
    },
    classWorkout: function (x) {
      return this.classOption(x);
    },
    

  },
};
</script>
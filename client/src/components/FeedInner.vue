<template>
  <div :id="makeId(i)" class="card" v-show="visible" :ref="makeId(i)">
    <div class="card-image">
      <figure class="image" v-show="show_pic()">
        <img
          :src="picture_large"
          alt="Placeholder image"
          :id="makeId(i, 'pic')"
        />
      </figure>
    </div>
    <div class="card-content">
      <button
        class="delete is-pulled-right is-danger"
        @click.prevent="$emit('delete')"
        v-show="candelete"
      ></button>
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="../assets/app.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ message_obj_from }}</p>
          <p v-if="show_workout">Workout</p>
          <p v-if="show_exercise">Exercise</p>
          <p v-if="show_message">Message</p>
        </div>
      </div>
      <!-- three contents -->
      <!--  {{ visible }} -->
      <div class="content" v-bind:class="classExercise(show_exercise)">
        <pre>{{ exercise_obj_message }}</pre>

        <br />
        <time datetime="">{{ date_now }}</time>
      </div>

      <div class="content" v-bind:class="classMessage(show_message)">
         {{ message_obj_message }}
        <!-- a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a -->
        <br />
        <time datetime="">{{ date_now }}</time>
      </div>

      <div class="content" v-bind:class="classWorkout(show_workout)">
        
        <ul>
          <li v-for="ob in workout_obj_exercise_list" :key="ob">
            <pre>{{ ob }}</pre>
            <br />
          </li>
        </ul>

        <br />
        <time datetime="">{{ date_now }}</time>
      </div>
      <!-- end three contents -->
    </div>
  </div>
</template>

<script>
import {Session} from "../models/Session";

export default {
  name: "inner",
  data() {
    return {};
  },
  mounted() {
    //console.log("here");
    //console.log(this.$el.id);
    //console.log(this.feed_divs[+this.i]);
    //this.shareFeed();
  },
  computed: {
    show_workout: function () {
      const z = this.item.show_workout;
      if (z == "1") return true;
      else return false;
    },
    show_exercise: function () {
      const z = this.item.show_exercise;
      if (z == "1") return true;
      else return false;
    },
    show_message: function () {
      const z = this.item.show_message;
      if (z == "1") return true;
      else return false;
    },
    date_now: function () {
      const z = this.item.date_now;
      //console.log(this.item.date_now + " " + this.item.date_now_tz);
      return z;
      //if (z == "1") return true;
      //else return false;
    },
    message_obj_from: function () {
      const z = this.item.message_obj_from;
      return z;
      //if (z == "1") return true;
      //else return false;
    },
    message_obj_message: function () {
      const z = this.item.message_obj_message;
      return z;
    },
    exercise_obj_message: function () {
      const z = this.item.exercise_obj_message;
      return z;
      //if (z == "1") return true;
      //else return false;
    },

    workout_obj_exercise_list: function () {
      let msg = this.item.workout_obj_exercise_list;
      //console.log(msg + " list");
      if (typeof msg === "undefined" || msg == null) {
        msg = "no data";
      }
      let msg_lst = msg.split("\t");
      //console.log(msg_lst.length);
      msg_lst.pop();
      return msg_lst;
    },

    visible: function () {
      let vis = this.item.visible;
      if (vis == "1") {
        //console.log("no visible checking");
        vis = true;
        //vis = vis
      } else {
        vis = false;
      }
      return vis; // this.item.visible;
    },
    picture_large: function () {
      return this.item.picture_large;
    },
    candelete: function () {
      return this.item.from_user_id == Session.user.id;
    },
  },
  //watch: { show_pic },
  props: {
    newsfeed: Boolean,
    makeId: Function,
    i: Number,
    feed_divs: Array,
    item: Object,
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
    show_pic: function () {
      const t = this.item.picture_large;

      if (t != null && t.length > 50) {
        //console.log("true app.png");
        return true;
      } else {
        //console.log("false pic " );
        return false;
      }
    },
  },
};
</script>

<style scoped>
.delete {
  background-color: red;
}
</style>
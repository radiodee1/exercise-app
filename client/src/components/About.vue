<template>
  <div class="box">
    <h2 class="title">What You Will Find In The Menu Bar:</h2>
    <ul>
      <li><strong>Message</strong> - Leave a public message from you, even include a picture.</li>
      <li><strong>Exercise</strong> - Leave a public message detailing a recent Exercise. Include a picture.</li>
      <li><strong>Workout</strong> - Summarize several Exercises and include them in the news feed. Search through days of exercises.</li>
      <li><strong>Friends</strong> - Approve or deny Friend requests at any time from the Friend control screen.</li>
    </ul>
    <hr>
    <p>After login you will see the news feed. Use the Message, Exercise, and Workout buttons at the top of
      the navigation bar to enter your own Exercise-App story. Use the Friends button to make friends and follow
      your friends' activities. You are a click away from sharing your workouts with all your friends. </p>

    <hr>
    <p>Don't use the browser 'back' arrow for site navigation. When you are done with a form, click either
      the 'submit' button or the smaller 'cancel' button to exit. If you want to go back to the login screen
      click the Exercise-App icon in the top left of the news feed window. This will log you out. </p>
  <hr>
  <typeahead></typeahead>
  </div>

</template>

<script>
import typeahead from "./TypeAhead.vue";

export default {
  name: "about",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    //classOption: Function
  },
  components: {
    typeahead : typeahead
  },
  methods: {
    classOption: function (i) {
      //console.log(i);
      const x = Boolean(i);
      if (x === true) return "visi";
      else return "invis";
    },
  },
};
</script>

<style scoped>
li ul {
  list-style-type: circle ;
  list-style-position: inside;
}
</style>
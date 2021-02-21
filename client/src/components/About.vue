<template>
  <div class="box">
    <h2 class="title">What You Will Find In The Menu Bar:</h2>
    <ul>
      <li><strong>Message</strong> - Leave a public message from you, even include a picture.</li>
      <li><strong>Exercise</strong> - Leave a public message detailing a recent Exercise. Include a picture.</li>
      <li><strong>Workout</strong> - Summarize several Exercises and include them in the news feed. Search through days of exercises.</li>
      <li><strong>Friends</strong> - Approve or deny Friend requests at any time from the Friend control screen.</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "about",
  data() {
    return {};
  },
  props: {
    newsfeed: Boolean,
    //classOption: Function
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
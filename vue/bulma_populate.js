


tree = {
    index_item: 0,

    feed: 
    [ // list of feed items...
      {
        show_message: true,
        show_exercise: true,
        show_workout: false,
        
        picture_large: null,
        picture_small: null,

        message: "hello-world",

        messsage_obj : { //big message
          from: "",
          to: "",
          message: ""
        },
        exercise_obj : { //exercise post
          reps: "",
          weight: "",
          label: ""
        },
        workout_obj: { // combined exercises
          exercise_list: [
            { exercise_id: 0 , reps: "", weight: "", label: ""},
            { exercise_id: 1 , reps: "", weight: "", label: ""}
          ]
        },
        message_list: [ // little messages
          { message: "one message." },
          { message: "another message."}
        ]
      }
    ]
    
  };

  tree2 = {

    feed: 
    [ // list of feed items...
      {
        show_message: true,
        show_exercise: true,
        show_workout: false,
        
        picture_large: null,
        picture_small: null,

        message: "hello-world",

        messsage_obj : { //big message
          from: "",
          to: "",
          message: ""
        },
        exercise_obj : { //exercise post
          reps: "",
          weight: "",
          label: ""
        },
        workout_obj: { // combined exercises
          exercise_list: [
            { exercise_id: 0 , reps: "", weight: "", label: ""},
            { exercise_id: 1 , reps: "", weight: "", label: ""}
          ]
        },
        message_list: [ // little messages
          { message: "one message." },
          { message: "another message."}
        ]
      }
    ]
    
  };



data = tree;
data.feed.push(tree2.feed[0]);
data.feed[0].show_workout = true;

//console.log(data.feed);

Vue.component('feed-item', {
  name: 'feed-item',
  data: function () {
    return {
      article: tree2.feed[0]
      
    }
  },
  //props: ['article', 'message'],
  methods: {
    addNewFeed: function () {
      data.feed.push(tree2.feed[0]);
      console.log(data.feed.length + " is length.");
    },
    forceUpdate: function () {
      this.$forceUpdate();
      console.log("at force update...");
      this.index_item += 1;
    },
    
    classWorkout: function (i) {
      //console.log(i);
      var x = Boolean(i.show_workout);
      if (x === true) return 'visi';
      else return 'invis';
    },
    classMessage: function (i) {
      //console.log(i);
      var x = Boolean(i.show_message);
      if (x === true) return 'visi';
      else return 'invis';
    },
    classExercise: function (i) {
      //console.log(i);
      var x = Boolean(i.show_exercise);
      if (x === true) return 'visi';
      else return 'invis';
    }
    
  },
  template: `<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
        <p class="title is-4">John Smith: {{ article.message }} </p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>
    <!-- three contents -->
    {{classExercise(article)}} {{article.show_exercise}} ;
    {{classMessage(article)}} {{article.show_message}} ;
    {{classWorkout(article)}} {{article.show_workout}} ;
    <div class="content"  v-bind:class=" classExercise(article)">
      exercise - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>

    <div class="content"  v-bind:class=" classMessage(article)">
      message - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>

    <div class="content"  v-bind:class=" classWorkout(article)">
      workout - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
    <!-- end three contents -->
  </div>
</div>`
});

//components = new Vue({ el: '#components' });
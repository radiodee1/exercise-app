
feed_limit = 10;
// hard coded output

tree = {
    //index_item: 0,

    feed: 
    [ // list of feed items...
      {
        visible: false,

        num: 0,

        show_message: true,
        show_exercise: true,
        show_workout: false,
        
        picture_large: null,
        picture_small: null,

        message: "hello-world",

        messsage_obj_from: "",
        messsage_obj_to: "",
        messsage_obj_message: "",
        messsage_obj_date: "",
        
        exercise_obj_reps: "",
        exercise_obj_weight: "",
        exercise_obj_label: "",
        exercise_obj_date: "",
        
        workout_obj_date: "",
        workout_obj_exercise_list: [
          { exercise_id: 0 , reps: "", weight: "", label: ""},
          { exercise_id: 1 , reps: "", weight: "", label: ""}
        ],
        //},
        message_list: [ // little messages
          { message: "one message." },
          { message: "another message."}
        ]
      }
    ]
    
  };

  single_div =  {
    id: "",
    instance: null,
    mount: null,
    messages : [
      {
        id: "",
        instance: null
      }, 
      {
        id: "",
        instance: null
      }, 
      {
        id: "",
        instance: null
      }, 
      {
        id: "",
        instance: null
      }, 
      {
        id: "",
        instance: null
      }, 
      {
        id: "",
        instance: null
      }
    ]
  };

  feed_divs = [];
  

//tree2 = JSON.stringify(tree);
subtreeStr = JSON.stringify(tree.feed[0]);
//tree2 = JSON.parse(tree2);
//subtree = JSON.parse(subtree);

subtree_div_string = JSON.stringify(single_div);

for (var x = 0; x < feed_limit; x ++) {
  subtree = JSON.parse(subtreeStr);
  subtree.visible = false;
  subtree.num = x;
  tree.feed.push(subtree);
  

  subtree_div = JSON.parse(subtree_div_string);
  feed_divs.push(subtree_div);
};

data = tree;
//data.feed[0].show_workout = true;

//data = data.feed.reverse();

function makeId(num, prefix="feed-num-") {
  return prefix + num;
}

function makeTemplate (id) {

  template_00 = `<div id="`+ makeId(id) +`" class="card" v-bind:class="classCard(article)">
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
      ` 
      + id +
      `
      <!-- 
      {{classExercise(article)}} {{article.show_exercise}} ;
      {{classMessage(article)}} {{article.show_message}} ;
      {{classWorkout(article)}} {{article.show_workout}} ;
      -->
      {{ article.visible }}
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
  return template_00;
}

function makeTemplateList() {
  z = "<ul> ";
  for (var x = 0; x < feed_limit; x ++) {
    xx = tree.feed[x].num;

    z += "<li>";
    z += makeTemplate(x);
    z += "</li>";
  }
  z += "</ul>";
  return z;
}

template_list = makeTemplateList();


function makeFeedComponent() {
  var element = document.getElementById("components");
  element.innerHTML = template_list;
  //element.value = template_list;
  
}

function makeInvocation() {
  for (var x = 0; x < feed_limit; x ++) {
    z = {
      article: tree.feed[x]
    };

    console.log(z);
    console.log("---");
    feed_divs[x].id = makeId(x);
    feed_divs[x].instance = new Vue({
      el: '#' + makeId(x),
      data: z , // data.feed[x],
      
      methods: {
        addNewFeed: function () {
          //this.$data.feed.push(tree2.feed[0]);
          //console.log(data.feed.length + " is length.");
        },
        forceUpdate: function () {
          this.message = "";
          
          //this.$forceUpdate();
          console.log("at force update...");
        },
        watchFeed: function () {
          z = [];
          //for( x = 0; x < this.feed.length; x ++) {
            //z.push(this.feed[x])
            //this.$watch(() => this.feed[x], this.forceUpdate);
          //}
          //console.log(z);
          
          //this.$watch(() => z, this.forceUpdate);
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
        },
        classCard: function (i) {
          //console.log(i);
          var x = Boolean(i.visible);
          if (x === true) return 'visi';
          else return 'invis';
        }
        
      },
      computed: {
        // none here
      }
    });
  }

}

function listSwap(pos1, pos2) {
  p1 = JSON.stringify(tree.feed[pos1]);
  p2 = JSON.stringify(tree.feed[pos2]);
  tree.feed[pos1] = JSON.parse(p2);
  tree.feed[pos2] = JSON.parse(p1);
  console.log('swap ' + pos1 + " " + pos2);
}

function listMaint() {
  if (tree.feed[0].visible = true) {
    //move all down 1
    for (var x = 0 ; x < feed_limit - 2; x ++) {
      listSwap(x, x + 1);
      tree.feed[x ].visible = true;
    }
    tree.feed[0].visible = false;
  } 
  
}

function insertFeed(dict) {
  // insert message in db here.
  listMaint();

  tree.feed[0] = dict;
  return;
  
}

function setMessage(obj, msg="message here.") {
  subtree = obj;// JSON.parse(subtreeStr);
  subtree.show_message = true;
  subtree.messsage_obj_message = msg;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

function setExercise(msg="exerccise here.") {
  subtree = JSON.parse(subtreeStr);
  subtree.show_exercise = true;
  subtree.exercise_obj_label = msg;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

function setWorkout(msg="workout here.") {
  subtree = JSON.parse(subtreeStr);
  subtree.show_workout = true;
  //subtree.workout_obj_date = msg;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

function testInsert() {
  obj = setMessage();
  insertFeed(obj);
}
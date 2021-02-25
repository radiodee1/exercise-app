import Vue from "vue";
//import Vue from 'vue'
//import App from '../App.vue'
import router from '../router'

import appx from "../App.vue";

/* eslint-disable */

/* -------------- populate feed ---------------  */

export let feed_full_length = 0;
export const feed_limit = 10;
// hard coded output

export let tree = {
  feed: []
}


let tree_feed_dict = {

  visible: false,

  num: 0,

  date_now: "",

  show_message: false,
  show_exercise: false,
  show_workout: false,

  picture_large: null, 
  picture_small: null,

  message: "hello-world",

  from_user_id: 0,

  message_obj_from: "",
  message_obj_to: "",
  message_obj_message: "",
  //message_obj_date: "",

  //exercise_obj_reps: "",
  //exercise_obj_weight: "",
  //exercise_obj_label: "",
  //exercise_obj_date: "",
  //exercise_obj_name: "",
  exercise_obj_message: "",
  //exercise_obj_from: "",

  //workout_obj_date: "",
  workout_obj_exercise_list: "",

  message_list: "",
}


let single_div = {
  id: "",
  instance: null,
  //update: null,
  //messages: null

};

export let feed_divs = [];

export let subtreeStr = JSON.stringify(tree_feed_dict);

let subtree_div_string = JSON.stringify(single_div);

export let subtree_div = "";

for (let x = 0; x < feed_limit; x++) {
  const subtree = JSON.parse(subtreeStr);
  subtree.visible = false;
  subtree.num = x;
  tree.feed.push(subtree);


  subtree_div = JSON.parse(subtree_div_string);
  feed_divs.push(subtree_div);
}

//let data = tree;

//data.feed[0].show_workout = true;
//let subtree = JSON.parse(subtreeStr);

//data = data.feed.reverse();

function makeId(num, prefix = "feed-num-") {
  return prefix + num;
}



export function makeInvocation() {
  for (let x = 0; x < feed_limit; x++) {

    //console.log(tree.feed[x]);
    //console.log("---");

    feed_divs[x].id = makeId(x);
    feed_divs[x].instance = new Vue({

      el: '#' + makeId(x),
      data: tree.feed[x],

      methods: {

        forceUpdate: function () {

          this.$forceUpdate();
          console.log("at force update.");
        },

        classWorkout: function (i) {
          //console.log(i);
          const x = Boolean(i);
          if (x === true) return 'visi';
          else return 'invis';
        },
        classMessage: function (i) {
          //console.log(i);
          const x = Boolean(i);
          if (x === true) return 'visi';
          else return 'invis';
        },
        classExercise: function (i) {
          //console.log(i);
          const x = Boolean(i);
          if (x === true) return 'visi';
          else return 'invis';
        },
        classCard: function (i) {
          //console.log(i);
          const x = Boolean(i);
          if (x === true) return 'visi';
          else return 'invis';
        }

      },


    });


  }
  return feed_divs;
}

let do_loop = true;
//let do_copy = tree;

function listMaint(dict, feed_divs, tree) {

  //move all down 1
  tree.feed.unshift(dict);

  tree.feed.pop();

  if (do_loop) {

    for (let x = 0; x < feed_full_length; x++) {

      for (let key in tree.feed[x]) {

        if ( key != "picture_large" && key != "picture_small") {
          feed_divs[x].instance[key] = tree.feed[x][key];
        }
        else {
          
        }
      }

      feed_divs[x].instance.forceUpdate();
      // list of special javascript fn

      //let undef = false;
      //if (typeof document.getElementById(makeId(x,'pic')) == 'undefined') {
      //  undef = true;
      //  console.log('pic undefined!!');
      //}

      //document.getElementById(makeId(x, "pic")).src = null;
      /*
      if (tree.feed[x].picture_large != null && undef != true && false){//&& document.getElementById(makeId(x,"pic")) != null) {
        if (tree.feed[x].show_message == true) {
          document.getElementById(makeId(x, "pic")).src = tree.feed[x].picture_large;
        }
        if (tree.feed[x].show_workout == true) {
          document.getElementById(makeId(x, "pic")).src = tree.feed[x].picture_large;
        }
        if (tree.feed[x].show_exercise == true) {
          document.getElementById(makeId(x, "pic")).src = tree.feed[x].picture_large;
        }
      }
      */

    }

  }

}

export function insertFeed(dict, feed_divs, tree) {
  // insert message in db here.
  if (feed_full_length < feed_limit - 1) feed_full_length++;

  listMaint(dict, feed_divs, tree);

  return;
}

export function setMessage(obj, msg = "message here.") {
  const subtree = obj;
  subtree.show_message = true;
  subtree.show_workout = false;
  subtree.show_exercise = false;
  subtree.messsage_obj_message = msg;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

export function setExercise(obj, msg = "exercise here.") {
  const subtree = obj;
  subtree.show_exercise = true;
  subtree.show_message = false;
  subtree.show_workout = false;
  //subtree.exercise_obj_label = msg;
  
  
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

export function setWorkout(obj, msg = "workout here.") {
  const subtree = obj;
  subtree.show_workout = true;
  subtree.show_message = false;
  subtree.show_exercise = false;
  //subtree.picture_small = null;
  //subtree.picture_large = null;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}



/* ---------------- controls next ---------------- */

function setPic(pic_orig) {
  let pic = null;
  if (pic_orig != null && pic_orig.src != null && typeof pic_orig !== 'undefined') {
    pic = pic_orig.src;
  }
  else {
    pic = null ; //"../assets/app.png";
  }
  //console.log("p " + pic);
  return pic;
}


export function formSubmitMessage(feed_divs, tree, ob = null) {

  const msg_orig = document.getElementById("message_txt");
  //console.log(msg_orig.value);
  const msg = msg_orig.value;
  const pic_orig = document.getElementById('myImg1');

  const pic = setPic(pic_orig);

  const d = new Date();
  //console.log("here 3");

  let obj = null;

  if (ob == null) {
    obj = JSON.parse(subtreeStr);
  }
  else {
    obj = ob;
  }

  obj.show_message = true;
  obj.show_workout = false;
  obj.show_exercise = false;
  obj.visible = true;
  obj.message = msg;
  obj.message_obj_message = msg;
  //obj.message_obj_from = "John Doe";
  obj.picture_large = pic;
  obj.date_now = d;

  const b = setMessage(obj, msg);

  insertFeed(b, feed_divs, tree);
  document.getElementById("message_txt").value = "";
  
}

function formSubmitWorkout(msg, feed_divs, tree, ob = null) {
  //console.log("workout submit + " + msg);
  //const msg = document.getElementById('workout_hidden').textContent;
  const pic_orig = document.getElementById('myImg3');
  //const pic = pic_orig.src;
  const pic = setPic(pic_orig);

  const d = new Date();

  let obj = null;

  if (ob == null) {
    obj = JSON.parse(subtreeStr);
  }
  else {
    obj = ob;
  }

  obj.show_message = false;
  obj.show_workout = true;
  obj.show_exercise = false;
  obj.visible = true;
  obj.message = msg;
  obj.workout_obj_exercise_list = msg;
  //obj.workout_obj_from = "John Doe";
  obj.picture_large = pic;
  obj.date_now = d;

  const b = setWorkout(obj, msg);

  insertFeed(b, feed_divs, tree);
}

function formSubmitExercise(feed_divs, tree, ob = null) {
  //console.log("exercise submit");
  const msg = document.getElementById('exercise_pre').textContent;
  const pic_orig = document.getElementById('myImg2');

  const pic = setPic(pic_orig);

  const d = new Date();

  let obj = null;

  if (ob == null) {
    obj = JSON.parse(subtreeStr);
  }
  else {
    obj = ob;
  }

  obj.show_message = false;
  obj.show_workout = false;
  obj.show_exercise = true;
  obj.visible = true;
  obj.message = msg;
  obj.exercise_obj_message = msg;
  //obj.message_obj_from = "John Doe";
  obj.picture_large = pic;
  obj.date_now = d;

  //console.log(obj.length + " len");

  const b = setExercise(obj, msg);

  insertFeed(b, feed_divs, tree);
  //focusNews();
}

/* --------- support fn -------------  */

export function preview_image_msg(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('myImg1');
    output.style.visibility = "visible";
    output.src = reader.result;
  }
  //console.log(event.target.files[0].name + " name");
  //if (! event.target.files[0].name.endsWith("app.png")) 
  reader.readAsDataURL(event.target.files[0]);
  //else reader.feadAsDataURL(null);
}

export function preview_image_ex(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('myImg2');
    output.style.visibility = "visible";
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

export function preview_image_wrk(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('myImg3');
    output.style.visibility = "visible";
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

/* --------------- vue functions ------------------- */

let visibility = null;

var feed_array = [];
for (var x = 0; x < feed_limit; x++) {
  feed_array.push(x);
}

export function doLoad() {

  visibility = new Vue({
    el: '#app',
    router,
    render: h => h(appx),
    data() {
      return {
        login: false,
        register: false,
        newsfeed: false,
        home: true,
        banner: true,
        form_message: false,
        form_exercise: false,
        form_workout: false,
        form_friends: false,

        items: feed_array,
        tree: tree,
        user: this.makeUser()
      };
    },
    mounted() {
      //console.log("mounted");
      //console.log(this);
      //makeInvocation();
    },
    computed: {
      //user: this.makeUser()
    },

    methods: {
      classOption: function (i) {
        //console.log(i);
        const x = Boolean(i);
        if (x === true) return 'visi';
        else return 'invis';
      },


      focusRegister: function () {
        this.register = true;
        this.login = false;
        this.newsfeed = false;
        this.home = false;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
      },

      focusLogin: function () {
        this.login = true;
        this.register = false;
        this.newsfeed = false;
        this.home = false;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
      },

      focusNews: function () {

        this.login = false;
        this.register = false;
        this.newsfeed = true;
        this.home = false;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
        this.form_friends = false;

      },

      focusReset: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = true;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
      },

      focusFormExercise: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = false;
        this.banner = true;
        this.form_exercise = true;
        this.form_message = false;
        this.form_workout = false;
      },

      focusFormMessage: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = false;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = true;
        this.form_workout = false;
      },

      focusFormWorkout: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = false;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = true;
      },

      focusFormFriends: function () {
        this.login = false;
        this.register = false;
        this.newsfeed = false;
        this.home = false;
        this.banner = true;
        this.form_exercise = false;
        this.form_message = false;
        this.form_workout = false;
        this.form_friends = true;
      },

      useFormSubmitMessage: function (feed_divs, tree) {
        const obj = JSON.parse(subtreeStr);
        obj.from_user_id = this.user.id;
        obj.message_obj_from = this.user.firstname + " " + this.user.lastname;
        formSubmitMessage(feed_divs, tree, obj);

      },
      useFormSubmitExercise: function (feed_divs, tree) {
        const obj = JSON.parse(subtreeStr);
        obj.from_user_id = this.user.id;
        obj.message_obj_from = this.user.firstname + " " + this.user.lastname;

        formSubmitExercise(feed_divs, tree, obj);

      },
      useFormSubmitWorkout: function (msg, feed_divs, tree) {
        const obj = JSON.parse(subtreeStr);
        //console.log(this.user);
        obj.from_user_id = this.user.id;
        obj.message_obj_from = this.user.firstname + " " + this.user.lastname;

        formSubmitWorkout(msg, feed_divs, tree, obj);

      },
      preview_image_msg: function (e) {
        preview_image_msg(e);
      },
      preview_image_ex: function (e) {
        preview_image_ex(e);
      },
      preview_image_wrk: function (e) {
        preview_image_wrk(e);
      },
      makeUser: function () {
        return makeUser();
      }

    }
  });

  //makeFeedComponent();
  //makeInvocation();


}


//window.onload = doLoad;
//doLoad();

export function classOption(i) {
  //console.log(i);
  const x = Boolean(i);
  if (x === true) return 'visi';
  else return 'invis';
}

/*
function focusRegister() {
  visibility.register = true;
  visibility.login = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;
}


function focusLogin() {
  visibility.login = true;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;
}
*/

export function focusNews() {

  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = true;
  visibility.home = false;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;


}

/*
function focusReset() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = true;
  visibility.banner = true;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = false;
}
*/

export function focusFormExercise() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.banner = true;
  visibility.form_exercise = true;
  visibility.form_message = false;
  visibility.form_workout = false;
}

/*
function focusFormMessage() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = false;
  visibility.home = false;
  visibility.banner = true;
  visibility.form_exercise = false;
  visibility.form_message = true;
  visibility.form_workout = false;
}
*/

export function focusFormWorkout() {
  visibility.login = false;
  visibility.register = false;
  visibility.newsfeed = true;
  visibility.home = false;
  visibility.banner = true;
  visibility.form_exercise = false;
  visibility.form_message = false;
  visibility.form_workout = true;
}

/* ---------- sql etc -----------  */

export function makeUser() {
  return {
    firstname: "John",
    lastname: "Doe",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    username: "",
    password: "",
    height_inches: 74,
    weight_lbs: 150,
    id: 0,
    cookie: ""
  };

}
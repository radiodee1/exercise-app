//import Vue from "vue";
//import Vue from 'vue'
//import App from '../App.vue'
//import router from '../router'

//import appx from "../App.vue";
import {PostFeed} from "../models/feed"


/* -------------- populate feed ---------------  */

export let feed_full_length = 0;
export const feed_limit = 1;
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


export let subtreeStr = JSON.stringify(tree_feed_dict);


export let subtree_div = "";

for (let x = 0; x < feed_limit; x++) {
  const subtree = JSON.parse(subtreeStr);
  subtree.visible = false;
  subtree.num = x;
  tree.feed.push(subtree);
}



let do_loop = false;
//let do_copy = tree;

function listMaint(dict, feed_divs, tree) {

  //move all down 1
  tree.feed.unshift(dict);

  //tree.feed.pop();

  if (do_loop) {

    console.log("old loop location");

  }

}

export function insertFeed(dict, feed_divs, tree) {
  // insert message in db here.
  //if (feed_full_length < feed_limit - 1) 
  feed_full_length++;

  listMaint(dict, feed_divs, tree);

  //const port = visibility.backend_port;
  //const url = visibility.backend_url;

  //dict.from_user_id = visibility.user.id; // <-- THIS LINE!!

  //console.log(port + " port");

  PostFeed(dict);
  
  return;
}

export function setMessage(obj, msg = "message here.") {
  const subtree = obj;
  subtree.show_message = true;
  subtree.show_workout = false;
  subtree.show_exercise = false;
  subtree.message_obj_message = msg;
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



export function formSubmitMessage(msg, feed_divs, tree, ob = null) {

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
  //obj.picture_large = pic;
  obj.date_now = d;

  const b = setMessage(obj, msg);

  insertFeed(b, feed_divs, tree);
  document.getElementById("message_txt").value = "";
  return b;
}

export function formSubmitWorkout(msg, feed_divs, tree, ob = null) {
  //console.log("workout submit + " + msg);
  //const msg = document.getElementById('workout_hidden').textContent;
  //const pic_orig = document.getElementById('myImg3');
  //const pic = pic_orig.src;
  //const pic = setPic(pic_orig);

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
  //obj.picture_large = pic;
  obj.date_now = d;

  const b = setWorkout(obj, msg);

  insertFeed(b, feed_divs, tree);
  return b;
}

export function formSubmitExercise(msg, feed_divs, tree, ob = null) {
  
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
  //obj.picture_large = pic;
  obj.date_now = d;

  //console.log(obj.length + " len");

  const b = setExercise(obj, msg);

  insertFeed(b, feed_divs, tree);
  //focusNews();
  return b;
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
    username: "jdoe",
    password: "",
    height_inches: 74,
    weight_lbs: 150,
    id: 0,
    cookie: ""
  };

}
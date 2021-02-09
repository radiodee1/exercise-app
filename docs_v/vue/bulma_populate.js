// populate arrays here if needed

feed_full_length = 0;
const feed_limit = 10;
// hard coded output

tree = {
  feed: []
};

feed = [];

tree_feed_dict = {

  visible: true,

  num: 0,

  date_now: "",

  show_message: true,
  show_exercise: false,
  show_workout: false,
  
  picture_large: null,
  picture_small: null,

  message: "hello-world",

  message_obj_from: "",
  message_obj_to: "",
  message_obj_message: "",
  message_obj_date: "",
  
  exercise_obj_reps: "",
  exercise_obj_weight: "",
  exercise_obj_label: "",
  exercise_obj_date: "",
  exercise_obj_name: "",
  
  workout_obj_date: "",
  workout_obj_exercise_list: "",
  
  message_list: "",
}


single_div =  {
  id: "",
  instance: null,
  update : null,
  messages : null
  
};

feed_divs = [];
  
subtreeStr = JSON.stringify(tree_feed_dict);

subtree_div_string = JSON.stringify(single_div);

function makePopulate() {
  for (let x = 0; x < feed_limit; x ++) {
    //let subtree = JSON.parse(subtreeStr);
    const subtree = instance.makeFeedObj();
    //subtree.visible = true;
    subtree.num = x;
    //tree.feed.push(subtree);
    
    //instance.addToFeed(subtree);
    feed.push(subtree);
    console.log(x + " num");
    //subtree_div = JSON.parse(subtree_div_string);
    //feed_divs.push(subtree_div);
  };
}

data = tree;
//data.feed[0].show_workout = true;
subtree = JSON.parse(subtreeStr);



function listMaint(dict) {

   //move all down 1
  tree.feed.unshift(dict);

  tree.feed.pop();
  
  if ( true ) {

    for  (let x = 0; x < feed_full_length; x++ ) { 

      for (let key in tree.feed[x]) {
    
        if (key != "picture_large" && key != "picture_small" ) {
          feed_divs[x].instance[key] = tree.feed[x][key];         
        }
        else {
          //
        }
      }

      feed_divs[x].instance.forceUpdate();
      // list of special javascript fn

      if(tree.feed[x].show_message == true ) {
        document.getElementById(makeId(x, "pic")).src = tree.feed[x].picture_large;
      }
      if(tree.feed[x].show_workout == true ) {
        document.getElementById(makeId(x, "pic")).src = '../pic/app.png'; // tree.feed[x].picture_large;
      }
      if(tree.feed[x].show_exercise == true ) {
        document.getElementById(makeId(x, "pic")).src = '../pic/app.png'; //tree.feed[x].picture_large;
      }
    }
    
  } 

}

function insertFeed(dict) {
  // insert message in db here.
  if (feed_full_length < feed_limit - 1) feed_full_length ++;

  listMaint(dict);
  
  return;
}

function setMessage(obj, msg="message here.") {
  let subtree = obj;
  subtree.show_message = true;
  subtree.show_workout = false;
  subtree.show_exercise = false;
  subtree.messsage_obj_message = msg;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

function setExercise(obj, msg="exercise here.") {
  let subtree = obj; 
  subtree.show_exercise = true;
  subtree.show_message = false;
  subtree.show_workout = false;
  subtree.exercise_obj_label = msg;
  subtree.picture_large = null;
  subtree.picture_small = null;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

function setWorkout(obj, msg="workout here.") {
  let subtree = obj; 
  subtree.show_workout = true;
  subtree.show_message = false;
  subtree.show_exercise = false;
  subtree.picture_small = null;
  subtree.picture_large = null;
  subtree.message = msg;
  subtree.visible = true;
  return subtree;
}

function testInsertMsg() {
  let subtree = JSON.parse(subtreeStr);

  //focusFormMessage();
  let obj = setMessage(subtree); 
  //insertFeed(obj);
  instance.addToFeed(obj);
}

function testInsertWorkout() {
  let subtree = JSON.parse(subtreeStr);
  subtree.picture_large = null;
  focusFormWorkout();
  let obj = setWorkout(subtree); 
  //insertFeed(obj);
  instance.addToFeed(obj);
}

function testInsertExercise() {
  let subtree = JSON.parse(subtreeStr);
  subtree.picture_large = null;
  focusFormExercise();
  let obj = setExercise(subtree); 
  //insertFeed(obj);
  instance.addToFeed(obj);
}
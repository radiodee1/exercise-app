
function controlDropdownType() {
    
    if (document.getElementById('exercise_type').classList.contains("is-active") ) {

      document.getElementById('exercise_type').classList.remove("is-active") ;
    }
    else {

      document.getElementById('exercise_type').classList.add("is-active");
    }

}


  function formSubmitMessage() {
    let msg_orig = document.getElementById("message_txt");
    //console.log(msg.value);
    let msg = msg_orig.value;
    let pic_orig = document.getElementById('myImg1');
    let pic = pic_orig.src;

    let d = new Date();

    //let obj = {... JSON.parse(subtreeStr)};
    let obj = {... instance.makeFeedObj()};

    obj.show_message = true;
    obj.show_workout = false;
    obj.show_exercise = false;
    obj.visible = true;
    obj.message = msg;
    obj.message_obj_message = msg;
    obj.message_obj_from = "John Doe"
    obj.picture_large = pic;
    obj.date_now = d;

    //console.log(obj.length + " len");
    
    let b = setMessage(obj, msg);
    instance.addToFeed(b);
    //insertFeed(b);
    document.getElementById("message_txt").value = "";
    //console.log(msg);
    focusNews();
  }

  function formSubmitWorkout() {
    console.log("workout submit");

  }

  function formSubmitExercise() {
    console.log("exercise submit");
  }

  /* --------- support fn -------------  */

function preview_image_msg(event) {
  let reader = new FileReader();
  reader.onload = function(){
    let output = document.getElementById('myImg1');
    output.src = reader.result;
    console.log("get pic");
  }
  reader.readAsDataURL(event.target.files[0]);
}

function preview_image_ex(event) {
  let reader = new FileReader();
  reader.onload = function(){
    let output = document.getElementById('myImg2');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

  
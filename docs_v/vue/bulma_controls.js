
function controlDropdownType() {
    
    if (document.getElementById('exercise_type').classList.contains("is-active") ) {

      document.getElementById('exercise_type').classList.remove("is-active") ;
    }
    else {

      document.getElementById('exercise_type').classList.add("is-active");
    }

}


  function formSubmitMessage() {
    const msg_orig = document.getElementById("message_txt");
    //console.log(msg.value);
    const msg = msg_orig.value;
    const pic_orig = document.getElementById('myImg1');
    const pic = pic_orig.src;

    const d = new Date();

    const obj = {... JSON.parse(subtreeStr)};
    //const obj = {... instance.makeFeedObj()};

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
    
    const b = setMessage(obj, msg);
    //instance.addToFeed(b);
    feed.unshift(b);
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
  const reader = new FileReader();
  reader.onload = function(){
    const output = document.getElementById('myImg1');
    output.src = reader.result;
    console.log("get pic");
  }
  reader.readAsDataURL(event.target.files[0]);
}

function preview_image_ex(event) {
  const reader = new FileReader();
  reader.onload = function(){
    const output = document.getElementById('myImg2');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

  

function controlDropdownType() {
    //var ff = document.getElementById('exercise_type');
    //f = ff.style.visibility;
    if (document.getElementById('exercise_type').classList.contains("is-active") ) {
        console.log('visi');
        document.getElementById('exercise_type').classList.remove("is-active") ;
    }
    else {
        console.log('invis');
        document.getElementById('exercise_type').classList.add("is-active");
    }

}


  function formSubmitMessage() {
    var msg = document.getElementById("message_txt");
    //console.log(msg.value);
    var msg = msg.value;
    var pic = document.getElementById('myImg1');
    var pic = pic.src;

    var d = new Date();//.getMilliseconds();

    var obj = JSON.parse(subtreeStr);

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
    
    var b = setMessage(obj, msg);

    insertFeed(b);
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
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('myImg1');
    output.src = reader.result;
    console.log("get pic");
  }
  reader.readAsDataURL(event.target.files[0]);
}

function preview_image_ex(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('myImg2');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

  
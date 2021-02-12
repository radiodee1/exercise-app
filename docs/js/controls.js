
function controlDropdownType() {

  if (document.getElementById('exercise_type').classList.contains("is-active")) {

    document.getElementById('exercise_type').classList.remove("is-active");
  }
  else {

    document.getElementById('exercise_type').classList.add("is-active");
  }

}

function controlDropdownDeet() {

  if (document.getElementById('exercise_type_deet').classList.contains("is-active")) {

    document.getElementById('exercise_type_deet').classList.remove("is-active");
  }
  else {

    document.getElementById('exercise_type_deet').classList.add("is-active");
  }

}

function formFinishExercise() {
  const type = document.getElementById('exercise_type_label').textContent;
  const deet = document.getElementById('exercise_type_deet_label').textContent;
  const num = document.getElementById('exercise_num').value;
  const i = `Exercise Report:\nExercise Type: ${type}\nExercise Details: ${deet}\nRepitions: ${num}\n`;
  document.getElementById('exercise_pre').textContent = i;
  document.getElementById('exercise_pre').style.visibility = "visible";
  document.getElementById('exercise_submit').style.visibility = "visible";
}

function formChooseType(i) {
  document.getElementById('exercise_type_label').textContent = i;
  controlDropdownType();
}

function formChooseDeet(i) {
  document.getElementById('exercise_type_deet_label').textContent = i;
  controlDropdownDeet()

}

function formSubmitMessage() {
  const msg_orig = document.getElementById("message_txt");
  //console.log(msg.value);
  const msg = msg_orig.value;
  const pic_orig = document.getElementById('myImg1');
  const pic = pic_orig.src;

  const d = new Date();

  const obj = JSON.parse(subtreeStr);

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
  const msg = document.getElementById('exercise_pre').textContent;
  const pic_orig = document.getElementById('myImg2');
  const pic = pic_orig.src;

  const d = new Date();

  const obj = JSON.parse(subtreeStr);

  obj.show_message = false;
  obj.show_workout = false;
  obj.show_exercise = true;
  obj.visible = true;
  obj.message = msg;
  obj.exercise_obj_message = msg;
  obj.message_obj_from = "John Doe"
  obj.picture_large = pic;
  obj.date_now = d;

  //console.log(obj.length + " len");

  const b = setExercise(obj, msg);

  insertFeed(b);
  focusNews();
}

/* --------- support fn -------------  */

function preview_image_msg(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('myImg1');
    output.style.visibility = "visible";
    output.src = reader.result;
    console.log("get pic");
  }
  reader.readAsDataURL(event.target.files[0]);
}

function preview_image_ex(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const output = document.getElementById('myImg2');
    output.style.visibility = "visible";
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}




//console.log(data);

function doLoad() {
    
      

      visibility = new Vue({
        el: '#visibility',
        data: {
          login: false,
          register: false,
          newsfeed: false,
          home: true,
          banner: true,
          form_message: false,
          form_exercise: false,
          form_workout: false
        },
        methods: {
          classOption: function (i) {
            //console.log(i);
            var x = Boolean(i);
            if (x === true) return 'visi';
            else return 'invis';
          },
        }
      });

      makeFeedComponent();
      makeInvocation();
      //makePicListener();
      //console.log(feed_divs.length + " len 0");

      
  }
    
  //$(document).ready(function() {
      /* new app(); */
  window.onload = doLoad;
  //})
      
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

  function focusNews() {
    
    visibility.login = false;
    visibility.register = false;
    visibility.newsfeed = true;
    visibility.home = false;
    visibility.form_exercise = false;
    visibility.form_message = false;
    visibility.form_workout = false;
    
    
  }
  
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

  function focusFormExercise() {
    visibility.login = false;
    visibility.register = false;
    visibility.newsfeed = true;
    visibility.home = false;
    visibility.banner = true;
    visibility.form_exercise = true;
    visibility.form_message = false;
    visibility.form_workout = false;
  }

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

  function focusFormWorkout() {
    visibility.login = false;
    visibility.register = false;
    visibility.newsfeed = true;
    visibility.home = false;
    visibility.banner = true;
    visibility.form_exercise = false;
    visibility.form_message = false;
    visibility.form_workout = true;
  }

  function formSubmitMessage() {
    var msg = document.getElementById("message_txt");
    //console.log(msg.value);
    var msg = msg.value;
    var pic = document.getElementById('myImg1');
    var pic = pic.src;

    var obj = JSON.parse(subtreeStr);

    obj.show_message = true;
    obj.show_workout = false;
    obj.show_exercise = false;
    obj.visible = true;
    obj.message = msg;
    obj.message_obj_message = msg;
    obj.message_obj_from = "John Doe"
    obj.picture_large = pic;

    //console.log(obj.length + " len");
    
    var b = setMessage(obj, msg);

    insertFeed(b);
    document.getElementById("message_txt").value = "";
    console.log(msg);
    focusNews();
  }

  function formSubmitWorkout() {

  }

  function formSubmitExercise() {

  }

  /* --------- support fn -------------  */

function preview_image(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('myImg1');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

  


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
      console.log(feed_divs.length + " len 0");

      
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

  function focusNews(obj=null) {
    
    visibility.login = false;
    visibility.register = false;
    visibility.newsfeed = true;
    visibility.home = false;
    visibility.form_exercise = false;
    visibility.form_message = false;
    visibility.form_workout = false;
    
    if (obj !== null) {
      if (obj.show_message) {
        //insertFeed(obj);
        testInsertMsg();
        return;
      }
      if (obj.show_workout) {
        //insertFeed(obj);
        testInsertWorkout();
        return;
      }
      if (obj.show_exercise) {
        //insertFeed(obj);
        testInsertExercise();
        return;
      }
    }
    insertFeed(subtree);
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



//console.log(data);

function doLoad() {

  inx = [];
  for (let x = 0; x < feed_limit; x++) {
    inx.push(x);
  }

  console.log({inx});

  visibility = new Vue({
    el: '#visibility',
    data: function () {
      return {
        login: false,
        register: false,
        newsfeed: false,
        home: true,
        banner: true,
        form_message: false,
        form_exercise: false,
        form_workout: false,

        message: "",
        listx: inx
      }
      
    },
    methods: {
      classOption: function (i) {
        //console.log(i);
        const x = Boolean(i);
        if (x === true) return 'visi';
        else return 'invis';
      },
      makeId: function (num, prefix="feed_num_") {
        return prefix + num;
      }
    }
  });

  //makeFeedComponent();
  makeInvocation();
  

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


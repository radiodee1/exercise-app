function doLoad() {

instance = new Vue({
      
  el: '#components',
  data: {
    tree: tree.feed,
  },
  
  
  methods: {
    
    forceUpdate: function () {
      
      this.$forceUpdate();
      console.log("at force update...");
    },
    
    classWorkout: function (i) {
      //console.log(i);
      let x = Boolean ( i);
      if (x === true) return 'visi';
      else return 'invis';
    },
    classMessage: function (i) {
      //console.log(i);
      let x = Boolean( i);
      if (x === true) return 'visi';
      else return 'invis';
    },
    classExercise: function (i) {
      //console.log(i);
      let x = Boolean( i);
      if (x === true) return 'visi';
      else return 'invis';
    },
    classCard: function (i) {
      //console.log(i);
      let x = Boolean( i);
      if (x === true) return 'visi';
      else return 'invis';
    }
    
  },

  
});
//console.log(data);

//function doLoad() {
    
      

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
            const x = Boolean(i);
            if (x === true) return 'visi';
            else return 'invis';
          },
        }
      });

      //makeFeedComponent(); // docs_v
      //makeInvocation();
      

      
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

  
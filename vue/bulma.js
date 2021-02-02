
//const data = require("./bulma_populate.js");

//console.log(data);

function doLoad() {

    var app = new Vue({
      el: '#app',
      data: {
        message: 'Hello World!'
      }
    });

      listing = new Vue({
        el: '#listing',
        data: data,
        methods: {
          addNewFeed: function () {
            data.feed.push(tree2.feed[0]);
            console.log(data.feed.length + " is length.");
          },
          forceUpdate: function () {
            this.$forceUpdate();
            console.log("at force update...");
            this.index_item += 1;
          },
          
          classWorkout: function (i) {
            //console.log(i);
            var x = Boolean(i.show_workout);
            if (x === true) return 'visi';
            else return 'invis';
          },
          classMessage: function (i) {
            //console.log(i);
            var x = Boolean(i.show_message);
            if (x === true) return 'visi';
            else return 'invis';
          },
          classExercise: function (i) {
            //console.log(i);
            var x = Boolean(i.show_exercise);
            if (x === true) return 'visi';
            else return 'invis';
          }
          
        },
        computed: {
          // none here
        }
      });

      visibility = new Vue({
        el: '#visibility',
        data: {
          login: false,
          register: false,
          newsfeed: false,
          home: true,
          banner: true
        }
      });

      listing.feed.push(tree2.feed[0]);
      //listing.feed[0].show_workout = true;
      listing.forceUpdate();
  }
    
  //$(document).ready(function() {
      /* new app(); */
  doLoad();
  //})
      
  function focusRegister() {
    visibility.register = true;
    visibility.login = false;
    visibility.newsfeed = false;
    visibility.home = false;
  }

  function focusLogin() {
    visibility.login = true;
    visibility.register = false;
    visibility.newsfeed = false;
    visibility.home = false;
  }

  function focusNews() {
    visibility.login = false;
    visibility.register = false;
    visibility.newsfeed = true;
    visibility.home = false;
  }
  
  function focusReset() {
    visibility.login = false;
    visibility.register = false;
    visibility.newsfeed = false;
    visibility.home = true;
    visibility.banner = true;
  }

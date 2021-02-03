
//const data = require("./bulma_populate.js");

//console.log(data);

function doLoad() {
    

      listing = new Vue({
        el: '#listing',
        data: data,
        methods: {
          addNewFeed: function () {
            this.$data.feed.push(tree2.feed[0]);
            console.log(data.feed.length + " is length.");
          },
          forceUpdate: function () {
            this.message = "";
            
            this.$forceUpdate();
            console.log("at force update...");
          },
          watchFeed: function () {
            z = [];
            for( x = 0; x < this.feed.length; x ++) {
              z.push('this.feed[x].visible')
              //this.$watch(() => this.feed[x], this.forceUpdate);
            }
            console.log(z);
            
            this.$watch(() => z, this.forceUpdate);
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
          },
          classCard: function (i) {
            //console.log(i);
            var x = Boolean(i.visible);
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

      //listing.addNewFeed();
      //listing.feed[0].show_workout = true;
      listing.watchFeed();
      listing.forceUpdate();
      
      //listing.$set(this.data, 'newid', tree2);
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


function doLoad() {
    

      const listing = {
        
        data() { return data } ,
        methods: {
          addNewFeed: function () {
            this.$data.feed.push(tree2.feed[0]);
            console.log(data.feed.length + " is length.");
          },
          
          doUpdate: function () {
            this.message = "";
            
            this.$forceUpdate();
            console.log("at force update...");
          },
          
          watchFeed: function () {
            z = [];
            for( x = 0; x < this.$data.feed.length; x ++) {
              z.push(this.$data.feed[x])
              //this.$watch(() => this.feed[x], this.forceUpdate);
            }
            console.log(z);
            
            this.$watch(() => z, this.doUpdate);
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
      };
      const subListing = Vue.createApp(listing);
      appListing = subListing.mount('#listing');

      
      const visibility = {
        data() { return  {
          login: false,
          register: false,
          newsfeed: false,
          home: true,
          banner: true
        } }
      };

      const subVisibility = Vue.createApp(visibility);
      appVisibility = subVisibility.mount('#visibility');

      vm = Vue.createApp({});
      
      vm.component('feedtemplate', {
        data() {
          return {
            article: tree.feed[0]
          }
        },
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
        template: template 
      });
      appVm = vm.mount('#feeditem');
      
      


     
      appListing.addNewFeed();
      //listing.feed[0].show_workout = true;
      
      appListing.watchFeed();
      appListing.doUpdate();
      
      //listing.$set(this.data, 'newid', tree2);
  }
    
  //$(document).ready(function() {
      /* new app(); */
  window.onload = doLoad;
  //})
      
  function focusRegister() {
    appVisibility.$data.register = true;
    appVisibility.$data.login = false;
    appVisibility.$data.newsfeed = false;
    appVisibility.$data.home = false;
  }

  function focusLogin() {
    appVisibility.$data.login = true;
    appVisibility.$data.register = false;
    appVisibility.$data.newsfeed = false;
    appVisibility.$data.home = false;
  }

  function focusNews() {
    appVisibility.$data.login = false;
    appVisibility.$data.register = false;
    appVisibility.$data.newsfeed = true;
    appVisibility.$data.home = false;
  }
  
  function focusReset() {
    appVisibility.$data.login = false;
    appVisibility.$data.register = false;
    appVisibility.$data.newsfeed = false;
    appVisibility.$data.home = true;
    appVisibility.$data.banner = true;
  }

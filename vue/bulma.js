
//const data = require("./bulma_populate.js");

console.log(data);

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
            data.feed.push(tree);
          }
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

      //listing.feed[0].show_workout = true;
      listing.$forceUpdate();
  }
    
  $(document).ready(function() {
      /* new app(); */
      doLoad();
  })
      
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


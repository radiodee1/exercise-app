

//console.log(data);

function doLoad() {
    
      

      visibility = new Vue({
        el: '#visibility',
        data: {
          login: false,
          register: false,
          newsfeed: false,
          home: true,
          banner: true
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

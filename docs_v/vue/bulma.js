function doLoad() {
  makePopulate();

  instance = new Vue({
        
    el: '#components',
    data:  {
      //tree: feed, //.slice().reverse(), //tree.feed, // [],
      //watch: true,
    },
    watch: {
      
      
    },
    
    computed: {
      tree: function () {
        return this.iterateFeed();
        //return this.tree;
        //return feed.slice();
      }
    },
    
    methods: {
      
      forceUpdate: function () {
        console.log("at force update...");
        const temp = this.tree;
        console.log({temp});
        //self.iterateFeed();
        this.$forceUpdate();
      },
      classWorkout: function (i) {
        //console.log(i);
        const x = Boolean ( i);
        if (x == true) return 'visi';
        else return 'invis';
      },
      classMessage: function (i) {
        //console.log(i);
        const x = Boolean( i);
        if (x == true) return 'visi';
        else return 'invis';
      },
      classExercise: function (i) {
        //console.log(i);
        const x = Boolean( i);
        if (x == true) return 'visi';
        else return 'invis';
      },
      classCard: function (i) {
        console.log("card " + i);
        const x = Boolean( i);
        if (x == true) return 'visi';
        else return 'invis';
      },
      
      
      iterateFeed: function () {
        const copy = feed.slice();
        const limit = copy.length;
        const out = [];
        for (let x = 0; x < limit; x ++) {
          out[x] = {};
          for(key in copy[x]) {
          
            if (typeof copy[x][key] !== "boolean" && copy[x][key] !== null ) {
              out[x][key] = (' ' + copy[x][key]).slice(1);
              //console.log(x + " " + key + " " + feed[x][key] );
            }
            else if (copy[x][key] === null) {
              out[x][key] = null;
            }
          }
          //this.$forceUpdate();

        }
        return out;//.slice();
      }
      
    },

    
});


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

instance.$watch('tree', function () {
  //this.tree = feed;//.slice();
  console.log("watch exercise");
  this.forceUpdate();
});

  //makeFeedComponent(); // docs_v
  //makeInvocation();
}
    
window.onload = doLoad;
  
      
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

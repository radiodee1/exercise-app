


tree = {
    index_item: 0,

    feed: 
    [ // list of feed items...
      {
        show_message: true,
        show_exercise: true,
        show_workout: false,
        
        picture_large: null,
        picture_small: null,

        message: "hello-world",

        messsage_obj : { //big message
          from: "",
          to: "",
          message: ""
        },
        exercise_obj : { //exercise post
          reps: "",
          weight: "",
          label: ""
        },
        workout_obj: { // combined exercises
          exercise_list: [
            { exercise_id: 0 , reps: "", weight: "", label: ""},
            { exercise_id: 1 , reps: "", weight: "", label: ""}
          ]
        },
        message_list: [ // little messages
          { message: "one message." },
          { message: "another message."}
        ]
      }
    ]
    
  };

  tree2 = {

    feed: 
    [ // list of feed items...
      {
        show_message: true,
        show_exercise: true,
        show_workout: false,
        
        picture_large: null,
        picture_small: null,

        message: "hello-world",

        messsage_obj : { //big message
          from: "",
          to: "",
          message: ""
        },
        exercise_obj : { //exercise post
          reps: "",
          weight: "",
          label: ""
        },
        workout_obj: { // combined exercises
          exercise_list: [
            { exercise_id: 0 , reps: "", weight: "", label: ""},
            { exercise_id: 1 , reps: "", weight: "", label: ""}
          ]
        },
        message_list: [ // little messages
          { message: "one message." },
          { message: "another message."}
        ]
      }
    ]
    
  };



data = tree;
data.feed.push(tree2.feed[0]);
data.feed[0].show_workout = true;

//console.log(data.feed);
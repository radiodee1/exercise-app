


tree = {

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
data.feed.push(tree.feed[0]);

//console.log(data.feed);
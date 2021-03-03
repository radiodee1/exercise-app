var sql = require('./sql_populate.js');

var update = {
    name : "friends",
    change : [
        'status',
        'date'
    ],
    ident: [
        'id',
        'user_id'
    ]
};

const feed_all = [
    "visible",

    "num",

    "date_now",

    "show_message",
    "show_exercise",
    "show_workout",

    "picture_large",
    "picture_small",

    "message",

    "from_user_id",

    "message_obj_from",
    "message_obj_to",
    "message_obj_message",
    
    "exercise_obj_message",
    
    "workout_obj_exercise_list",

    "message_list",
]

//x = sql.selectLeftOuterJoin('profiles', 'friends',update.change, update.ident, 'status = id');
x = sql.sqlMakeFriendFeedSelect(feed_all, 1);
console.log(x);
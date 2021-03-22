var sql = require('./sql_populate.js');

var update = {
    //name : "friends",
    profiles : [
        //'status',
        'date'
    ],
    friends : [
        'id',
        'user_id',
        'friend_user_id',
        'friend_status'
    ]
};

const feed_all = [
    //"visible",

    "num",

    "date_now",

    //"show_message",
    //"show_exercise",
    //"show_workout",

    //"picture_large",
    //"picture_small",

    //"message",

    "from_user_id",

    //"message_obj_from",
    //"message_obj_to",
    //"message_obj_message",
    
    //"exercise_obj_message",
    
    //"workout_obj_exercise_list",

    //"message_list",
    //"COUNT(from_user_id)"
]

const user_all = [
    'firstname',
    'lastname',
    //'address',
    //'city',
    //'state',
    //'zip',
    //'email',
    'username',
    //'password',
    //'height_inches',
    //'weight_lbs',
    'id',
    //'cookie',
    //'date',
    //'picture'
];

x = sql.selectLeftOuterJoin('profiles', 'friends',user_all, update.friends, 't2.friend_user_id = t1.id');
//x = sql.sqlMakeFriendSearchSelect(feed_all, 25);
console.log(x);

console.log('\n');

//x = sql.selectLeftOuterJoinRaw(0, 1715057981)

//console.log(x);


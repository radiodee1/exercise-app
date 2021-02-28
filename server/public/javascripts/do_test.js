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

x = sql.selectLeftOuterJoin('profiles', 'friends',update.change, update.ident, 'status = id');

console.log(x);
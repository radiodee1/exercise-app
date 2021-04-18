const sql = require("./sql_populate.js");

//insert
likes = {
    name:"likes",
    columns_list: ['post_id', 'from_user_id'],
    mult_rows: true,
    values_list: [
        [1111, 2222],
        [3333, 4444],
        [8888, 9999]
    ]
};

//select
post_ids = {
    name: "likes",
    columns_list: ['*'],
    mult_rows: false
}


//x = sql.makeInsertCrypt(profiles.name, profiles.columns_list, profiles.values_list, profiles.mult_rows);

x = sql.makeSelect("feed", ["*"], "", false);

console.log(x);

con = sql.connection();

//sql.xquery(con, x); // this will insert 5 rows...

//x = sql.makeSelect(post_ids.name, post_ids.columns_list, "", post_ids.mult_rows);

y = sql.xquery(con, x);

sql.end(con);

y.then(xx => {console.log(xx)});

console.log(y);
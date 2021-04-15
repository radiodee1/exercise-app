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

profiles = {
    name:"profiles",
    columns_list: [
        "firstname", 
        "lastname", 
        "address", 
        "city", 
        "state", 
        "zip", 
        "email", 
        "username", 
        "password", 
        "height_inches",  
        "weight_lbs"
    ],
    mult_rows: true,
    values_list : [
        [
            "Joseph", 
            "Woolsey", 
            "127 Prospect St. #2", 
            "Kingston", 
            "NY", 
            "12401", 
            "j.woolsey@gmail.com", 
            "woolsey", 
            "xx", 
            "14",  
            "19"
        ],
        [
            "Rod", 
            "Stewart", 
            "173-24 Croydon Rd.", 
            "Queens", 
            "NY", 
            "12345", 
            "rod@aol.com", 
            "rodney", 
            "xx", 
            "73",  
            "150"
        ],
        [
            "Donald", 
            "Duck", 
            "1234 Looney Rd.", 
            "Hannah", 
            "Detroit", 
            "12345", 
            "d.duck@hannah.barberra.com", 
            "mansion", 
            "xx", 
            "65",  
            "230"
        ],
        [
            "Buggs", 
            "Bunney", 
            "12345 Looney Rd.", 
            "Hannah", 
            "Detroit", 
            "12345", 
            "bbunny@hannah.barberra.com", 
            "buggs", 
            "xx", 
            "48",  
            "50"
        ],
        [
            "Elmer", 
            "Fudd", 
            "1 Mansion Way", 
            "Yacht", 
            "Michigan", 
            "54321", 
            "elmer.j.fudd@milionair.com", 
            "fuddj", 
            "xx", 
            "48",  
            "60"
        ]
    ]
};


x = sql.makeInsertCrypt(profiles.name, profiles.columns_list, profiles.values_list, profiles.mult_rows);

console.log(x);

con = sql.connection();

//sql.xquery(con, x); // this will insert 5 rows...

//x = sql.makeSelect(post_ids.name, post_ids.columns_list, "", post_ids.mult_rows);

//sql.xquery(con, x);

sql.end(con);
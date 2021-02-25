const sql = require("./sql_populate.js");

const user = {};

user.firstname = 'firstname';
user.lastname = 'lastname';
user.address = 'address';
user.city = 'city';
user.state = 'state';
user.zip = 'zip';

user.email = 'email';
user.username = 'username';
user.password = 'password';


console.log(user);

const profile = {
    name:"profiles",
    columns_list: [
        'firstname',
        'lastname',
        'address',
        'city',
        'state',
        'zip',
        'email',
        'username',
        'password',
        
    ],
    mult_rows: false,
    values_list: [
        user.firstname,
        user.lastname,
        user.address,
        user.city,
        user.state,
        user.zip,
        user.email,
        user.username,
        user.password
    ]
};

//x = sql.makeInsertFormat(profile.name, profile.columns_list, profile.values_list, profile.mult_rows);
//console.log(x);

const profile2 = {
    name: "profiles",
    columns_list: ['firstname', 'address','id'],
    mult_rows: false,
    where_clause: " where firstname = 'firstname' "
};

x = sql.makeSelectFormat(profile2.name, profile2.columns_list, profile2.where_clause, false);

const ob = {
    firstname: "David",
    lastname: "Liebman",
    address: "123 Spruce st.",
    city: "Kingston",
    state: "NY",
    zip: "12401",
    email: "d.c.l@gmail.com",
    username: "xliebman",
    password: "xx"
};

x = sql.sqlInsertObjJSON(ob,'profiles');

//x = sql.sqlSelectObjJSON(ob, 'profiles', "where id=7");

con = sql.connection();
sql.query(con, x);
sql.end(con);

//////////////////////////

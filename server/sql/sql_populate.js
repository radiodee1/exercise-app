const mysql = require('mysql');
var Promise = require('promise');


module.exports = {
    makeInsert,
    makeInsertFormat,
    makeSelect,
    makeSelectFormat,
    //query,
    xquery,
    connection,
    end,
    modSelectFunction,
    sqlInsertObjJSON,
    sqlSelectObjJSON,
    selectLeftOuterJoin,
    sqlMakeUpdate,
    sqlMakeFriendFeedSelect
}


function connection() {
    var mysql = require('mysql');

    const config = require('../../mysql-login.js');

    //console.log(config)

    var con = mysql.createConnection({
        host: config.host,
        user: config.user,
        port: config.port,
        password: config.password,
        database: "web",
    });

    return con;
}


function makeInsert(table_name, columns_list, values_list, mult_rows = false) {

    xx = "";
    xx = xx + "INSERT INTO `";
    xx = xx + table_name + "` ";
    xx = xx + " ( ";
    for (var i = 0; i < columns_list.length; i++) {
        xx = xx + " `" + columns_list[i] + "`";
        if (i < columns_list.length - 1) xx = xx + ",";
    }
    xx = xx + " ) ";
    xx = xx + " VALUES ";
    if (mult_rows == false) {
        xx = xx + " ( ";
        for (var i = 0; i < values_list.length; i++) {
            xx = xx + " '" + values_list[i] + "'";
            if (i < values_list.length - 1) xx = xx + ",";
        }
        xx = xx + " ) "
    }
    else {
        for (var j = 0; j < values_list.length; j++) {
            xx = xx + " ( ";
            for (var i = 0; i < values_list[j].length; i++) {
                xx = xx + " '" + values_list[j][i] + "'";
                if (i < values_list[j].length - 1) xx = xx + ",";
            }
            xx = xx + " ) "
            if (j < values_list.length - 1) xx = xx + ", "
        }
    }
    return xx
}

function makeInsertFormat(table_name, columns_list, values_list, mult_rows = false) {

    xx = "";
    xx = xx + "INSERT INTO ";
    xx = xx + table_name + " ";
    xx = xx + " ( ";
    for (var i = 0; i < columns_list.length; i++) {
        xx = xx + " " + columns_list[i] + "";
        if (i < columns_list.length - 1) xx = xx + ",";
    }
    xx = xx + " ) ";
    xx = xx + " VALUES (";
    for (var i = 0; i < columns_list.length; i++) {
        xx = xx + " ? ";
        if (i < columns_list.length - 1) xx = xx + ",";

    }
    xx = xx + " )"
    //console.log(xx);
    yy = mysql.format(xx, values_list);
    return yy;
}

function makeSelect(table_name, columns_list, where_clause = '', mult_rows = false) {

    xx = "";
    xx = xx + "SELECT DISTINCT";

    for (var i = 0; i < columns_list.length; i++) {
        xx = xx + " " + columns_list[i];
        if (i < columns_list.length - 1) xx = xx + ",";
    }

    xx = xx + " FROM " + table_name + " ";
    xx = xx + where_clause;

    return xx
}

function makeSelectFormat(table_name, columns_list, where_clause = '', mult_rows = false) {

    xx = "";
    xx = xx + "SELECT DISTINCT";

    for (var i = 0; i < columns_list.length; i++) {
        xx = xx + " " + columns_list[i];
        if (i < columns_list.length - 1) xx = xx + ",";
    }

    xx = xx + " FROM " + table_name + " ";
    xx = xx + where_clause;

    return xx
}

/*
function query(connection, sql, mod=modSelectFunction) {
    var m = "";
    con = connection;
    if (!connection._connectionCalled) {
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            //console.log("sql run");
            //console.log(" here " + fields);

            m = mod(result);
            //console.log(m + " m " + m.length);

            if (m.length > 0) return m;
            
        });
    }
    else {

        con.connect(function(err) {
            if (err) throw err;
            //console.log("Connected!");

            con.query(sql, function (err, result, fields) {
                if (err) throw err;
                //console.log("sql run " + result);
                //console.log("x here " );
                m = mod(result);
                //console.log(m + " m " + m.length);
                if (m.length > 0) return m;
            });
            
            
            
        });
    }
    //console.log("m " + mm);
    return mm;
}
*/

function xquery(connection, sql, mod = modSelectFunction) {
    var m = "";
    var mm = "";
    var promise = null;
    con = connection;
    if (!connection._connectionCalled) {
        promise = new Promise(function (mresolve, mreject) {
            con.query(sql, function (err, result, fields) {
                if (err) throw err;
                //console.log("sql run 1");
                //console.log(" here " + fields);
                m = mod(result);
                //m = mod(result);
                //console.log(m + " m " + m.length);
                mresolve(m);
                //if (m.length > 0) return m;
                //return m;
            });
        });


    }
    else {

        promise = new Promise(function (mresolve, mreject) {
            con.connect(function (err) {
                if (err) throw err;
                //console.log("Connected!");

                con.query(sql, function (err, result, fields) {
                    if (err) throw err;
                    //console.log("sql run 2 " + result);
                    //console.log("x here " );
                    m = mod(result);
                    //console.log(m + " m " + m.length);
                    //if (m.length > 0) return m;
                    mresolve(m);

                    //return m;
                });

            });

        });

    }
    //console.log("m " + m);
    return promise;//  promise;
}

function modSelectFunction(i) {
    return i;
}



function end(con) {
    con.end((err) => {
        //end connection.
    });
}

/* ---------------- very specific fn ------------------ */

function sqlInsertObjJSON(obj, table_name) {
    //console.log(obj);
    //console.log("----");
    sql_in = {
        name: table_name,
        columns_list: [],
        values_list: []

    };
    for (key in obj) {
        //console.log(key);
        sql_in.columns_list.push(key);
        sql_in.values_list.push(obj[key]);
    }
    //console.log(sql_in);
    x = makeInsertFormat(sql_in.name, sql_in.columns_list, sql_in.values_list, false);
    return x;
}

function sqlSelectObjJSON(obj, table_name, where_clause = "") {
    sql_in = {
        name: table_name,
        columns_list: [],
        //values_list: []

    };
    for (key in obj) {
        //console.log(key);
        sql_in.columns_list.push(key);
        //sql_in.values_list.push(obj[key]);
    }
    //console.log(sql_in);
    x = makeSelectFormat(sql_in.name, sql_in.columns_list, where_clause, false);
    return x;
}

function selectLeftOuterJoin(table_name_left, table_name_right, table_name_left_columns, table_name_right_columns, on_clause) {
    let columns_list_left = [];
    let columns_list_right = [];
    let table_name_left_short = "t1";
    let table_name_right_short = "t2";
    for (let i = 0; i < table_name_left_columns.length; i++) {
        columns_list_left.push(table_name_left_short + "." + table_name_left_columns[i]);
    }
    for (let i = 0; i < table_name_right_columns.length; i++) {
        columns_list_right.push(table_name_right_columns[i]);
        columns_list_left.push(table_name_right_short + "." + table_name_right_columns[i]);

    }

    let xx = "";
    xx = xx + "SELECT ";
    for (let i = 0; i < columns_list_left.length; i++) {
        xx = xx + columns_list_left[i];
        if (i < columns_list_left.length - 1) {
            xx = xx + ", ";
        }
    }
    xx = xx + " ";
    xx = xx + "FROM " + table_name_left + " AS t1 LEFT JOIN ";//+ table_name_right + " ON ";
    xx = xx + "( ";
    xx = xx + " SELECT DISTINCT ";

    for (let i = 0; i < columns_list_right.length; i++) {
        xx = xx + columns_list_right[i];
        if (i < columns_list_right.length - 1) {
            xx = xx + ", ";
        }
    }
    xx = xx + " FROM " + table_name_right + " ";
    xx = xx + " ) AS t2 ON ";
    xx = xx + on_clause;

    return xx;
}

function sqlMakeUpdate(table_name, obj_identity, obj_change) {
    let xx = "";
    xx = xx + "UPDATE " + table_name + " SET ";

    let column_name = [];
    let column_value = [];
    for (let i in obj_change) {
        column_name.push(i);
        column_value.push(obj_change[i]);
    }
    for (let i = 0; i < column_value.length; i++) {
        xx = xx + " `" + column_name[i] + "` = ";
        if (typeof column_value[i] != "number") {
            xx = xx + " '" + column_value[i] + "' ";
        }
        else {
            xx = xx + " " + column_value[i] + " ";
        }
        if (i < column_value.length - 1) {
            xx = xx + " , ";
        }
    }

    xx = xx + " WHERE ";
    let change_name = [];
    let change_value = [];
    for (let i in obj_identity) {
        change_name.push(i);
        change_value.push(obj_identity[i]);
    }
    for (let i = 0; i < change_value.length; i++) {
        xx = xx + " `" + change_name[i] + "` = ";
        if (typeof change_value[i] != "number") {
            xx = xx + " '" + change_value[i] + "' ";
        }
        else {
            xx = xx + " " + change_value[i] + " ";
        }
        if (i < change_value.length - 1) {
            xx = xx + " AND "
        }
    }

    console.log(xx);
    return xx;
}

/*
function sqlMakeFriendFeedSelect2(feed_columns, profile_id ) {
    tablename_friends = "friends";
    tablename_feed = "feed";
    zz = "";
    zz = zz + "WHERE feed.from_user_id IN ( SELECT DISTINCT CONCAT(friends.user_id, ', ', friends.friend_user_id, ', ', " + profile_id + ") FROM friends WHERE "
    zz = zz + "( friends.user_id = "+ profile_id+ " OR friends.friend_user_id = " + profile_id + ") AND friends.friend_status = 'confirmed' ) ";
    zz = zz + "ORDER BY feed.date_now DESC ";

    xx = "";
    xx = xx + makeSelectFormat(tablename_feed, feed_columns, zz, false);
    return xx;
}
*/

function sqlMakeFriendFeedSelect(feed_columns, profile_id) {
    tablename_friends = "friends";
    tablename_feed = "feed";
    zz = "";
    zz = zz + "WHERE feed.from_user_id IN ( SELECT friends.user_id FROM friends WHERE ( friends.user_id = " + profile_id + " OR friends.friend_user_id = " + profile_id + " ) ";
    zz = zz + "AND friends.friend_status = 'confirmed'   ";

    zz = zz + "UNION SELECT friends.friend_user_id FROM friends  WHERE ( friends.user_id = " + profile_id + " OR friends.friend_user_id = " + profile_id + " ) ";
    zz = zz + "AND friends.friend_status = 'confirmed'   ";


    zz = zz + " ) ";
    zz = zz + "ORDER BY feed.date_now DESC ";

    xx = "";
    xx = xx + makeSelectFormat(tablename_feed, feed_columns, zz, false);
    return xx;
}
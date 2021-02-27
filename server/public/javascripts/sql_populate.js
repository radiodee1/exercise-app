const mysql = require('mysql');
var Promise = require('promise');


module.exports = {
    makeInsert,
    makeInsertFormat,
    makeSelect,
    makeSelectFormat,
    query,
    xquery,
    connection,
    end,
    modSelectFunction,
    sqlInsertObjJSON,
    sqlSelectObjJSON
}


function connection() {
    var mysql = require('mysql');

    const config = require('../../../mysql-login.json')

    console.log(config)

    var con = mysql.createConnection({
        host: config.host,
        user: config.user,
        port: config.port,
        password: config.password,
        database: "web",
    });

    return con;
}


function makeInsert(table_name, columns_list , values_list, mult_rows=false){
    
    xx = "";
    xx = xx + "INSERT INTO `";
    xx = xx + table_name + "` ";
    xx = xx + " ( " ;
    for (var i=0; i < columns_list.length; i ++){
        xx = xx + " `" + columns_list[i] + "`";
        if (i < columns_list.length -1) xx = xx + ",";
    } 
    xx = xx + " ) ";
    xx = xx + " VALUES ";
    if (mult_rows == false) {
        xx = xx + " ( ";
        for (var i=0; i < values_list.length; i ++) {
            xx = xx + " '" + values_list[i] + "'";
            if (i < values_list.length -1) xx = xx + ",";
        }
        xx = xx + " ) "
    }
    else {
        for(var j=0; j < values_list.length; j ++) {
            xx = xx + " ( ";
            for (var i=0; i < values_list[j].length; i ++) {
                xx = xx + " '" + values_list[j][i] + "'";
                if (i < values_list[j].length - 1) xx = xx + ",";
            }
            xx = xx + " ) "
            if (j < values_list.length -1) xx = xx + ", "
        }
    }
    return xx
}

function makeInsertFormat(table_name, columns_list , values_list, mult_rows=false){
    
    xx = "";
    xx = xx + "INSERT INTO ";
    xx = xx + table_name + " ";
    xx = xx + " ( " ;
    for (var i=0; i < columns_list.length; i ++){
        xx = xx + " " + columns_list[i] + "";
        if (i < columns_list.length -1) xx = xx + ",";
    } 
    xx = xx + " ) ";
    xx = xx + " VALUES (";
    for (var i = 0; i < columns_list.length; i ++) {
        xx = xx + " ? ";
        if (i < columns_list.length -1) xx = xx + ",";

    }
    xx = xx + " )"
    console.log(xx);
    yy = mysql.format(xx, values_list);
    return yy;
}

function makeSelect(table_name, columns_list , where_clause='', mult_rows=false){
    
    xx = "";
    xx = xx + "SELECT DISTINCT";
    
    for (var i=0; i < columns_list.length; i ++){
        xx = xx + " " + columns_list[i];
        if (i < columns_list.length -1) xx = xx + ",";
    } 
    
    xx = xx + " FROM " + table_name + " ";
    xx = xx + where_clause;

    return xx
}

function makeSelectFormat(table_name, columns_list , where_clause='', mult_rows=false){
    
    xx = "";
    xx = xx + "SELECT DISTINCT";
    
    for (var i=0; i < columns_list.length; i ++){
        xx = xx + " " + columns_list[i];
        if (i < columns_list.length -1) xx = xx + ",";
    } 
    
    xx = xx + " FROM " + table_name + " ";
    xx = xx + where_clause;

    return xx
}


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

function xquery(connection, sql, mod=modSelectFunction) {
    var m = "";
    var mm = "";
    var promise = null;
    con = connection;
    if (!connection._connectionCalled) {
        promise =  new Promise(function (mresolve, mreject) {
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

        promise =  new Promise(function (mresolve, mreject) {
            con.connect(function(err) {
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
    //i = JSON.parse(JSON.stringify(i));
    
    return i;
}



function end(con) {
    con.end((err) => {
        //end connection.
    });
}

/* ---------------- very specific fn ------------------ */

function sqlInsertObjJSON(obj, table_name) {
    console.log(obj);
    console.log("----");
    sql_in = {
        name: table_name,
        columns_list: [],
        values_list: []

    };
    for (key in obj) {
        console.log(key);
        sql_in.columns_list.push(key);
        sql_in.values_list.push(obj[key]);
    }
    console.log(sql_in);
    x = makeInsertFormat(sql_in.name, sql_in.columns_list, sql_in.values_list, false);
    return x;
}

function sqlSelectObjJSON(obj, table_name, where_clause="" ) {
    sql_in = {
        name: table_name,
        columns_list: [],
        //values_list: []

    };
    for (key in obj) {
        console.log(key);
        sql_in.columns_list.push(key);
        //sql_in.values_list.push(obj[key]);
    }
    console.log(sql_in);
    x = makeSelectFormat(sql_in.name, sql_in.columns_list, where_clause, false);
    return x;
}
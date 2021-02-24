const mysql = require('mysql');

module.exports = {
    makeInsert,
    makeInsertFormat,
    makeSelect,
    makeSelectFormat,
    query,
    connection,
    end,
    modSelectFunction
    
}


function connection() {
    var mysql = require('mysql');

    const config = require('../mysql-login.json')

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
    
    con = connection;
    if (!connection._connectionCalled) {
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log("sql run");
            
            mod(result);
            
        });
    }
    else {

        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");

            con.query(sql, function (err, result, fields) {
                if (err) throw err;
                console.log("sql run");

                mod(result);
                
            });
            
            
            
        });
    }
    
}

function modSelectFunction(i) {
    i = JSON.parse(JSON.stringify(i));
    console.log(i);
}



function end(con) {
    con.end((err) => {
        //end connection.
    });
}

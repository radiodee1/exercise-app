var express = require('express');
const jwt = require('jsonwebtoken');
const axios = require("axios").default;
//var usersRouterGet = express.Router();
//var usersRouterPost = express.Router();
//var usersRouterFriendGet = express.Router();
var sql = require('../public/javascripts/sql_populate.js');
//require('promise');
var control = require('../public/javascripts/sql_control.js');

var app = express();
const bcrypt = require('bcrypt');

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;


const user_all = {
  firstname: "John",
  lastname: "Doe",
  address: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  username: "",
  password: "",
  height_inches: 74,
  weight_lbs: 150,
  id: 0,
  cookie: "",
  date: null,
  picture: null
};

//var yy = null;


/* GET users listing. */
module.exports.usersRouterGet = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  var yy = null;
  const columns = ['*'];
  //for (let i in user_all) {
  //  columns.push(i);
  //}
  //let yy = null;
  let x = sql.makeSelect('profiles', columns, '', false);
  let con = control.connection();
  //console.log(con);
  try {
    let y = control.xquery(con, x);
    //console.log("----");
    await y.then(function (value) {
      //console.log(value);
      yy = JSON.stringify(value);
      //console.log(yy + " <---");

      if (yy.length === 0) {
        yy = [{}];
      }
      res.send(yy);
      control.end(con);

    });

  }
  catch (v) {
    console.log(v);
  }
  //console.log(yy);
  return yy;
}

module.exports.usersRouterGetUsername = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  var yy = null;
  const columns = ['*'];
  //for (let i in user_all) {
  //  columns.push(i);
  //}
  //let yy = null;
  const where_clause = ` WHERE username = '${req.query.username}' `;
  let x = sql.makeSelect('profiles', columns, where_clause, false);
  let con = control.connection();
  //console.log(con);
  try {
    let y = control.xquery(con, x);
    //console.log("----");
    await y.then(function (value) {
      //console.log(value);
      yy = JSON.stringify(value);
      res.send(yy);
      control.end(con);

    });

  }
  catch (v) {
    console.log(v);
  }
  //console.log(yy);
  return yy;
}

/* POST users listing. */

module.exports.usersRouterPost = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  let yy = null;
  //console.log(req.body);
  //console.log("---");

  const password = req.body.password;
  const hash = await bcrypt.hash(password, +SALT_ROUNDS);

  let body = { ...req.body, password: hash };


  let x = sql.sqlInsertObjJSON(body, 'profiles');
  let con = control.connection();
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      //req.body.password = "";

      //value = [req.body];

      //console.log(value);
      yy = JSON.stringify(value);
      //res.json(yy);
      //console.log(yy);

      let yyy = { ...body, id: JSON.parse(yy).insertId }
      //console.log(yyy);
      //console.log("^^^");
      res.send(JSON.stringify(yyy));
      control.end(con);

    });
  }
  catch (v) {
    console.log(v);
  }
  //return yy;
}


/* GET users listing. */


module.exports.usersRouterFriendGet = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  let profile_id = req.query.id;
  let out = [];
  const columns = ['*'];
  //for (let i in user_all) {
  //  columns.push(i);
  //}
  let x = sql.sqlMakeFriendSearchSelect(columns, profile_id);
  //let x = sql.makeSelect('profiles', columns, '', false);
  let con = control.connection();
  //console.log(con);
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      //console.log(value);
      let yy = JSON.stringify(value);
      //res.json(yy);
      control.end(con);
      //console.log(yy);
      out = yy;
    });
  }
  catch (v) {
    console.log(v);
  }
  //next();
  return out;
};


module.exports.usersRouterWeightPatch = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  let profile_id = req.body.ident.id;
  let weight = req.body.change.weight_lbs;

  let x = sql.sqlUserUpdateRaw(profile_id, weight);

  let con = control.connection();
  //console.log(con);
  try {
    let y = control.xquery(con, x);
    await y.then(function (value) {
      //console.log(value);
      let yy = JSON.stringify(value);
      //res.json(yy);
      //control.end(con);
      //console.log(yy);
      out = yy;
    });
  }
  catch (v) {
    console.log(v);
  }
  //next();
  return out;
}

module.exports.usersRouterPostLogin = async function (req, res, next) {
  res.set('Content-Type', 'application/json');
  //console.log(req.body.password + " <---");
  //console.log(req.body.username + " <###");
  const password = req.body.password;

  let y_val = null;

  user_list = ['*'];

  let x = sql.makeSelectFormat('profiles', user_list, `WHERE username = '${req.body.username}'`)
  //console.log(x);
  //console.log("#####");
  let con = control.connection();
  try {
    let y = control.xquery(con, x);
    await y.then(async function (value) {
      //console.log(value);
      let yy = JSON.stringify(value);

      y_val = JSON.parse(yy);
      //console.log(y_val);

      result = false;

      if (y_val.length > 0) {
        result = await bcrypt.compare(password, y_val[0].password);
      }
      if (result) {
        if (!y_val[0].firstname) {
          throw "Must have first name"
        }
        let dev = false;
        if (y_val[0].username == process.env.DEV_USERNAME) {
          dev = true;
        }
        y_val[0].isDevUser = dev;
        y_val[0].password = null;
        const user = y_val;
        //console.log("send user...");
        const data = { ...y_val[0], password: undefined };
        const token = jwt.sign(data, JWT_SECRET);
        console.log({ user, token });
        //return {user, token};
        //res.send({y_val, token});
        y_val = { user, token };
      }
      else if (!result) {
        //console.log("no result");
        y_val = { user: [{}], token: null };
        //return {y_val, null};
        throw "No good password"
      }
      control.end(con);

    });
  }
  catch (v) {
    console.log(v);
  }
  return y_val;
}

module.exports.usersRouterPostLoginFB = async function (req, res, next) {
  res.set('Content-Type', 'application/json');

  const access_token = req.body.access_token;
  let obj = null;
  let out = null;
  let userFB = null;
  user_list = ['*'];
  try {
    await axios.get(`https://graph.facebook.com/v10.0/me?fields=first_name,last_name,email,picture&access_token=${access_token}`)
      .then(async function (value) {
        console.log(value);
        userFB = value;
      })
  }
  catch (v) {
    console.log(v)
  }

  console.log(userFB.data);

  const username = userFB.data.email;

  let x = sql.makeSelectFormat('profiles', user_list, `WHERE username = '${username}'`)
  
  let con = control.connection();
  try {
    let y = control.xquery(con, x);
    await y.then(async function (value) {
      let yy = JSON.stringify(value);

      xx = JSON.parse(yy);
      
      result = false;

      if (xx.length > 0) {
        obj = xx.find(x => x.email == userFB.data.email);
      }
      if (obj) {
        if (!obj.username) {
          throw "Must have user name"
        }
        let dev = false;
        if (obj.username == process.env.DEV_USERNAME) {
          dev = true;
        }
        obj.isDevUser = dev;
        obj.password = null;

        const user = obj;
        const data = { ...obj, password: undefined };
        const token = jwt.sign(data, JWT_SECRET);
        
        out = { user, token };
        return out;
      }
      else if (!obj) {
        obj = {};
        
        obj.password = null;
        obj.firstname = userFB.data.first_name;
        obj.lastname = userFB.data.last_name;
        obj.username = userFB.data.email;
        obj.email = userFB.data.email;
        
        let x = sql.sqlInsertObjJSON(obj, 'profiles');
        try {
          let y = control.xquery(con, x);
          await y.then(function (value) {
            
            yy = JSON.stringify(value);

            const user = { ...obj, id: JSON.parse(yy).insertId, password: undefined }
            
            const token = jwt.sign(user, JWT_SECRET);
            out = {user, token}
          });
        }
        catch (v) {
          console.log(v);
        }
      }
      control.end(con);

    });
  }
  catch (v) {
    console.log(v);
  }
  return out;
}

module.exports.usersRouterPostDelete = async function (req, res, next) {
  res.set('Content-Type', 'application/json');

  const id = req.body.id;

  let y_val = null;

  const xuser = sql.sqlUserDeleteRaw(id);
  const xfeed = sql.sqlFeedDeleteRaw(id);
  const xfriend = sql.sqlFriendsDeleteRaw(id);

  let con = control.connection();
  try {
    let x = control.xquery(con, xuser);
    await x.then(async function (value) {
      //console.log(value);
      let xx = JSON.stringify(value);

      x_val = JSON.parse(xx);
      //console.log(x_val);

    });

    let y = control.xquery(con, xfeed);
    await y.then(async function (value) {
      //console.log(value);
      let yy = JSON.stringify(value);

      y_val = JSON.parse(yy);
      //console.log(y_val);

    });

    let z = control.xquery(con, xfriend);

    await z.then(async function (value) {
      //console.log(value);
      let zz = JSON.stringify(value);

      z_val = JSON.parse(zz);
      //console.log(z_val);

    });

    res.send({})
    control.end(con);
  }
  catch (v) {
    console.log(v);
  }
  return y_val;
  //next();
}

module.exports.FromJWT = async (token) => {
  try {
    const user = jwt.verify(token, JWT_SECRET);
    return user;
  } catch (error) {
    console.log({ error });
    return null;
  }

}
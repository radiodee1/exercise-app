//const { config } = require('dotenv');

require('dotenv').config({path:__dirname+ "/client/.env"});

module.exports  = {
    'host': process.env.VUE_APP_MYSQL_HOST, 
    'user': process.env.VUE_APP_MYSQL_USER,
    'password': process.env.VUE_APP_MYSQL_PASSWORD,
    'port': process.env.VUE_APP_MYSQL_PORT
}


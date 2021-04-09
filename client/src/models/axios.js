const axios  = require('axios').default;

require('dotenv').config({ path: __dirname + "./../../../client/.env" });

const API_ROOT = process.env.VUE_APP_BACKEND_URL + process.env.VUE_APP_BACKEND_PORT;

module.exports = {
    API_ROOT,
    api_get
}

async function api_get(url, obj) {
    //return fetch(API_ROOT + url).then(x => x.json());
    let response = null;
    await axios.get(API_ROOT + url, obj).then( x => {
        response =  x.data
        //return response;
    });
    return response;
}
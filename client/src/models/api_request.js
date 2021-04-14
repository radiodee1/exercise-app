const axios  = require('axios').default;

require('dotenv').config({ path: __dirname + "./../../../client/.env" });

//const Session = require("./Session");

import {Session} from './Session';

const API_ROOT = process.env.VUE_APP_BACKEND_URL + process.env.VUE_APP_BACKEND_PORT;

//let USER_TOKEN = "no-token";

/*
module.exports = {
    API_ROOT,
    api,
    api_fetch,
    api_get,
    api_post,
    api_patch,
    api_put,
    api_delete,
    api_options,
    api_axios
}
*/

export async function api(url, obj = {}, axios_verb = "fetch", options_headers = {} ) {
    let response = null;
    url = API_ROOT + url;
    
    options_headers = { headers: {Authorization: "Bearer " + Session.token}};
    
    //console.log(options_headers);
    
    if (axios_verb === "fetch") {
        response = await api_fetch(url, obj);
    }
    else if (axios_verb === "get") {
        response = await api_get(url, obj, options_headers);
    }
    else if (axios_verb === "post") {
        response = await api_post(url, obj, options_headers);
    }
    else if (axios_verb === "patch") {
        response = await api_patch(url, obj, options_headers);
    }
    else if (axios_verb === "put") {
        response = await api_put(url, obj, options_headers);
    }
    else if (axios_verb === "delete") {
        response = await api_delete(url, obj, options_headers);
    }
    else if (axios_verb === "options") {
        response = await api_options(url, obj, options_headers);
    }
    else if (axios_verb === "raw" || axios_verb === "axios") {
        response = await api_axios(url, obj, options_headers);
    }
    
    console.log(options_headers);
    //console.log(response.data);

    return response;
}

async function api_fetch(url, obj) {

    let response = null;
    await fetch( url, obj).then( x => {
        response =  x.json();
        //return response;
    });
    return response;
}

async function api_get(url, obj, headers) {
    //console.log(headers);
    //console.log("***");
    obj = { ...obj, ...headers}
    let response = null;
    await axios.get( url, obj, headers).then( x => {
        response =  x;
        //return response;
    });
    return response;
}

async function api_post(url, obj, headers) {

    let response = null;
    await axios.post( url, obj, headers).then( x => {
        response =  x;//.data;
        //return response;
    });
    return response;
}

async function api_patch(url, obj, headers) {

    let response = null;
    await axios.patch( url, obj, headers).then( x => {
        response =  x;//.data;
        //return response;
    });
    return response;
}

async function api_put(url, obj, headers) {

    let response = null;
    await axios.put( url, obj, headers).then( x => {
        response =  x;//.data;
        //return response;
    });
    return response;
}

async function api_delete(url, obj, headers) {

    let response = null;
    await axios.delete( url, obj, headers).then( x => {
        response =  x;//.data;
        //return response;
    });
    return response;
}

async function api_options(url, obj, headers) {

    let response = null;
    await axios.options( url, obj, headers).then( x => {
        response =  x;//.data;
        //return response;
    });
    return response;
}

async function api_axios(url, obj, headers) {

    let response = null;
    await axios({
        method: obj.method , 
        url: url, 
        data: obj.data, 
        headers: headers.headers
    }).then( x => {
        response =  x;//.data;
        //return response;
    });
    return response;
}
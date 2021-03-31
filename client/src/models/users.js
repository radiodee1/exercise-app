/* eslint-disable-x */

//import { response } from "../../../server/app";

let axios = require("axios").default;
//let Session = require("./Session");

//var items = [];

const port = process.env.VUE_APP_BACKEND_PORT;
const url = process.env.VUE_APP_BACKEND_URL;
console.log(port + " >" + process.env.PORT);

export async function PostUserLogin(username_in, password_in) {
    const username = username_in.trim();
    const password = password_in.trim();

    //const port = this.backend_port;
    //const url = this.backend_url;
    const user = {};

    const user_record = {
        "username" : username,
        "password" : password
    }
    //let success = false;
    await axios
        .post(url + port + "/users/login", user_record)
        .then(function (response_raw) {
            // handle success
            //console.log(response);
            let response = response_raw.data;// JSON.parse(response_raw.data);
            //console.log(response);
            //console.log("----");
            for (let i = 0; i < response.length; i++) {
                
                user.firstname = response[i].firstname;
                user.lastname = response[i].lastname;
                user.address = response[i].address;
                user.city = response[i].city;
                user.state = response[i].state;
                user.zip = response[i].zip;

                user.height_inches = response[i].height_inches;
                user.weight_lbs = response[i].weight_lbs;

                user.email = response[i].email;
                user.username = username;
                user.password = null;
                user.id = response[i].id;
                
            }
            //console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            
        });
    //this.focusNews();
    //console.log(user);
    return user;
}

export async function GetUserRegister(user) {
    const vm = this;
    //let success = false;
    
    //check if this (username) already exists!!
    let username_taken = false;
    await axios
        .get(url + port + "/users")
        .then(function (response_raw) {
            // handle success
            //console.log(response);
            let response = response_raw.data;// JSON.parse(response_raw.data);
            for (let i = 0; i < response.length; i++) {
                let username_saved = response[i].username;
                if (username_saved === null || username_saved === undefined) {
                    username_saved = "";
                }
                //console.log(username_saved + " " + username);
                if (username_saved.trim() === user.username.trim()) {
                    username_taken = true;
                //    vm.message_username_1 = true;
                }
            }
            //console.log(response);

            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            user.id = 0;
            vm.focusNews();

        })
        .then(function () {
            // always executed
            //focusNewsx();
        });
    return ! username_taken;
}

export async function PostUserRegister(record) {
    let rec = null;
    await axios
        .post(url + port + "/users/register", record)
        .then(function (response_raw) {
            // handle success

            //console.log(response_raw.data);
            let response = response_raw.data;// JSON.parse(response_raw.data);
            //record.id = response.insertId;
            record = response;
            //console.log(response);
            //Session.user.id = response.insertId;
            //success = true;
            rec = record;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            //if (success) {
                //vm.focusNews();
            //}
        });
    return rec;
}

export async function GetUserFriendList(user_id) {
    let response = null;
    const p_list = {
        params: {
            id: user_id,
        },
    };
    await axios
        .get(url + port + "/users/friends", p_list)
        .then(function (response_raw) {
            // handle success

            //console.log(response_raw.data);
            response = response_raw.data;// JSON.parse(response_raw.data);
            return response;
            //record.id = response.insertId;
            //console.log(vm.$root.user.id);
            //Session.user.id = response.insertId;
            //success = true;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            //if (success) {
                //vm.focusNews();
            //}
        });
    return response;
}

export async function GetUserDevList() {
    let list = [];
    await axios
        .get(url + port + "/users")
        .then(function (response_raw) {
            // handle success
            //console.log(response);
            let response = response_raw.data;// JSON.parse(response_raw.data);
            //console.log(response);
            //console.log("----");
            list = response;
            //console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            
        });
    return list;
}


export async function PatchStoreWeight(id, w) {
    const f_obj = {
        change: {
            weight_lbs: w,
        },
        ident: {
            id: id,

        },

    };
    let out = [];
    //console.log(f_obj);
    //console.log("----");
    await axios
        .patch(url + port + "/users/weight", f_obj)
        .then(function (response) {
            // handle success

            //console.log(response.data);
            response = response.data;// JSON.parse(response.data);
            out = response;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            
        });
    return out;
}
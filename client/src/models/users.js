/* eslint-disable-x */

const request = require('./api_request');


export async function GetUserRegister(user) {
    //const vm = this;
    //let success = false;
    const p_list = {
        params: {
            username: user.username,
        },
    };
    //check if this (username) already exists!!
    let username_taken = false;
    await request.api("/users/username", p_list, "get")
    //await axios.get(url + port + "/users/username", p_list)
        .then(function (response_raw) {
            // handle success
            //console.log(response);
            let response = response_raw.data;// JSON.parse(response_raw.data);
            console.log(response.length );
            console.log(response);
            if (response.length === 0) {
                username_taken = false;
            }
            else {
            
                let username_saved = response[0].username;
                if (username_saved === null || username_saved === undefined) {
                    username_saved = "";
                }
                
                if (username_saved.trim() === user.username.trim()) {
                    username_taken = true;
                
                }
            }
            

            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            user.id = 0;
            //vm.focusNews();

        })
        .then(function () {
            // always executed
            //focusNewsx();
        });
    return ! username_taken;
}

export async function PostUserRegister(record) {
    let rec = null;
    await request.api("/users/register", record, "post")
    //await axios.post(url + port + "/users/register", record)
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

    await request.api("/users/friends", p_list, "get")
    //await axios.get(url + port + "/users/friends", p_list)
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

    await request.api("/users", {}, "get")
    //await axios.get(url + port + "/users")
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
    await request.api("/users/weight", f_obj, "patch")
    //await axios.patch(url + port + "/users/weight", f_obj)
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

export async function PostUserDelete(id) {
    //let rec = null;
    const record = {
        id: id
    }
    await request.api("/users/delete", record, "post")
    //await axios.post(url + port + "/users/delete", record)
        .then(function (response_raw) {
            // handle success

            //console.log(response_raw.data);
            let response = response_raw.data;// JSON.parse(response_raw.data);
            //record.id = response.insertId;
            //record = response;
            console.log(response);
            //Session.user.id = response.insertId;
            //success = true;
            //rec = record;
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
    return;
}

export async function GetUserTypeList(name) {
    let list = [];
    const p_list = {
        params: {
            name: name,
        },
    };
    await request.api("/users/type", p_list, "get")
    //await axios.get(url + port + "/users")
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
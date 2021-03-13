let axios = require("axios").default;
//let Session = require("./Session");

//var items = [];

const port = process.env.VUE_APP_BACKEND_PORT;
const url = process.env.VUE_APP_BACKEND_URL;

export async function GetUserLogin(username_in, password_in) {
    const username = username_in.trim();
    const password = password_in.trim();

    //const port = this.backend_port;
    //const url = this.backend_url;
    const user = {};
    //let success = false;
    await axios
        .get(url + port + "/users")
        .then(function (response_raw) {
            // handle success
            //console.log(response);
            let response = JSON.parse(response_raw.data);
            for (let i = 0; i < response.length; i++) {
                let username_saved = response[i].username;
                let password_saved = response[i].password;
                if (username_saved === null || username_saved === undefined) {
                    username_saved = "";
                }
                if (password_saved === null || password_saved === undefined) {
                    password_saved = "";
                }
                //console.log(username_saved + " " + username);
                if (
                    username_saved.trim() === username.trim() &&
                    password_saved.trim() === password.trim()
                ) {
                    //success = true;
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
                    user.password = password;
                    user.id = response[i].id;
                    //Session.user = response[i];
                    //console.log(Session.user);
                }
            }
            //console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            //if (success) {
            //    console.log(vm.$root.user.id);
            //    vm.focusNews();
            //}
        });
    //this.focusNews();
    console.log(user);
    return user;
}

export async function GetUserRegister(user) {
    const vm = this;
    //let success = false;
    /*
    this.message_password_1 = false;
    this.message_username_1 = false;
    const firstname = this.firstname;
    //console.log(firstname);
    const lastname = this.lastname;
    const address = this.address;
    const city = this.city;
    const state = this.state;
    const zip = this.zip;
    const email = this.email;

    const feet = this.feet;
    const inches = this.inches;
    const lbs = this.lbs;

    const username = this.username;
    const password = this.password;
    const password2 = this.password2;

    const port = this.backend_port;
    const url = this.backend_url;
    

    if (
        password != password2 ||
        password2.length == 0 ||
        password.length == 0
    ) {
        //show an error message about the password.
        this.message_password_1 = true;
        return;
    }
    const id = 0;

    if (username_taken) {
        this.message_username_1 = true;
        return;
    }
    
    this.$root.user.firstname = firstname;
    this.$root.user.lastname = lastname;
    this.$root.user.address = address;
    this.$root.user.city = city;
    this.$root.user.state = state;
    this.$root.user.zip = zip;

    let num = +feet * 12 + +inches;

    if (typeof num !== "number") {
        num = 0;
    }
    this.$root.user.height_inches = num;
    this.$root.user.weight_lbs = lbs;

    this.$root.user.email = email;
    this.$root.user.username = username;
    this.$root.user.password = password;
    this.$root.user.id = id;
    */
    //var focusNewsx = this.focusNews
    //check if this (username) already exists!!
    let username_taken = false;
    await axios
        .get(url + port + "/users")
        .then(function (response_raw) {
            // handle success
            //console.log(response);
            let response = JSON.parse(response_raw.data);
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

            /*
            if (!username_taken) {
                console.log("post ");
                const record = {};
                record.firstname = user.firstname;
                record.lastname = user.lastname;
                record.address = user.address;
                record.city = user.city;
                record.state = user.state;
                record.zip = user.zip;

                let num = +user.feet * 12 + +user.inches;

                if (typeof num !== "number") {
                    num = 0;
                }
                record.height_inches = num;
                record.weight_lbs = user.lbs;

                record.email = user.email;
                record.username = user.username;
                record.password = user.password;

                //Session.user = record;

                await axios
                    .post(url + port + "/users", record)
                    .then(function (response_raw) {
                        // handle success

                        console.log(response_raw.data);
                        response = JSON.parse(response_raw.data);
                        record.id = response.insertId;
                        //console.log(vm.$root.user.id);
                        //Session.user.id = response.insertId;
                        success = true;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                        if (success) {
                            vm.focusNews();
                        }
                    });
            }
            */
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
    await axios
        .post(url + port + "/users", record)
        .then(function (response_raw) {
            // handle success

            console.log(response_raw.data);
            let response = JSON.parse(response_raw.data);
            record.id = response.insertId;
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
    return record;
}
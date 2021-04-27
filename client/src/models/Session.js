// holds the user session - is a singleton

import { ToastProgrammatic as toastr } from "buefy";
import { api } from "./api_request";

const Session = {
    user: null,
    message: [],
    token: null
}

export {Session};
//module.exports.Session

export async function Login(username, password) {
    let user = null;

    await api('/users/login', { username: username, password: password }, "post")
        .then(function (response_raw) {
            // handle success
            //console.log(response_raw);
            let response = response_raw.data;

            //console.log(response);
            //console.log("----");
            user = response.user[response.user.length - 1];
            user.username = username;
            user.password = null;

            Session.user = user;

            if (typeof response.token !== "undefined") {
                const token = response.token;
                Session.token = token;
            }
            //console.log(Session.token);
            if (typeof Session.user.id === "number") {
                toastr.open({
                    type: "is-success",
                    message: `Welcome ${Session.user.firstname}`
                });
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

    return user;
}

export async function LoginFB(access_token) {
    let user = null;

    await api('/users/login/fb', { access_token: access_token }, "post")
        .then(function (response_raw) {
            // handle success
            //console.log(response_raw);
            let response = response_raw.data;

            //console.log(response);
            //console.log("----");
            user = response.user[response.user.length - 1];
            user.username = username;
            user.password = null;

            Session.user = user;

            if (typeof response.token !== "undefined") {
                const token = response.token;
                Session.token = token;
            }
            //console.log(Session.token);
            if (typeof Session.user.id === "number") {
                toastr.open({
                    type: "is-success",
                    message: `Welcome ${Session.user.firstname}`
                });
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

    return user;
}

export function Logout() {
    Session.user = null;
    Session.token = null;
    //console.log(Session);
}

export function toastError(msg) {
    toastr.open({
        message: msg,
        queue: false,
        type: 'is-danger'
    })
}
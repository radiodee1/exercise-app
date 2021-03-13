let axios = require("axios").default;
//let Session = require("./Session");

var list = [];
//var raw_list = [];

const port = process.env.VUE_APP_BACKEND_PORT;
const url = process.env.VUE_APP_BACKEND_URL;

export function SetList(l) {
    list = l;
}

export function GetList() {
    return list;
}

export async function PostNewFriendAsk(num, user_id) {
    //const user_id = this.$root.user.id;

    list[num].status = "asked"; // <-- asked???

    const f_obj = {
        user_id: user_id, // this.list[num].id,
        friend_user_id: list[num].id,
        //id: this.list[num].id,
        friend_status: list[num].status,
        date: list[num].date,
    };
    //console.log({ fobj: f_obj });

    // post first friend request here -- insert db
    await axios
        .post(url + port + "/friends", f_obj)
        .then(function (response) {
            // handle success

            console.log(response.data);
            response = JSON.parse(response.data);
            list[num].status = "waiting";

            //vm.$root.user.id = response.insertId;
            //console.log(vm.$root.user.id);
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
    console.log("----");
    console.log(list);
    //list[num].status = "waiting";

    return list;
}

export async function PatchConfirmFriend(num) {
    const f_obj = {
        change: {
            friend_status: "confirmed",
        },
        ident: {
            user_id: list[num].user_id,

            friend_user_id: list[num].friend_user_id,
        },

        //date: this.list[num].date,
    };
    console.log(f_obj);
    console.log("----");
    list[num].status = "confirmed";
    // patch friend request here -- update db
    await axios
        .patch(url + port + "/friends", f_obj)
        .then(function (response) {
            // handle success

            console.log(response.data);
            response = JSON.parse(response.data);
            //vm.$root.user.id = response.insertId;
            //console.log(vm.$root.user.id);
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
    return list;
}

export async function GetFriendList(user_id, root_username) {
    let l = [];
    //let d = {};
    //let count = [];
    //const vm = this;

    const order = {
        new: 0,
        asked: 1,
        waiting: 2,
        confirmed: 3,
    };

    const highest = {};

    //var response = null;

    const p_list = {
        params: {
            id: user_id,
        },
    };

    await axios
        .get(url + port + "/friends", p_list)
        .then(function (response) {
            // handle success
            //const response_raw = response;

            response = JSON.parse(response.data);
            //console.log(response);
            for (let i = 0; i < response.length; i++) {
                const dict1 = {};
                dict1.firstname = response[i].firstname;
                dict1.lastname = response[i].lastname;
                dict1.username = response[i].username;
                dict1.status = response[i].friend_status;
                dict1.friend_user_id = response[i].friend_user_id;
                dict1.id = response[i].id;
                dict1.user_id = response[i].user_id;

                let associated =
                    dict1.user_id === user_id || dict1.friend_user_id === user_id;

                if (!(dict1.username in highest)) {
                    highest[dict1.username] = dict1;

                    if (!associated) {
                        highest[dict1.username].status = "new";
                    }
                } else if (
                    order[highest[dict1.username].status] < order[dict1.status]
                ) {
                    if (associated) {
                        highest[dict1.username] = dict1;
                        highest[dict1.username].status = `${dict1.status}`;
                    } else {
                        highest[dict1.username].status = "new";
                    }

                    console.log(
                        "repeat " +
                        dict1.username +
                        " " +
                        order[`${highest[dict1.username].status}`] +
                        " " +
                        order[dict1.status]
                    );
                }

                if (
                    highest[dict1.username].username != null &&
                    typeof highest[dict1.username].username == "string" &&
                    typeof root_username == "string" &&
                    highest[dict1.username].username.trim() !=
                    root_username.trim()
                ) {
                    const test_for_status = true;
                    if (
                        highest[dict1.username].status !== "confirmed" &&
                        highest[dict1.username].status !== "asked" &&
                        highest[dict1.username].status !== "waiting" &&
                        highest[dict1.username].status !== "new" &&
                        //highest[dict1.username].user_id === user_id &&
                        test_for_status
                    ) {
                        highest[dict1.username].status = "new";
                        //dict1.status = "new";
                    }
                }
                if (
                    highest[dict1.username].username.trim() ===
                    root_username.trim()
                ) {
                    delete highest[dict1.username];
                }
            }
            for (let key in highest) {
                l.push(highest[key]);
            }
            //console.log(user_id + " user");
            //console.log(count);
            //console.log(l);
            //console.log(user_id + " user");
            //console.log(count);
            //console.log(highest);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    list = l;

    return list;
}
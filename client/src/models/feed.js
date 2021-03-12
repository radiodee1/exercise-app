let axios = require("axios").default;
//let Session = require("./Session");

var items = [];

const port = process.env.VUE_APP_BACKEND_PORT;
const url = process.env.VUE_APP_BACKEND_URL;

export function GetItems() {
    return items;
}

export function SetItems(item_list) {
    items = item_list;
}

export async function PostFeed(dict) {
    // insert one message/post into feed.
    await axios
        .post(url + port + "/feed", dict)
        .then(function (response) {
            // handle success
            const response_raw = response;
            //console.log(response_raw.data);
            const response_out = JSON.parse(response_raw.data);
            console.log(response_out);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    return;
}

export async function GetMyFeed(id) {
    //items I posted only

    let items = null;

    const f_obj = {
        params: {
            id: id,
        },
    };

    await axios
        .get(url + port + "/feed/user", f_obj)
        .then(function (response) {
            // handle success

            response = JSON.parse(response.data);
            console.log(response.length + " post");

            items = [...response];
            //vm.tree.feed = [... response];

            console.log(items.length + " len");
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            //vm.items = vm.tree.feed;
        })
        .then(function () {
            // always executed
        });
    
    return items;
}

export async function GetFriendsFeed(id) {
    //general feed that takes into account
    //friend settings.

    let items = null;

    const f_obj = {
        params: {
            id: id,
        },
    };

    await axios
        .get(url + port + "/feed", f_obj)
        .then(function (response) {
          // handle success

          //console.log(response.data);
          response = JSON.parse(response.data);

          items = [...response];
          //vm.tree.feed = [... response];

          console.log(items.length + " len");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          //items = vm.tree.feed;
        })
        .then(function () {
          // always executed
        });
      //return items;   

    
    return items; //[... response];
    //return items;
}

export async function GetSingleFriendsFeed(id) {
    //need implementation at backend...
    //allow user to list a single frineds
    //posts.

    let items = null;

    const f_obj = {
        params: {
            id: id,
        },
    };

    await axios
        .get(url + port + "/feed/friend", f_obj)
        .then(function (response) {
            // handle success

            //console.log(response.data);
            response = JSON.parse(response.data);

            items = [...response];
            //vm.tree.feed = [... response];

            console.log(items.length + " len");
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            //vm.items = vm.tree.feed;
        })
        .then(function () {
            // always executed
        });
    
    return items;
}

export async function DeletePost(i, session_user_id) {
    //delete a post if you are the author.

    if (items[i].from_user_id !== session_user_id) {
        return;
    }

    const id = items[i].id;
    console.log(id + " id");

    const f_obj = {
        data: {
            id: id,
        },
    };

    await axios
        .delete(url + port + "/feed", f_obj)
        .then(function (response) {
            // handle success

            response = JSON.parse(response.data);

            console.log(response.length + " len");
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            //vm.items = vm.tree.feed;
        })
        .then(function () {
            // always executed
        });
    //return items;

    items.splice(i, 1);
    return items;
}
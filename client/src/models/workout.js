let axios = require("axios").default;

//var items = [];

const port = process.env.VUE_APP_BACKEND_PORT;
const url = process.env.VUE_APP_BACKEND_URL;

export async function GetWorkoutList(i, search_day) {
    const id = i;
    //const vm = this;
    //let items = [];
    //if (this.items.length > 0) {
    //    return;
    //}
    const f_obj = {
        params: {
            id: id,
            days: search_day,
        },
    };
    var out = null;
    await axios.get(url + port + "/workout", f_obj)
        .then(function (response) {
            // handle success

            //console.log(response.data);
            response = response.data;// JSON.parse(response.data);
            out = response;
            //return response;
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    return out;
}
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
    await axios
        .get(url + port + "/workout", f_obj)
        .then(function (response) {
            // handle success

            console.log(response.data);
            response = JSON.parse(response.data);
            out = response;
            //return response;
            /*
            vm.items = [...response];
            vm.submit_list = [];
            vm.chosen_list = [];
            for (let i = 0; i < vm.items.length; i++) {
              vm.chosen_list.push({
                chosen: false,
              });
            }
            */

            //vm.items = [...response];
            //vm.submit_list = [];
            //vm.tree.feed = [... response];
            //items = [... response];
            //console.log(vm.items.length + " len");
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
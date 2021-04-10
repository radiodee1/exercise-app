//let axios = require("axios").default;

const request = require('./api_request');

//const port = process.env.VUE_APP_BACKEND_PORT;
//const url = process.env.VUE_APP_BACKEND_URL;

export async function GetDevList(lower_param, upper_param) {
    
    const f_obj = {
        params: {
            lower: lower_param,
            upper: upper_param,
        },
    };
    var out = null;
    await request.api("/dev", f_obj, "get")
    //await axios.get(url + port + "/dev", f_obj)
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
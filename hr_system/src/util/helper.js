// import axios from 'axios';
// import {Config} from '../util/config'
// export const request = (url= "", method= "get"  , data= {} ) => {
//   return  axios({
//     url: Config.base_url + url,
//     method: method,
//     data: data,
//     headers: {},
//   }).then((res) => {
//     return res.data;
//   })
//   .catch((error) =>{
//     console.log(error);
//     return false;
//     }
//   )
//   };

import axios from 'axios';
import { Config } from '../util/config';

export const request = (url = "", method = "get", data = {}, headers = {}) => {
    return axios({
        url: Config.base_url + url,
        method: method,
        data: data,
        headers: headers, // Include headers if needed
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        console.log(error);
        throw error; // Throw error for better error handling
    });
};



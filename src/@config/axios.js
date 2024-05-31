import axios from "axios";
import nookies, { parseCookies, setCookie, destroyCookie } from "nookies";
import { CONSTANTS } from "../@utils/constants";

// ************ Private Instance ************************
// Creating Axios Client Instance
export const PrivateInstance = axios.create({
    baseURL: CONSTANTS.BASE_URL
});

// Before Sending Request
PrivateInstance.interceptors.request.use(
    function (config) {
        // Getting User Token
        let cookies = parseCookies();
        const userToken = cookies[`${CONSTANTS.APP_SLUG}__TOKEN`];
        // Setting Authorization Token
        if (!!userToken) {
            config.headers["Authorization"] = userToken;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
// Before Receiving Response
PrivateInstance.interceptors.response.use(
    function (res) {
        return res;
    },
    function (error) {
        if (error.response.status === 401) {
            nookies.destroy(null, `${CONSTANTS.APP_SLUG}__TOKEN`, { path: "/" });
            // localStorage.removeItem(`persist:${CONSTANTS.APP_SLUG}`); // Removing manually redux persist data 
        }
        return Promise.reject(error);
    }
);



// **************** Public Instance ****************

// Creating Axios Client Instance
export const PublicInstance = axios.create({
    baseURL: CONSTANTS.BASE_URL
});

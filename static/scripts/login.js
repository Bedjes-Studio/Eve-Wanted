import "./jquery-3.7.1.min.js";
import { EVE_WANTED_ID, LOGIN_URL, LOGIN_RESPONSE_TYPE, LOGIN_REDIRECT_URI, LOGIN_SCOPE } from "./const.js";

function computeLoginURI() {
    return LOGIN_URL.concat("response_type=", LOGIN_RESPONSE_TYPE, "&redirect_uri=", LOGIN_REDIRECT_URI, "&client_id=", EVE_WANTED_ID, "&scope=", LOGIN_SCOPE, "&state=TODO");
}

$("#loginButton").click(() => {
    window.location = computeLoginURI();
});

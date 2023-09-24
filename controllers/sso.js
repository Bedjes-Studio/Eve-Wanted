const jwtDecode = require("jwt-decode");

const { errorHandler, apiCall, apiResponseParser } = require("./utils");
const { registerUser, updateUserTokens } = require("./user");
const { storeCookie, decodeCookie } = require("./auth");

const config = require("../config");
const User = require("../models/user");

exports.ssoCallback = (req, res, next) => {
    // TODO : validate state
    // TODO : validate token signature
    getToken(req.query.code)
        .then((token, refreshToken) => {
            let decodedToken = jwtDecode(token);
            let characterId = decodedToken.sub.split(":")[2];

            User.find({ characterId }).then((registredUser) => {
                if (registredUser.length == 0) {
                    registerUser(characterId, token, refreshToken).then(() => {
                        storeCookie(res, characterId);
                        console.log("New user registred !");
                        res.redirect("/");
                    });
                } else {
                    updateUserTokens(characterId, token, refreshToken).then(() => {
                        storeCookie(res, characterId);
                        console.log("Update tokens");

                        res.redirect("/");
                    });
                }
            });
        })
        .catch((error) => {
            errorHandler(error, res);
        });
};

const getToken = (code) => {
    return new Promise(function (resolve, reject) {
        let codeValidationEndpoint = "https://login.eveonline.com/v2/oauth/token";
        let headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(config.application.id + ":" + config.application.key),
        };
        let body = "grant_type=authorization_code&code=" + code;

        apiCall(codeValidationEndpoint, "POST", headers, body)
            .then(apiResponseParser)
            .then((response) => {
                if (response.statusCode == 200) {
                    resolve(response.access_token, response.refresh_token);
                }
                reject();
            })
            .catch(reject);
    });
};

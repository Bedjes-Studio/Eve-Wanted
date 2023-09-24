const jwtDecode = require("jwt-decode");

const { errorHandler, apiCall, apiResponseParser } = require("./utils");
const { registerUser, updateUserTokens } = require("./user");
const config = require("../config");
const User = require("../models/user");

exports.ssoCallback = (req, res, next) => {
    // TODO : validate state
    // TODO : validate token signature
    getToken(req.query.code)
        .then((token, refreshToken) => {
            let decodedToken = jwtDecode(token);
            let characterId = decodedToken.sub.split(":")[2];
            console.log(decodedToken);

            User.find({ characterId }).then((registredUser) => {
                console.log(registredUser);

                if (registredUser.length == 0) {
                    registerUser(characterId, token, refreshToken).then(() => {
                        // TODO : Redirect to main page
                        // TODO : create cookie for further auth
                        console.log("new user registred !");
                        res.status(200).json({ messsage: "callback", token: token, refreshToken: refreshToken });
                    });
                } else {
                    updateUserTokens(characterId, token, refreshToken).then(() => {
                        // TODO : create cookie for further auth
                        res.status(201).json({
                            message: "User token updated successfully!",
                        });
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

const { errorHandler, apiCall, apiResponseParser } = require("./utils");
const config = require("../config");

exports.ssoCallback = (req, res, next) => {
    // TODO : validate state
    getToken(req.query.code)
        .then((token, refreshToken) => {
            res.status(200).json({ messsage: "callback", token: token, refreshToken: refreshToken });
        })
        .catch((error) => {
            errorHandler(error, res);
        });

    // read data from the token
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

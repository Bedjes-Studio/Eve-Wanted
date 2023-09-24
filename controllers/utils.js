function computeRequest(method, headers, body) {
    const request = {
        method,
        headers,
    };
    if (body != undefined) {
        request.body = body;
    }
    return request;
}

exports.apiCall = (endPoint, method, headers, body) => {
    return new Promise(function (resolve, reject) {
        fetch(endPoint, computeRequest(method, headers, body))
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

exports.apiResponseParser = (response) => {
    return new Promise(function (resolve, reject) {
        response
            .json()
            .then((data) => {
                data.statusCode = response.status;
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

exports.errorHandler = (error, res) => {
    console.log(error);
    res.status(500).json({ error: "Internal server error." });
};

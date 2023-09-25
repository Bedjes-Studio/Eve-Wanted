function computeRequest(method, body) {
    const request = {
        method: method,
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    };
    if (body != undefined) {
        request.body = body;
    }
    return request;
}
// TODO : add User-Agent header for CCP (https://docs.esi.evetech.net/docs/guidelines.html)
export const apiCall = (endPoint, method, body) => {
    return new Promise(function (resolve, reject) {
        fetch(endPoint, computeRequest(method, body))
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const apiResponseParser = (response) => {
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

const { errorHandler, apiCall, apiResponseParser } = require("./utils");

const User = require("../models/user");

exports.bestHunters = (req, res, next) => {
    User.find()
        .sort({ reward: -1 })
        .limit(5)
        .then((users) => {
            let bestHunters = users.map((user) => {
                return { characterId: user.characterId, name: user.name, reward: user.reward };
            });
            res.status(200).json({ bestHunters });
        })
        .catch((error) => {
            errorHandler(error, res);
        });
};

exports.mostWanted = (req, res, next) => {
    User.find()
        .sort({ bounty: -1 })
        .limit(5)
        .then((users) => {
            let mostWanted = users.map((user) => {
                return { characterId: user.characterId, name: user.name, bounty: user.bounty };
            });
            res.status(200).json({ mostWanted });
        })
        .catch((error) => {
            errorHandler(error, res);
        });
};

/**
 * Search for all related rewards & bounties
 */

exports.userHistory = (req, res, next) => {
    // TODO : Add middleware to detect user
    Reward.find({ $or: [{ hunter: req.auth.userCharacterId }, { target: req.auth.userCharacterId }] })
        .then((rewards) => {
            Bounty.find({ $or: [{ creat: req.auth.userCharacterId }, { target: req.auth.userCharacterId }] }).then((bounties) => {
                res.status(200).json({ rewards, bounties });
            });
        })
        .catch((error) => {
            errorHandler(error, res);
        });
};

exports.registerUser = (characterId, token, refresh_token) => {
    return new Promise(function (resolve, reject) {
        // api request to get data

        getUserData(characterId)
            .then((userData) => {
                const newUser = new User({
                    characterId,
                    name: userData.name,
                    birthday: userData.birthday,
                    corporationId: userData.corporation_id,
                    token: token,
                    refreshToken: refresh_token,
                    hunters: [],
                    bounty: 0,
                    maxBounty: 0,
                    reward: 0,
                });
                newUser.save().then(resolve);
            })
            .catch(reject);
    });
};

function getUserData(characterId) {
    return new Promise(function (resolve, reject) {
        let characterDataEndpoint = "https://esi.evetech.net/latest/characters/" + characterId;
        let headers = {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        };
        let body = {
            datasource: "tranquility",
        };

        apiCall(characterDataEndpoint, "POST", headers, body)
            .then(apiResponseParser)
            .then((response) => {
                if (response.statusCode != 200) {
                    reject();
                }
                resolve();
            })
            .catch(reject);
    });
}

exports.updateUserTokens = (characterId, token, refreshToken) => {
    return new Promise(function (resolve, reject) {
        User.updateOne({ characterId }, { token, refreshToken }).then(resolve).catch(reject);
    });
};

const User = require("../models/user");

exports.bestHunters = (req, res, next) => {
    User.find()
        .sort({ reward: -1 })
        .limit(5)
        .then((bestHunters) => {
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
        .then((mostWanted) => {
            res.status(200).json({ mostWanted });
        })
        .catch((error) => {
            errorHandler(error, res);
        });
};

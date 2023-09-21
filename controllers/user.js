const { errorHandler } = require("./utils");

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

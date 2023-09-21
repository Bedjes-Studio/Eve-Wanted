const { errorHandler } = require("./utils");

const Reward = require("../models/reward");

/**
 * Check completed rewards
 */
exports.checkRewards = (req, res, next) => {
    // API call to get user killmails
    // Check if user is implicated
    // Check if killmailId is not used
    // Create reward and reduce bounty
};

/**
 * Return last rewards
 */

exports.lastRewards = (req, res, next) => {
    Reward.find()
        .sort({ date: -1 })
        .limit(5)
        .then((lastRewards) => {
            res.status(200).json({ lastRewards });
        })
        .catch((error) => {
            errorHandler(error, res);
        });
};

/**
 * Create a reward
 */

const createReward = (hunter, target, amount, killmailId) => {
    return new Promise(function (resolve, reject) {
        const reward = new Reward({
            hunter,
            target,
            amount,
            killmailId,
            date: Date.now(),
        });

        reward.save().then(resolve).catch(reject);
    });
};

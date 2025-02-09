const { errorHandler } = require("./utils");

const Bounty = require("../models/bounty");

/**
 * Check for new bounties
 */
exports.checkBounties = (req, res, next) => {
    // API call to get corp wallet journal
    // Check last orders if they created
    // Create all missing bounties
};

/**
 * Return last bounty
 */

exports.lastBounty = (req, res, next) => {
    Reward.find()
        .sort({ date: -1 })
        .limit(5)
        .then((lastBounty) => {
            res.status(200).json({ lastBounty });
        })
        .catch((error) => {
            errorHandler(error, res);
        });
};

/**
 * Create a bounty
 */

const createBounty = (creator, target, amount) => {
    return new Promise(function (resolve, reject) {
        const bounty = new Bounty({
            creator,
            target,
            amount,
            date: Date.now(),
        });

        bounty.save().then(resolve).catch(reject);
    });
};

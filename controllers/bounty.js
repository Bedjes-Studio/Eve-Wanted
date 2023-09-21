const Bounty = require("../models/bounty");

/**
 * Check for new bounties
 */
exports.checkBounties = (req, res, next) => {
    // API call to get corp wallet journal
    // Check last orders if they created
    // Create all missing bounties
}

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

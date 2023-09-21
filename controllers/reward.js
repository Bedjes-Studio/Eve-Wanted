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
 * Check a reward
 */

const createReward = (hunter, target, amount, killmailId) => {
    return new Promise(function (resolve, reject) {
        const bounty = new Bounty({
            hunter,
            target,
            amount,
            killmailId,
            date: Date.now(),
        });

        bounty.save().then(resolve).catch(reject);
    });
};
